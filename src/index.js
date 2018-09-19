import 'phaser';
import pkg from 'phaser/package.json';
import introImage from 'img/study.png';
import MainMenu from 'scene/MainMenu';
import EndlessMode from 'scene/EndlessMode';
import SkillTree from 'scene/SkillTree';
// This is the entry point of your game.

const config = {
  width: 768,
  height: 512,
  type: Phaser.AUTO,
  physics: {
      default: 'arcade'
  },
  scene: [ MainMenu, EndlessMode, SkillTree ]
};

const game = new Phaser.Game(config);
