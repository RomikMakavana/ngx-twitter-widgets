import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { TimelineOptions } from './entities/timeline-options';
import { TimelineSource } from './entities/timeline-source';
import { NgxTwitterWidgetsService } from './ngx-twitter-widgets.service';

@Component({
  selector: 'ngx-twitter-timeline',
  template: '',
  styles: []
})
export class NgxTwitterTimelineComponent implements AfterViewInit {

  @Input() source: TimelineSource|object;
  @Input() options: TimelineOptions|object;
  @Output() onLoad: EventEmitter<any> = new EventEmitter();


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

  private async loadWidget() {

    this.widgetService.loadElement(
      "createTimeline",
      this.getObj(this.source),
      this.element,
      this.options,
      (response: object) => {
        this.onLoad.emit(response);
      }
    )

  }

  private getObj(value: any) {
    return typeof value === "object" ? { ...value } : value;
  }

  private async loadScript() {
    return new Promise((resolve, reject) => {
      this.widgetService.load(this.scriptAttr)
        .then(data => { resolve(true); console.log("Script loaded successfully,"); })
        .catch(err => { reject(); console.log("Script load issue,") })
    })
  }

}
