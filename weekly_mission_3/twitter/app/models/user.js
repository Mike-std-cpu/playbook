class User {
    constructor(id,userName, name, bio){
        this._id = id;
        this._userName = userName;
        this._name = name;
        this._bio = bio;
        this._dataCreated = new Date(); // new Date te da la hora del SO, es decir la hora actual
        this._lastUpdate = new Date();
    }

    get getUsername(){
        return  this._userName;
    }
    set setUsername(yourUserName){
        this._userName = yourUserName;
    }
    get getId(){
        return this._id;
    }
    set setId(yourId){
        this._id = yourId;
    }
    get getName(){
        return this._name;
    }
    set setName(yourName){
        this._name = yourName;
    }
    get getBio(){
        return this._bio;
    }
    set setBio(yourBio){
        this._bio = yourBio;
    }
    get getDateCreated(){
        return this._dataCreated;
    }
    get getLastUpdate(){
        return this._lastUpdate;
    }

}
module.exports = User;