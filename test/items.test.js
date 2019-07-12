const request = require('supertest')
const app = require('../lib.app');


describe('express routes', () => {
  it('POSTS an object', () => {
    return request(app)
    .post('/api/v1/items');
    .send({ glitter: 'biodegradable', adhesive: 'superglue', deployment: 'cannon-pressureized' })
    .then(res => {
      expect(res.body).toEqual({
        glitter: 'biodegradable',
        adhesive: 'superglue',
        deployment: 'cannon-pressureized'
      });
    });
  });
});