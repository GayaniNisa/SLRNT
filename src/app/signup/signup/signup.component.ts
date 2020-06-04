import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {

  @ViewChild('formDirective') private formDirective: NgForm;

  form: FormGroup;

  signUpStatus: boolean = false;
  signUpMsg: string;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'fullName': new FormControl('', { validators: [Validators.required] }),
      // 'userName': new FormControl('', { validators: [Validators.required] }),
      'email': new FormControl('', { validators: [Validators.required, Validators.email] }),
      'password': new FormControl('', { validators: [Validators.required] })
    })
    this.form.reset()
  }

  onSignup() {
    this.authService.signup(this.form.value.fullName, this.form.value.email, this.form.value.password)
      .subscribe((data) => {
        console.log(data)
        this.signUpStatus = true
        this.signUpMsg = "signup successful"

        var dirtyFormID = 'formSignUp';
        var resetForm = <HTMLFormElement>document.getElementById(dirtyFormID);
        resetForm.reset();


      }, error => {

        this.signUpStatus = false
        this.signUpMsg = "signup not successful"
        // this.form.reset()
        var dirtyFormID = 'formSignUp';
        var resetForm = <HTMLFormElement>document.getElementById(dirtyFormID);
        resetForm.reset();


      })
    // this.form.markAsPristine();

  }

  ngOnDestroy() {
    this.form.reset()
    console.log("destroying")
  }
}
