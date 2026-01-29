import { Routes } from '@angular/router';
import { About } from './master/about/about';
import { Contact } from './master/contact/contact';
import { Services } from './master/services/services';
import { Projects } from './master/projects/projects';
import { Dashboard } from './master/dashboard/dashboard';

export const routes: Routes = [
      {path:'', component:Dashboard },
      {path:'dashboard', component:Dashboard, title: "'Dashboard'"},
      {path:'about', component:About},
      {path:'services', component:Services},
      {path:'projects', component:Projects},
      {path:'contact', component:Contact},
];
