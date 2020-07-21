//Josh Trueman 991257988
import { Component, OnInit } from '@angular/core';
import {Game} from './game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  
  constructor() {}

  ngOnInit(): void {
  
    //Sets the number of die, initializes the game and rolls the dice
    const maxNumberOfDice = 1; 
    let game = new Game(); 
    game.rollDice();
    //Set the number of dice
    let numberOfDice = 1; 
    console.log(game);
    //Declare the variables
    let select; 
    let dice; 
    let total; 

    //Load the images
    let images = [];
    for (let i = 1; i <= 1; i++) {
        let image = new Image();
        image.src = dieImageSrc(0);
        images.push(image);
    }

    //Get the elements for the game
    select = document.getElementById("select");
    dice = document.getElementById("dice");
    total = document.getElementById("total");
    insertSelectOptions();
    insertImages();
    updateTotal();
    handleSelectionChanges();
    handleRollButtonClicks();


function dieImageSrc(side) {
    return `images/dice/side_${side}.png`;
}

function insertImages() {
    for (let die of game.dice) {
        let side = die.side;
        let src = dieImageSrc(side);
        dice.append(`<img src="${src}" alt="side ${side}">`);
    }
}

function insertSelectOptions() {
    for (let i = 1; i <= maxNumberOfDice; i++) {
        document.getElementById("select").append(`<option value="${i}" ${(i === numberOfDice)?'selected':''}>${i}</option>`);
    }
}

function handleSelectionChanges() {
    select.change(function () {
        console.log("the change event handler is called");
        let count = parseInt(select.val());
        if (count !== numberOfDice) {
            numberOfDice = count;
            game = new Game(count);
            game.rollDice();
            dice.html("");
            insertImages();
            updateTotal();
            
        }
    });
}

function updateTotal() {
    total.text(game.total);
}

function handleRollButtonClicks() {
    
  document.getElementById("roll_button").addEventListener('click',  (function () {
      
    console.log("the click event handler is called");
      game.rollDice();
      
      dice.find("img").each(function(index){
          let side = game.dice[index].side;
          let src = dieImageSrc(side);
          (this).attr("src", src).attr("alt", `side ${side}`);
      });
      insertImages();
      updateTotal();
      
      
  })
  
  )
    
}
  
  

}



}
