import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPageComponent } from './components/list-page/list-page.component';
import { TilePageComponent } from './components/tile-page/tile-page.component';

const routes: Routes = [
  { path: 'list', component: ListPageComponent },
  { path: 'tile', component: TilePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
