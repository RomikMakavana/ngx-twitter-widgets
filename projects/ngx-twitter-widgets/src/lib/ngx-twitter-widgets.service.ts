import { ElementRef, Injectable } from '@angular/core';

interface Scripts {
  name: string;
  src: string;
}

export const ScriptStore: Scripts[] = [
  { name: 'twttr', src: 'https://platform.twitter.com/widgets.js' },
];

@Injectable({
  providedIn: 'root'
})
export class NgxTwitterWidgetsService {

  private scripts: any = {};
  private attr: string = "twElement";
  private scriptAttr: string | any = "twttr";

  constructor() {
    ScriptStore.forEach((script: any) => {
      this.scripts[script.name] = {
        loaded: false,
        src: script.src
      };
    });
  }
  
  load(...scripts: string[]) {
    const promises: any[] = [];
    scripts.forEach((script) => promises.push(this.loadScript(script)));
    return Promise.all(promises);
  }

  public get domStatus(): boolean {
    return !!(
      typeof window !== "undefined" &&
      window.document &&
      window.document.createElement
    )
  }

  loadScript(name: string) {
    return new Promise((resolve, reject) => {
      if (!this.scripts[name].loaded) {
        //load script
        let script: any = document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.scripts[name].src;
        if (script.readyState) {  //IE
          script.onreadystatechange = () => {
            if (script.readyState === "loaded" || script.readyState === "complete") {
              script.onreadystatechange = null;
              this.scripts[name].loaded = true;
              resolve({ script: name, loaded: true, status: 'Loaded' });
            }
          };
        } else {  //Others
          script.onload = () => {
            this.scripts[name].loaded = true;
            resolve({ script: name, loaded: true, status: 'Loaded' });
          };
        }
        script.onerror = (error: any) => resolve({ script: name, loaded: false, status: 'Loaded' });
        document.getElementsByTagName('head')[0].appendChild(script);
      } else {
        resolve({ script: name, loaded: true, status: 'Already Loaded' });
      }
    });
  }

  async loadElement(widgetFunction: string, source: object | string, element: ElementRef, options: object, onLoad: Function) {
    element.nativeElement.querySelectorAll("*").forEach((child: any) => {
      if (child.hasAttribute(this.attr)) {
        child.remove();
      }
    })

    const childEl = document.createElement("div");
    childEl.setAttribute(this.attr, "yes");
    element.nativeElement.appendChild(childEl);

    try {
      const wf: any = await this.twitterWidget();

      const resultMaybe = await wf[widgetFunction](
        source,
        childEl,
        this.getObj(options)
      );


      onLoad({ status: true });
    } catch (error) {
      onLoad({ status: false, error });
      childEl.innerHTML = "Issue on load Twitter Follow Button."
    }
  }

  private twitterWidget() {
    return new Promise((resolve, reject) => {
      const twttr: any = window[this.scriptAttr];
      if (!twttr || !twttr.widgets) {
        reject();
      }
      resolve(twttr.widgets);
    })
  }

  private getObj(value: any) {
    return typeof value === "object" ? { ...value } : value;
  }


}
