import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  availableSides = [
    { display: 'None', value: '' },
    { display: 'Light', value: 'light' },
    { display: 'Dark', value: 'dark' }
  ];

  swService: StarWarsService;

  constructor(starWarsService: StarWarsService) {
    this.swService = starWarsService;
  }

  ngOnInit(): void { }

  onSubmit(submittedForm : any) {
    this.swService.addCharacter(submittedForm.value.name, submittedForm.value.side);
  }
}
