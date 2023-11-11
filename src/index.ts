import {
    Connection,
    PublicKey,
    clusterApiUrl
} from "@solana/web3.js";

// Replace this with the actual public key you want to query
const PUBLIC_KEY = "CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN";

/**
 * Asynchronous function to retrieve and log the balance of a Solana blockchain account.
 * @returns {Promise<void>} A promise that resolves once the operation is complete.
 */
async function main(): Promise<void> {
    try {
        // Establish a connection to the Solana devnet
        const connection = new Connection(clusterApiUrl("devnet"));

        // Create a PublicKey instance from the provided public key
        const address = new PublicKey(`${PUBLIC_KEY}`);

        // Retrieve the account information from the Solana blockchain
        const accountInfo = await connection.getAccountInfo(address);

        // Check if the account is executable
        const isExecutable = accountInfo?.executable || false;

        // Retrieve the account balance from the Solana blockchain
        const balance = await connection.getBalance(address);

        // Log the account balance
        console.log(`The balance of the account at ${address} is ${balance} lamports`);

        // display if executable or not
        console.log(`The account at ${address} is ${isExecutable ? 'executable' : 'not executable'}`);

        // Log a success message
        console.log(`✅ Finished!`);
    } catch (error) {
        // If an error occurs, throw a new error with a descriptive message
        throw new Error('Failed to read from the Blockchain');
    }
}

// Execute the 'main' function and handle any potential errors
main().catch((error: Error) => {
    // Log the error message
    console.error({ message: error.message });
});
