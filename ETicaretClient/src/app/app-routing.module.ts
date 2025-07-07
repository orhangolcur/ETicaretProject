import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { HomeComponent } from './ui/components/home/home.component';

const routes: Routes = [
  {
    path: "admin", 
    component: LayoutComponent, // admin kısmının layout componenti. admin olduğu sürece bu component kullanılacak ve görünüm bu component üzerinden yönetilecek. ne olursa olsun layouttaki footer ve header ve sidebar componentleri görünür olacak. 
    children: [
       {path: "", component: DashboardComponent},
       {path: "customers", loadChildren: () => import('./admin/components/customers/customers.module').then(m => m.CustomersModule)}, 
       {path: "products", loadChildren: () => import('./admin/components/products/products.module').then(m => m.ProductsModule)},
       {path: "orders", loadChildren: () => import('./admin/components/orders/orders.module').then(m => m.OrdersModule)}, 
    ]
  },
  {path: "", component: HomeComponent},
  {path: "baskets", loadChildren: () => import('./ui/components/baskets/baskets.module').then(m => m.BasketsModule)},
  {path: "products", loadChildren: () => import('./ui/components/products/products.module').then(m => m.ProductsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
