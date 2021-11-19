//require sequelize model and datatypes for creating model
const {Model, DataTypes} = require('sequelize');
//connect to database
const sequelize = require('../config/connection');

//create Game model
class Game extends Model{}

//initialize the Game model and define the characteristics it should contain
Game.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        // Pokemon, YuGiOh!, or Magic: The Gathering
        game_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'game'
    }
);

module.exports = Game;