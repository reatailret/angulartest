import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './notfound/page-not-found/page-not-found.component';


const routes: Routes = [
    {path: '', redirectTo: '/about', pathMatch: 'full'},
    {path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule)},
    {path:'notfound', component:PageNotFoundComponent},
    { path: "**", redirectTo: "/notfound" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
