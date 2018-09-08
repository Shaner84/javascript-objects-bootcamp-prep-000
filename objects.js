var playlist = { artistName: 'songTitle' }

function updatePlaylist(playlist, artistName, songTitle){
  Object.assign({}, playlist, { "Phil Ochs": songTitle })
    return playlist
}
