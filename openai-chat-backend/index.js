const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const apiKey = process.env.OPENAI_API_KEY;
const apiUri = process.env.OPENAI_API_URI;

if (!apiKey || !apiUri) {
  console.error('API key or URI not found. Please ensure you have configured the .env file correctly.');
  process.exit(1);
}

const data = {
  messages: [
    { role: "system", content: "You are a helpful assistant." },
    { role: "user", content: "Hi, how are you?" }
  ],
  max_tokens: 150,
};

const headers = {
  'Content-Type': 'application/json',
  'api-key': apiKey,
};

axios.post(apiUri, data, { headers })
  .then(response => {
    const messageContent = response.data.choices[0].message.content;
    console.log('Response:', messageContent);
    console.log('Full Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.response ? error.response.data : error.message);
  });