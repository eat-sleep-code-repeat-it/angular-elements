import { CrisisListComponent } from './crisis/crisis-list/crisis-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent } from './heros/hero-detail/hero-detail.component';
import { HeroListComponent } from './heros/hero-list/hero-list.component';
import { CrisisCenterComponent } from './crisis/crisis-center/crisis-center.component';
import { CrisisDetailComponent } from './crisis/crisis-detail/crisis-detail.component';
import { CrisisDetailResolverService } from './crisis-detail-resolver.service';
import { CrisisCenterHomeComponent } from './crisis/crisis-center-home/crisis-center-home.component';
import { CanDeactivateGuard } from './can-deactivate.guard';

const routes: Routes = [
    { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
    { path: 'heroes', component: HeroListComponent },
    { path: 'hero/:id',  component: HeroDetailComponent },
    {
      path: 'crisis-center',
      component: CrisisCenterComponent,
      children: [
        {
          path: '',
          component: CrisisListComponent,
          children: [
            {
              path: ':id',
              component: CrisisDetailComponent,
              canDeactivate: [CanDeactivateGuard],
              resolve: {
                crisis: CrisisDetailResolverService
              }
            },
            {
              path: '',
              component: CrisisCenterHomeComponent
            }
          ]
        }
      ]
    }
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
