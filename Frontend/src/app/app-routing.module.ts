import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthgaurdGuard } from 'src/AuthGaurd/authgaurd.guard';

import { VendorPanelComponent } from './Vendor/vendor-panel/vendor-panel.component';
import { VendorDashbordComponent } from './vendor-dashbord/vendor-dashbord.component';


import { VendorSubmitedInvoiceComponent } from './Vendor/vendor-submited-invoice/vendor-submited-invoice.component';



import { RegisterToOrgComponent } from './register-to-org/register-to-org.component';
import { EnrollIdCheckComponent } from './enroll-id-check/enroll-id-check.component';

import { BillingCyclesComponent } from './billing-cycles/billing-cycles.component';



const routes: Routes = [

  {path:'',component:VendorPanelComponent},
  {path:'vendorDashbord',component:VendorDashbordComponent},
  {path:'VendorSubmitedInvoice',component:VendorSubmitedInvoiceComponent, canActivate:[AuthgaurdGuard]},
  {path:'EnrollId',component:EnrollIdCheckComponent},
  {path:'RegistertoOrg',component:RegisterToOrgComponent},
  {path:'BillingCycle/:id',component:BillingCyclesComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
