import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TalkingService } from './talking.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-talking',
    templateUrl: './talking.component.html',
    styleUrls: ['./talking.component.scss'],
    providers: [TalkingService]
})

export class TalkingComponent implements OnInit {
  
  focus: any;
  focus1: any;

  private form: FormGroup;

  constructor(private service: TalkingService, private fb: FormBuilder, private toastr: ToastrService) { 
    this.form = fb.group({
      'name': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
      'message': new FormControl('', Validators.required)
    });
  }

  ngOnInit() {}

  sendMessage(){
    if(this.form.valid){
      this.service.sendMessage(this.form.value).then(()=>{
        this.toastr.success('The data has been sentd', 'Success')
        this.form.reset()
      }).catch(()=>{
        this.toastr.error('Error sending data', 'Error')
      })
    }else{
      this.toastr.warning('The form has empty data', 'Alert')
    }
  }

}
