//Josh Trueman 991257988
import { Component, OnInit } from '@angular/core';
import {Die} from '../die';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  private static rolls: number[] = [1, 2, 3, 4, 5, 6];
  
  public title = 'Josh Trueman';

  public dice : Die[];
  public die : Die;

  private images : HTMLImageElement[];

  constructor() {
    this.dice = [];
    this.images = [];
    this.makeDice();
    this.preloadImages();
    this.selectDie(0);
  }

  private makeDice() {
    ContentComponent.rolls.forEach(roll => {
      this.dice.push(new Die(roll));
    });
  }
  private preloadImages() {
    this.dice.forEach(die => {
      const image: HTMLImageElement = new Image();
      image.src = die.imgSrc;
      this.images.push(image);
    });
  }
  public selectDie(index) {
    this.die = this.dice[index];
  }

  public rollDice(){
    console.log("rollDice() is called");
    this.dice.forEach(die => die.rollDie());
    
  }
}
