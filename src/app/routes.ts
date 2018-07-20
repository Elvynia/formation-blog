import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';

export const ROUTES = [
    { path: 'articles', component: ListComponent },
    { path: 'edit', component: EditComponent },
    { path: '', redirectTo: '/articles', pathMatch: 'full' }
]