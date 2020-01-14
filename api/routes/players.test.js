const request = require('supertest');
const app = require('../server')(require('../routes/players'));
const playersService = require('../services/players');

jest.mock('../services/players');

describe('API players', () => {
  describe('GET players', () => {
    it('should return all the players', async () => {
      const res = await request(app)
      .get('/players');

      expect(res.statusCode).toEqual(200);
      expect(playersService.getAll).toHaveBeenCalled();
    });
  });

  describe('GET players/:id', () => {
    describe('with an existing id as parameter', () => {
      const id = 17;

      it('should return the expected player', async () => {
        // GIVEN
        playersService.getById.mockReturnValue({});
        const playerId = id;

        // WHEN
        const res = await request(app)
          .get(`/players/${playerId}`);

        // THEN
        expect(res.statusCode).toEqual(200);
        expect(playersService.getById).toHaveBeenCalledWith(id);
      });
    });

    describe('with a nonexistent id as parameter', () => {
      const id = 222;

      it('should return undefined', async () => {
        // GIVEN
        playersService.getById.mockReturnValue(undefined);
        const playerId = id;

        // WHEN
        const res = await request(app)
          .get(`/players/${playerId}`);

        // THEN
        expect(res.statusCode).toEqual(404);
        expect(playersService.getById).toHaveBeenCalledWith(id);
      });
    });

    describe('with no id as parameter', () => {
      const id = undefined;

      it('should return undefined', async () => {
          // GIVEN
        const playerId = id;
        playersService.getById.mockReturnValue(undefined);

          // WHEN
        const res = await request(app)
            .get(`/players/${playerId}`);

          // THEN
        expect(res.statusCode).toEqual(400);
        expect(playersService.getById).not.toHaveBeenCalled();
      });
    });
  });
});

