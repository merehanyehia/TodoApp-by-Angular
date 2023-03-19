import { Component,OnInit } from '@angular/core';
import {Todo} from "../models/todo";
import {Howl, Howler} from 'howler';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
   todos: Todo[] = [];
   todoInput:string='';
   uptodo:string='';
   audio: HTMLAudioElement = new Audio ( "./assets/عمر خيرت-خلى بالك من عقلك (128 kbps).mp3");

constructor(){

}
ngOnInit():void{

}
addTodo(){
  this.todos.push({
    content:this.todoInput,
    completed:false
  });
  this.todoInput='';
  this.audio.play();
  this.audio.volume=0.9;
}
updateTodo(id:number){
  this.uptodo=this.todos.find((value,i)=>id===i)!.content;
  this.deleteTodo(id);

return this.todoInput=this.uptodo;
}
doneTodo(id:number){
this.todos.map((value,i)=>{
  if(i==id) value.completed = !value.completed;
  return value;
 
})
}

deleteTodo(id:number){
  this.todos=this.todos.filter((value,i)=>i !== id);
}

}
