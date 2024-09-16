# OpenAI Chat Backend

This project is a Node.js backend application that makes a REST call to the OpenAI chat completion API using Azure OpenAI Service.

## Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)
- An OpenAI API key

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

3. Create a `.env` file in the root of the project and add your OpenAI API key:

   ```plaintext
   OPENAI_API_KEY=your_openai_api_key
   ```

## Usage

### Start the Server

1. Start the server:

   ```sh
   node index.js
   ```

2. Make a POST request to `http://localhost:3000/chat` with a JSON body containing the prompt, for example:

   ```json
   {
     "prompt": "Hi, how are you?"
   }
   ```

### Direct Request with `request.js`

1. Ensure your `.env` file is correctly configured with your OpenAI API key.

2. Run the script:

   ```sh
   node request.js
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
├── package.json
├── package-lock.json
├── index.js
├── request.js
└── request.test.js
```

- `index.js`: The main file that sets up the Express server and handles requests to the OpenAI API.
- `request.js`: A script to make a direct POST request to the OpenAI API.
- `request.test.js`: The test file that uses Jest to test the requests to the OpenAI API.

## Contributing

Contributions are welcome! Feel free to open issues and pull requests to improve the project.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.