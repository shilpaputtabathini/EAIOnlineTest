import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//Component
import { ShowDataComponent } from './show-data/show-data.component';

// Pipe
import { SearchByTitleUsingPipe } from '../app/Pipe/search-by-title-pipe';

//services 
import { PostDataServices } from '../app/service/post-data-services';

@NgModule({
  declarations: [
    AppComponent,
    ShowDataComponent,
    SearchByTitleUsingPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PostDataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
