import { Component, ElementRef, ViewChild } from '@angular/core';
import { Model } from './model/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newItem:string="";
  model = new Model()
  getName(){
    return this.model.user
  }
  getItemToDoList(){
    return this.model.items
  }
  getAddItem(newItem: string){
    if(newItem != ''){
      this.model.items?.push({action:newItem,done:false})
      this.newItem = "";
    }else{
      alert('Please Enter A User')
    }
  }
}
function ValidChild(arg0: string) {
  throw new Error('Function not implemented.');
}

