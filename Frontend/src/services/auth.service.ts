import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 

  
  // private loginUrl = "http://localhost:5000/login";
  // private Reg = "http://localhost:5000/reg";

  // private dashboardUrl="http://localhost:5000/Dashboard"

  // private DashboardSubmittedUrl="http://localhost:5000/DashboardSubmitted"


  // private DashboardSubmittedSingleUrl="http://localhost:5000/DashboardSubmitted/getData"

  // private DashboardUpdateStatusUrl="http://localhost:5000/DashboardSubmitted/updateStatus"

  // private DashboardDisputeStatusUrl="http://localhost:5000/DashboardSubmitted/disputeStatus"

  // private loginUrl = "http://localhost:5000/login";
  private loginVendorUrl = "http://localhost:5000/loginVendor";

  private LoginVendorReg = "http://localhost:5000/regVendor";

  // private Reg = "http://localhost:5000/reg";

  private dashboardUrl="http://localhost:5000/Dashboard"

  private DashboardSubmittedUrl="http://localhost:5000/DashboardSubmitted/alldata"


  private DashboardSubmittedSingleUrl="http://localhost:5000/DashboardSubmitted/getData"


private Valid="http://localhost:5000/enroll/valid"

private enroll = "http://localhost:5000/enroll/data";


private OrgIdurl="http://localhost:5000/enroll/orgData";

private  OrgEnrollURL="http://localhost:5000/enroll/EnrollId";
  
 
  constructor(private http: HttpClient, private route: Router, private alertify: AlertifyService) { }


  SubmitUser(user :any){
    return this.http.post(this.enroll, user);
  }
 
  ValidUser(user: any) {

    return this.http.post(this.Valid, {ID:user});
  }


  loginUserVendor(user:any){
    return this.http.post(this.loginVendorUrl,user)
  }

  loginVendor() {
    return !!localStorage.getItem('token');
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
  getUserName() {
    return localStorage.getItem('userName')
  }


  dashboarddata(data: any) {
    return this.http.post(this.dashboardUrl, data);
  }

 

  getAllData(_number: any){
    return this.http.get(`${this.DashboardSubmittedUrl}/${_number}`)
  }

  getSingleData(_number: any,_Id:any){
    return this.http.get(`${this.DashboardSubmittedSingleUrl}/${_number}/${_Id}`)
  }




  getOrgId(_number: any){
    return this.http.get(`${this.OrgIdurl}/${_number}`)
  }

  getEnrollName(_number: any){
    return this.http.get(`${this.OrgEnrollURL}/${_number}`)
  }


  logOut(){
    localStorage.removeItem('userName');
    localStorage.removeItem('token');
    localStorage.removeItem('id')
    this.route.navigate(['/']);
    this.alertify.success("LogOut Successful")
  }


}
