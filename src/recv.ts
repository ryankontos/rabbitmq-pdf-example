import * as amqp from 'amqplib';
import * as fs from 'fs';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';

async function receivePDF() {
    try {
        const connection = await amqp.connect('amqp://127.0.0.1');
        const channel = await connection.createChannel();
        const queue = 'pdf_queue';

        await channel.assertQueue(queue, {
            durable: true
        });

        console.log(`Waiting for messages in ${queue}. To exit press CTRL+C`);

        channel.consume(queue, (msg) => {
            if (msg !== null) {
                const pdfData = msg.content;

                const outputFilePath = path.join(__dirname, `received_${uuidv4()}.pdf`);
                fs.writeFileSync(outputFilePath, pdfData);

                console.log(`PDF received and saved as ${outputFilePath}`);

                channel.ack(msg);
            }
        });

    } catch (error) {
        console.error('Error in receiving PDF:', error);
    }
}

receivePDF();
