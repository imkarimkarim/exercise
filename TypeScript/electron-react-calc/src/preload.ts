import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  sayHello: () => ipcRenderer.send("game", "ping"),
  listen: (callback: Function) =>
    ipcRenderer.on("game", (event, msg) => {
      if (typeof callback === "function") {
        callback(msg);
      }
    }),
  remove: () => ipcRenderer.removeAllListeners("game"),
});
