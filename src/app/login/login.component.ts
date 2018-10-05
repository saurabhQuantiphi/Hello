declare const gapi: any;
import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private zone: NgZone) { }
  ngOnInit() {
  }
  public auth2: any;
  public googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '30187104600-1vkag8j3okmg007sn50svmkaie9v3hrb.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSignin(document.getElementById('googleBtn'));
    });
  }
  public attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {

        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
     
        this.zone.run(() => {
          this.router.navigate(['Home']);

        });
      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });


  }

  ngAfterViewInit() {
    this.googleInit();
  }

}


