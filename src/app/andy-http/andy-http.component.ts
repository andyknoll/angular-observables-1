/* andy-http.component.ts */

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-andy-http',
  templateUrl: './andy-http.component.html',
  styleUrls: ['./andy-http.component.css']
})
export class AndyHttpComponent implements OnInit {
  data: Object;
  loading: boolean;
  reqUrl: string;
  currReq: number;

  info = {
    title: "",
    descr1: "",
    descr2: "",
    descr3: ""
  };


  constructor(private http: HttpClient) {}

  ngOnInit() {}

  
  makeRequest1(): void {
    let rnd = Math.random().toFixed(4);
    this.reqUrl = 'http://andyknoll.com/us-states/?rpc=getAll&rnd=' + rnd;
    this.currReq = 1;
    this.data = null;
    this.loading = true;
    console.log("SimpleHttpComponent.makeRequest1");
    console.log(this.reqUrl);
    this.http.get(this.reqUrl)
      .subscribe(
        (respData) => {
          console.log("subscribe");
          this.data = respData;
          this.loading = false;
          console.log(this.data);
        },
        (error) => console.log("subscribe ERROR"),
        () => console.log("subscribe COMPLETE")
      );
  }

  makeRequest2(): void {
    let rnd = Math.random().toFixed(4);
    this.reqUrl = 'http://andyknoll.com/us-states/?rpc=getRandom&rnd=' + rnd;
    this.currReq = 2;
    this.data = null;
    this.loading = true;
    console.log("SimpleHttpComponent.makeRequest2");
    console.log(this.reqUrl);
    this.http.get(this.reqUrl)    // shorthand version
      .subscribe(respData => {
        this.data = respData;
        this.loading = false;
        console.log(this.data);
      });
  }

  // get this from the server app?
  showAboutInfo(): void {
    this.currReq = 3;
    this.data = null;
    this.loading = false;
    this.info.title = "About this app...";
    this.info.descr1 = "This small Angular 8 app demonstrates making HTTP requests using the GET Obervable.";
    this.info.descr2 = "It issues requests to a small custom PHP API to introduce some latency into the responses.";
    this.info.descr3 = "The response is an Observable which uses its subscribe() method to emit a data stream and update the visible component area.";
    console.log(this.info);
  }
}
