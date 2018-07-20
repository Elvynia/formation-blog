import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { ArticleService } from './article.service';
import { RouterModule } from '@angular/router';
import { ROUTES } from './routes';
import { ViewListComponent } from './view-list/view-list.component';
import { ViewEditComponent } from './view-edit/view-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent,
    ViewListComponent,
    ViewEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
