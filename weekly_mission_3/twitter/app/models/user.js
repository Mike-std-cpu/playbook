class User {
    constructor(id,userName, name, bio, dataCreated, lastUpdate){
        this._id = id;
        this._userName = userName;
        this._name = name;
        this._bio = bio;
        this._dataCreated = dataCreated;
        this._lastUpdate = lastUpdate;
    }
}
module.exports = User