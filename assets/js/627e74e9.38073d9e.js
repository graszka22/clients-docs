"use strict";(self.webpackChunkclients_tutorial=self.webpackChunkclients_tutorial||[]).push([[883],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return t?a.createElement(h,i(i({ref:n},p),{},{components:t})):a.createElement(h,i({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2232:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>R,contentTitle:()=>S,default:()=>A,frontMatter:()=>T,metadata:()=>E,toc:()=>j});var a=t(7462),r=t(7294),o=t(3905),i=t(6010),l=t(2466),s=t(6550),c=t(1980),p=t(7392),u=t(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??d(t);return function(e){const n=(0,p.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function k(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=m(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[s,c]=g({queryString:t,groupId:a}),[p,d]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,u.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),k=(()=>{const e=s??p;return h({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),d(e)}),[c,d,o]),tabValues:o}}var f=t(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:n,block:t,selectedValue:o,selectValue:s,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),d=e=>{const n=e.currentTarget,t=p.indexOf(n),a=c[t].value;a!==o&&(u(n),s(a))},m=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;n=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;n=p[t]??p[p.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n)},c.map((e=>{let{value:n,label:t,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,key:n,ref:e=>p.push(e),onKeyDown:m,onClick:d},l,{className:(0,i.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":o===n})}),t??n)})))}function b(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function w(e){const n=k(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",v.tabList)},r.createElement(y,(0,a.Z)({},e,n)),r.createElement(b,(0,a.Z)({},e,n)))}function x(e){const n=(0,f.Z)();return r.createElement(w,(0,a.Z)({key:String(n)},e))}const N={tabItem:"tabItem_Ymn6"};function C(e){let{children:n,hidden:t,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(N.tabItem,a),hidden:t},n)}const T={},S="React Native / Expo Quickstart Guide",E={unversionedId:"quickstart/react-native-quickstart",id:"quickstart/react-native-quickstart",title:"React Native / Expo Quickstart Guide",description:"What you'll learn",source:"@site/docs/quickstart/react-native-quickstart.mdx",sourceDirName:"quickstart",slug:"/quickstart/react-native-quickstart",permalink:"/clients-docs/docs/quickstart/react-native-quickstart",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/quickstart/react-native-quickstart.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Quickstart",permalink:"/clients-docs/docs/category/quickstart"}},R={},j=[{value:"What you&#39;ll learn",id:"what-youll-learn",level:2},{value:"What do you need",id:"what-do-you-need",level:2},{value:"Setup",id:"setup",level:2},{value:"Create React Native / Expo project",id:"create-react-native--expo-project",level:3},{value:"Add dependencies",id:"add-dependencies",level:3},{value:"Native configuration",id:"native-configuration",level:3},{value:"Start the Jellyfish backend",id:"start-the-jellyfish-backend",level:3},{value:"Start the dashboard web frontend",id:"start-the-dashboard-web-frontend",level:3},{value:"(Optional) Add components library",id:"optional-add-components-library",level:2},{value:"Connecting to the server and joining the room",id:"connecting-to-the-server-and-joining-the-room",level:2},{value:"Screens",id:"screens",level:3},{value:"Connect screen",id:"connect-screen",level:3},{value:"Connecting to the server",id:"connecting-to-the-server",level:3},{value:"Camera permissions (Android only)",id:"camera-permissions-android-only",level:3},{value:"Starting the camera",id:"starting-the-camera",level:3},{value:"Joining the room",id:"joining-the-room",level:3},{value:"Displaying streams from other participants",id:"displaying-streams-from-other-participants",level:2},{value:"Displaying video tracks",id:"displaying-video-tracks",level:3},{value:"Gracefully leaving the room",id:"gracefully-leaving-the-room",level:3},{value:"Summary",id:"summary",level:2}],I={toc:j},P="wrapper";function A(e){let{components:n,...r}=e;return(0,o.kt)(P,(0,a.Z)({},I,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"react-native--expo-quickstart-guide"},"React Native / Expo Quickstart Guide"),(0,o.kt)("h2",{id:"what-youll-learn"},"What you'll learn"),(0,o.kt)("p",null,"This tutorial will guide you through creating your first React Native / Expo\nproject which uses Jellyfish client. By the end of the tutorial you'll have a\nworking application that connects to the frontend dashboard using WebRTC\ntechnology and streams and receives camera tracks."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Finished app",src:t(1481).Z,width:"320",height:"752"})),(0,o.kt)("p",null,"You can check out the finished project ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/graszka22/clients-docs"},"here"),"."),(0,o.kt)("h2",{id:"what-do-you-need"},"What do you need"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a little bit of experience in creating apps with React Native and/or Expo -\nrefer to the ",(0,o.kt)("a",{parentName:"li",href:"https://reactnative.dev/docs/getting-started"},"React Native\nGuide")," or ",(0,o.kt)("a",{parentName:"li",href:"https://docs.expo.dev/"},"Expo\nGuide")," to learn more")),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("h3",{id:"create-react-native--expo-project"},"Create React Native / Expo project"),(0,o.kt)("p",null,"Firstly create a brand new project."),(0,o.kt)(x,{mdxType:"Tabs"},(0,o.kt)(C,{value:"react-native",label:"React Native",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx react-native@latest init JellyfishDashboard\n"))),(0,o.kt)(C,{value:"expo-bare",label:"Expo Bare workflow",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-expo-app --template bare-minimum jellyfish-dashboard\n"))),(0,o.kt)(C,{value:"expo-eas",label:"EAS Build",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-expo-app jellyfish-dashboard\n")))),(0,o.kt)("h3",{id:"add-dependencies"},"Add dependencies"),(0,o.kt)(x,{mdxType:"Tabs"},(0,o.kt)(C,{value:"react-native",label:"React Native",mdxType:"TabItem"},"In order for this module to work you'll need to also add `expo` package. The expo package has a small footprint and it's necessary as Jellyfish Client package is built as Expo module.",(0,o.kt)(x,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(C,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx install-expo-modules@latest\nnpm install @jellyfish-dev/react-native-client-sdk\n"))),(0,o.kt)(C,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx install-expo-modules@latest\nyarn add @jellyfish-dev/react-native-client-sdk\n"))),(0,o.kt)(C,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx install-expo-modules@latest\npnpm add @jellyfish-dev/react-native-client-sdk\n"))))),(0,o.kt)(C,{value:"expo-bare",label:"Expo Bare workflow",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"expo install @jellyfish-dev/react-native-client-sdk\n"))),(0,o.kt)(C,{value:"expo-eas",label:"EAS Build",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"expo install @jellyfish-dev/react-native-client-sdk\n")))),(0,o.kt)("h3",{id:"native-configuration"},"Native configuration"),(0,o.kt)("p",null,"In order for camera and audio to work you'll need to add some native configuration:"),(0,o.kt)(x,{mdxType:"Tabs"},(0,o.kt)(C,{value:"react-native",label:"React Native",mdxType:"TabItem"},(0,o.kt)("p",null,"You need to at least set up camera permissions."),(0,o.kt)("p",null,"On Android add to your ",(0,o.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:"title=AndroidManifest.xml",title:"AndroidManifest.xml"},'  <uses-permission android:name="android.permission.CAMERA"/>\n')),(0,o.kt)("p",null,"For audio you'll need the ",(0,o.kt)("inlineCode",{parentName:"p"},"RECORD_AUDIO")," permission:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:"title=AndroidManifest.xml",title:"AndroidManifest.xml"},'  <uses-permission android:name="android.permission.RECORD_AUDIO"/>\n')),(0,o.kt)("p",null,"On iOS you must set ",(0,o.kt)("inlineCode",{parentName:"p"},"NSCameraUsageDescription")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"Info.plist")," file. You can\nedit this file in Xcode. This value is a description that is shown when iOS asks user\nfor camera permission."),(0,o.kt)("p",null,"Similarly for audio there is ",(0,o.kt)("inlineCode",{parentName:"p"},"NSMicrophoneUsageDescription"),"."),(0,o.kt)("p",null,"For screencast there is more configuration needed, it's described ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jellyfish-dev/react-native-client-sdk#ios"},"here"),"."),(0,o.kt)("p",null,"We also suggest setting background mode to ",(0,o.kt)("inlineCode",{parentName:"p"},"audio")," so that the app doesn't disconnect when it's in background:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:"title=Info.plist",title:"Info.plist"},"<key>UIBackgroundModes</key>\n<array>\n  <string>audio</string>\n</array>\n"))),(0,o.kt)(C,{value:"expo-bare",label:"Expo Bare workflow",mdxType:"TabItem"},"You have two options here. You can follow configuration instructions for React Native (Expo Bare workflow is a React Native project after all) or if you're using `expo prebuild` command to set up native code you can add our Expo plugin. Just add it to `app.json`:",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"title:app.json","title:app.json":!0},'{\n  "expo": {\n    "name": "example",\n    //...\n    "plugins": ["@jellyfish-dev/react-native-membrane-webrtc"]\n  }\n}\n'))),(0,o.kt)(C,{value:"expo-eas",label:"EAS Build",mdxType:"TabItem"},(0,o.kt)("p",null,"Jellyfish Client provides Expo plugin that should take care of native configuration for you. Just add it to ",(0,o.kt)("inlineCode",{parentName:"p"},"app.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"title:app.json","title:app.json":!0},'{\n  "expo": {\n    "name": "example",\n    //...\n    "plugins": ["@jellyfish-dev/react-native-membrane-webrtc"]\n  }\n}\n')))),(0,o.kt)("h3",{id:"start-the-jellyfish-backend"},"Start the Jellyfish backend"),(0,o.kt)("p",null,"For testing, we'll run the backend locally using Docker image:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -p 50000-50050:50000-50050/udp \\\n           -p 4000:4000/tcp \\\n           -e WEBRTC_USED=true \\\n           -e INTEGRATED_TURN_PORT_RANGE=50000-50050 \\\n           -e INTEGRATED_TURN_IP=192.168.0.1 \\\n           -e INTEGRATED_TURN_LISTEN_IP=0.0.0.0 \\\n           -e SERVER_API_TOKEN=development \\\n           -e VIRTUAL_HOST=192.168.0.1 \\\n           -e SECRET_KEY_BASE=secret \\\n           ghcr.io/jellyfish-dev/jellyfish:edge\n")),(0,o.kt)("p",null,"Make sure to set ",(0,o.kt)("inlineCode",{parentName:"p"},"INTEGRATED_TURN_IP")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"VIRTUAL_HOST")," to your local IP address. Without it, the mobile device won't be able to connect to the backend."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To check your local IP you can use this handy command (Linux/macOS):"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ifconfig | grep \"inet \" | grep -Fv 127.0.0.1 | awk '{print $2}'\n"))),(0,o.kt)("h3",{id:"start-the-dashboard-web-frontend"},"Start the dashboard web frontend"),(0,o.kt)("p",null,"// TODO nie wiem jak to ostatecznie bedzie wygl\u0105da\u0107"),(0,o.kt)("h2",{id:"optional-add-components-library"},"(Optional) Add components library"),(0,o.kt)("p",null,"For your convenience we've prepared a library with nice looking components\nuseful for following this tutorial. Feel free to use standard React Native components or your own components though!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx expo install @expo/vector-icons expo-barcode-scanner expo-font @expo-google-fonts/noto-sans @jellyfish-dev/react-native-jellyfish-components\n")),(0,o.kt)("p",null,"You'll also need to install ",(0,o.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation"},"Reanimated library")," and ",(0,o.kt)("a",{parentName:"p",href:"https://reactnavigation.org/"},"React Navigation")),(0,o.kt)("h2",{id:"connecting-to-the-server-and-joining-the-room"},"Connecting to the server and joining the room"),(0,o.kt)("p",null,"Our app will consist of two screens. The first one allows user to type, paste or\nscan the peer token and connect to the room. The second screen shows room participants with their video tracks."),(0,o.kt)("p",null,"Note that normally the app gets the peer token from your backend. In this\nexample though we skip that and just copy it from the dashboard to the app to\nmake it easier. Here is how to do it:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Adding mobile peer in the dashboard",src:t(2596).Z,width:"1760",height:"1148"})),(0,o.kt)("h3",{id:"screens"},"Screens"),(0,o.kt)("p",null,"For managing screens I've used React Navigation library, you're free though to use another one. Our app will contain two screens: Connect screen and Room screen:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/App.tsx"',title:'"/App.tsx"'},'import React from "react";\nimport { NavigationContainer } from "@react-navigation/native";\nimport { createNativeStackNavigator } from "@react-navigation/native-stack";\nimport ConnectScreen from "./screens/Connect";\nimport RoomScreen from "./screens/Room";\n\nconst Stack = createNativeStackNavigator();\n\nfunction App(): JSX.Element {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator>\n        <Stack.Screen name="Connect" component={ConnectScreen} />\n        <Stack.Screen name="Room" component={RoomScreen} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n\nexport default App;\n')),(0,o.kt)("h3",{id:"connect-screen"},"Connect screen"),(0,o.kt)("p",null,"The UI of the Connect screen consists of a simple text input and a few buttons.\nThe flow for this screen is simple: user either copies the peer token from the\ndashboard or scans it with QR code scanner and presses Connect button. The QR\ncode scanner is provided by our components library and it's completely optional,\njust for convenience."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Connect screen",src:t(1056).Z,width:"1198",height:"819"})),(0,o.kt)("p",null,"The code for the UI looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/screens/Connect.tsx"',title:'"/screens/Connect.tsx"'},'import React, { useState } from "react";\nimport { View, StyleSheet } from "react-native";\nimport {\n  Button,\n  TextInput,\n  QRCodeScanner,\n} from "@jellyfish-dev/react-native-jellyfish-components";\n\nfunction ConnectScreen({ navigation }): JSX.Element {\n  const [peerToken, setPeerToken] = useState<string>("");\n\n  return (\n    <View style={styles.container}>\n      <TextInput\n        placeholder="Enter peer token"\n        value={peerToken}\n        onChangeText={setPeerToken}\n      />\n      <Button\n        onPress={() => {\n          /* to be filled */\n        }}\n        title="Connect"\n        disabled={!peerToken}\n      />\n      <QRCodeScanner onCodeScanned={setPeerToken} />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: "center",\n    backgroundColor: "#BFE7F8",\n    padding: 24,\n    rowGap: 24,\n  },\n});\n\nexport default ConnectScreen;\n')),(0,o.kt)("h3",{id:"connecting-to-the-server"},"Connecting to the server"),(0,o.kt)("p",null,"Once the UI is ready, let's implement connecting to the server."),(0,o.kt)("p",null,"Firstly wrap your app with ",(0,o.kt)("inlineCode",{parentName:"p"},"JelyfishContextProvider"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'"/App.tsx"','"/App.tsx"':!0},'import React from "react";\n// highlight-next-line\nimport { JellyfishContextProvider } from "@jellyfish-dev/react-native-client-sdk";\nimport { NavigationContainer } from "@react-navigation/native";\nimport { createNativeStackNavigator } from "@react-navigation/native-stack";\nimport ConnectScreen from "./screens/Connect";\nimport RoomScreen from "./screens/Room";\n\nconst Stack = createNativeStackNavigator();\n\nfunction App(): JSX.Element {\n  return (\n    // highlight-next-line\n    <JellyfishContextProvider>\n      <NavigationContainer>\n        <Stack.Navigator>\n          <Stack.Screen name="Connect" component={ConnectScreen} />\n          <Stack.Screen name="Room" component={RoomScreen} />\n        </Stack.Navigator>\n      </NavigationContainer>\n      // highlight-next-line\n    </JellyfishContextProvider>\n  );\n}\n\nexport default App;\n')),(0,o.kt)("p",null,"Then in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ConnectScreen")," use ",(0,o.kt)("inlineCode",{parentName:"p"},"useJellyfishClient")," hook to connect to the\nserver. Simply call the ",(0,o.kt)("inlineCode",{parentName:"p"},"connect")," method with your Jellyfish server url and the\npeer token. The ",(0,o.kt)("inlineCode",{parentName:"p"},"connect")," function establishes connection with Jellyfish server\nvia web socket and authenticates the peer."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/screens/Connect.tsx"',title:'"/screens/Connect.tsx"'},'// highlight-next-line\nimport { useJellyfishClient } from "@jellyfish-dev/react-native-client-sdk";\n\n// This is the address of the Jellyfish backend. Change the local IP to yours. We\n// strongly recommend setting this as an environment variable, we hardcoded it here\n// for simplicity.\n// highlight-next-line\nconst JELLYFISH_URL = "ws://192.168.81.152:4000/socket/peer/websocket";\n\nfunction ConnectScreen({ navigation }): JSX.Element {\n  const [peerToken, setPeerToken] = useState<string>("");\n\n  // highlight-next-line\n  const { connect } = useJellyfishClient();\n\n  const connectToRoom = async () => {\n    try {\n      // highlight-next-line\n      await connect(JELLYFISH_URL, peerToken.trim());\n    } catch (e) {\n      console.log("Error while connecting", e);\n    }\n  };\n\n  return (\n    <View style={styles.container}>\n      <TextInput\n        placeholder="Enter peer token"\n        value={peerToken}\n        onChangeText={setPeerToken}\n      />\n      <Button onPress={connectToRoom} title="Connect" disabled={!peerToken} />\n      <QRCodeScanner onCodeScanned={setPeerToken} />\n    </View>\n  );\n}\n\n// ...\n')),(0,o.kt)("h3",{id:"camera-permissions-android-only"},"Camera permissions (Android only)"),(0,o.kt)("p",null,"To start the camera we need to ask the user for a permission first. We'll use a\nstandard React Native module for this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/screens/Connect.tsx"',title:'"/screens/Connect.tsx"'},'import { View, StyleSheet, Permission, PermissionsAndroid } from "react-native";\n\n// ...\n\nfunction ConnectScreen({ navigation }): JSX.Element {\n  // ...\n\n  // highlight-start\n  const grantedCameraPermissions = async () => {\n    const granted = await PermissionsAndroid.request(\n      PermissionsAndroid.PERMISSIONS.CAMERA as Permission\n    );\n    if (granted !== PermissionsAndroid.RESULTS.GRANTED) {\n      console.error("Camera permission denied");\n      return false;\n    }\n    return true;\n  };\n  // highlight-end\n\n  const connectToRoom = async () => {\n    try {\n      await connect(JELLYFISH_URL, peerToken.trim());\n\n      // highlight-start\n      if (!(await grantedCameraPermissions())) {\n        return;\n      }\n      // highlight-end\n    } catch (e) {\n      console.log("Error while connecting", e);\n    }\n  };\n\n  // ...\n}\n\n// ...\n')),(0,o.kt)("h3",{id:"starting-the-camera"},"Starting the camera"),(0,o.kt)("p",null,"Jellyfish Client provides a handy hook for managing the camera: ",(0,o.kt)("inlineCode",{parentName:"p"},"useCamera"),". It\ncan not only start a camera, but also toggle, switch between multiple cameras,\nmanage camera state and camera track simulcast settings and bandwidth. Also when\nstarting the camera you can provide multiple different settings such as\nresolution, quality and metadata. In this example though we'll simply turn it\non to stream the camera to the dashboard with default settings:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/screens/Connect.tsx"',title:'"/screens/Connect.tsx"'},'import {\n  useJellyfishClient,\n  // highlight-next-line\n  useCamera,\n} from "@jellyfish-dev/react-native-client-sdk";\n\nfunction ConnectScreen({ navigation }): JSX.Element {\n  // ...\n\n  // highlight-next-line\n  const { startCamera } = useCamera();\n\n  const connectToRoom = async () => {\n    try {\n      await connect(JELLYFISH_URL, peerToken.trim());\n\n      if (!(await grantedCameraPermissions())) {\n        return;\n      }\n\n      // highlight-next-line\n      await startCamera();\n    } catch (e) {\n      console.log("Error while connecting", e);\n    }\n  };\n\n  // ...\n}\n\n// ...\n')),(0,o.kt)("h3",{id:"joining-the-room"},"Joining the room"),(0,o.kt)("p",null,"The last step of connecting to the room would be actually joining the room - so\nthat your camera track is visible to other users. To do this simply use ",(0,o.kt)("inlineCode",{parentName:"p"},"join")," function\nfrom ",(0,o.kt)("inlineCode",{parentName:"p"},"useJellyfishClient")," hook."),(0,o.kt)("p",null,"You can also provide some user metadata when joining. You can put there whatever\nyou want, it depends on your business logic. In our example we provide user name."),(0,o.kt)("p",null,"After joining the room we navigate to the next screen: Room screen."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/screens/Connect.tsx"',title:'"/screens/Connect.tsx"'},'// ...\n\nfunction ConnectScreen({ navigation }): JSX.Element {\n  // highlight-next-line\n  const { connect, join } = useJellyfishClient();\n\n  const connectToRoom = async () => {\n    try {\n      await connect(JELLYFISH_URL, peerToken.trim());\n\n      if (!(await grantedCameraPermissions())) {\n        return;\n      }\n\n      await startCamera();\n\n      // highlight-next-line\n      await join({ name: "Mobile RN Client" });\n      // highlight-next-line\n      navigation.navigate("Room");\n    } catch (e) {\n      console.log("Error while connecting", e);\n    }\n  };\n\n  // ...\n}\n\n// ...\n')),(0,o.kt)("p",null,"Now the app is ready for the first test. If everything went well you should see\na video from your camera in the frontend dashboard. Now onto the second part:\ndisplaying the streams from other participants."),(0,o.kt)("h2",{id:"displaying-streams-from-other-participants"},"Displaying streams from other participants"),(0,o.kt)("h3",{id:"displaying-video-tracks"},"Displaying video tracks"),(0,o.kt)("p",null,"The Room screen displays the video from the camera on your device and also\nvideos from other participants as well. It also allows user to exit the call."),(0,o.kt)("p",null,"To get information about all participants (also the local one) in the room use\n",(0,o.kt)("inlineCode",{parentName:"p"},"usePeers()")," hook from Jellyfish Client. The hook returns all the participants\nwith their ids, tracks and metadata. When a new participant joins or any\nparticipant leaves or anything else changes, the hook updates with the new\ninformation."),(0,o.kt)("p",null,"To display video tracks Jellyfish Client has a dedicated component for\ndisplaying a video track: ",(0,o.kt)("inlineCode",{parentName:"p"},"<VideoRenderer>"),". It takes a track id as a prop (it\nmay be local or remote track) and you can style it just like an ordinary\n",(0,o.kt)("inlineCode",{parentName:"p"},"<View>"),". You can even animate it!"),(0,o.kt)("p",null,"So, let's display all the participants in the simplest way possible:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/screens/Room.tsx"',title:'"/screens/Room.tsx"'},'import React from "react";\nimport { View, StyleSheet } from "react-native";\n// highlight-start\nimport {\n  usePeers,\n  VideoRendererView,\n} from "@jellyfish-dev/react-native-client-sdk";\n// highlight-end\n\nfunction RoomScreen({ navigation }): JSX.Element {\n  // highlight-next-line\n  const peers = usePeers();\n\n  return (\n    <View style={styles.container}>\n      <View style={styles.videoContainer}>\n        // highlight-start\n        {peers.map((peer) =>\n          peer.tracks[0] ? (\n            <VideoRendererView\n              trackId={peer.tracks[0].id}\n              style={styles.video}\n            />\n          ) : null\n        )}\n        // highlight-end\n      </View>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: "center",\n    justifyContent: "space-between",\n    backgroundColor: "#F1FAFE",\n    padding: 24,\n  },\n  videoContainer: {\n    flexDirection: "row",\n    gap: 8,\n    flexWrap: "wrap",\n  },\n  video: { width: 200, height: 200 },\n});\n\nexport default RoomScreen;\n')),(0,o.kt)("p",null,"You should now see your own camera on your mobile device. You can add another\nparticipant and their new track (displaying for example rotating frog) in the dashboard like\nthis:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Adding new participant",src:t(640).Z,width:"1760",height:"1148"})),(0,o.kt)("p",null,"It should show up in the Room screen automatically:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Room screen",src:t(6837).Z,width:"274",height:"640"})),(0,o.kt)("p",null,"For your convenience in our components library we provided a component to layout\nvideos in a nice grid:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/screens/Room.tsx"',title:'"/screens/Room.tsx"'},'// highlight-next-line\nimport { VideosGrid } from "@jellyfish-dev/react-native-jellyfish-components";\n\nfunction RoomScreen({ navigation }): JSX.Element {\n  const peers = usePeers();\n\n  return (\n    <View style={styles.container}>\n      // highlight-start\n      <VideosGrid\n        tracks={peers.map((peer) => peer.tracks[0]?.id).filter((t) => t)}\n      />\n      // highlight-end\n    </View>\n  );\n}\n')),(0,o.kt)("h3",{id:"gracefully-leaving-the-room"},"Gracefully leaving the room"),(0,o.kt)("p",null,"To leave a rooom we'll add a button for the user. When user clicks it, we\ngracefully leave the room, close the server connection and go back to the\nConnect screen."),(0,o.kt)("p",null,"For leaving the room and closing server connection you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"cleanUp")," method from ",(0,o.kt)("inlineCode",{parentName:"p"},"useJellyfishClient()")," hook."),(0,o.kt)("p",null,"After leaving the room we go back to the Connect screen."),(0,o.kt)("p",null,"// TODO: czy na pewno cleanUp method?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/screens/Room.tsx"',title:'"/screens/Room.tsx"'},'// ...\nimport {\n  usePeers,\n  VideoRendererView,\n  // highlight-next-line\n  useJellyfishClient,\n} from "@jellyfish-dev/react-native-client-sdk";\n// highlight-next-line\nimport { InCallButton } from "@jellyfish-dev/react-native-jellyfish-components";\n\nfunction RoomScreen({ navigation }): JSX.Element {\n  const peers = usePeers();\n  // highlight-start\n  const { cleanUp } = useJellyfishClient();\n\n  const onDisconnectPress = () => {\n    cleanUp();\n    navigation.goBack();\n  };\n  // highlight-end\n\n  return (\n    <View style={styles.container}>\n      <VideosGrid\n        tracks={peers.map((peer) => peer.tracks[0]?.id).filter((t) => t)}\n      />\n      // highlight-start\n      <InCallButton\n        type="disconnect"\n        iconName="phone-hangup"\n        onPress={onDisconnectPress}\n      />\n      // highlight-end\n    </View>\n  );\n}\n\n// ...\n')),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"Congrats on finishing your first Jellyfish mobile application! In this tutorial\nyou've learned how to make a basic Jellyfish client application that streams and\nreceives video tracks with WebRTC technology."),(0,o.kt)("p",null,"But this was just the beginning. Jellyfish Client supports much more than just\nstreaming camera: it can also stream audio, screencast your device's screen,\nconfigure your camera and audio devices, detect voice activity, control\nsimulcast, bandwidth and encoding settings, show camera preview, display WebRTC\nstats and more to come. Check out our other tutorials to learn about those\nfeatures."),(0,o.kt)("p",null,"You can also take a look at our fully featured ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jellyfish-dev/react-native-membrane-webrtc/tree/master/example"},"Videoroom Demo\nexample"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Videoroom Demo",src:t(6143).Z,width:"720",height:"720"})))}A.isMDXComponent=!0},640:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/adding_new_track-e8d0ce9cfc75bb797be53eae5772ee09.gif"},2596:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/adding_peer-fe855d9a06e818ed6850260bedaca859.gif"},1481:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/app-99950a2fd0fb4f277b81e1aa45ed6802.gif"},1056:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/connect-88a620f67a2c8b7eb49676d7a513abd6.png"},6837:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/room_screen-92b763e49e0f9f3b15b5451ade1e0045.png"},6143:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/videoroom-b9c2dd933b2f8d5061aa5b5c53c19a3d.gif"}}]);