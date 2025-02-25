/*
 * Copyright 2023-2024. Huawei Technologies Co., Ltd. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.huawei.hms.cordova.mlbody.transactors;

import static com.huawei.hms.cordova.mlbody.helpers.LensEngineConstants.FACE_TRANSACTOR_ON_DESTROY;
import static com.huawei.hms.cordova.mlbody.helpers.LensEngineConstants.FACE_TRANSACTOR_ON_RESULT;

import android.content.Context;
import android.util.Log;
import android.util.SparseArray;

import com.huawei.hms.cordova.mlbody.HMSMLBodyPlugin;
import com.huawei.hms.cordova.mlbody.camera.GraphicOverlay;
import com.huawei.hms.cordova.mlbody.helpers.CordovaHelpers;
import com.huawei.hms.cordova.mlbody.providers.face.MLFaceGraphic;
import com.huawei.hms.cordova.mlbody.utils.HMSMLUtils;
import com.huawei.hms.cordova.mlbody.utils.TextUtils;
import com.huawei.hms.mlsdk.common.MLAnalyzer;
import com.huawei.hms.mlsdk.face.MLFace;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

public class FaceAnalyzerTransactor implements MLAnalyzer.MLTransactor<MLFace> {
    private static String TAG = FaceAnalyzerTransactor.class.getSimpleName();

    private GraphicOverlay mGraphicOverlay;

    private JSONObject setting;

    private Context context;

    private CordovaPlugin cordovaPlugin;

    public FaceAnalyzerTransactor(GraphicOverlay ocrGraphicOverlay, JSONObject setting, Context context, CordovaPlugin cordovaPlugin) {
        this.mGraphicOverlay = ocrGraphicOverlay;
        this.setting = setting;
        this.context = context;
        this.cordovaPlugin = cordovaPlugin;
    }

    @Override
    public void destroy() {
        this.mGraphicOverlay.clear();
        CordovaHelpers.sendEvent(cordovaPlugin, FACE_TRANSACTOR_ON_DESTROY);
    }

    @Override
    public void transactResult(MLAnalyzer.Result<MLFace> result) {

        this.mGraphicOverlay.clear();
        SparseArray<MLFace> faceSparseArray = result.getAnalyseList();
        List<MLFace> list = new ArrayList<>();
        for (int i = 0; i < faceSparseArray.size(); i++) {
            list.add(faceSparseArray.valueAt(i));
        }
        for (int i = 0; i < faceSparseArray.size(); i++) {
            try {
                MLFaceGraphic graphic = new MLFaceGraphic(this.mGraphicOverlay, faceSparseArray.valueAt(i), context,
                    this.setting);
                this.mGraphicOverlay.add(graphic);

            } catch (JSONException e) {
                Log.e(TAG, "Error: " + e.getMessage());
            }

        }
        try {
            PluginResult pluginResult = new PluginResult(PluginResult.Status.OK,
                HMSMLUtils.listToJSONArray(list, TextUtils::mlFacetoJSON));
            pluginResult.setKeepCallback(true);
            HMSMLBodyPlugin.getCallbackContext().sendPluginResult(pluginResult);
            CordovaHelpers.sendEvent(cordovaPlugin, FACE_TRANSACTOR_ON_RESULT, HMSMLUtils.listToJSONArray(list, TextUtils::mlFacetoJSON));
            Log.i(TAG, "Face:" + HMSMLUtils.listToJSONArray(list, TextUtils::mlFacetoJSON));
        } catch (JSONException e) {
            Log.e(TAG, "transactResult: error ->" + e.getMessage());
        }
    }
}
