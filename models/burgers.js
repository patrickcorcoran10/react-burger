module.exports = function(sequelize, DataTypes) {
    const Burger = sequelize.define('Burgers', {
        name: DataTypes.STRING,
        eaten: DataTypes.BOOLEAN
    })
    return Burger;
};