import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { QuestionControlService } from '../../../components/questions/question-control.service';
import { RegisterQuestionsService } from '../../../components/questions/questionsService/registerQuestionsService.service';

import { Router } from '@angular/router';

@Component({
	selector: 'app-signup-sailing',
	templateUrl: '../../../components/dynamic-form-group/dynamic-form.component.html',
	styleUrls: ['../../../components/dynamic-form-group/dynamic-form.component.css'],
	providers: [RegisterQuestionsService, QuestionControlService]
})

export class SignupSailingComponent implements OnInit {

	questions: any[];
	form: FormGroup;

	formTitleText = "Register your Sailing Experience"
	formButtonText = "Submit"

	constructor(
		private router: Router,
		private qcs: QuestionControlService,
		private RegisterQuestionsService: RegisterQuestionsService
	) {
		this.questions = RegisterQuestionsService.getSailingQuestions();
	}


	ngOnInit() {
		this.form = this.qcs.toFormGroup(this.questions);
		console.log('Sailing form loaded!');
	}

	save(form: any): boolean {
		if (!this.form.valid) {
			return false;
		}

		console.log(this.form.value)
		return true;
	}

	buttonOnClick() {
		if (this.save(this.form)) {
			this.router.navigate(['/login']);
		}

	}
}
