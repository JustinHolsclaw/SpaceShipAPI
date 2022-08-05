module.exports = (app) => {
    const spaceShips = require('../controllers/SpaceShipController');

    app.route('/spaceships')
        .get(spaceShips.list_all_ships)

    app.route('/spaceships/:shipId')
        .get(spaceShips.get_a_ship)
        .put(spaceShips.create_a_ship)
};