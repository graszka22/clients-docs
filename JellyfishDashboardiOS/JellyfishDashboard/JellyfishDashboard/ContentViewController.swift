import JellyfishClientSdk
import UIKit

class Participant: Identifiable {
  let id: String
  var videoTrackContext: TrackContext? = nil
  
  init(id: String) {
    self.id = id
  }
}

class ContentViewController: ObservableObject, JellyfishClientListener {
  private var jellyfishClient: JellyfishClientSdk?
  
  private var mutableParticipants:[String:Participant] = [:]
  @Published var participants: [Participant] = []
  @Published var isConnected: Bool = false
  
  var localVideoTrack: LocalVideoTrack?
  
  public init() {
    self.jellyfishClient = JellyfishClientSdk(listener: self)
  }
  
  public func connect(peerToken: String) {
    let conf = Config(
      websocketUrl: "ws://192.168.0.31:4000/socket/peer/websocket",
      token: peerToken
    )
    jellyfishClient?.connect(config: conf)
  }
  
  public func disconnect() {
    jellyfishClient?.cleanUp()
    DispatchQueue.main.async {
      self.isConnected = false
    }
  }
  
  func onSocketClose(code: Int, reason: String) {
    
  }
  
  func onSocketError() {
    
  }
  
  func onSocketOpen() {
    
  }
  
  func onBandwidthEstimationChanged(estimation: Int) {
    
  }
  
  func onJoined(peerID: String, peersInRoom: [Peer]) {
    peersInRoom.forEach { peer in mutableParticipants[peer.id] = Participant(id: peer.id)}
    DispatchQueue.main.async {
      self.isConnected = true
    }
    emitParticipants()
  }
  
  func onJoinError(metadata _: Any) {
  }
  
  func onTrackReady(ctx: TrackContext) {
    guard let participant = mutableParticipants[ctx.peer.id] else {
      return
    }
    
    participant.videoTrackContext = ctx
    
    mutableParticipants[ctx.peer.id] = participant
    
    emitParticipants()
  }
  
  func onTrackAdded(ctx _: TrackContext) {}
  
  func onTrackRemoved(ctx: TrackContext) {
    guard let participant = mutableParticipants[ctx.peer.id],
          let _ = participant.videoTrackContext?.trackId else {
      return
    }
    
    participant.videoTrackContext = nil
    
    mutableParticipants[ctx.peer.id] = participant
    emitParticipants()
  }
  
  func onTrackUpdated(ctx: TrackContext) {
  }
  
  func onPeerJoined(peer: Peer) {
    mutableParticipants[peer.id] = Participant(id: peer.id)
    emitParticipants()
  }
  
  func onPeerLeft(peer: Peer) {
    mutableParticipants.removeValue(forKey: peer.id)
    emitParticipants()
  }
  
  func onPeerUpdated(peer _: Peer) {}
  
  func setupTracks() {
    self.localVideoTrack = jellyfishClient?.createVideoTrack(videoParameters: VideoParameters.presetHD169, metadata: .init())
  }
  
  func onAuthSuccess() {
    setupTracks()
    jellyfishClient?.join(peerMetadata: .init())
  }
  
  func onAuthError() {}
  
  func onDisconnected() {}
  
  func emitParticipants() {
    DispatchQueue.main.async {
      self.participants = self.mutableParticipants.values.filter { participant in
        participant.videoTrackContext != nil
      }
    }
  }
}
