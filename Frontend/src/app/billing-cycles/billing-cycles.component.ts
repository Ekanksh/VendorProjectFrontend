import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-billing-cycles',
  templateUrl: './billing-cycles.component.html',
  styleUrls: ['./billing-cycles.component.css']
})
export class BillingCyclesComponent implements OnInit {

  constructor(public http :HttpClientModule,public auth:AuthService,public activeroute: ActivatedRoute,) { }
AllData:any

  new=this.auth.getUserName();
id:any
data:any  
Subcontractor_ID:any
SubContractor_Name:any
Orgid:any;
enroll:any
myid:any
  
  ngOnInit() {
  //   this.auth.getAllData(this.new).subscribe((res:any) => { 
     
  //   this.AllData=res.Subcontractor_ID  
  //   console.log(this.AllData);
  // })


  this. id = this.activeroute.snapshot.params['id'];

   

  this.auth.getSingleData(this.id,this.new).subscribe((res: any) => {
this.AllData=res;
    this.data = res
   this.Subcontractor_ID=this.AllData[0].Subcontractor_ID
   this.SubContractor_Name=this.AllData[0].Subcontractor_Name

  })


 
    this.auth.getEnrollName(this.new).subscribe((res:any) => { 
     
      this.Orgid=res; 
      this.myid=this.Orgid[0].ID;
      
  })

  
  }
  
  }

