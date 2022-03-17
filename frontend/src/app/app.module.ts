import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AddVisitComponent } from "./components/add-visit/add-visit.component";
import { VisitDetailsComponent } from "./components/visit-details/visit-details.component";
import { VisitListComponent } from "./components/visit-list/visit-list.component";

@NgModule({
  declarations: [
    AppComponent,
    AddVisitComponent,
    VisitDetailsComponent,
    VisitListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
