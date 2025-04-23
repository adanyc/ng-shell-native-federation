import { Routes } from '@angular/router';
import { startsWith } from './shell/starts-with';
import { LoaderMicroFrontendComponent } from './shell/loader-micro-frontend';
import { EmptyComponent } from './shell/empty.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'venus',
    pathMatch: 'full',
  },
  {
    matcher: startsWith('venus'),
    component: LoaderMicroFrontendComponent,
    data: {
      config: {
        remoteName: 'venus',
        exposedModule: './web-components',
        elementName: 'mfe-venus',
      },
    },
  },
  {
    matcher: startsWith('mars'),
    component: LoaderMicroFrontendComponent,
    data: {
      config: {
        remoteName: 'mars',
        exposedModule: './web-components',
        elementName: 'mfe-mars',
      },
    },
  },
  {
    path: '**',
    component: EmptyComponent,
  },
];
