

import { Component, OnInit } from '@angular/core';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  tarefaService: TarefaService = new TarefaService();
  inputUsuario:string = 'teste';

  constructor() { }

  ngOnInit(): void {
  }

  criarTarefa(event:Event):void {
    event.preventDefault();
    this.tarefaService.createTarefa();
  }
}
