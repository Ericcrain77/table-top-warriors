const {DataTypes} = require("sequelize");
const Card = require("./Card");
const sequelize = require("../config/connection");

class Poke extends Card{}

Poke.init(
    {
        supertypePoke: {
            type: DataTypes.STRING,
            allowNull: true
        },
        subtypesPoke: {
            type: DataTypes.STRING,
            allowNull: true,
            get(){
                return this.getDataValue("subtypesPoke").split(";");
            },
            set(val){
                this.setDataValue("subtypesPoke", val.join(";"));
            }
        },
        hpPoke: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        typesPoke: {
            type: DataTypes.STRING,
            allowNull: true,
            get(){
                return this.getDataValue("typesPoke").split(";");
            },
            set(val){
                this.setDataValue("typesPoke", val.join(";"));
            }
        },
        evolvesToPoke: {
            type: DataTypes.STRING,
            allowNull: true,
            get(){
                return this.getDataValue("evolvesToPoke").split(";");
            },
            set(val){
                this.setDataValue("evolvesToPoke", val.join(";"));
            }
        },
        abilitiesPoke: {
            type: DataTypes.STRING(1000),
            allowNull: true,
            get: function(){
                return JSON.parse(this.getDataValue('abilitiesPoke'));
            },
            set: function(val){
                return this.setDataValue('abilitiesPoke', JSON.stringify(val));
            }
        },
        attacksPoke: {
            type: DataTypes.STRING(1000),
            allowNull: true,
            get: function(){
                return JSON.parse(this.getDataValue('attacksPoke'));
            },
            set: function(val){
                return this.setDataValue('attacksPoke', JSON.stringify(val));
            }
        },
        weaknessesPoke: {
            type: DataTypes.STRING(1000),
            allowNull: true,
            get: function(){
                return JSON.parse(this.getDataValue('weaknessesPoke'));
            },
            set: function(val){
                return this.setDataValue('weaknessesPoke', JSON.stringify(val));
            }
        },
        retreatCostPoke: {
            type: DataTypes.STRING,
            allowNull: true,
            get(){
                return this.getDataValue("retreatCostPoke").split(";");
            },
            set(val){
                this.setDataValue("retreatCostPoke", val.join(";"));
            }
        },
        card_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "card",
                key: "id"
            }
        },
        deck_id: {
            type: DataTypes.INTEGER,
            allowNUll: false,
            references: {
                model: 'deck',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'poke'
    }
);

module.exports = Poke;