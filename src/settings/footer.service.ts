

import { HttpClient } from '@angular/common/http'
import { footer } from './../app/models/footer';
import { Injectable } from '@angular/core'
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/retry'




@Injectable()
export class FooterComponent {
   
    constructor(private http : HttpClient) { }

   

    listarTodosProdutos() {
        this.http.get<footer[]>(`https://63a59f6af8f3f6d4abfb383d.mockapi.io/api-portfolio/sendEmail`)
        .subscribe(resultado => console.log('acaaaaaaa',resultado));
}
}
