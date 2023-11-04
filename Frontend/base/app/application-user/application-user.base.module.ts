import { NgModule } from '@angular/core';
import { WidgetsBaseModule } from '@libbase/widgets.base.module';
import { BsModalService } from 'ngx-bootstrap/modal';
import { SharedModule } from '@app/shared/shared.module';
import { ApplicationUserListComponent } from '@app/application-user/application-user/application-user-list/application-user-list.component';
import { ApplicationUserDetailComponent } from '@app/application-user/application-user/application-user-detail/application-user-detail.component';
import { CanDeactivateGuard } from '@baseapp/auth.can-deactivate-guard.service';

@NgModule({
  declarations: [
    ApplicationUserListComponent,
    ApplicationUserDetailComponent
  ],
  imports: [
    SharedModule,
    WidgetsBaseModule,
  ],
  exports: [
    SharedModule,
	WidgetsBaseModule,
    ApplicationUserListComponent,
    ApplicationUserDetailComponent
  ],
  providers: [
  	BsModalService,
	CanDeactivateGuard
  ],
  
})
export class ApplicationUserBaseModule { }