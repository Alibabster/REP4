import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {PostService} from './services/post.service';
import {PostingService} from './services/posting.service';
import {ContactsComponent} from './contacts/contacts.component';
import {SocialMediaComponent} from './sotialMedia/socialMedia.component';


const newsRoutes: Routes = [
  {path: 'contacts', component: ContactsComponent},
  {path: 'social_media', component: SocialMediaComponent}
];

@NgModule({
  declarations: [
    ContactsComponent,
    SocialMediaComponent,
  ],
  exports: [RouterModule],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild(newsRoutes),
  ],
  providers: [
    PostService,
    PostingService],
})
export class NewsModule { }
