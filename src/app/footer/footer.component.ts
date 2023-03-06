import { Component, OnInit } from '@angular/core';
import { FOOTER } from 'footer.mock';
import { footer } from '../models/footer';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit  {

  constructor(private http : HttpClient) { }
  
  public footer: footer[] = FOOTER

  ngOnInit(): void{  
    this.listarTodosProdutos()

  }

  listarTodosProdutos() {
   this.http.get<footer[]>(`https://63a59f6af8f3f6d4abfb383d.mockapi.io/api-portfolio/sendEmail`)    
    .subscribe(resultado => console.log('acaaaaaaa',resultado));
}
}
