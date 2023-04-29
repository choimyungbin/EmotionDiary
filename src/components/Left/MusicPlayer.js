import React from 'react';
import YTPlayer from 'yt-player';
const MusicPlayer = () => {
  const playList = [
    { songId: 'MVjQIQGqNFM', title: 'EUNOIA' },
    { songId: 'TXQ-N2IuK_Y', title: 'About love' },
    { songId: 'KTaa3Pbv9c0', title: 'Day 1' },
    { songId: 'jwBfyuNGOj4', title: '공중곡예사' },
    { songId: 'aDBNmRTXTy8', title: 'Summer End' },
    { songId: 'LfZhpNlhxeE', title: 'Love song' },
    { songId: 'M9QHlsOHsMA', title: 'A writer in a love story' },
    { songId: 'F3lki7udJU0', title: 'When you love someone' },
    { songId: 'KuRoG6s2kO4', title: 'Try Again' },
    { songId: 'SZCiMLlszcM', title: 'Summer Shape' },
    { songId: 'brRiaQ7HdWA', title: 'snowy night' },
    { songId: 'hXl2vIzlG0U', title: 'The Dreamer' },
    { songId: 'Km71Rr9K-Bw', title: 'Ditto' },
    { songId: 'Ccz123Jlflc', title: 'Impurities' },
  ];
  const player = new YTPlayer('#player');
  const shuffle = document.querySelector('#shuffle-player');

  const shuffleHandler = (e) => {
    e.preventDefault();
    const newId = playList[Math.floor(Math.random() * playList.length)].songId;
    player.load(newId);
    player.autoplay = true;
  };
  player.load('MVjQIQGqNFM');
  player.setVolume(70);

  shuffle.addEventListener('click', shuffleHandler);
  return <div></div>;
};

export default MusicPlayer;
