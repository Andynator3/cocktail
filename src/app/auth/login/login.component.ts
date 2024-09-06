import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form: any = {
    email: null,
    password: null,
  }

  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
  }

  onSubmit() : void {
    console.log(this.form);
    this.http.post('http://flp-api.francecentral.cloudapp.azure.com/api-docs/auth/login', this.form).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
