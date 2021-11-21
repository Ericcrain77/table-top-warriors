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
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // //magic specific stats, allowed to be null in case the card is not a magic card
        // manaCostMagic: {
        //     type: DataTypes.STRING,
        //     allowNull: true
        // },
        // cmcMagic: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true
        // },
        // colorsMagic: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        //     get(){
        //         return this.getDataValue("colorsMagic").split(";");
        //     },
        //     set(val){
        //         this.setDataValue("colorsMagic", val.join(";"));
        //     }
        // },
        // colorIdentityMagic: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        //     get(){
        //         return this.getDataValue("colorIdentityMagic").split(";");
        //     },
        //     set(val){
        //         this.setDataValue("colorIdentityMagic", val.join(";"));
        //     }
        // },
        // typeMagic: {
        //     type: DataTypes.STRING,
        //     allowNull: true
        // },
        // textMagic: {
        //     type: DataTypes.STRING(1000),
        //     allowNull: true
        // },
        // //YuGiOh! specific stats, allowed to be null in case card isn't a YuGiOh card
        // levelYugi: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true
        // },
        // attributeYugi: {
        //     type: DataTypes.STRING,
        //     allowNull: true
        // },
        // raceYugi: {
        //     type: DataTypes.STRING,
        //     allowNull: true
        // },
        // typeYugi: {
        //     type: DataTypes.STRING,
        //     allowNull: true
        // },
        // descYugi: {
        //     type: DataTypes.STRING(1000),
        //     allowNull: true
        // },
        // atkYugi: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true
        // },
        // defYugi: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true
        // },
        // //Pokemon specific stats, allowed to be null in case card isnt pokemon
        // //STUCK HERE, CAN'T FIGURE OUT HOW TO HAVE AN ARRAY OF OBJECTS IN SEQUELIZE
        // supertypePoke: {
        //     type: DataTypes.STRING,
        //     allowNull: true
        // },
        // subtypesPoke: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        //     get(){
        //         return this.getDataValue("subtypesPoke").split(";");
        //     },
        //     set(val){
        //         this.setDataValue("subtypesPoke", val.join(";"));
        //     }
        // },
        // hpPoke: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true
        // },
        // typesPoke: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        //     get(){
        //         return this.getDataValue("typesPoke").split(";");
        //     },
        //     set(val){
        //         this.setDataValue("typesPoke", val.join(";"));
        //     }
        // },
        // evolvesToPoke: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        //     get(){
        //         return this.getDataValue("evolvesToPoke").split(";");
        //     },
        //     set(val){
        //         this.setDataValue("evolvesToPoke", val.join(";"));
        //     }
        // },
        // abilitiesPoke: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        //     get: function(){
        //         return JSON.parse(this.getDataValue('abilitiesPoke'));
        //     },
        //     set: function(val){
        //         return this.setDataValue('abilitiesPoke', JSON.stringify(val));
        //     }
        // },
        // attacksPoke: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        //     get: function(){
        //         return JSON.parse(this.getDataValue('attacksPoke'));
        //     },
        //     set: function(val){
        //         return this.setDataValue('attacksPoke', JSON.stringify(val));
        //     }
        // },
        // weaknessesPoke: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        //     get: function(){
        //         return JSON.parse(this.getDataValue('weaknessesPoke'));
        //     },
        //     set: function(val){
        //         return this.setDataValue('weaknessesPoke', JSON.stringify(val));
        //     }
        // },
        // retreatCostPoke: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        //     get(){
        //         return this.getDataValue("retreatCostPoke").split(";");
        //     },
        //     set(val){
        //         this.setDataValue("retreatCostPoke", val.join(";"));
        //     }
        // },
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
        modelName: 'card'
    }
);

module.exports = Card;