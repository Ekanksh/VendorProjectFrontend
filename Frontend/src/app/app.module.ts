import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import { DisputeComponent } from './invoice/invoice-details-ready/Dispute/dispute/dispute.component';
import {MatInputModule} from '@angular/material/input';

import { AlertifyService } from 'src/services/alertify.service';
import { AuthService } from 'src/services/auth.service';
import { AuthgaurdGuard } from '../AuthGaurd/authgaurd.guard';
import { TokenIntercepterService } from 'src/services/token-intercepter.service';
import { VendorDashbordComponent } from './vendor-dashbord/vendor-dashbord.component';
import { VendorPanelComponent } from './Vendor/vendor-panel/vendor-panel.component';
import { VendorSubmitedInvoiceComponent } from './Vendor/vendor-submited-invoice/vendor-submited-invoice.component';


import { FormsModule } from '@angular/forms';
import { RegisterToOrgComponent } from './register-to-org/register-to-org.component';
import { EnrollIdCheckComponent } from './enroll-id-check/enroll-id-check.component';
import { BillingCyclesComponent } from './billing-cycles/billing-cycles.component';


@NgModule({
  declarations: [
    AppComponent,

    VendorDashbordComponent,
    VendorPanelComponent,
    VendorSubmitedInvoiceComponent,

    RegisterToOrgComponent,
      EnrollIdCheckComponent,
      BillingCyclesComponent,

   
  
 
 
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDialogModule,
    MatInputModule,
    HttpClientModule,
    FormsModule
    

  ],
  providers: [
    AlertifyService,
    AuthService,
    AuthgaurdGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenIntercepterService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
