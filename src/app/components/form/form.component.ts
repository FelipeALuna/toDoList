
import { Tarefa } from 'src/models/Tarefa';
import { Component, OnInit } from '@angular/core';
import { TarefaService } from 'src/app/services/tarefa.service';
import { Prioridade } from 'src/models/Prioridade';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  tarefaService: TarefaService = new TarefaService();
  inputUsuario:string = '';
  novaTarefa:Tarefa={
      feito:false,
      titulo:"",
      prioridade:Prioridade.Baixa
  }
  constructor() { }

  ngOnInit(): void {
  }

  criarTarefa():void {
    this.inputUsuario
    let p:Prioridade = Prioridade.Baixa;
    let input:any = this.inputUsuario.split('#');
    if(input[1]=='2'){
      p = Prioridade.Media
    }
    if(input[1]=='3'){
      p = Prioridade.Alta
    }
    this.novaTarefa={
      titulo:input[0],
      prioridade:p,
      feito: false
    }
    this.tarefaService.createTarefa(this.novaTarefa)
  }
}
