import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { LandingPage } from './Pages/landing-page/landing-page';
import { AdminLayout } from './layout/admin-layout/admin-layout';
import { AdminHome } from './Pages/Admin/admin-home/admin-home';
import { Category } from './Pages/Admin/category/category';

export const routes: Routes = [
    {
        path:"",
        component:MainLayout,
        children:[
            {
                path:"",
                pathMatch:"full",
                redirectTo:"Home"
            },
            {
                path:"Home",
                component:LandingPage
            }
        ]
    },
     {
        path:"admin",
        component:AdminLayout,
        children:[
            {
                path:"",
                pathMatch:"full",
                redirectTo:"Home"
            },
            {
                path:"Home",
                component:AdminHome
            },
            {
                path:"categories",
                component:Category
            }
         
        ]
    }
];
