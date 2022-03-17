import { Component, OnInit } from "@angular/core";
import { Visit } from "src/app/models/visit.model";
import { VisitService } from "src/app/services/visit.service";

@Component({
  selector: "app-add-visit",
  templateUrl: "./add-visit.component.html",
  styleUrls: ["./add-visit.component.css"]
})
export class AddVisitComponent implements OnInit {
  visit: Visit = {
    name: "",
    description: "",
    published: false
  };

  submitted = false;

  constructor(private visitService: VisitService) {
  }

  ngOnInit(): void {
  }

  saveVisit(): void {
    const data = {
      name: this.visit.name,
      description: this.visit.description
    };
    this.visitService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newVisit(): void {
    this.submitted = false;
    this.visit = {
      name: "",
      description: "",
      published: false
    };
  }
}
