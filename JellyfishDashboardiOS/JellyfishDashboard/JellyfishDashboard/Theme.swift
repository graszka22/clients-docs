import SwiftUI

let seaBlue40 = Color(red:0.749, green:0.906, blue:0.973)
let seaBlue20 = Color(red:0.945, green:0.98, blue:0.996)
let darkBlue100 = Color(red:0, green:0.102, blue:0.447)
let darkText = Color(red:0, green:0.102, blue:0.447)

struct ButtonStyle: ViewModifier {
  func body(content: Content) -> some View {
    content.padding()
      .frame(maxWidth: .infinity)
      .background(darkBlue100)
      .foregroundColor(.white)
      .cornerRadius(100)
  }
}

struct TextFieldStyle: ViewModifier {
  func body(content: Content) -> some View {
    content.padding()
      .foregroundColor(.black)
      .background(.white)
      .cornerRadius(100)
      .overlay(
        RoundedRectangle(cornerRadius: 100)
          .stroke(darkBlue100, lineWidth: 2)
      )
  }
}

