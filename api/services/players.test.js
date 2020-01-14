const playersService = require('./players');
const sortedPlayers = require('../../fixtures/sorted-players');

describe('players service', () => {
  describe('getAll', () => {
    it('should return a list of players sorted by id', () => {
      // WHEN
      const result = playersService.getAll();

      // THEN
      expect(result).toEqual(sortedPlayers);
    });
  });

  describe('getById', () => {

    describe('with an existing id as parameter', () => {
      const id = 17;

      it('should return the expected player', () => {
        // GIVEN
        const playerId = id;

        // WHEN
        const result = playersService.getById(playerId);

        // THEN
        expect(result.id).toEqual(playerId);
      });
    });

    describe('with a nonexistent id as parameter', () => {
      const id = 222;

      it('should return undefined', () => {
        // GIVEN
        const playerId = id;

        // WHEN
        const result = playersService.getById(playerId);

        // THEN
        expect(result).toBeUndefined();
      });
    });

    describe('with no id as parameter', () => {
      const id = undefined;

      it('should return undefined', () => {
        // GIVEN
        const playerId = id;

        // WHEN
        const result = playersService.getById(playerId);

        // THEN
        expect(result).toBeUndefined();
      });
    });
  });
});
