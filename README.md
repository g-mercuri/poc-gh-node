# OpenAI Chat Backend

This project is a Node.js script that makes a REST call to the OpenAI chat completion API using Azure OpenAI Service.

## Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)
- An OpenAI API key
- Docker (optional, for containerized deployment)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/openai-chat-backend.git
   cd openai-chat-backend
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Create a [`.env`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FGit%2FRAI%2Fpoc-gh-node%2Fopenai-chat-backend%2F.env%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%2269a44c63-1295-4e7a-9e61-265bf1a96dd0%22%5D "c:\Git\RAI\poc-gh-node\openai-chat-backend\.env") file in the root of the project and add your OpenAI API key and URI:

   ```plaintext
   OPENAI_API_KEY=your_openai_api_key
   OPENAI_API_URI=https://aoai-gm.openai.azure.com/openai/deployments/gpt-4/chat/completions?api-version=2023-03-15-preview
   ```

## Usage

1. Ensure your [`.env`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FGit%2FRAI%2Fpoc-gh-node%2Fopenai-chat-backend%2F.env%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%2269a44c63-1295-4e7a-9e61-265bf1a96dd0%22%5D "c:\Git\RAI\poc-gh-node\openai-chat-backend\.env") file is correctly configured with your OpenAI API key and URI.

2. Run the script:

   ```sh
   node index.js
   ```

## Docker Usage

1. Build the Docker image:

   ```sh
   docker compose build
   ```

2. Run the Docker container:

   ```sh
   docker compose up
   ```

## Testing

1. Install Jest (if you haven't already):

   ```sh
   npm install --save-dev jest
   ```

2. Add a script in your `package.json`:

   ```json
   "scripts": {
     "test": "jest"
   }
   ```

3. Run the tests:

   ```sh
   npm test
   ```

## Project Structure

```plaintext
openai-chat-backend/
│
├── .env
├── Dockerfile
├── package.json
├── package-lock.json
├── index.js
└── index.test.js
```

- `index.js`: A script to make a direct POST request to the OpenAI API.
- `index.test.js`: The test file that uses Jest to test the requests to the OpenAI API.
- `Dockerfile`: The Docker configuration file for containerizing the application.

## Contributing

Contributions are welcome! Feel free to open issues and pull requests to improve the project.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.