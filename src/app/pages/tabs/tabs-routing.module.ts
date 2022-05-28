import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'feed',
        loadChildren: () =>
          import('../feed/feed.module').then((m) => m.FeedPageModule),
      },
      {
        path: 'user',
        children: [
          {
            path: ':idUser',
            loadChildren: () =>
              import('../user-detail/user-detail.module').then(
                (m) => m.UserDetailPageModule
              ),
          },
        ],
      },
      {
        path: '',
        redirectTo: '/tabs/feed',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/feed',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
