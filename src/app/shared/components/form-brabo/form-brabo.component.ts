import { Component, OnInit } from '@angular/core';
import { SurveyApiService } from '../../service/survey-api.service';

@Component({
  selector: 'app-form-brabo',
  templateUrl: './form-brabo.component.html',
  styleUrls: ['./form-brabo.component.css']
})
export class FormBraboComponent implements OnInit {

  email: string
  password: string

  handleClickLogin(){ 
    this.surveyApiService.handleLogin({ email: this.email, password: this.password }).subscribe(
      response => {
        console.log(response)
      }
    )
  }

  constructor(
    public surveyApiService: SurveyApiService
  ) { }

  ngOnInit(): void {
  }

}
