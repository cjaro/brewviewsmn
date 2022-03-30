import { Component, Input, OnInit } from '@angular/core';
import { Brew } from "src/app/models/brew.model";
import { BrewService } from "src/app/services/brew.service";

@Component({
  selector: 'app-brew-list',
  templateUrl: './brew-list.component.html',
  styleUrls: ['./brew-list.component.css']
})
export class BrewListComponent implements OnInit {
  brews?: Brew[];
  currentBrew: Brew = {};
  currentIndex = -1;
  name = "";

  constructor(private brewService: BrewService) {
  }

  ngOnInit(): void {
    this.retrieveBrews();
  }

  retrieveBrews(): void {
    this.brewService.getAll()
      .subscribe({
        next: (data) => {
          this.brews = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveBrews();
    this.currentBrew = {};
    this.currentIndex = -1;
  }

  setActiveBrew(brew: Brew, index: number): void {
    this.currentBrew = brew;
    this.currentIndex = index;
  }

}
