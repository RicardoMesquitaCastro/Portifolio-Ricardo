import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router'

import { ROUTES } from './app.routes'


import { AppComponent } from './app.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { EscolaridadeComponent } from './escolaridade/escolaridade.component';
import { LinguagensComponent } from './linguagens/linguagens.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StarComponent } from './star/star.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { InteressesComponent } from './interesses/interesses.component';
import { CertificacoesComponent } from './certificacoes/certificacoes.component';
import { ContatoComponent } from './contato/contato.component';
import { SobreComponent } from './sobre/sobre.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperienciasComponent,
    ProjetosComponent,
    EscolaridadeComponent,
    LinguagensComponent,
    NavbarComponent,
    StarComponent,
    StarRatingComponent,
    InteressesComponent,
    CertificacoesComponent,
    ContatoComponent,
    SobreComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,   
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
    
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pr-Br' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
