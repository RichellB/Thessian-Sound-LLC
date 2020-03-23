class Song {
    static all = []

    constructor({id, title, album, artistId}){
        this.id = id
        this.title = title
        this.album = album 
        this.artistId = artistId 

        this.element = document.createElement('div')
        this.element.className = "song"
        this.element.id = `song-${this.id}`

        Song.all.push(this)
    }

    artist(){
        return Artist.all.find(artist => artist.id === this.artistId)
      }
    
      partialRender(){
        this.element.innerHTML = `
          <h3>${this.title}</h3>
          <p>Album: ${this.album}</p>
          <p>Release Year: ${this.release_year}</p>
        `
        return this.element
      }
    
    
      fullRender(){
        this.element.innerHTML = `
        <h1>${this.title}</h1>
        <p>Album: ${this.album}</p>
        <p>Release Year: ${this.release_year}</p>
        
        `
        return this.element
      }
    
}