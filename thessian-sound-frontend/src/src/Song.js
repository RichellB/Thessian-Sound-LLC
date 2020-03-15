class Song {
    static all = []

    constructor({id, title, album, artistId}){
        this.id = id
        this.title = title
        this.album = album 
        this.artistId = artistId 

        Song.all.push(this)
    }
}