import 'phaser';
import pkg from 'phaser/package.json';
import introImage from 'img/study.png';

import MainMenu from 'scene/MainMenu';
import Endless from 'scene/Endless';
// This is the entry point of your game.

const config = {
  width: 800,
  height: 600,
  type: Phaser.AUTO,
  scene: [ MainMenu, Endless ]
};

const game = new Phaser.Game(config);
