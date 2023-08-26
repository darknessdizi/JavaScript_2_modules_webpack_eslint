import Character from './domain';

export default class Game {
  start() {
    console.log('game started');

    this.box = document.querySelector('body');
    this.box.innerHTML = '<div class="box"></div>';
    const block = this.box.querySelector('.box');
    block.textContent = 'Game started';
  }
}

export class GameSavingData {
}

export function readGameSaving() {
}

export function writeGameSaving() {
}

console.log('import Character= ', Character);
