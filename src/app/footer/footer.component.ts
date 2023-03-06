import { Component, OnInit } from '@angular/core';
import { FOOTER } from 'footer.mock';
import { footer } from '../models/footer';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit  {


  public footer: footer[] = FOOTER

  ngOnInit(): void{       

  }
}
