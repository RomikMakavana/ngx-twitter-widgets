import { NgModule } from '@angular/core';
import { NgxTwitterTimelineComponent } from './ngx-twitter-timeline.component';
import { NgxTwitterFollowComponent } from './ngx-twitter-follow.component';
import { NgxTwitterHashtagComponent } from './ngx-twitter-hashtag.component';
import { NgxTwitterMentionComponent } from './ngx-twitter-mention.component';
import { NgxTwitterShareComponent } from './ngx-twitter-share.component';
import { NgxTwitterTweetComponent } from './ngx-twitter-tweet.component';



@NgModule({
  declarations: [
    NgxTwitterTimelineComponent,
    NgxTwitterFollowComponent,
    NgxTwitterHashtagComponent,
    NgxTwitterMentionComponent,
    NgxTwitterShareComponent,
    NgxTwitterTweetComponent
  ],
  imports: [
  ],
  exports: [
    NgxTwitterTimelineComponent,
    NgxTwitterFollowComponent,
    NgxTwitterHashtagComponent,
    NgxTwitterMentionComponent,
    NgxTwitterShareComponent,
    NgxTwitterTweetComponent
  ]
})
export class NgxTwitterWidgetsModule { }
