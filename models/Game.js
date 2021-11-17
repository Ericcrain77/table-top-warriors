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
        host_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        lobby_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        lobby_url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUrl: true
            }
        }
    }
)