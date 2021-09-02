
import { Component, OnInit, Input } from '@angular/core';
import { Tarefa } from 'src/models/Tarefa';
import { TarefaService } from 'src/app/services/tarefa.service';
@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {
  @Input() tarefa!:Tarefa;
  tarefaService = new TarefaService();
  constructor() { }

  ngOnInit(): void {
  }
  done(): void {
    this.tarefa.feito =  !this.tarefa.feito
  }
  
}
