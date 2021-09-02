
import { Injectable } from '@angular/core';
import { Tarefa } from 'src/models/Tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private Tarefas:Tarefa[];
  private chave:string = "TarefasCache"
  
  constructor() {
    let dados = window.localStorage.getItem(this.chave)
    if(dados){
      this.Tarefas= JSON.parse(dados)
    }else{
      window.localStorage.setItem(this.chave,"[]");
      this.Tarefas =[] 
    }
    }

    getTarefa(){
      return this.Tarefas;
    }
    createTarefa(t:Tarefa):void{
      this.Tarefas.push(t);
      window.localStorage.setItem(this.chave,JSON.stringify(this.Tarefas))
    }
   }

  


