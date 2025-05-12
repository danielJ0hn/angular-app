import { Routes } from '@angular/router';
import { InfoContentComponent } from './content/info-content/info-content.component';

export const routes: Routes = [
    {
        path: 'content/:id',
        component: InfoContentComponent
    }
];
