# NodeGui Webview plugin - Qt6

This is a modified version of the original NodeGui Webview plugin example, updated to work with NodeGui 0.6 and Qt 6.4.1.
I don't really know much about Qt, C/C++ build chains, etcetera, but I think I do know enough to make this work for me.
The current version is a little hacky here and there, but it compiles and runs for me on Windows.

Easiest way to actually use the plugin:

1. install in your main project from npm: `npm install @aiorosdev/nodegui-plugin-webview`
2. import the module, for example: `import { QWebEngineView, QWebChannel } from "@aiorosdev/nodegui-plugin-webview"`

Any suggestions are welcome.

Demo:

<img src="https://user-images.githubusercontent.com/4029423/69486645-36ed9800-0e4e-11ea-8e07-257bf3ba854a.gif" />
