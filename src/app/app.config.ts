import {ApplicationConfig, InjectionToken, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideHttpClient} from "@angular/common/http";

export const API_TOKEN = new InjectionToken<string>('API_TOKEN');

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(routes),
        provideAnimationsAsync(),
        provideAnimationsAsync(),
        provideHttpClient(),
        {provide: API_TOKEN, useValue: 'https://dummyjson.com'}
    ]
};
