import { Component, OnInit } from '@angular/core';
import { Brew } from "src/app/models/brew.model";
import { BrewService } from "src/app/services/brew.service";

@Component({
  selector: 'app-add-brew',
  templateUrl: './add-brew.component.html',
  styleUrls: ['./add-brew.component.css']
})
export class AddBrewComponent implements OnInit {
  brew: Brew = {
    name: "",
    rating: 0,
    notes: "",
    abv: 0,
    visit_id: null
  };

  submitted = false;


  constructor() { }

  ngOnInit(): void {
  }

}
