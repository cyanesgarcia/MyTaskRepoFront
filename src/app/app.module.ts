import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { TaskRestControllerService } from './services/task/api/taskRestController.service';
import {MatSelectModule} from '@angular/material/select';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatTableModule,
  MatSortModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatCardModule,
  MatSlideToggleModule,
  MatInputModule,
  MatRadioModule,
  MatDialogModule,
} from '@angular/material';

import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatSortModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatSlideToggleModule,
    MatInputModule,
    MatRadioModule,
    FormsModule,
    MatDialogModule,
    HttpModule,
    HttpClientModule,
    MatSelectModule,
  ],
  providers: [TaskRestControllerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
