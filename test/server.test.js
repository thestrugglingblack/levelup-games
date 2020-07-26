import server from '../src/index';

jest.setTimeout(10000);

// Start application before running the test case
beforeAll((done) => {
  return server.events.on('start', () => {
    done();
  });
});

// Stop application after running the test case
afterAll((done) => {
  server.events.on('stop', () => {
    done();
  });
  return server.stop();
});

describe('[ SERVER ]', () => {
  describe('/status', () => {
    test('returns 200 OK', async () => {
      const options = {
        method: 'GET',
        url: '/status'
      };
      const data = await server.inject(options);
      expect(data.statusCode).toBe(200);
    })
  })

  describe('/generate', () => {
    test('returns 200 OK', async () => {
      const options = {
        method: 'GET',
        url: '/generate'
      };
      const data = await server.inject(options);
      expect(data.statusCode).toBe(200);
    })
  })

});
