import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import {RatingModule} from 'primeng/rating';
import {SpinnerModule} from 'primeng/spinner';
import {DropdownModule} from 'primeng/dropdown';
import {TooltipModule} from 'primeng/tooltip';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [ AppComponent ],
  imports:[  
            BrowserModule, BrowserAnimationsModule, 
            ButtonModule, TableModule, CardModule,
            CalendarModule, FormsModule, InputTextModule,
            CheckboxModule, RatingModule, SpinnerModule,
            DropdownModule, TooltipModule
          ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
