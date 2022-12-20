import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Visit } from "../../models/visit.model";
import { VisitService } from "src/app/services/visit.service";

@Component({
  selector: "app-visit-details",
  templateUrl: "./visit-details.component.html",
  styleUrls: ["./visit-details.component.css"]
})
export class VisitDetailsComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentVisit: Visit = {
    brewery: "",
    date: new Date,
    notes: ""
  };

  message = "";

  constructor(
    private visitService: VisitService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = "";
      this.getVisit(this.route.snapshot.params["id"]);
    }
  }

  getVisit(id: string): void {
    this.visitService.get(id)
      .subscribe({
        next: (data) => {
          this.currentVisit = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateVisit(): void {
    this.message = "";
    this.visitService.update(this.currentVisit.id, this.currentVisit)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : "This visit was updated successfully!";
        },
        error: (e) => console.error(e)
      });
  }

  deleteVisit(): void {
    this.visitService.delete(this.currentVisit.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(["/visits"]);
        },
        error: (e) => console.error(e)
      });
  }
}
