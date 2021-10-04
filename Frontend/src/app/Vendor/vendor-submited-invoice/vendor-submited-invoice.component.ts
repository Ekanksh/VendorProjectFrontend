import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-vendor-submited-invoice',
  templateUrl: './vendor-submited-invoice.component.html',
  styleUrls: ['./vendor-submited-invoice.component.css']
})
export class VendorSubmitedInvoiceComponent implements OnInit {



AllData:any;
Orgid:any;


id:any;

  constructor(public http :HttpClientModule,public auth:AuthService,public activeroute: ActivatedRoute) { }

    new=this.auth.getUserName();
    
    
    

  ngOnInit() {
    this.auth.getAllData(this.new).subscribe((res:any) => { 
     
    this.AllData=res  
    console.log(this.AllData);
  })


    this.auth.getEnrollName(this.new).subscribe((res:any) => { 
     
      this.Orgid=res; 
      this.id=this.Orgid[0].ID;
      
  })

  
  
}

}




