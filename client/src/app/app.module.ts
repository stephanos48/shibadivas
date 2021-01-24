import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { SharedModule } from './_modules/shared.module';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { ErrorInterceptor } from './_interceptors/error.interceptor';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { JwtInterceptor } from './_interceptors/jwt.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { LoadingInterceptor } from './_interceptors/loading.interceptor';
import { PhotoEditorComponent } from './members/photo-editor/photo-editor.component';
import { TextInputComponent } from './_forms/text-input/text-input.component';
import { DateInputComponent } from './_forms/date-input/date-input.component';
import { MemberMessagesComponent } from './members/member-messages/member-messages.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { PhotoManagementComponent } from './admin/photo-management/photo-management.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { HasRoleDirective } from './_directives/has-role.directive';
import { RolesModalComponent } from './modals/roles-modal/roles-modal.component';
import { ConfirmDialogComponent } from './modals/confirm-dialog/confirm-dialog.component';
import { LandingComponent } from './landing/landing.component';
import { HistoryComponent } from './history/history.component';
import { FooterComponent } from './footer/footer.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ParentComponent } from './parent/parent.component';
import { PastpuppiesComponent } from './pastpuppies/pastpuppies.component';
import { PetservicesComponent } from './petservices/petservices.component';
import { PuppyComponent } from './puppy/puppy.component';
import { ThedivasComponent } from './thedivas/thedivas.component';
import { TypeComponent } from './type/type.component';
import { WaitlistComponent } from './waitlist/waitlist.component';
import { BrunoComponent } from './parent/bruno/bruno.component';
import { HeidiComponent } from './parent/heidi/heidi.component';
import { KhalessiComponent } from './parent/khalessi/khalessi.component';
import { TeresaComponent } from './parent/teresa/teresa.component';
import { ZeedonkComponent } from './parent/zeedonk/zeedonk.component';
import { PennyComponent } from './pastpuppies/penny/penny.component';
import { TessaComponent } from './pastpuppies/tessa/tessa.component';
import { AngelaComponent } from './puppy/angela/angela.component';
import { ChandlerComponent } from './puppy/chandler/chandler.component';
import { DwightComponent } from './puppy/dwight/dwight.component';
import { AttributesComponent } from './attributes/attributes.component';
import { ZackComponent } from './puppy/zack/zack.component';
import { VideosComponent } from './videos/videos.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    MemberDetailComponent,
    ListsComponent,
    MessagesComponent,
    TestErrorsComponent,
    NotFoundComponent,
    ServerErrorComponent,
    MemberCardComponent,
    MemberEditComponent,
    PhotoEditorComponent,
    TextInputComponent,
    DateInputComponent,
    MemberMessagesComponent,
    AdminPanelComponent,
    PhotoManagementComponent,
    UserManagementComponent,
    HasRoleDirective,
    RolesModalComponent,
    ConfirmDialogComponent,
    LandingComponent,
    HistoryComponent,
    FooterComponent,
    FaqsComponent,
    ParentComponent,
    PastpuppiesComponent,
    PetservicesComponent,
    PuppyComponent,
    ThedivasComponent,
    TypeComponent,
    WaitlistComponent,
    BrunoComponent,
    HeidiComponent,
    KhalessiComponent,
    TeresaComponent,
    ZeedonkComponent,
    PennyComponent,
    TessaComponent,
    AngelaComponent,
    ChandlerComponent,
    DwightComponent,
    AttributesComponent,
    ZackComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule,
    NgxSpinnerModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
