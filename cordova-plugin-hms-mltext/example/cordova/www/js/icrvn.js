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
var $imageResult = null;

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("IcrVnCardAnalyserPicker").addEventListener("click", function () { getimgPicker(); });
    document.getElementById("icrVnDetector").addEventListener("click", () => icrVnDetector());
    document.getElementById("captureImage").addEventListener("click", () => captureImage());
    document.getElementById("localAnalyzer").addEventListener("click", () => localAnalyzer());


}, false);

async function getimgPicker() {
    (async () => {
        const file = await chooser.getFile();
        $imageResult = file.uri;
    })();
}

async function captureImage() {
    var icrVnDetectorReq = {
        captureType: 1,
        filePath: $imageResult,
    };
    try {
        const result = await HMSMLText.icrVnCardDetector(icrVnDetectorReq);
        alert(JSON.stringify(result.cardBitmap));

        document.getElementById("detectedIcrVnCardImage").src = "data:image/jpeg;base64," + result.cardBitmap;
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}

async function icrVnDetector() {
    var icrVnDetectorReq = {
        captureType: 0,
    };
    try {
        const result = await HMSMLText.icrVnCardDetector(icrVnDetectorReq);
        alert(JSON.stringify(result));
        console.log(JSON.stringify(result));
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}

async function localAnalyzer() {
    var localAnalyzerReq = {

        mlIcrAnalyzerSetting: {
            countryCode: "VN",
            sideType: "FRONT",
        },
        filePath: $imageResult,

    };
    try {
        const result = await HMSMLText.icrLocalAnalyser(localAnalyzerReq);
        alert(JSON.stringify(result));
        console.log(JSON.stringify(result));
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}
