import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  data = [
    {
      id: '12345g',
      question: 'number 1',
      rating: 0
    },
    {
      id: '123123',
      question: 'number 1',
      rating: 0
    },
    {
      id: '12543g',
      question: 'number 1',
      rating: 0
    }

  ];

  public form: FormGroup;
  private rating3: number;
  constructor(private fb: FormBuilder) {
    this.rating3 = 0;
    const formItems:FormGroup[]=[];
    this.data.forEach(item=>{
      formItems.push(this.fb.group(
        {
          quesrtion: [item.id],
          rate: [item.rating]
        }
      ))
    })
    this.form = this.fb.group({
     items:this.fb.array(formItems)
    });
  }

  ngOnInit(): void {
  }

}
