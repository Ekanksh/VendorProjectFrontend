import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/services/auth.service';
import { FormArray, FormGroup, FormBuilder, Validators,} from '@angular/forms';
import { AlertifyService } from 'src/services/alertify.service';
import { Router } from '@angular/router';






@Component({
  selector: 'app-vendor-dashbord',
  templateUrl: './vendor-dashbord.component.html',
  styleUrls: ['./vendor-dashbord.component.css']
})
export class VendorDashbordComponent implements OnInit {
  data!: FormGroup;



  



  constructor(private fb: FormBuilder, public auth: AuthService, private http: HttpClient,
     private alertify: AlertifyService
    , private route: Router) {


   
  }

  ngOnInit(): void {

    this.data = this.fb.group({
      Subcontractor_ID: ['', Validators.required],
      Subcontractor_Name: ['', Validators.required],
      Project_Name: ['', Validators.required],
      Vendor_Name: ['', Validators.required],
      Billing_Frequency: ['', Validators.required],
      Subcontractor_End_Date: ['', Validators.required],
      Project_Type: ['', Validators.required],
      Buy_Rate: ['', Validators.required],
      Margin: ['', Validators.required],




      Billing_Cycle: this.fb.array([
        this.addSkillForm()
      ]),

    });

  }


  



   addSkillForm(): FormGroup {
    return this.fb.group({
      Date_From: ['', Validators.required],
      Date_to: ['', Validators.required]
    });
   }

 

   addSkill(){
     (<FormArray>this.formData).push(this.addSkillForm());

   }

   get formData() { return <FormArray>this.data.get('Billing_Cycle'); }
   



  onSubmit()
  {

    if (this.data.valid) {
      console.log(this.data.value);
      this.auth.dashboarddata(
    
      this.data.value).subscribe((res: any) => {


          console.log(res);
          this.alertify.success('Successfully Save ');
          this.route.navigate(['VendorSubmitedInvoice']);

      },(err )=>{
        this.alertify.error("Failed To Submit");
      }
      )
    }
     else {
      this.alertify.error("Enter the required field");
    }


   }

 





 







  Name = this.auth.getUserName();




}
function subscribe(arg0: (res: any) => void) {
  throw new Error('Function not implemented.');
}

