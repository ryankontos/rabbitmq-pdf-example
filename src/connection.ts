import amqp, { Connection, Channel } from "amqplib";
import { rmqUser, rmqPass, rmqHost, QUEUE_NAME } from "./config";

class RabbitMQConnection {
  connection!: Connection;
  channel!: Channel;
  private connected = false;

  async connect() {
    if (this.connected) return;
    try {
      console.log(`⌛ Connecting to RabbitMQ Server...`);
      this.connection = await amqp.connect(`amqp://${rmqUser}:${rmqPass}@${rmqHost}:5672`);
      this.channel = await this.connection.createChannel();
      await this.channel.assertQueue(QUEUE_NAME, { durable: true });
      this.connected = true;
      console.log(`✅ Connected to RabbitMQ Server`);
    } catch (error) {
      console.error(`❌ Connection failed:`, error);
    }
  }

  async sendToQueue(message: Buffer) {
    await this.channel.sendToQueue(QUEUE_NAME, message);
    console.log(`📤 Message sent to queue`);
  }

  async consume(handleMessage: (msg: Buffer) => void) {
    await this.channel.consume(QUEUE_NAME, (msg) => {
      if (msg) {
        handleMessage(msg.content);
        this.channel.ack(msg);
      }
    });
  }
}

export const mqConnection = new RabbitMQConnection();
