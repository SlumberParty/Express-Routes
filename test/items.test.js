const request = require('supertest')
const app = require('../lib/app');

describe('express routes', () => {
  it('POSTS an object', () => {
    return request(app)
    .post(`/api/v1/items`)
    .send({ glitter: 'biodegradable', adhesive: 'superglue', deployment: 'cannon-pressureized' })
    .then(res => {
      console.log('claires stuff wooo', res.body)
      expect(res.body).toEqual({
        glitter: 'biodegradable',
        adhesive: 'superglue',
        deployment: 'cannon-pressureized'
      });
    });
  });
  
  it('can get an array of items with GET', () => {
    return request(app)
      .get('/api/v1/items')
      .then(res => {
        expect(res.body).toEqual([{
        glitter: 'biodegradable',
        adhesive: 'superglue',
        deployment: 'cannon-pressureized'
        }]);
      });
  });

  it('can get an item by index', () => {
    return request(app)
      .get('/api/v1/items/0')
      .then(res => {
        expect(res.body).toEqual({
        glitter: 'biodegradable',
        adhesive: 'superglue',
        deployment: 'cannon-pressureized'
        });
      });
  });

  it('can update an item with PUT', () => {
    const newItem = {
      glitter: 'cosmetic',
        adhesive: 'superglue',
        deployment: 'cannon-pressureized'
    };

    return request(app)
      .put('/api/v1/items/0')
      .send(newItem)
      .then(res => {
        expect(res.body).toEqual({
          glitter: 'cosmetic',
          adhesive: 'superglue',
          deployment: 'cannon-pressureized'
        });
      });
  });

  it('can delete an item by index', () => {
    return request(app)
      .delete('/api/v1/items/0')
      .then(res => {
        expect(res.body).toEqual({
          glitter: 'cosmetic',
          adhesive: 'superglue',
          deployment: 'cannon-pressureized'
        });
      });
  });
});