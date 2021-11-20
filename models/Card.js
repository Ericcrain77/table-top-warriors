//require sequelize model and datatypes for creating model
const {Model, DataTypes} = require('sequelize');
//connect to database
const sequelize = require('../config/connection');

//create Card model
class Card extends Model{}

//initialize the Card model and define the characteristics it should contain
Card.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        card_name: {
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
        },
        deck_id: {
            type: DataTypes.INTEGER,
            allowNUll: false,
            references: {
                model: 'deck',
                key: 'id'
            }
        },
        game_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'game',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'card'
    }
);

module.exports = Card;