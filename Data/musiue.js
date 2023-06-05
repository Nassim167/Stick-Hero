var audio = document.getElementById("background-music");

    function playMusic() {
      audio.play();
    }

    function pauseMusic() {
      audio.pause();
    }

    function increaseVolume() {
      audio.volume += 0.1;
    }

    function decreaseVolume() {
      audio.volume -= 0.1;
    }

    var musicIndex = 0; // Indice de la musique actuelle
    var musicSources = [
      './audio/2.mp3',
      './audio/ala.mp3',
      './audio/Backgroundd.mp3'
    ];
  
    var audioElement = document.getElementById('background-music');
    audioElement.src = musicSources[musicIndex];
    audioElement.load();
  
    function changeMusic() {
      musicIndex = (musicIndex + 1) % musicSources.length; // Passage à la musique suivante
      audioElement.src = musicSources[musicIndex];
      audioElement.load();
      audioElement.play(); // Lecture automatique de la nouvelle musique
    }