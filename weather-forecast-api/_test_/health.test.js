const request = require('supertest');
const app = require('../server');

describe('/api/health server health testing', () => {
  it('should return current app status', async () => {
    const res = await request(app).get('/api/health');
    expect(res.status).toBe(200);
  });
});
