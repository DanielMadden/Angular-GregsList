import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Separated for organization
import { routes } from './shared/routes';
import { materials } from './shared/materials';

// Components
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarsComponent } from './components/cars/cars.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, CarsComponent, ToolbarComponent, PageHeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),

    // Angular Material
    ...materials,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
