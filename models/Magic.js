const {DataTypes} = require("sequelize");
const Card = require("./Card");
const sequelize = require("../config/connection");

class Magic extends Card{}

Magic.init(
    {
        manaCostMagic: {
            type: DataTypes.STRING,
            allowNull: true
        },
        cmcMagic: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        colorsMagic: {
            type: DataTypes.STRING,
            allowNull: true,
            get(){
                return this.getDataValue("colorsMagic").split(";");
            },
            set(val){
                this.setDataValue("colorsMagic", val.join(";"));
            }
        },
        colorIdentityMagic: {
            type: DataTypes.STRING,
            allowNull: true,
            get(){
                return this.getDataValue("colorIdentityMagic").split(";");
            },
            set(val){
                this.setDataValue("colorIdentityMagic", val.join(";"));
            }
        },
        typeMagic: {
            type: DataTypes.STRING,
            allowNull: true
        },
        textMagic: {
            type: DataTypes.STRING(1000),
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
        modelName: 'magic'
    }
);

module.exports = Magic;