# Angular Twitter Widgets Component

[![NPM](https://img.shields.io/npm/v/react-twitter-embed.svg)](https://www.npmjs.com/package/ngx-twitter-widgets) [![Storybook](https://cdn.jsdelivr.net/gh/storybooks/brand@master/badge/badge-storybook.svg)](https://romikmakavana.github.io/ngx-twitter-widgets/)  
<!-- [![Build Status](https://travis-ci.org/saurabhnemade/react-twitter-embed.svg?branch=storybook-migration)](https://travis-ci.org/saurabhnemade/react-twitter-embed)  -->
<!-- [![Known Vulnerabilities](https://snyk.io/test/github/saurabhnemade/react-twitter-embed/badge.svg)](https://snyk.io/test/github/saurabhnemade/react-twitter-embed)  -->
<!-- [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/saurabhnemade/react-twitter-embed/master/LICENSE) -->


Add Twitter Widgets to your angular project

## Demo

https://romikmakavana.github.io/ngx-twitter-widgets/

## Install

```bash
npm install --save ngx-twitter-widgets
```

## Usage

### 1. Import the `NgxTwitterWidgetsModule`:
```jsx
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxTwitterWidgetsModule } from "ngx-twitter-widgets";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxTwitterWidgetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

**Add Timeline:**

    <ngx-twitter-timeline
      [source]="{sourceType: 'profile', screenName: 'makavana_romik'}"
      [options]="{height: '400'}" (onLoad)="onLoad($event)">
    </ngx-twitter-timeline>

**Adding Tweet:**

    <ngx-twitter-tweet
      [tweetID]="'20'"
      [options]="{ size: 'large', text: 'Tweet from Twitter' }" (onLoad)="onLoad($event)">
    </ngx-twitter-tweet>

**Add Share Button:**

    <ngx-twitter-share
      [url]="'https://twitter.com/makavana_romik'"
      [options]="{ size: 'large', text: 'I am Romik Makavana' }" (onLoad)="onLoad($event)">
    </ngx-twitter-share>

**Add Mention Button:**

    <ngx-twitter-mention
      [username]="'makavana_romik'"
      (onLoad)="onLoad($event)">
    </ngx-twitter-mention>

**Add Hashtag button:**

    <ngx-twitter-hashtag
      [hashtag]="'twitterdev'"
      (onLoad)="onLoad($event)">
    </ngx-twitter-hashtag>

 **Add follow button:**

    <ngx-twitter-follow style="width: 250px;"
      [username]="'makavana_romik'"
      (onLoad)="onLoad($event)">
    </ngx-twitter-follow>

 **Explore All Options by Twitter Widgets API:**

https://romikmakavana.github.io/ngx-twitter-widgets/


## License

MIT © [RomikMakavana](https://github.com/RomikMakavana)

Copyright (c) 2019

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
