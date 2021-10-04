import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/services/alertify.service';
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'app-vendor-panel',
  templateUrl: './vendor-panel.component.html',
  styleUrls: ['./vendor-panel.component.css']
})
export class VendorPanelComponent implements OnInit {


  constructor(private fb: FormBuilder, private route: Router,
    private alertify: AlertifyService,
    private auth: AuthService) { }
  user = this.fb.group({
    UserName: ['', Validators.required],
    password: ['', Validators.required]
  })
  id = this.user.value.UserName;

  flag: boolean = true;

  onSubmit() {
    // console.log(this.user.value);
    if (this.user.valid) {

      this.auth.loginUserVendor({
        UserName: this.user.value.UserName,
        password: this.user.value.password
      }).subscribe((res: any) => {
        console.log(res);
        if (res.status == 200) {
        
          
          localStorage.setItem("userName", res.user.UserName)
            localStorage.setItem("token", res.token)
          // this.route.navigate(['VendorSubmitedInvoice']);
          this.auth.getOrgId(this.user.value.UserName
            
          ).subscribe((res: any) => {
            if (res.status == 200) {
              console.log("angular",res);
          // this.route.navigate(['EnrollId']);
          this.alertify.success('Signin Successful');
          this.route.navigate(['VendorSubmitedInvoice']);
            }
            else if(res.status == 204){
              setTimeout(()=>{
                
                this.alertify.success("Enroll First")
              },500)
              
              this.route.navigate(['RegistertoOrg']);
            }

        })
         
        }
         else if(res.status == 401) {
          this.alertify.error("Please enter correct user name/password");
        }
      })
    } else {
      this.alertify.error("Enter required field");
    }
  }
  ngOnInit(): void {
  }

}