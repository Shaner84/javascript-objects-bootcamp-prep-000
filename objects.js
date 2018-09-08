var playlist = { artistName: 'songTitle' }

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({playlist}, playlist, { artistName: songTitle })
}