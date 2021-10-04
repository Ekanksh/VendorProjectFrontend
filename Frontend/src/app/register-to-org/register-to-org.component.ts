import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/services/alertify.service';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-register-to-org',
  templateUrl: './register-to-org.component.html',
  styleUrls: ['./register-to-org.component.css']
})
export class RegisterToOrgComponent implements OnInit {

  constructor(private fb: FormBuilder, private route: Router,
    private alertify: AlertifyService,
    private auth: AuthService) { }


  user = this.fb.group({
    UserName:['', Validators.required],
    ID: ['', Validators.required]
  })

  ngOnInit(): void {
  }

  onSubmit(){
    this.auth.SubmitUser(this.user.value).subscribe((res: any) => {

      if(res.status){
      this.alertify.success('submited');
      this.route.navigate(['VendorSubmitedInvoice']);
      }
      else{
        
        this.alertify.success('Not Submited');
      }

  })
}

}