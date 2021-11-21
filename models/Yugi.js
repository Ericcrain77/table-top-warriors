const {DataTypes} = require("sequelize");
const Card = require("./Card");
const sequelize = require("../config/connection");

class Yugi extends Card{}

Yugi.init(
    {
        levelYugi: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        attributeYugi: {
            type: DataTypes.STRING,
            allowNull: true
        },
        raceYugi: {
            type: DataTypes.STRING,
            allowNull: true
        },
        typeYugi: {
            type: DataTypes.STRING,
            allowNull: true
        },
        descYugi: {
            type: DataTypes.STRING(1000),
            allowNull: true
        },
        atkYugi: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        defYugi: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        card_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "card",
                key: "id"
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'yugi'
    }
);

module.exports = Yugi;