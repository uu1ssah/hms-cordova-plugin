/*
    Copyright 2023-2024. Huawei Technologies Co., Ltd. All rights reserved.

    Licensed under the Apache License, Version 2.0 (the "License")
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Platform } from "@ionic/angular";
declare var HMSMLTextPlugin;
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor(private router: Router, public platform: Platform) {}
  ionViewWillEnter() {
    this.platform.ready().then(() => {
      var configInput = {
        apiKey: "your_apiKey",
      };
      HMSMLTextPlugin.serviceInitializer(configInput);
    });
  }

  bcrPage() {
    this.router.navigate(["bcr"]);
  }
  textPage() {
    this.router.navigate(["text"]);
  }
  documentPage() {
    this.router.navigate(["document"]);
  }
  gcrPage() {
    this.router.navigate(["generalcard"]);
  }
  formRecogPage() {
    this.router.navigate(["formrecognition"]);
  }
  icrVnPage() {
    this.router.navigate(["icrVn"]);
  }
  icrCnPage() {
    this.router.navigate(["icrCn"]);
  }
}
