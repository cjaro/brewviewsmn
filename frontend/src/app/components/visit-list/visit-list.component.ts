import { Component, OnInit } from "@angular/core";
import { Visit } from "src/app/models/visit.model";
import { VisitService } from "src/app/services/visit.service";

@Component({
  selector: "app-visit-list",
  templateUrl: "./visit-list.component.html",
  styleUrls: ["./visit-list.component.css"]
})
export class VisitListComponent implements OnInit {
  visits?: Visit[];
  currentVisit: Visit = {};
  currentIndex = -1;
  name = "";

  constructor(private visitService: VisitService) {
  }

  ngOnInit(): void {
    this.retrieveVisits();
  }

  retrieveVisits(): void {
    this.visitService.getAll()
      .subscribe({
        next: (data) => {
          this.visits = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveVisits();
    this.currentVisit = {};
    this.currentIndex = -1;
  }

  setActiveVisit(visit: Visit, index: number): void {
    this.currentVisit = visit;
    this.currentIndex = index;
  }

  removeAllVisits(): void {
    this.visitService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchName(): void {
    this.currentVisit = {};
    this.currentIndex = -1;
    this.visitService.findByName(this.name)
      .subscribe({
        next: (data) => {
          this.visits = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
