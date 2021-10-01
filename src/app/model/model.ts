import { Item } from "../interface/item"
export class Model{
  user?:string;
  items?:Array<Item>
  constructor(){
    this.user = 'SeyedAb2'
    this.items = [
      {action:'Buy Computer',done:false},
      {action:'Do Work',done:false},
      {action:'Task One',done:true},
      {action:'Work Second',done:false},
    ]
  }
}

export class TODOList {
  action?:string;
  done?:boolean;
  constructor(action: string,done: boolean) {
    this.action = action;
    this.done = done
  }
}
