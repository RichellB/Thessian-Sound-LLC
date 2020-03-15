class ArtistsAdapter{
    constructor(baseURL){
        this.baseURL = baseURL
      }
    
      fetchArtists(){
        fetch(this.baseURL)
          .then(res => res.json())
          .then(respObj => {
            respObj.data.forEach(obj => {
              let sanitized = {id: obj.id, ...obj.attributes}
              new Artist(sanitized)
            })
          })
          .then(() => console.log(Artist.all))
      }
}