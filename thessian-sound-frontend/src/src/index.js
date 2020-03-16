const songsAdapter = new SongsAdapter("http://localhost:3000/songs")
const artistsAdapter = new ArtistsAdapter("http://localhost:3000/artists")

songsAdapter.fetchSongs()
artistsAdapter.fetchArtists()

//Add event listener on menu buttons
//Select our main div

const main = document.getElementById('main')
const menu = document.getElementById('menu')

const formDiv = document.createElement('div')

menu.addEventListener('click', handleMenuClick)
formDiv.addEventListener('click', handleFormSubmit)

function handleMenuClick (event){
  if (event.target.id !== menu){
    main.innerHTML = ``
    callbacks[`${event.target.id}`]()
  }
}

function handleFormSubmit(event){


  if(event.target.tagName == "BUTTON"){
    let inputs = formDiv.querySelectorAll('input')
    let select = formDiv.querySelector('select')
    let newSongObj = {
      title: inputs[0].value,
      album: inputs[1].value,
      release_year: inputs[2].value,
      artistId: select.value
    }
    songsAdapter.newSong(newSongObj)
  }
}

const callbacks = {
  allSongs: renderAllSongs,
  songsArtists: renderAllSongsArtists,
 // newSong: renderNewSongForm,
  //newArtist: renderNewArtistForm
}

function renderAllSongs(){
    Song.all.forEach(song => {
    main.appendChild(song.fullRender())
  })
  //render all songs with respective title, album, release_year and artist
}

function renderAllSongsArtists(){
  Artist.all.forEach(artist => {
    main.appendChild(artist.fullRender())
  })
}

