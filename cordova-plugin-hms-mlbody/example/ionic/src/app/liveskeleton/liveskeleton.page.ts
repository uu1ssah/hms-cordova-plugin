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
import { Component, OnInit } from "@angular/core";
declare var HMSMLBodyPlugin;
@Component({
  selector: "app-liveskeleton",
  templateUrl: "./liveskeleton.page.html",
  styleUrls: ["./liveskeleton.page.scss"],
})
export class liveskeletonPage {
  constructor() {}

  public async liveSkeletonAnalyser() {
    var mlSkeleton = null;
    mlSkeleton = new HMSMLBodyPlugin.liveEngineAnalyser("scene");
    var lensEngineReq = {
      analyzerName: HMSMLBodyPlugin.MLAnalyzerName.LIVESKELETON,
    };
    await mlSkeleton.startMLLive({ lensEngineReq });
    await mlSkeleton.on(HMSMLBodyPlugin.Events.SKELETON_TRANSACTOR_ON_RESULT, (value) => {
      console.log(JSON.stringify(value));
    });
  }
  public liveHandkeyAnalyserDestroy() {
    HMSMLBodyPlugin.destroy(
      function (res) {
        console.log(JSON.stringify(res));
      },
      function (err) {
        console.log(JSON.stringify(err));
      }
    );
  }
}
