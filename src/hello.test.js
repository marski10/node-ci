const request = require('supertest');
const server = require('./helloworld'); // Importe a função server do seu script

describe('Hello World Server', () => {
  let testServer;

  beforeEach(() => {
    testServer = server(); // Inicialize o servidor antes de cada teste
  });

  afterEach(() => {
    testServer.close(); // Feche o servidor após cada teste
  });

  it('should return status code 200', async () => {
    const response = await request(testServer)
      .get('/');

    expect(response.statusCode).toBe(200);
  });
});