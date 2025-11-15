// Idea
interface MediaPlayer {
  play(): void;
  pause(): void;
  next(): void;
  previous(): void;
}

// Implementation
class MusicPlayer implements MediaPlayer {
  play(): void {
    console.log("Music Play......");
  }
  pause(): void {
    console.log("Music Paused......");
  }
  previous(): void {
    console.log("Previous Music......");
  }
  next(): void {
    console.log("Next Music......");
  }
}

const musicPlayer = new MusicPlayer();
musicPlayer.play();
musicPlayer.pause();
musicPlayer.next();
musicPlayer.previous();

// Idea
abstract class MediaPlayer2 {
  abstract play(): void;
  abstract pause(): void;
  abstract next(): void;
  abstract previous(): void;
}

// Implementation
class MusicPlayer2 extends MediaPlayer2 {
  play(): void {
    console.log("Music Played 2.");
  }
  pause(): void {
    console.log("Music Paused 2.");
  }
  previous(): void {
    console.log("Music Previous 2.");
  }
  next(): void {
    console.log("Music Next 2.");
  }
}
const musciPlayer2 = new MusicPlayer2();
musciPlayer2.play();
musciPlayer2.pause();
musciPlayer2.previous();
musciPlayer2.next();
