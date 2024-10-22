import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { GridtableComponent } from './gridtable/gridtable.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { AgGridModule } from 'ag-grid-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatStepperModule } from '@angular/material/stepper';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';









@NgModule({
  declarations: [
    AppComponent,
    GridtableComponent,
  ],
  imports: [
    MatMenuModule,
    MatFormFieldModule,
    MatIconModule,
    OverlayModule,
    BrowserModule,
    MatStepperModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    BrowserModule,
    FormsModule,   
    BrowserAnimationsModule, 
    MatInputModule, 
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatTabsModule,
    NgbModule,
    AgGridModule.withComponents([])
    
    
  //  AgGridModule.withComponents([]),
  ],
  providers: [
    {
     provide: STEPPER_GLOBAL_OPTIONS,
     useValue: { displayDefaultIndicatorType: false },
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
