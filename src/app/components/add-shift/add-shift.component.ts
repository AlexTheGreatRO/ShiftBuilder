import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { FirestoreService } from 'src/app/firestore.service';

@Component({
  selector: 'app-add-shift',
  templateUrl: './add-shift.component.html',
  styleUrls: ['./add-shift.component.css'],
})
export class AddShiftComponent implements OnInit {
  message = '';
  addShiftForm = new FormGroup({
    date: new FormControl('', [Validators.required]),
    startTime: new FormControl('', [
      Validators.required,
      Validators.min(0),
      Validators.max(23),
    ]),
    endTime: new FormControl('', [
      Validators.required,
      Validators.min(0),
      Validators.max(23),
    ]),
    hourlyWage: new FormControl('', [Validators.required, Validators.min(0)]),
    workPlace: new FormControl('', [Validators.required]),
    shiftName: new FormControl('', [Validators.required]),
    comments: new FormControl(''),
  });
  constructor(public fireStoreService: FirestoreService) {}

  get date() {
    return this.addShiftForm.get('date') as FormControl;
  }

  get startTime() {
    return this.addShiftForm.get('startTime') as FormControl;
  }

  get endTime() {
    return this.addShiftForm.get('endTime') as FormControl;
  }

  get hourlyWage() {
    return this.addShiftForm.get('hourlyWage') as FormControl;
  }

  get workPlace() {
    return this.addShiftForm.get('workPlace') as FormControl;
  }

  get shiftName() {
    return this.addShiftForm.get('shiftName') as FormControl;
  }

  get comments() {
    return this.addShiftForm.get('comments') as FormControl;
  }

  async addShift() {
    if (this.startTime.value > this.endTime.value) {
      alert('Start time must be before end time!');
      return;
    }
  }

  ngOnInit(): void {}
}
