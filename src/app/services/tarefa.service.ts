
import { Injectable } from '@angular/core';
import { Tarefa } from 'src/models/Tarefa';
import { Prioridade } from 'src/models/Prioridade';

const TAREFAS:Tarefa[] = []
@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  getTarefa(){
    return TAREFAS;
  }
  createTarefa(inputUsuario:string){
    let prioridade:Prioridade = Prioridade.Baixa;
    let input:any = inputUsuario.split('#');
    if(input[1]=='2'){
      prioridade = Prioridade.Media
    }
    if(input[1]=='3'){
      prioridade = Prioridade.Alta
    }
    
    TAREFAS.push({
      titulo: input[0],
      feito: false,
      prioridade: prioridade
    });
  }

}
