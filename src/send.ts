import * as amqp from 'amqplib';
import * as fs from 'fs';
import * as path from 'path';

async function sendPDF() {
    try {
        const connection = await amqp.connect('amqp://127.0.0.1');
        const channel = await connection.createChannel();
        const queue = 'pdf_queue';

        await channel.assertQueue(queue, {
            durable: true
        });

        const filePath = path.join(__dirname, '../testpdf.pdf');
        const pdfData = fs.readFileSync(filePath);

        channel.sendToQueue(queue, Buffer.from(pdfData), {
            persistent: true
        });

        console.log(`PDF sent to queue: ${queue}`);

        setTimeout(() => {
            channel.close();
            connection.close();
        }, 500);

    } catch (error) {
        console.error('Error in sending PDF:', error);
    }
}

sendPDF();
