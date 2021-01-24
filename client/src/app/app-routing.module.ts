import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';
import { PreventUnsavedChangesGuard } from './_guards/prevent-unsaved-changes.guard';
import { MemberDetailedResolver } from './_resolvers/member-detailed.resolver';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { AdminGuard } from './_guards/admin.guard';
import { LandingComponent } from './landing/landing.component';
import { ParentComponent } from './parent/parent.component';
import { PuppyComponent } from './puppy/puppy.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ThedivasComponent } from './thedivas/thedivas.component';
import { AttributesComponent } from './attributes/attributes.component';
import { PastpuppiesComponent } from './pastpuppies/pastpuppies.component';
import { WaitlistComponent } from './waitlist/waitlist.component';
import { ZeedonkComponent } from './parent/zeedonk/zeedonk.component';
import { KhalessiComponent } from './parent/khalessi/khalessi.component';
import { BrunoComponent } from './parent/bruno/bruno.component';
import { PetservicesComponent } from './petservices/petservices.component';
import { TeresaComponent } from './parent/teresa/teresa.component';
import { HeidiComponent } from './parent/heidi/heidi.component';
import { ChandlerComponent } from './puppy/chandler/chandler.component';
import { ZackComponent } from './puppy/zack/zack.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'members', component: MemberListComponent},
      {path: 'members/:username', component: MemberDetailComponent, resolve: {member: MemberDetailedResolver}},
      {path: 'member/edit', component: MemberEditComponent, canDeactivate: [PreventUnsavedChangesGuard]},
      {path: 'lists', component: ListsComponent},
      {path: 'messages', component: MessagesComponent},
      {path: 'admin', component: AdminPanelComponent, canActivate: [AdminGuard]},
      {path: 'landing', component: LandingComponent},
      {path: 'parent', component: ParentComponent },
      {path: 'puppy', component: PuppyComponent },
      {path: 'pastpuppy', component: PastpuppiesComponent },
      {path: 'faqs', component: FaqsComponent },
      {path: 'thedivas', component: ThedivasComponent },
      {path: 'history', component: ListsComponent },
      {path: 'attributes', component: AttributesComponent },
      {path: 'waitlist', component: WaitlistComponent },
      {path: 'zack', component: ZackComponent },
      {path: 'chandler', component: ChandlerComponent },
      {path: 'heidi', component: HeidiComponent },
      {path: 'zeedonk', component: ZeedonkComponent },
      {path: 'khalessi', component: KhalessiComponent },
      {path: 'bruno', component: BrunoComponent },
      {path: 'petservices', component: PetservicesComponent },
      {path: 'teresa', component: TeresaComponent },
    ]
  },
  {path: 'errors', component: TestErrorsComponent },
  {path: 'not-found', component: NotFoundComponent },
  {path: 'server-error', component: ServerErrorComponent },
  {path: '**', component: NotFoundComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
