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
  if (event.id !== menu){
    main.innerHTML = ``
    callbacks[`${event.id}`]()
  }
}


const callbacks = {
  allSongs: renderAllSongs,
  songsArtists: renderAllSongsArtists,
  newSong: renderNewSongForm,
  newArtist: renderNewArtistForm
}

function renderAllSongs(){
    Song.all.forEach(song => {
    main.appendChild(song.fullRender())
  })
  //render all songs with respective title, album, release_year and artist
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

function renderAllSongsArtists(){
  Artist.all.forEach(artist => {
    main.appendChild(artist.fullRender())
  })
}

function renderNewSongForm(){
    formDiv.innerHTML = `
      Song Title:
      <input type="text" />
      <br>
      Album:
      <input type="text" />
      <br>
      Release Year:
      <input type="text" />
      <br>
      <select>
         <option value="default" selected="selected">Select one option </option>
       ${Artist.all.map(artist => {
         return `<option value=${artist.id}>${artist.name}</option>`
       }).join("")}
      </select>
      <button>Add a Song!</button>
    `
    main.appendChild(formDiv)
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