const path = require("path");

module.exports = function(win) {
  let pauseButtons = [
    {
      tooltip: "Skip Back",
      icon: path.join(__dirname, "icons", "skipback.png"),
      click() {
        win.webContents.send("backward");
      }
    },
    {
      tooltip: "Pause",
      icon: path.join(__dirname, "icons", "pause.png"),
      click() {
        win.setThumbarButtons(playButtons);
        win.webContents.send("play-pause");
      }
    },
    {
      tooltip: "Skip Forward",
      icon: path.join(__dirname, "icons", "skipforward.png"),
      click() {
        win.webContents.send("forward");
      }
    }
  ];

  let playButtons = [
    {
      tooltip: "Skip Back",
      icon: path.join(__dirname, "icons", "skipback.png"),
      click() {
        win.webContents.send("backward");
      }
    },
    {
      tooltip: "Play",
      icon: path.join(__dirname, "icons", "play.png"),
      click() {
        win.setThumbarButtons(pauseButtons);
        win.webContents.send("play-pause");
      }
    },
    {
      tooltip: "Skip Forward",
      icon: path.join(__dirname, "icons", "skipforward.png"),
      click() {
        win.webContents.send("forward");
      }
    }
  ];

  return playButtons;
};

