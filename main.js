const { app, BrowserWindow } = require('electron')

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      // Hardened: the page uses no Node APIs (everything runs over HTTPS via
      // the Firebase web SDK), so Node access in the renderer stays off. This
      // means an attacker who slipped HTML into an entry can't run code on
      // your machine.
      nodeIntegration: false,
      contextIsolation: true
    }
  })

  win.webContents.session.webRequest.onBeforeSendHeaders((details, callback) => {
    callback({ requestHeaders: { Origin: '*', ...details.requestHeaders } })
  })

  win.webContents.session.webRequest.onHeadersReceived((details, callback) => {
    callback({
      responseHeaders: {
        'Access-Control-Allow-Origin': ['*'],
        ...details.responseHeaders
      }
    })
  })

  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  app.quit()
})