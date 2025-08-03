import { Routes } from '@angular/router';
import { Welcomepage } from './welcomepage/welcomepage';
import { About } from './about/about';
import { Portfolio } from './portfolio/portfolio';
import { Contact } from './contact/contact';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
    {path:'',component:Welcomepage},
    {path:'about',component:About},
    {path:'portfolio',component:Portfolio},
    {path:'contact',component:Contact},
    {path:'**',component:NotFound},
];
