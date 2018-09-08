var playlist = { artistName: "songTitle" }

function updatePlaylist(object, key, value){
  return object.assign({}, object, { key: value})
}