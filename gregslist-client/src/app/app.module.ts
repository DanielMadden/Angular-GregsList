import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Separated for organization
import { routes } from './shared/routes';
import { materialImports } from './shared/materials';

// Components
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarsComponent } from './components/cars/cars.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogCarComponent } from './components/dialogs/dialog-car/dialog-car.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarViewComponent } from './components/car-view/car-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarsComponent,
    ToolbarComponent,
    PageHeaderComponent,
    DialogCarComponent,
    CarViewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),

    // Angular Material
    ...materialImports,

    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
