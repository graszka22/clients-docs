import SwiftUI
import AVFoundation

class QRScannerController: UIViewController {
  var captureSession = AVCaptureSession()
  var videoPreviewLayer: AVCaptureVideoPreviewLayer?
  var qrCodeFrameView: UIView?
  
  var delegate: AVCaptureMetadataOutputObjectsDelegate?
  
  override func viewDidLoad() {
    super.viewDidLoad()
    
    guard let captureDevice = AVCaptureDevice.default(.builtInWideAngleCamera, for: .video, position: .back) else {
      print("Failed to get the camera device")
      return
    }
    
    let videoInput: AVCaptureDeviceInput
    
    do {
      videoInput = try AVCaptureDeviceInput(device: captureDevice)
      
    } catch {
      print(error)
      return
    }
    
    captureSession.addInput(videoInput)

    let captureMetadataOutput = AVCaptureMetadataOutput()
    captureSession.addOutput(captureMetadataOutput)

    captureMetadataOutput.setMetadataObjectsDelegate(delegate, queue: DispatchQueue.main)
    captureMetadataOutput.metadataObjectTypes = [ .qr ]
    
    videoPreviewLayer = AVCaptureVideoPreviewLayer(session: captureSession)
    videoPreviewLayer?.videoGravity = AVLayerVideoGravity.resizeAspectFill
    videoPreviewLayer?.frame = view.layer.bounds
    view.layer.addSublayer(videoPreviewLayer!)
    
    DispatchQueue.global(qos: .background).async {
      self.captureSession.startRunning()
    }
    
  }
}

struct QRScanner: UIViewControllerRepresentable {
  var onQRCodeScanned: (_ code: String) -> Void
  
  init(_ onQRCodeScanned: @escaping (_ code: String) -> Void) {
    self.onQRCodeScanned = onQRCodeScanned
  }
  
  func updateUIViewController(_ uiViewController: QRScannerController, context: Context) {
  }
  
  func makeCoordinator() -> Coordinator {
    Coordinator(onQRCodeScanned)
  }
  
  func makeUIViewController(context: Context) -> QRScannerController {
    let controller = QRScannerController()
    controller.delegate = context.coordinator
    
    return controller
  }
}

class Coordinator: NSObject, AVCaptureMetadataOutputObjectsDelegate {
  var onQRCodeScanned: ((_ code: String) -> Void)?
  
  init(_ onQRCodeScanned: @escaping (_ code: String) -> Void) {
    self.onQRCodeScanned = onQRCodeScanned
  }
  
  func metadataOutput(_ output: AVCaptureMetadataOutput, didOutput metadataObjects: [AVMetadataObject], from connection: AVCaptureConnection) {
    if metadataObjects.count == 0 {
      return
    }
    
    let metadataObj = metadataObjects[0] as! AVMetadataMachineReadableCodeObject
    
    if metadataObj.type == AVMetadataObject.ObjectType.qr,
       let result = metadataObj.stringValue {
      if let onQRCodeScanned = onQRCodeScanned {
        onQRCodeScanned(result)
      }
      onQRCodeScanned = nil
    }
  }
}
