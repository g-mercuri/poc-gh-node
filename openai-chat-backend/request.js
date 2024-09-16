const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const apiKey = process.env.OPENAI_API_KEY;

// Verifica che la chiave API sia stata caricata correttamente
if (!apiKey) {
  console.error('La chiave API non è stata trovata. Assicurati di aver configurato correttamente il file .env');
  process.exit(1);
}

const url = 'https://aoai-gm.openai.azure.com/openai/deployments/gpt-4/chat/completions?api-version=2023-03-15-preview';

const data = {
  messages: [
    { role: "system", content: "You are a helpful assistant." },
    { role: "user", content: "Ciao, come stai?" }
  ],
  max_tokens: 150,
};

const headers = {
  'Content-Type': 'application/json',
  'api-key': apiKey, // Usa 'api-key' invece di 'Authorization'
};

axios.post(url, data, { headers })
  .then(response => {
    const messageContent = response.data.choices[0].message.content;
    console.log('Response Content:', messageContent);
    //console.log('Full Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.response ? error.response.data : error.message);
  });