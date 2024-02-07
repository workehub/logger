import { ConsoleLog } from "./loggers/console-log";
import { LoggerObserver, LoggerPayload } from "./types";

export class Logger {
  private static observers: Map<string, LoggerObserver> = new Map([["console", new ConsoleLog()]]);

  static notify(types: string[], payload: LoggerPayload): void {
    for (const type of types) {
      const logger = Logger.observers.get(type);
      if (logger) {
        logger.update(payload);
      }
    }
  }

  static attach(type: string, observer: LoggerObserver): void {
    if (!Logger.observers.has(type)) {
      Logger.observers.set(type, observer);
    }
  }

  static detach(type: string): void {
    Logger.observers.delete(type);
  }
}

export { LoggerObserver, LoggerPayload };
