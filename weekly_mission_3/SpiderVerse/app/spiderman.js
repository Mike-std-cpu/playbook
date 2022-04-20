class Spiderman {
    constructor (name,movies, studio) {
      this._name = name;
      this._movies= movies;
      this._studio = studio;
    }

    getInfo(){
        return "Hey! I'm " + this._name + " from " + this._studio;
    }
  }
  
  // Esta línea nos permite exportar nuestra clase
  module.exports = Spiderman