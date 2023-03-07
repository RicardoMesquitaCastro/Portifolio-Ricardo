import { Contato } from './../models/contato';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  @Input() btnText!: string;

  momentForm!: FormGroup;

  constructor(
    
  ){}

  ngOnInit(): void {
    this.momentForm = new FormGroup({
      
      nome: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      assunto: new FormControl('',[Validators.required]),
      mensagem: new FormControl('',[Validators.required]),
    });
  }

  get nome(){
    return this.momentForm.get('nome')!;
  }

  get email(){
    return this.momentForm.get('email')!;
  }

  get assunto(){
    return this.momentForm.get('assunto')!;
  }

  get mensagem(){
    return this.momentForm.get('mensagem')!;
  }

  submit(){    
    if(this.momentForm.invalid){
    Swal.fire('Preencha todos os dados')    
  } else{
   let contato: Contato = new Contato(
    this.momentForm.value.nome,
    this.momentForm.value.email,
    this.momentForm.value.assunto,
    this.momentForm.value.mensagem
    )
    console.log(contato)
    Swal.fire('O fomulário foi preenchdio com sucesso')
    console.log('formulario está valido')
  }
}
}
