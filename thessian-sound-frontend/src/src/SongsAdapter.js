class SongsAdapter{
    constructor(baseURL){
        this.baseURL = baseURL
    }

    fetchSongs(){
        fetch(this.baseURL)
          .then(res => res.json())
          .then(respObj => {
            respObj.data.forEach(this.sanitizedSong)
          })
          .then(() => console.log(Song.all))
      }
    
      newSong(songObj){
        let configObj = {
          method: "POST",
          headers: {"Content-Type": "application/json", "Accepts": "application/json"},
          body: JSON.stringify(songObj)
        }
        fetch(this.baseURL, configObj)
          .then(res => res.json())
          .then((respObj) => this.sanitizedSong(respObj.data))
      }
    
      sanitizedSong(songObj){
        console.log(songObj);
        let sanitized = {...songObj.attributes, id: songObj.id, artistId: songObj.relationships.artist.data.id}
        new Song(sanitized)
      } 

}
