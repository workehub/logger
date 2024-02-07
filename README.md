# Logger

Logger is a logging library for handling log messages and notifying logger targets.

## Features

- Logging messages to multiple targets
- Customizable logger targets
- Flexible payload structure

## Installation

`npm install @workehub/logger`

## Usage

1. Import the necessary classes and interfaces from the `@workehub/logger` package:

```typescript
import { LoggerObserver, LoggerPayload } from "@workehub/logger";
```

2. Create a class that implements the `LoggerObserver` interface to define a logger target. For example, here's an implementation using Kafka as the target:

```typescript
class KafkaLog extends LoggerObserver {
  private kafka: any; // Import the correct Kafka library here

  constructor() {
    super();
    // Initialize the connection to Kafka
    this.kafka = /* Initialize the connection to Kafka */;
  }

  update(payload: LoggerPayload): void {
    // Send the log message to the Kafka queue
    this.kafka.sendMessage(payload);
  }
}
```

3. Use the static methods of the `Logger` class to manage logger targets:

```typescript
// Create instances of the logger targets you want to use
const consoleLog = new ConsoleLog(); // Example using ConsoleLog
const kafkaLog = new KafkaLog(); // Example using KafkaLog

// Attach the logger observers using static methods of the Logger class
Logger.attach("console", consoleLog);
Logger.attach("kafka", kafkaLog);
```

4. Use the `notify` method to send log messages to the registered logger targets:

```typescript
// Create an example log payload
const payload: LoggerPayload = {
  level: "event",
  message: "New event created",
  additionalInfo: {
    event: "Birthday Party",
    date: "2023-07-20",
    location: "City Park",
  },
  timestamp: Date.now(),
};

// Notify the logger to send the payload to the registered logger targets
Logger.notify(["console", "kafka"], payload);
```

## Note

The `ConsoleLog` target is included by default and does not need to be explicitly registered. You can simply call `Logger.notify(["console"]`, payload) to log messages to the console.

## Screenshots

![App Screenshot](/example/console-log.png)

## API

#### `static notify(types: string[], payload: LoggerPayload): void`

Notifies the specified logger targets with the log data.

- `types`: An array of target types to notify.
- `payload`: The log data object with the following properties:
  - `level`: The log level, e.g., `'error'`, `'info'`, `'debug'`.
  - `message`: The log message.
  - `additionalInfo` (optional): Additional information to include in the log.

#### `static attach(type: string, observer: LoggerObserver): void`

Registers a logger target with the specified type.

- `type`: The type name for the logger target.
- `observer`: An instance of a logger target implementation.
