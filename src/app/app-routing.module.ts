import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path:'recipes',
        loadChildren:'./recipes/recipes.module#RecipesModule'
    },
    {
        path:'orders',
        loadChildren:'./orders/orders.module#OrdersModule'
    },
    {
        path:'messages',
        loadChildren:'./messages/messages.module#MessagesModule'
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }     
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}