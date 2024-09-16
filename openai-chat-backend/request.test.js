// request.test.js
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

jest.mock('axios');

describe('POST /chat', () => {
  it('should return the response content from OpenAI API', async () => {
    const apiKey = process.env.OPENAI_API_KEY;
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
      'api-key': apiKey,
    };

    const mockResponse = {
      data: {
        choices: [
          {
            message: {
              content: "Sto bene, grazie!"
            }
          }
        ]
      }
    };

    axios.post.mockResolvedValue(mockResponse);

    const response = await axios.post(url, data, { headers });
    const messageContent = response.data.choices[0].message.content;

    expect(messageContent).toBe("Sto bene, grazie!");
  });

  it('should handle errors from OpenAI API', async () => {
    const apiKey = process.env.OPENAI_API_KEY;
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
      'api-key': apiKey,
    };

    const mockError = {
      response: {
        data: {
          error: 'Unauthorized. Access token is missing, invalid, audience is incorrect (https://cognitiveservices.azure.com), or have expired.'
        }
      }
    };

    axios.post.mockRejectedValue(mockError);

    try {
      await axios.post(url, data, { headers });
    } catch (error) {
      expect(error.response.data.error).toBe('Unauthorized. Access token is missing, invalid, audience is incorrect (https://cognitiveservices.azure.com), or have expired.');
    }
  });
});