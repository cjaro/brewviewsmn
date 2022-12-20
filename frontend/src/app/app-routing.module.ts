import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VisitListComponent } from "./components/visit-list/visit-list.component";
import { VisitDetailsComponent } from "./components/visit-details/visit-details.component";
import { AddVisitComponent } from "./components/add-visit/add-visit.component";


const routes: Routes = [
  { path: "", redirectTo: "visits", pathMatch: "full" },
  { path: "visits", component: VisitListComponent },
  { path: "visits/:id", component: VisitDetailsComponent },
  { path: "add", component: AddVisitComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
