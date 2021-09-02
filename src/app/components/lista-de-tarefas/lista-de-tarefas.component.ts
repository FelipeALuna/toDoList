import { TarefaService } from 'src/app/services/tarefa.service';
import { Tarefa } from './../../../models/Tarefa';
import { Prioridade } from 'src/models/Prioridade';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-lista-de-tarefas',
  templateUrl: './lista-de-tarefas.component.html',
  styleUrls: ['./lista-de-tarefas.component.css']
})
export class ListaDeTarefasComponent implements OnInit {
  tarefas: Tarefa[] = [];
  private tService: TarefaService = new TarefaService();

  constructor() {
    this.tarefas = this.tService.getTarefa();
    alert()
  }

  ngOnInit(): void {
  }

}
