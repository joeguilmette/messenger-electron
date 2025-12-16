const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    title: 'Messenger'
  });

  win.loadURL('https://messenger.com');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  app.quit();
});
