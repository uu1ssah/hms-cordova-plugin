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
import { Component, OnInit } from '@angular/core';
declare var HMSMLBodyPlugin;
@Component({
  selector: 'app-liveface',
  templateUrl: './liveface.page.html',
  styleUrls: ['./liveface.page.scss'],
})
export class LivefacePage {
  constructor() { }

 
  public async liveFaceAnalyser() {
     var mlFace = null;	
    mlFace = new HMSMLBodyPlugin.liveEngineAnalyser("scene");
    var lensEngineReq={
        analyzerName:HMSMLBodyPlugin.MLAnalyzerName.LIVEFACE,
        
    }
	await mlFace.startMLLive({lensEngineReq});
	await mlFace.on(HMSMLBodyPlugin.Events.FACE_TRANSACTOR_ON_RESULT, (value) => {
		console.log(JSON.stringify(value));
		
		
	});
}
public liveFaceAnalyserDestroy() {
  HMSMLBodyPlugin.destroy(
      function (res) {
          console.log(JSON.stringify(res));
      }, function (err) { console.log(JSON.stringify(err)); }
  );
}
}