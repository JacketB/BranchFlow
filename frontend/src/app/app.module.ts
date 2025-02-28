import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskComponent } from './Components/task/task.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {CdkDrag, CdkDropList, CdkDropListGroup} from "@angular/cdk/drag-drop";
import { TasksListComponent } from './Components/tasks-list/tasks-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TasksListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCheckboxModule,
    CdkDropList,
    CdkDrag,
    CdkDropListGroup
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
