package com.example.jellyfishdashboardandroid

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.viewModels
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.material3.TextFieldDefaults
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.currentCompositeKeyHash
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.ui.viewinterop.AndroidView
import com.example.jellyfishdashboardandroid.ui.theme.JellyfishDashboardAndroidTheme
import com.google.accompanist.permissions.ExperimentalPermissionsApi
import com.google.accompanist.permissions.isGranted
import com.google.accompanist.permissions.rememberPermissionState
import com.google.mlkit.vision.barcode.common.Barcode
import com.google.mlkit.vision.codescanner.GmsBarcodeScannerOptions
import com.google.mlkit.vision.codescanner.GmsBarcodeScanning
import org.membraneframework.rtc.media.VideoTrack
import org.membraneframework.rtc.ui.VideoTextureViewRenderer


class MainActivity : ComponentActivity() {
    private val viewModel: MainViewModel by viewModels()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            val isConnected = viewModel.isConnected.collectAsState()

            JellyfishDashboardAndroidTheme {
                // A surface container using the 'background' color from the theme
                Surface(
                    modifier = Modifier.fillMaxSize(), color = MaterialTheme.colorScheme.background
                ) {
                    if (isConnected.value) {
                        RoomScreen()
                    } else {
                        ConnectContent()
                    }
                }
            }
        }
    }

    private fun scanQRCode() {
        val options = GmsBarcodeScannerOptions.Builder().setBarcodeFormats(
            Barcode.FORMAT_QR_CODE, Barcode.FORMAT_AZTEC
        ).enableAutoZoom().build()

        val scanner = GmsBarcodeScanning.getClient(this, options)

        scanner.startScan().addOnSuccessListener { barcode ->
            val rawValue: String? = barcode.rawValue
            if (rawValue != null) {
                viewModel.peerToken.value = rawValue
            }
        }.addOnCanceledListener {
            // Task canceled
        }.addOnFailureListener { e ->
            // Task failed with an exception
        }
    }

    @OptIn(ExperimentalPermissionsApi::class)
    @Composable
    fun ConnectButton(modifier: Modifier) {
        val cameraPermissionState = rememberPermissionState(
            android.Manifest.permission.CAMERA
        )

        if (cameraPermissionState.status.isGranted) {
            Button(onClick = { viewModel.connect() }, modifier = modifier) {
                Text("Connect")
            }
        } else {
            Button(
                onClick = { cameraPermissionState.launchPermissionRequest() }, modifier = modifier
            ) {
                Text("Request camera permissions")
            }
        }
    }

    @OptIn(ExperimentalMaterial3Api::class)
    @Composable
    fun ConnectContent() {
        val peerToken = viewModel.peerToken.collectAsState()

        Column(
            modifier = Modifier
                .fillMaxWidth()
                .fillMaxHeight()
                .padding(10.dp),
            verticalArrangement = Arrangement.spacedBy(
                24.dp, alignment = Alignment.CenterVertically
            ),
        ) {
            OutlinedTextField(
                singleLine = true,
                modifier = Modifier
                    .fillMaxWidth()
                    .height(56.dp),
                shape = CircleShape,
                value = peerToken.value,
                onValueChange = { it: String -> viewModel.peerToken.value = it },
                colors = TextFieldDefaults.textFieldColors(
                    containerColor = Color.White
                )
            )
            ConnectButton(
                modifier = Modifier
                    .fillMaxWidth()
                    .height(56.dp)
            )
            Button(
                modifier = Modifier
                    .fillMaxWidth()
                    .height(56.dp),
                onClick = { scanQRCode() }) {
                Text("QR code")
            }
        }
    }

    @Composable
    fun ParticipantVideoView(participant: Participant, modifier: Modifier = Modifier) {
        var activeVideoTrack: VideoTrack? by remember { mutableStateOf(null) }
        var view: VideoTextureViewRenderer? by remember { mutableStateOf(null) }

        fun setupTrack(videoTrack: VideoTrack, view: VideoTextureViewRenderer) {
            if (activeVideoTrack == videoTrack) return

            activeVideoTrack?.removeRenderer(view)
            videoTrack.addRenderer(view)
            activeVideoTrack = videoTrack
        }

        DisposableEffect(participant.videoTrackContext?.track) {
            onDispose {
                view?.let {
                    (participant.videoTrackContext?.track as VideoTrack).removeRenderer(it)
                }
            }
        }

        DisposableEffect(currentCompositeKeyHash.toString()) {
            onDispose {
                view?.release()
            }
        }

        AndroidView(
            factory = { context ->
                VideoTextureViewRenderer(context).apply {
                    this.init((participant.videoTrackContext?.track as VideoTrack).eglContext, null)
                    setupTrack((participant.videoTrackContext.track as VideoTrack), this)
                    view = this
                }
            },
            update = { updatedView ->
                setupTrack((participant.videoTrackContext?.track as VideoTrack), updatedView)
            },
            modifier = modifier,
        )
    }

    @Composable
    fun RoomScreen() {
        val participants = viewModel.participants.collectAsState()

        Column(
            modifier = Modifier
                .fillMaxWidth()
                .fillMaxHeight()
                .padding(10.dp),
            verticalArrangement = Arrangement.SpaceBetween,
            horizontalAlignment = Alignment.CenterHorizontally,
        ) {
            LazyVerticalGrid(
                columns = GridCells.Fixed(if (participants.value.count() > 2) 2 else 1),
                verticalArrangement = Arrangement.spacedBy(
                    16.dp,
                    alignment = Alignment.CenterVertically
                ),
                horizontalArrangement = Arrangement.spacedBy(
                    16.dp,
                    alignment = Alignment.CenterHorizontally
                )
            ) {
                items(participants.value.count()) {
                    ParticipantVideoView(
                        participant = participants.value[it],
                        modifier = Modifier
                            .clip(RoundedCornerShape(10.dp))
                            .aspectRatio(1.0f, matchHeightConstraintsFirst = true)
                            .fillMaxWidth()
                            .fillMaxHeight(),
                    )
                }
            }
            Button(
                onClick = {
                    viewModel.disconnect()
                },

                ) {
                Text("Disconnect")
            }
        }
    }
}


