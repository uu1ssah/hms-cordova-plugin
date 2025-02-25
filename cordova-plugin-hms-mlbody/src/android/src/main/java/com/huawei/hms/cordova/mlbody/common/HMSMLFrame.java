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

package com.huawei.hms.cordova.mlbody.common;

import android.content.Context;

import com.huawei.hms.cordova.mlbody.helpers.CordovaErrors;
import com.huawei.hms.cordova.mlbody.helpers.CordovaHelpers;
import com.huawei.hms.cordova.mlbody.interfaces.HMSProvider;
import com.huawei.hms.cordova.mlbody.logger.HMSLogger;
import com.huawei.hms.cordova.mlbody.utils.HMSMLUtils;
import com.huawei.hms.mlsdk.common.MLFrame;

import org.apache.cordova.CallbackContext;
import org.json.JSONException;
import org.json.JSONObject;

public class HMSMLFrame extends HMSProvider {
    private static final String TAG = HMSMLFrame.class.getSimpleName();

    private CallbackContext callbackContext;

    private MLFrame frame;

    public HMSMLFrame(Context ctx) {
        super(ctx);
    }

    public void initializeMLFrame(final JSONObject params, final CallbackContext callbackContext) throws JSONException {
        String actionName = params.getString("actionName");
        this.callbackContext = callbackContext;
        this.frame = HMSMLUtils.getFrame(getContext(), params);

        CordovaHelpers.frameController(frame, getContext(), callbackContext, "initializeMLFrame");
        switch (actionName) {
            case "getPreviewBitmap":
                getPreviewBitmap();
                break;
            case "readBitmap":
                readBitmap();
                break;
            case "rotate":
                rotate(params);
                break;
            default:
                callbackContext.error(CordovaErrors.ILLEGAL_PARAMETER);
                break;
        }
    }

    private void getPreviewBitmap() {
        callbackContext.success(HMSMLUtils.bitmapToBase64(frame.getPreviewBitmap()));
        HMSLogger.getInstance(getContext()).sendSingleEvent("mlFrameAnalyser");
    }

    private void readBitmap() {
        callbackContext.success(HMSMLUtils.bitmapToBase64(frame.readBitmap()));
        HMSLogger.getInstance(getContext()).sendSingleEvent("mlFrameAnalyser");
    }

    private void rotate(final JSONObject params) throws JSONException {
        int quadrant = params.getInt("quadrant");
        callbackContext.success(HMSMLUtils.bitmapToBase64(frame.rotate(frame.readBitmap(), quadrant)));
        HMSLogger.getInstance(getContext()).sendSingleEvent("mlFrameAnalyser");
    }

}
