
import { Injectable } from '@angular/core';
import { Tarefa } from 'src/models/Tarefa';
import { Prioridade } from 'src/models/Prioridade';

const TAREFAS:Tarefa[] = [
  {
    titulo: "limpar casa",
    feito: true,
    prioridade: Prioridade.Alta
  },
  {
    titulo: "lavar louça",
    feito: true,
    prioridade: Prioridade.Media
  },
  {
    titulo: "Fazer curso",
    feito: true,
    prioridade: Prioridade.Alta
  },
]
@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  getTarefa(){
    return TAREFAS;
  }
  createTarefa(){
    TAREFAS.push({
      titulo: "criando tarefa",
      feito: true,
      prioridade: Prioridade.Media
    });
  }

}
