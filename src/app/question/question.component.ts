import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppService} from '../services/app.service';
import {QuestionModel} from '../models/question-model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  data = [];

  receptionId = {
    id: '79EC2DFA-C7E7-48E0-9A1D-B119FA021B30'
  };
  questions: QuestionModel[] = [];
  public form: FormGroup;
  private rating3: number;

  constructor(private fb: FormBuilder , private service: AppService , private router: Router) {



    this.service.getQuestion(this.receptionId).subscribe(res => {
      if (res.status){
        for (const i of res.data){
          this.questions.push({id : i.id , question: i.QuestionTitle, rating: 0});
        }

        console.log(res)
        this.data = this.questions;
        this.setItem(this.data);

      }else {
        console.log(res.errorMessage);
      }
    });


  }

  ngOnInit(): void {

  }

  submit() {
    console.log(this.form.value);
    this.router.navigate(['/result']);
  }


  setItem(data){
    // console.log(data);
    this.rating3 = 0;
    const formItems: FormGroup[] = [];
    data.forEach(item => {
      formItems.push(this.fb.group(
        {
          id: [item.id],
          rate: [item.rating]
        }
      ));
    });
    this.form = this.fb.group({
      items: this.fb.array(formItems)
    });
  }
}
