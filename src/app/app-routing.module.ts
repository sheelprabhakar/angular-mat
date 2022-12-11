import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImportComponent } from './import/import.component'
import { ExportComponent } from './export/export.component'


const routes: Routes = [
    { path: 'import', component: ImportComponent },
    { path: '', redirectTo: '/import', pathMatch: 'full' },
    { path: 'export', component: ExportComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }