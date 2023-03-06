import { RouterModule, Routes } from "@angular/router";


import { SobreComponent } from './sobre/sobre.component';
import { LinguagensComponent } from './linguagens/linguagens.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { InteressesComponent } from './interesses/interesses.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { EscolaridadeComponent } from './escolaridade/escolaridade.component';
import { ContatoComponent } from './contato/contato.component';
import { CertificacoesComponent } from './certificacoes/certificacoes.component';




    export const ROUTES: Routes =[
    {path: 'certificacoes', component: CertificacoesComponent},
    {path: 'contato', component: ContatoComponent},
    {path: 'escolaridade', component: EscolaridadeComponent},
    {path: 'experiencias', component: ExperienciasComponent},
    {path: 'interesses', component: InteressesComponent},
    {path: 'projetos', component: ProjetosComponent},
    {path: 'linguagens', component: LinguagensComponent},
    {path: 'sobre', component: SobreComponent},
    ];
