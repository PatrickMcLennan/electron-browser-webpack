const { app, BrowserWindow, Menu, shell } = require("electron");
const path = require("path");

const isMac = process.platform === `darwin`;

const menuTemplate = [
  {
    label: `Hello World!`,
    submenu: [
      { role: "about" },
      { type: "separator" },
      { role: "services" },
      { type: "separator" },
      { role: "hide" },
      { role: "hideothers" },
      { role: "unhide" },
      { type: "separator" },
      { role: "quit" },
    ],
  },
  {
    label: "Edit",
    submenu: [
      { role: "undo" },
      { role: "redo" },
      { type: "separator" },
      { role: "cut" },
      { role: "copy" },
      { role: "paste" },
      { role: "pasteandmatchstyle" },
      { role: "delete" },
      { role: "selectall" },
      { type: "separator" },
      { role: "reload" },
      { role: "toggleFullScreen" },
      { role: "toggleDevTools" },
      { type: "separator" },
      { role: "quit" },
    ],
  },
];

function createWindow() {
  return new BrowserWindow({
    width: 900,
    height: 900,
    webPreferences: {
      nodeIntegration: true,
    },
  }).loadFile(path.resolve(__dirname, `dist/index.html`));
}

function onReady() {
  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
  return createWindow();
}

app.on(`ready`, onReady);
