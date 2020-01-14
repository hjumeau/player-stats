const axios = require('axios');
const playersService = require('./players');
const sortedPlayers = require('../../fixtures/sorted-players');
const data = require('../../fixtures/players');

jest.mock('axios');

describe('players service', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({ data });
  });

  describe('getAll', () => {
    it('should return a list of players sorted by id', async () => {
      // WHEN
      const result = await playersService.getAll();

      // THEN
      expect(result).toEqual(sortedPlayers);
    });
  });

  describe('getById', () => {
    describe('with an existing id as parameter', () => {
      const id = 17;

      it('should return the expected player', async () => {
        // GIVEN
        const playerId = id;

        // WHEN
        const result = await playersService.getById(playerId);

        // THEN
        expect(result.id).toEqual(playerId);
      });
    });

    describe('with a nonexistent id as parameter', () => {
      const id = 222;

      it('should return undefined', async () => {
        // GIVEN
        const playerId = id;

        // WHEN
        const result = await playersService.getById(playerId);

        // THEN
        expect(result).toBeUndefined();
      });
    });

    describe('with no id as parameter', () => {
      const id = undefined;

      it('should return undefined', async () => {
        // GIVEN
        const playerId = id;

        // WHEN
        const result = await playersService.getById(playerId);

        // THEN
        expect(result).toBeUndefined();
      });
    });
  });
});
