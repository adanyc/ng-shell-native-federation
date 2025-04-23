import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withHashLocation } from '@angular/router';
import { routes } from './app.routes';
import { LocationStrategy } from '@angular/common';
import { MicroFrontendLocationStrategy } from './shell/location-strategy-micro-frontend';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding(), withHashLocation()),
    { provide: LocationStrategy, useClass: MicroFrontendLocationStrategy },
  ],
};
