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
  public footers: any;

  constructor(private http : HttpClient) { }
  
  public footer: footer[] = FOOTER

 

  ngOnInit(): void{  
    this.listardados()

  }

  listardados() {
   this.http.get<footer[]>(`https://63a59f6af8f3f6d4abfb383d.mockapi.io/api-portfolio/sendEmail`)    
    .subscribe(data => {
      this.footers = data;
  })
}
}
