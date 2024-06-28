import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { TaskComponent } from './task/task.component';
import { TaskService } from './task.service';
import { TableModule } from 'primeng/table';
import { AppComponent } from './app.component'; // Make sure to import AppComponent

@NgModule({
  declarations: [
    AppComponent, // Declare AppComponent
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  // Add FormsModule here
    AppRoutingModule,
    TableModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent] // Bootstrap AppComponent
})
export class AppModule { }

