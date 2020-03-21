const songsAdapter = new SongsAdapter("http://localhost:3000/songs")
const artistsAdapter = new ArtistsAdapter("http://localhost:3000/artists")

songsAdapter.fetchSongs()
artistsAdapter.fetchArtists()

function addingEventListener() {
    const input = document.getElementById('menu');
    input.addEventListener('click', function(event) {
    //alert('I was clicked!');
    if (event.target.id == "allSongs"){
        renderAllSongs();
    }
  });
  }
  addingEventListener();

  function renderAllSongs(){
    Song.all.forEach(song => {
    main.appendChild(song.fullRender())
  })
  //render all songs with respective title, album, release_year and artist
}
  
  