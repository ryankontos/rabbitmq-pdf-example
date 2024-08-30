import { sendPDF } from "./producer";
import { receivePDF } from "./consumer";

const main = async () => {
  const sendMode = process.argv.includes("--send");
  const receiveMode = process.argv.includes("--receive");

  if (sendMode) {
    await sendPDF("./src/sample.pdf"); // Path to the PDF file to send
  }

  if (receiveMode) {
    await receivePDF("./src/received.pdf"); // Path to save the received PDF file
  }
};

main();
