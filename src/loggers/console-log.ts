import { LoggerObserver, LoggerPayload } from "../types";

export class ConsoleLog implements LoggerObserver {
  public update(payload: LoggerPayload): void {
    const stringifiedData = JSON.stringify(payload);

    switch (payload.level) {
      case "info":
        console.log("ℹ️", "\x1b[36m", stringifiedData, "\x1b[0m");
        break;
      case "success":
        console.log("✅", "\x1b[92m", stringifiedData, "\x1b[0m");
        break;
      case "warning":
        console.warn("⚠️", "\x1b[33m", stringifiedData, "\x1b[0m");
        break;
      case "debug":
        console.debug("🛑", "\x1b[32m", stringifiedData, "\x1b[0m");
        break;
      case "error":
        console.error("🚨", "\x1b[91m", stringifiedData, "\x1b[0m");
        break;
      case "announcement":
        console.log("📡", "\x1b[38;5;208m", stringifiedData, "\x1b[0m");
        break;
      case "critical":
        console.log("🔥", "\x1b[38;5;196m", stringifiedData, "\x1b[0m");
        break;
      case "system":
        console.log("🖥️", "\x1b[38;5;45m", stringifiedData, "\x1b[0m");
        break;
      case "security":
        console.log("🔒", "\x1b[38;5;172m", stringifiedData, "\x1b[0m");
        break;
      case "database":
        console.log("🗃️", "\x1b[38;5;178m", stringifiedData, "\x1b[0m");
        break;
      case "audit":
        console.log("📝", "\x1b[38;5;184m", stringifiedData, "\x1b[0m");
        break;
      case "performance":
        console.log("📈", "\x1b[38;5;190m", stringifiedData, "\x1b[0m");
        break;
      case "access":
        console.log("🔑", "\x1b[38;5;196m", stringifiedData, "\x1b[0m");
        break;
      case "event":
        console.log("📣", "\x1b[38;5;202m", stringifiedData, "\x1b[0m");
        break;
      case "request":
        console.log("📥", "\x1b[38;5;208m", stringifiedData, "\x1b[0m");
        break;
      case "response":
        console.log("📤", "\x1b[38;5;214m", stringifiedData, "\x1b[0m");
        break;
      case "validation":
        console.log("🔍", "\x1b[38;5;220m", stringifiedData, "\x1b[0m");
        break;
      default:
        console.log(stringifiedData, "\x1b[0m");
    }
  }
}
