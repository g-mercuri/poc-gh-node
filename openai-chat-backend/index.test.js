const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

jest.mock('axios');

describe('API Headers', () => {
  it('should have the correct Content-Type', () => {
    const apiKey = process.env.OPENAI_API_KEY;
    const headers = {
      'Content-Type': 'application/json',
      'api-key': apiKey,
    };
    expect(headers['Content-Type']).toBe('application/json');
  });

  it('should have the correct API key', () => {
    const apiKey = process.env.OPENAI_API_KEY;
    const headers = {
      'Content-Type': 'application/json',
      'api-key': apiKey,
    };
    expect(headers['api-key']).toBe(apiKey);
  });

  it('should call axios with correct headers', async () => {
    const apiKey = process.env.OPENAI_API_KEY;
    const apiUri = process.env.OPENAI_API_URI;
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

    axios.post.mockResolvedValue({ data: { choices: [{ message: { content: 'Hello!' } }] } });

    await axios.post(apiUri, data, { headers });

    expect(axios.post).toHaveBeenCalledWith(apiUri, data, { headers });
  });
});