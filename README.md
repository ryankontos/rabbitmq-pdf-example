# RabbitMQ PDF Example Project

This project demonstrates how to send and receive PDF files over RabbitMQ using Node.js with TypeScript. The project includes scripts for sending a PDF file to a RabbitMQ queue and receiving it from the queue, saving it to the local filesystem.

## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [RabbitMQ](https://www.rabbitmq.com/) (installed and running)
- [TypeScript](https://www.typescriptlang.org/) (included in the project dependencies)

## Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/rabbitmq-pdf-example.git
cd rabbitmq-pdf-example
```

### 2. Install Dependencies

Install the necessary dependencies using npm:

```bash
npm install
```

## Running the Project

### Sending the PDF

To send the PDF file to the RabbitMQ queue:

```bash
npx ts-node src/send.ts
```

Alternatively, you can use the npm script:

```bash
npm run send
```

### Receiving the PDF

To receive the PDF file from the RabbitMQ queue and save it to the local filesystem:

```bash
npx ts-node src/recv.ts
```

Alternatively, you can use the npm script:

```bash
npm run recv
```

## Platform-Specific Instructions

### macOS/Linux

#### RabbitMQ Installation

1. **Install RabbitMQ**:
   - If you don't have RabbitMQ installed, you can install it using Homebrew:

     ```bash
     brew install rabbitmq
     ```

2. **Start RabbitMQ**:
   - Start RabbitMQ as a service:

     ```bash
     brew services start rabbitmq
     ```

3. **Verify RabbitMQ**:
   - Access the RabbitMQ management console at [http://localhost:15672](http://localhost:15672) with the default credentials (`guest` / `guest`).

### Windows

#### RabbitMQ Installation

1. **Install Chocolatey** (if you don't have it already):
   - Open PowerShell as Administrator and run:

     ```powershell
     Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
     ```

2. **Install RabbitMQ**:
   - Use Chocolatey to install RabbitMQ:

     ```powershell
     choco install rabbitmq
     ```

3. **Start RabbitMQ**:
   - Start RabbitMQ using the RabbitMQ Command Prompt (installed with RabbitMQ):

     ```powershell
     rabbitmq-service.bat start
     ```

4. **Verify RabbitMQ**:
   - Open a browser and go to [http://localhost:15672](http://localhost:15672) to access the management console. The default login credentials are `guest` / `guest`.

### Docker (Alternative for Any Platform)

If you prefer, you can run RabbitMQ using Docker:

```bash
docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management
```

## Project Structure

- **src/**: Contains the TypeScript source files.
  - **send.ts**: Script to send a PDF file to the RabbitMQ queue.
  - **recv.ts**: Script to receive a PDF file from the RabbitMQ queue and save it locally.
- **package.json**: Contains project metadata and npm scripts.
- **tsconfig.json**: TypeScript configuration file.

## Troubleshooting

### RabbitMQ Connection Issues

If you encounter issues connecting to RabbitMQ (e.g., `ECONNREFUSED`), ensure that RabbitMQ is running and accessible at `localhost:5672`.

### Common Errors

- **`MODULE_NOT_FOUND`**: Ensure that your TypeScript files are correctly located in the `src` directory and that paths are correctly referenced.
- **`ENOTFOUND`**: Verify that RabbitMQ is running and accessible at the specified address.
