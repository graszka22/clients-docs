package com.example.jellyfishdashboardandroid

import android.app.Application
import androidx.lifecycle.AndroidViewModel
import com.jellyfishdev.jellyfishclient.Config
import com.jellyfishdev.jellyfishclient.JellyfishClient
import com.jellyfishdev.jellyfishclient.JellyfishClientListener
import com.jellyfishdev.jellyfishclient.Peer
import kotlinx.coroutines.flow.MutableStateFlow
import org.membraneframework.rtc.media.LocalVideoTrack
import org.membraneframework.rtc.media.RemoteVideoTrack
import org.membraneframework.rtc.media.VideoParameters
import org.membraneframework.rtc.models.TrackContext

data class Participant(
    val id: String,
    val videoTrackContext: TrackContext? = null,
)

class MainViewModel(application: Application) : AndroidViewModel(application),
    JellyfishClientListener {
    val peerToken = MutableStateFlow("")
    val participants = MutableStateFlow<List<Participant>>(emptyList())
    val isConnected = MutableStateFlow(false)

    private val mutableParticipants = HashMap<String, Participant>()

    private val client = JellyfishClient(getApplication(), this)
    private var localVideoTrack: LocalVideoTrack? = null

    fun connect() {
        client.connect(
            Config(
                websocketUrl = "ws://192.168.1.21:4000/socket/peer/websocket",
                token = peerToken.value,
            ),
        )
    }

    fun disconnect() {
        localVideoTrack?.stop()
        localVideoTrack = null
        client.cleanUp()
        isConnected.value = false
    }

    private fun setupTracks() {
        val videoParameters = VideoParameters.presetHD169
        localVideoTrack = client.createVideoTrack(videoParameters, emptyMap())
    }

    override fun onAuthSuccess() {
        setupTracks()
        client.join()
    }

    override fun onAuthError() {
    }

    override fun onJoined(peerID: String, peersInRoom: List<Peer>) {
        peersInRoom.forEach {
            mutableParticipants[it.id] = Participant(
                it.id,
            )
        }
        isConnected.value = true
        emitParticipants()
    }

    override fun onJoinError(metadata: Any) {
    }

    override fun onPeerJoined(peer: Peer) {
        mutableParticipants[peer.id] = Participant(
            id = peer.id,
        )
        emitParticipants()
    }

    override fun onPeerLeft(peer: Peer) {
        mutableParticipants.remove(peer.id)
        emitParticipants()
    }

    override fun onPeerUpdated(peer: Peer) {}

    override fun onTrackReady(ctx: TrackContext) {
        val participant = mutableParticipants[ctx.endpoint.id] ?: return

        val (id, newParticipant) = when (ctx.track) {
            is RemoteVideoTrack -> {
                val p = participant.copy(videoTrackContext = ctx)
                Pair(ctx.endpoint.id, p)
            }
            else ->
                throw IllegalArgumentException("invalid type of incoming remote track")
        }
        mutableParticipants[id] = newParticipant
        emitParticipants()
    }

    override fun onTrackRemoved(ctx: TrackContext) {
        val participant = mutableParticipants[ctx.endpoint.id] ?: return
        val videoTrackId = participant.videoTrackContext?.trackId ?: return

        val newParticipant = if (ctx.trackId == videoTrackId) {
            participant.copy(videoTrackContext = null)
        } else {
            throw IllegalArgumentException("track has not been found for given endpoint")
        }

        mutableParticipants[ctx.endpoint.id] = newParticipant
        emitParticipants()
    }

    private fun emitParticipants() {
        participants.value =
            mutableParticipants.values.filter { p -> p.videoTrackContext != null }.toList()
    }
}