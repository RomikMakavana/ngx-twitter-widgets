import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HashtagOptions } from './entities/hashtag-options';
import { NgxTwitterWidgetsService } from './ngx-twitter-widgets.service';

@Component({
  selector: 'ngx-twitter-hashtag',
  template: ''
})
export class NgxTwitterHashtagComponent implements AfterViewInit {

  @Input() hashtag: string;
  @Input() options: HashtagOptions|object;
  @Output() onLoad: EventEmitter<any> = new EventEmitter();

  private attr: string = "twElement";
  private scriptAttr: string | any = "twttr";
  private error: boolean = false;
  constructor(
    private element: ElementRef,
    public widgetService: NgxTwitterWidgetsService
  ) { }

  async ngAfterViewInit() {
    await this.loadScript();
    this.loadWidget();
  }

  async loadWidget() {
    this.widgetService.loadElement(
      "createHashtagButton",
      this.hashtag,
      this.element,
      this.options,
      (response: object) => {
        this.onLoad.emit(response);
      }
    )
  }

  private async loadScript() {
    return new Promise((resolve, reject) => {
      this.widgetService.load(this.scriptAttr)
        .then(data => { resolve(true); console.log("Script loaded successfully,"); })
        .catch(err => { reject(); console.log("Script load issue,") })
    })
  }

}
