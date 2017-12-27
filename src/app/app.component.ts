import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpResponse } from '@angular/common/http';
//import { Http, Response } from '@angular/http';
//import { ektp, arrayEKTP } from './ektp.model';
import { Observable } from 'rxjs/Observable';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { templateJitUrl } from '@angular/compiler';
import { Content, ResponDukcapil } from './ektp.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent implements OnInit {
  //openState
  panelOpenState: boolean = true;
  ErrMessage: string = '';
  showSpinner: boolean = false;
  name: string = '';
  noNIK: any;
  //RESPON: string = '';
  //NAMA_LNGKP: string;
  //found: boolean

  constructor(private httpClient: HttpClient) { }
  inputNoNik(event: any) {
    this.noNIK = event.target.value;
  }

  postProfile() {
    this.ErrMessage = ''
    this.showSpinner = true;

    setTimeout(() => {

      const bodyParam = {
        NIK: `${this.noNIK}`,
        ip_user: '10.161.25.38',
        user_id: '112520602t531',
        password: 'LdJPZyrQ'
      }

      this.httpClient.post<ResponDukcapil>("http://172.16.160.128:8000/dukcapil/get_json/bank_ntb/call_nik", bodyParam)
        .subscribe(
        data => {
          //const results = JSON.stringify(DataKTP)
          //this.RESPON = DataKTP[0].RESPON
          //this.RESPON = JSON.stringify(DataKTP)
          this.ErrMessage = data.content[0].RESPON;
          this.panelOpenState = true;
          console.log('RESPON : ' + data.content[0].RESPON);
          //const results = DataKTPS
          //this.content = DataKTP[0]
          console.log(JSON.stringify(data))
          //console.log(this.respon.content.respon)
          //console.log('with array [0] : ' + data[0]);
          //console.log('without array [0] : ' + data);
          this.showSpinner = false;
        },
        err => {
          console.log('Something went wrong!');
          this.showSpinner = false;
        }
        )
      //console.log(data.respon);
      //});
    }, 2000)

  }

  ngOnInit() {
    this.panelOpenState = true;
  }
}
