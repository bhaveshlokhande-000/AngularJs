import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms"

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  registrationForm = new FormGroup({
    fname: new FormControl("", Validators.required),
    lname: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    address1: new FormControl("", Validators.required),
    address2: new FormControl("", Validators.required),
    dob: new FormControl("", Validators.required),
    tel: new FormControl("", [Validators.required, Validators.pattern('^[0-9]{10}$')]),
  })

  get fname() {
    return this.registrationForm.get("fname")
  }


  get lname() {
    return this.registrationForm.get("lname")
  }

  get email() {
    return this.registrationForm.get("email")
  }

  get address1() {
    return this.registrationForm.get("address1")
  }

  get address2() {
    return this.registrationForm.get("address2")
  }

  get dob() {
    return this.registrationForm.get("dob")
  }

  get tel() {
    return this.registrationForm.get("tel")
  }

  onSubmit() {
    console.log(this.registrationForm.value)
  }


}
