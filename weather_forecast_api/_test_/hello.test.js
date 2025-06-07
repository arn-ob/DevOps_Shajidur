// tests/helloVersion.test.js
const request = require('supertest');
const app = require('../server'); // Adjust path to your Express app
const { version } = require('../package.json');

describe('/api/hello endpoint test also version test', () => {
  it('should return correct version from package.json', async () => {
    const res = await request(app).get('/api/hello');
    expect(res.status).toBe(200);
    expect(res.body.version).toBe(version);
  });
});
