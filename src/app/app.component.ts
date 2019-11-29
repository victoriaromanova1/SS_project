import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { makeApiCall } from "./services/api"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dataForm: FormGroup;
  success = false;
  error = false;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.dataForm = this.formBuilder.group({
      name: '',
      phone: '',
      income: '',
      email: '',
      RequestedAmount: ''
    });
  }

  sendRequest = async () => {
    const data = this.dataForm.getRawValue();
    const response = await makeApiCall('/request', data, {method: "POST"});
    if (response) {
      if (response.status === 'success') {
        this.success = true;
      } else {
        this.error = true;
      }
    }
  }
}
