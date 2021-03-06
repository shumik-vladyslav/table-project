import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsContainerComponent } from './settings';
import { HumanPositionHistoryComponent } from './pages/human-position-history/human-position-history.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'human-pos',
    pathMatch: 'full'
  },
  {
    path: 'human-pos',
    component: HumanPositionHistoryComponent,
    data: { title: 'anms.menu.menuHuman' }
  },
  {
    path: 'settings',
    component: SettingsContainerComponent,
    data: { title: 'anms.menu.settings' }
  },
  {
    path: 'examples',
    loadChildren: 'app/examples/examples.module#ExamplesModule'
  },
  {
    path: '**',
    redirectTo: 'human-pos'
  }
];


@NgModule({
  // useHash supports github.io demo page, remove in your app
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
