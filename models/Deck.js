//require sequelize model and datatypes for creating model
const {Model, DataTypes} = require('sequelize');
//connect to the database
const sequelize = require('../config/connection');

//create Deck model
class Deck extends Model{}

//initialize the Deck model and define the characteristics it should contain
Deck.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        deck_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        game: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'deck'
    }
);

module.exports = Deck;