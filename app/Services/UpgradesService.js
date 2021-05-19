import { ProxyState } from "../AppState.js";
import NotificationService from "../Utils/NotificationsService.js";



class UpgradesService{
  constructor(){
    console.log("hello from the serrrrvv");
  }
  
  purchaseUpgrade(upgradeName){
    let foundUpgrade = ProxyState.upgrades.find(u => u.name == upgradeName)
    if(ProxyState.cheese >= foundUpgrade.price){
      ProxyState.cheese -= foundUpgrade.price
      foundUpgrade.quantity++
      NotificationService.confirmNotification("Purchased", "success")
      // this completely resets proxystate so that our listener will notice a change and run our draw
      ProxyState.purchasedUpgrades = ProxyState.purchasedUpgrades.push(foundUpgrade) 
    } else{
      NotificationService.confirmNotification("You aint got the cheddahhhh", "error")
    }
  }



}

export const upgradesService = new UpgradesService()