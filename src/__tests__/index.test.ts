import supertest from 'supertest'
import { app } from '../index'

describe('app', () => {
  describe('GET /', () => {
    it('should return 200', async () => {
      const response = await supertest(app).get('/')
      expect(response.status).toEqual(200)
      expect(response.body).toEqual('Welcome to Trails!')
    })
  })
})