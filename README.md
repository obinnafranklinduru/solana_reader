# Solana Account Information Checker

This script is designed to retrieve and log both the balance and executability status of a Solana blockchain account using the Solana Web3.js library. It establishes a connection to the Solana devnet, queries the account information based on a provided public key, and logs the results.

## Prerequisites

Before running the script, ensure you have the following dependencies installed:

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone this repository:

   ```bash
    git clone https://github.com/obinnafranklinduru/solana_reader
   ```

2. Install the required packages:

   ```bash
    npm install
   ```

## Usage

Replace the placeholder with the actual public key you want to query:

```bash
 const PUBLIC_KEY = "CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN";
```

Run the script:

```bash
 npm start
```

The script will connect to the Solana devnet, query the account balance and executability status, and log the results.

## Results

The script will display the following information:

- The balance of the account in lamports.
- Whether the account is executable or not.

## Contributing

Contributions are welcome! If you have improvements or additional features to suggest, please create an issue or submit a pull request.

## License

This script is licensed under the [MIT License]("https://github.com/obinnafranklinduru/solana_reader/blob/main/LICENSE").
