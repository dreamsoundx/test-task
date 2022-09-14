import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPageComponent } from './components/list-page/list-page.component';
import { TilePageComponent } from './components/tile-page/tile-page.component';

const routes: Routes = [
  { path: '', component: ListPageComponent },
  { path: 'list', component: ListPageComponent },
  { path: 'tile', component: TilePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [ListPageComponent, TilePageComponent];
