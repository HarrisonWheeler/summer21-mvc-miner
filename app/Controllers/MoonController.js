import { ProxyState } from "../AppState.js"
import {moonService} from "../Services/MoonService.js"


function drawCount(){
  document.getElementById('cheese-count').innerHTML = /*html*/ `
    <h1>Cheese Count: ${ProxyState.cheese}</h1>
  `
}

function drawMultiplier(){
  let multiplier = 0
  ProxyState.purchasedUpgrades.forEach(pu => {
    multiplier += pu.multiplier
  })
  document.getElementById('multiplier').innerHTML = /*html*/`
  <h1>Current Multiplier: ${multiplier}</h1>
  `
}

export default class MoonController{


  // Show them that when you are registering new controllers, build the contstructor with a simple console.log to make sure that it is linked up before doing anything else
  constructor(){
    ProxyState.on("cheese", drawCount)
    ProxyState.on("cheese", drawMultiplier)
    drawMultiplier()
    drawCount()
  }

  mine(){
    moonService.mine()
    console.log(ProxyState.upgrades)
  }
}