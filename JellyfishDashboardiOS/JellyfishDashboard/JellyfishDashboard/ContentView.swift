import SwiftUI
import JellyfishClientSdk

struct ContentView: View {
  @ObservedObject var contentViewController: ContentViewController
  
  init() {
    self.contentViewController = ContentViewController()
  }
  
  var body: some View {
    if !contentViewController.isConnected {
      ConnectScreen(contentViewController: contentViewController)
    } else {
      RoomScreen(contentViewController: contentViewController)
    }
  }
}

struct ConnectScreen: View {
  @State private var peerToken = ""
  @State private var showingSheet = false
  let contentViewController: ContentViewController
  
  var body: some View {
    VStack {
      TextField("Enter peer token...", text: $peerToken)
        .modifier(TextFieldStyle())
      
      Button(action: {
        contentViewController.connect(peerToken: peerToken)
      }) {
        Text("Connect").modifier(ButtonStyle())
      }
      Button(action: {
        showingSheet.toggle()
      }) {
        Text("Scan QR code").modifier(ButtonStyle())
      }
      .sheet(isPresented: $showingSheet) {
        VStack {
          QRScanner() { code in
            peerToken = code
            showingSheet.toggle()
          }
        }
      }
    }
    .padding(10)
    .frame(maxWidth: .infinity, maxHeight: .infinity)
    .background(seaBlue40)
  }
}

struct RoomScreen: View {
  @ObservedObject var contentViewController: ContentViewController
  
  var body: some View {
    VStack {
      ForEach(Array(stride(from: 0, to: contentViewController.participants.count, by: 2)), id: \.self) { index in
        HStack {
          SwiftUIVideoView((contentViewController.participants[index].videoTrackContext?.track as? VideoTrack)!)
            .aspectRatio(CGSize(width: 1, height: 1), contentMode: .fit)
            .cornerRadius(20)
          if index + 1 < contentViewController.participants.count {
            SwiftUIVideoView((contentViewController.participants[index+1].videoTrackContext?.track as? VideoTrack)!)
              .aspectRatio(CGSize(width: 1, height: 1), contentMode: .fit)
              .cornerRadius(20)
          }
        }
      }
      Spacer()
      Button(action: {
        contentViewController.disconnect()
      }) {
        Text("Disconnect").modifier(ButtonStyle())
      }
    }
    .padding(10)
    .frame(maxWidth: .infinity, maxHeight: .infinity)
    .background(seaBlue20)
  }
}
