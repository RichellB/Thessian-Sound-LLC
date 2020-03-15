class Artist{
    static all = []

  constructor({id, name} ){
    this.name = name
    this.id = id

    this.element = document.createElement('div')
    this.element.className = "artist"
    this.element.id = `artist-${this.id}`

    Artist.all.push(this)
  }

  songs(){
    return Song.all.filter(function(song){
      return song.artistId === this.id
    }, this)
  }

  fullRender(){
    this.element.innerHTML = `
      <h1>${this.name}</h1>
      <h3>This Artist's Songs:</h3>
      ${this.songs().map(song => song.title).join(", ")}
    `
    return this.element
  }

}