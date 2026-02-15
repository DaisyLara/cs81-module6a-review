
//Playlist constructor
function Playlist(name) {
  this.name = name;
  this.songs = [];
  this.currentSong = null;
}

//Adding a song to the Playlist using the push method
Playlist.prototype.addSong = function(songTitle) {
  this.songs.push(songTitle); //this.songs is referring to the Playlist constructor
};

//Assigns the first song in the playlist (contained in this.songs) to currentSong
Playlist.prototype.playFirst = function() {
  if (this.songs.length > 0) { //If there is at least 1 song on the playlist
    this.currentSong = this.songs[0]; //sets the first song as the currentSong
    console.log("Now playing:", this.currentSong);
  }
};
//Removes the song to be skipped from the playlist, and assigns a different song as the first song
Playlist.prototype.skipSong = function() {
  if (this.songs.length > 1) { //Playlist must contain more than one song
    this.songs.shift(); //removes the first song on the list
    this.currentSong = this.songs[0]; //the next song becomes the first song and is assigned to currentSong
    console.log("Skipped! Now playing:", this.currentSong);
  } else { 
    console.log("No more songs to skip.");
  }
};
//Displays Playlist name and songs in the playlist.
Playlist.prototype.listSongs = function() {
  console.log("Playlist:", this.name); //References user input for the Playlist name and displays it
  console.log("Songs:", this.songs.join(", ")); // Concatenates and lists songs in array
};

// using map method
Playlist.prototype.showArray = function() {
    const playlistSongs = this.songs.map(entry => entry.name)
    return playlistSongs
}

//another constructor 
let myMix = new Playlist("My Chill Mix");
myMix.addSong("Lofi Study");
myMix.addSong("Chillhop Beats");
myMix.addSong("Evening Jazz");
myMix.playFirst();
myMix.skipSong();
myMix.listSongs();
  