import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/services/alertify.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-enroll-id-check',
  templateUrl: './enroll-id-check.component.html',
  styleUrls: ['./enroll-id-check.component.css']
})
export class EnrollIdCheckComponent implements OnInit {

  constructor( public dialog: MatDialog,public activeroute: ActivatedRoute,public auth: AuthService
    ,public http:HttpClient,private route:Router,private alertify:AlertifyService) { }


  new=this.auth.getUserName();
  ngOnInit(): void {
  }
  
  OnClick(){
    console.log(this.new);
    this.auth.ValidUser(this.new).subscribe((res: any) => {

      if(res.status){
       
      this.alertify.success('Matched');
      this.route.navigate(['VendorSubmitedInvoice']);

      }
      else{
       
        this.alertify.success('Not matched');
      }
  })
}
}
  
