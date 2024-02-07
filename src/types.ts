export type LoggerPayload = {
  level:
    | "error"
    | "warning"
    | "info"
    | "debug"
    | "success"
    | "announcement"
    | "critical"
    | "system"
    | "security"
    | "database"
    | "audit"
    | "performance"
    | "access"
    | "event"
    | "request"
    | "response"
    | "validation";
  message: string;
  additionalInfo?: any;
  timestamp?: number;
};

export abstract class LoggerObserver {
  public abstract update(payload: LoggerPayload): void;
}
