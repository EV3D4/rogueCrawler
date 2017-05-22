import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const dark = {
  opacity:"0"
}
const light = {
   opacity:"1"
}

class Dungeon extends React.Component {

   constructor(props) {
     super(props);
     this.state = {
       repo: [],
       repoxp: [],
       repoVal: [],
       position: 0,
       stage: 1,
       stg_nxt: 0,
       health: 100,
       xp: 0,
       wpn: 50,
       pwr: 1,
       gm_over: 0,
       cssOpacity: true,
       torchCenter: [-1,1,-12,12,-11,11,-13,13],
       torchLeftEdge: [1,12,13,-12,-11],
       torhRightEdge: [-1,-12,12,-13,11],
       torchTop: [1,12,11,13,-1]
     };

     this.handleKeyDown = this.handleKeyDown.bind(this);
     this.initBoard = this.initBoard.bind(this);
     this.dungeonMode = this.dungeonMode.bind(this);
   }

   dungeonMode(){
     var repoTemp = this.state.repo.slice()
     var repoValTemp = this.state.repoVal.slice()
     var positionTemp= this.state.position
     var cssOpacityTemp= !this.state.cssOpacity
     console.log(this.state.cssOpacity)
     this.dungeonRender(repoTemp,repoValTemp,positionTemp,cssOpacityTemp)

     this.setState({
        cssOpacity: !this.state.cssOpacity,
        repo: repoTemp,
        repoVal: repoValTemp
     })
   }

   dungeonRender(repoTemp,repoValTemp,positionTemp,cssOpacityTemp){

     for (var i = 0; i < 204; i++) {
       if(repoValTemp[i]==9)
          repoTemp[i] = <div id={i}  className="divBoss" style={cssOpacityTemp ? dark:light}>9</div>
       else if (repoValTemp[i]==1)
         repoTemp[i] = <div id={i}  className="divVortex" style={cssOpacityTemp ? dark:light} >1</div>
       else if (repoValTemp[i]==0)
         repoTemp[i] = <div id={i} className="divPlayer">0</div>
       else if (repoValTemp[i]==2)
         repoTemp[i] = <div id={i}  className="divPotion" style={cssOpacityTemp ? dark:light}>2</div>
       else if (repoValTemp[i]==3)
         repoTemp[i] = <div id={i}  className="divWeapon" style={cssOpacityTemp  ? dark:light}>3</div>
       else if (repoValTemp[i]==4)
         repoTemp[i] = <div id={i}  className="divFire" style={cssOpacityTemp ? dark:light}>4</div>
       else if (repoValTemp[i]>25)
         repoTemp[i] = <div id={i}  className="divMonster" style={cssOpacityTemp ? dark:light}>5</div>
       else if (repoValTemp[i]==6)
         repoTemp[i] = <div id={i} className="divSquare" style={cssOpacityTemp ? dark:light}>6</div>
     }

      if(positionTemp>12 && positionTemp%12!==0 && (positionTemp+1)%12!==0)
        for(var k=0;k<8;k++){
         if(repoValTemp[this.state.torchCenter[k]+positionTemp]==1)
               repoTemp.splice(positionTemp+this.state.torchCenter[k], 1, <div id={positionTemp+this.state.torchCenter[k]} className="divVortex" style={light}>1</div>)
         else if (repoValTemp[this.state.torchCenter[k]+positionTemp]==2)
               repoTemp.splice(positionTemp+this.state.torchCenter[k], 1, <div id={positionTemp+this.state.torchCenter[k]} className="divPotion" style={light}>2</div>)
         else if (repoValTemp[this.state.torchCenter[k]+positionTemp]==3)
               repoTemp.splice(positionTemp+this.state.torchCenter[k], 1, <div id={positionTemp+this.state.torchCenter[k]} className="divWeapon" style={light}>3</div>)
         else if (repoValTemp[this.state.torchCenter[k]+positionTemp]==4)
               repoTemp.splice(positionTemp+this.state.torchCenter[k], 1, <div id={positionTemp+this.state.torchCenter[k]} className="divFire" style={light}>4</div>)
         else if (repoValTemp[this.state.torchCenter[k]+positionTemp]>25)
               repoTemp.splice(positionTemp+this.state.torchCenter[k], 1, <div id={positionTemp+this.state.torchCenter[k]} className="divMonster" style={light}>5</div>)
         else if (repoValTemp[this.state.torchCenter[k]+positionTemp]==6)
               repoTemp.splice(positionTemp+this.state.torchCenter[k], 1, <div id={positionTemp+this.state.torchCenter[k]} className="divSquare" style={light}>6</div>)
          else if (repoValTemp[this.state.torchCenter[k]+positionTemp]==9)
               repoTemp.splice(positionTemp+this.state.torchCenter[k], 1, <div id={positionTemp+this.state.torchCenter[k]} className="divBoss" style={light}>9</div>)
      }
      if((positionTemp+1)%12==0)
        for(var k=0;k<5;k++){
         if(repoValTemp[this.state.torhRightEdge[k]+positionTemp]==1)
               repoTemp.splice(positionTemp+this.state.torhRightEdge[k], 1, <div id={positionTemp+this.state.torhRightEdge[k]} className="divVortex" style={light}>1</div>)
         else if (repoValTemp[this.state.torhRightEdge[k]+positionTemp]==2)
               repoTemp.splice(positionTemp+this.state.torhRightEdge[k], 1, <div id={positionTemp+this.state.torhRightEdge[k]} className="divPotion" style={light}>2</div>)
         else if (repoValTemp[this.state.torhRightEdge[k]+positionTemp]==3)
               repoTemp.splice(positionTemp+this.state.torhRightEdge[k], 1, <div id={positionTemp+this.state.torhRightEdge[k]} className="divWeapon" style={light}>3</div>)
         else if (repoValTemp[this.state.torhRightEdge[k]+positionTemp]==4)
               repoTemp.splice(positionTemp+this.state.torhRightEdge[k], 1, <div id={positionTemp+this.state.torhRightEdge[k]} className="divFire" style={light}>4</div>)
         else if (repoValTemp[this.state.torhRightEdge[k]+positionTemp]>25)
               repoTemp.splice(positionTemp+this.state.torhRightEdge[k], 1, <div id={positionTemp+this.state.torhRightEdge[k]} className="divMonster" style={light}>5</div>)
         else if (repoValTemp[this.state.torhRightEdge[k]+positionTemp]==6)
               repoTemp.splice(positionTemp+this.state.torhRightEdge[k], 1, <div id={positionTemp+this.state.torhRightEdge[k]} className="divSquare" style={light}>6</div>)
          else if (repoValTemp[this.state.torhRightEdge[k]+positionTemp]==9)
               repoTemp.splice(positionTemp+this.state.torhRightEdge[k], 1, <div id={positionTemp+this.state.torhRightEdge[k]} className="divBoss" style={light}>9</div>)
      }
      if(positionTemp%12==0)
        for(var k=0;k<5;k++){
         if(repoValTemp[this.state.torchLeftEdge[k]+positionTemp]==1)
               repoTemp.splice(positionTemp+this.state.torchLeftEdge[k], 1, <div id={positionTemp+this.state.torchLeftEdge[k]} className="divVortex" style={light}>1</div>)
         else if (repoValTemp[this.state.torchLeftEdge[k]+positionTemp]==2)
               repoTemp.splice(positionTemp+this.state.torchLeftEdge[k], 1, <div id={positionTemp+this.state.torchLeftEdge[k]} className="divPotion" style={light}>2</div>)
         else if (repoValTemp[this.state.torchLeftEdge[k]+positionTemp]==3)
               repoTemp.splice(positionTemp+this.state.torchLeftEdge[k], 1, <div id={positionTemp+this.state.torchLeftEdge[k]} className="divWeapon" style={light}>3</div>)
         else if (repoValTemp[this.state.torchLeftEdge[k]+positionTemp]==4)
               repoTemp.splice(positionTemp+this.state.torchLeftEdge[k], 1, <div id={positionTemp+this.state.torchLeftEdge[k]} className="divFire" style={light}>4</div>)
         else if (repoValTemp[this.state.torchLeftEdge[k]+positionTemp]>25)
               repoTemp.splice(positionTemp+this.state.torchLeftEdge[k], 1, <div id={positionTemp+this.state.torchLeftEdge[k]} className="divMonster" style={light}>5</div>)
         else if (repoValTemp[this.state.torchLeftEdge[k]+positionTemp]==6)
               repoTemp.splice(positionTemp+this.state.torchLeftEdge[k], 1, <div id={positionTemp+this.state.torchLeftEdge[k]} className="divSquare" style={light}>6</div>)
          else if (repoValTemp[this.state.torchLeftEdge[k]+positionTemp]==9)
               repoTemp.splice(positionTemp+this.state.torchLeftEdge[k], 1, <div id={positionTemp+this.state.torchLeftEdge[k]} className="divBoss" style={light}>9</div>)
      }
      if(positionTemp<11 && positionTemp!==0 && positionTemp!==203 && positionTemp!==192)
        for(var k=0;k<5;k++){
         if(repoValTemp[this.state.torchTop[k]+positionTemp]==1)
               repoTemp.splice(positionTemp+this.state.torchTop[k], 1, <div id={positionTemp+this.state.torchTop[k]} className="divVortex" style={light}>1</div>)
         else if (repoValTemp[this.state.torchTop[k]+positionTemp]==2)
               repoTemp.splice(positionTemp+this.state.torchTop[k], 1, <div id={positionTemp+this.state.torchTop[k]} className="divPotion" style={light}>2</div>)
         else if (repoValTemp[this.state.torchTop[k]+positionTemp]==3)
               repoTemp.splice(positionTemp+this.state.torchTop[k], 1, <div id={positionTemp+this.state.torchTop[k]} className="divWeapon" style={light}>3</div>)
         else if (repoValTemp[this.state.torchTop[k]+positionTemp]==4)
               repoTemp.splice(positionTemp+this.state.torchTop[k], 1, <div id={positionTemp+this.state.torchTop[k]} className="divFire" style={light}>4</div>)
         else if (repoValTemp[this.state.torchTop[k]+positionTemp]>25)
               repoTemp.splice(positionTemp+this.state.torchTop[k], 1, <div id={positionTemp+this.state.torchTop[k]} className="divMonster" style={light}>5</div>)
         else if (repoValTemp[this.state.torchTop[k]+positionTemp]==6)
               repoTemp.splice(positionTemp+this.state.torchTop[k], 1, <div id={positionTemp+this.state.torchTop[k]} className="divSquare" style={light}>6</div>)
          else if (repoValTemp[this.state.torchTop[k]+positionTemp]==9)
               repoTemp.splice(positionTemp+this.state.torchTop[k], 1, <div id={positionTemp+this.state.torchTop[k]} className="divBoss" style={light}>9</div>)
      }
  }

   componentDidMount() {
     this.initBoard()
     window.addEventListener("keydown", this.handleKeyDown);
   }

   componentWillUnmount() {
     window.removeEventListener("keydown", this.handleKeyDown);
   }

   nextState(nextMove) {

      var repoTemp = this.state.repo.slice()
      var repoValTemp = this.state.repoVal.slice()
      var cssOpacityTemp= this.state.cssOpacity
      var positionTemp=this.state.position

      var stageTemp = this.state.stage
      var stg_nxtTemp= this.state.stg_nxt
      var healthTemp =this.state.health
      var xpTemp =this.state.xp
      var wpnTemp =this.state.wpn
      var pwrTemp =this.state.pwr
      var gm_overTemp =this.state.gm_overTemp





     if (document.getElementById(nextMove).innerHTML == "1")
        {
         healthTemp= 100 * (this.state.stage + 1)
         wpnTemp= 50 * (this.state.stage + 1)
         stageTemp= this.state.stage + 1
         stg_nxtTemp= 1
         cssOpacityTemp= true
         positionTemp= nextMove
       }
     else if (document.getElementById(nextMove).innerHTML == "2")
        {
         healthTemp= this.state.health + 75
         positionTemp= nextMove
       }
     else if (document.getElementById(nextMove).innerHTML == "3")
        {
         wpnTemp= this.state.wpn +5
         positionTemp= nextMove
       }
     else if (document.getElementById(nextMove).innerHTML == "4")
        {
           healthTemp= this.state.health - 20
       }
     else if (document.getElementById(nextMove).innerHTML == "5")
       {
         if(repoValTemp[nextMove]>25){
         healthTemp=this.state.health -
           Math.floor(
             (this.state.stage * Math.floor((Math.random() * 500) + 250)) /
             (this.state.pwr/2 * this.state.wpn/2)),
         wpnTemp=this.state.wpn - Math.floor((Math.random() * 5) + 1)
         repoValTemp[nextMove]=repoValTemp[nextMove]-10
         }
         else{
           if(xpTemp>30){
             pwrTemp=pwrTemp+10
             xpTemp=0
           }
           else
             xpTemp=xpTemp + 10
             positionTemp= nextMove
         }
       }
     else if (document.getElementById(nextMove).innerHTML == "6"){
        positionTemp= nextMove
     }
     else if (document.getElementById(nextMove).innerHTML == "9")
       {
         if(healthTemp>100 && pwrTemp>2)
         gm_overTemp= 1
         else
           healthTemp=0
           gm_overTemp= 1

       }


     if (wpnTemp<1)
       wpnTemp=1

     if(positionTemp!==this.state.position){
      repoTemp.splice(nextMove,1,<div id={nextMove} className="divPlayer">0</div>)
      repoValTemp.splice(nextMove,1,0)
      repoValTemp.splice(this.state.position,1,6)
      repoTemp.splice(this.state.position, 1, <div id={this.state.position} className="divSquare">6</div>)
      this.dungeonRender(repoTemp,repoValTemp,positionTemp,cssOpacityTemp)
     }

     this.setState({

      repo: repoTemp,
      repoVal: repoValTemp,
      cssOpacity: cssOpacityTemp,
      position: positionTemp,
      stage: stageTemp,
      stg_nxt: stg_nxtTemp,
      health: healthTemp,
      xp: xpTemp,
      wpn: wpnTemp,
      pwr: pwrTemp,
      gm_over: gm_overTemp

     })


     if (this.state.stg_nxt == 1)
       this.initBoard()
     if (this.state.gm_over == 1 || this.state.health <= 0)
       this.gmOver()
   }

   handleKeyDown(event) {


     var nextMove

     if (event.key == "ArrowRight" && this.state.position !== 11 && (this.state.position + 1) % 12 !== 0) {
       nextMove = this.state.position + 1
       this.nextState(nextMove)
     }
     if (event.key == "ArrowLeft" && (this.state.position) % 12 !== 0) {
       nextMove = this.state.position - 1
       this.nextState(nextMove)

     }
     if (event.key == "ArrowUp" && this.state.position > 11) {
       nextMove = this.state.position - 12
       this.nextState(nextMove)

     }
     if (event.key == "ArrowDown" && this.state.position < 193) {
       nextMove = this.state.position + 12
       this.nextState(nextMove)
     }

   }


   gmOver() {
     var boardSquare = [];
     if (this.state.health > 0)
       boardSquare = <div className="divMessage"><div className="divWin">You Win!</div><button className="replayButton"  onClick={ ()=>this.initBoard()}>again?</button></div>
     else
       boardSquare = <div className="divMessage"><div className="divNotWin">You Died!</div><button className="replayButton" onClick={ ()=>this.initBoard()}>again?</button></div>
  this.setState({
       repo: boardSquare,
       position: 0,
       stage: 1,
       stg_nxt: 0,
       health: 100,
       xp: 0,
       wpn: 50,
       pwr: 1,
       gm_over: 0,
       cssOpacity: true

     })

   }

   initBoard() {
     var repoTemp = []
     var repoValTemp = []
     var rando = 0
     var boss = Math.floor((Math.random() * 25) + 1)
     var positionTemp = Math.floor((Math.random() * 25) + 26)
     var cssOpacityTemp= !this.state.cssOpacityTemp

     if (this.state.stg_nxt == 1) {
       positionTemp = this.state.position

     }
     if (positionTemp == boss) {
       boss = positionTemp + 1
     }

     for (var i = 0; i < 144; i++) {
       rando = Math.floor((Math.random() * 50) + 1)
       if (i == boss) {
         if (this.state.stage == 4)
           repoValTemp[i] =9
         else
           repoValTemp[i] = 1
       }
       else if (i == positionTemp)
         repoValTemp[i] = 0
       else if (rando == 1)
         repoValTemp[i] = 2
       else if (rando == 2)
         repoValTemp[i] = 3
       else if (rando == 3)
         repoValTemp[i] = 4
       else if (rando > 6 && rando < 10)
         repoValTemp[i] = Math.floor((Math.random() * 50) + 26)
       else
         repoValTemp[i] = 6
     }

     this.dungeonRender(repoTemp,repoValTemp,positionTemp,cssOpacityTemp)

     this.setState({
       repo: repoTemp,
       repoVal: repoValTemp,
       stg_nxt: 0,
       position: positionTemp
     })

   }

   render() {

     return (
       <div className="boardBackground" >
        <div className="header">
          <div className="title">rogueCrawler</div>

          <div className="stats">
            health: {this.state.health} pwr: {this.state.pwr} wpn: {this.state.wpn} xp: {this.state.xp}

          </div>
        </div>
        <div className="roomBackground" contentEditable="false" type="text" onKeyDown={this.handleKeyDown}>
           {this.state.repo}
        </div>
         <div><button className="dungeonMode" onClick={this.dungeonMode}>dungeon mode</button></div>
      </div>
     );
   };
 }




 

export default Dungeon;
