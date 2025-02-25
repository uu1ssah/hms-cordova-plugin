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

package com.huawei.hms.cordova.mlbody;

import android.util.Log;

import com.huawei.hms.cordova.mlbody.helpers.CordovaHelpers;
import com.huawei.hms.cordova.mlbody.logger.HMSLogger;
import com.huawei.hms.cordova.mlbody.providers.face.MLStillFaceAnalyser;
import com.huawei.hms.cordova.mlbody.providers.faceverification.MLStillFaceVerificationAnalyser;
import com.huawei.hms.cordova.mlbody.providers.gesture.MLStillGestureAnalyser;
import com.huawei.hms.cordova.mlbody.providers.handkeypoint.MLStillHandKeypointAnalyser;
import com.huawei.hms.cordova.mlbody.providers.interactivelivenessdetection.MLInteractiveLivenessCustomDetectionHandler;
import com.huawei.hms.cordova.mlbody.providers.interactivelivenessdetection.MLInteractiveLivenessDetectionAnalyser;
import com.huawei.hms.cordova.mlbody.providers.livenessdetection.MLLivenessDetectionAnalyser;
import com.huawei.hms.cordova.mlbody.providers.skeleton.MLStillSkeletonAnalyser;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;

public class HMSMLBody extends CordovaPlugin {

    public static final String TAG = HMSMLBody.class.getSimpleName();

    private MLLivenessDetectionAnalyser liveLivenessDetection;

    private MLStillHandKeypointAnalyser stillHandKeyPointAnalyse;

    private MLStillSkeletonAnalyser stillSkeletonAnalyse;

    private MLStillFaceAnalyser stillFaceAnalyse;

    private MLStillGestureAnalyser stillGestureAnalyser;

    private MLStillFaceVerificationAnalyser faceVerificationAnalyser;

    private MLInteractiveLivenessDetectionAnalyser interactiveLivenessDetectionAnalyser;

    private MLInteractiveLivenessCustomDetectionHandler interactiveLivenessCustomDetectionHandler;

    public void pluginInitialize() {
        stillFaceAnalyse = CordovaHelpers.initializeProvider(new MLStillFaceAnalyser(cordova.getContext()), cordova,
            this);
        liveLivenessDetection = CordovaHelpers.initializeProvider(new MLLivenessDetectionAnalyser(cordova.getContext()),
            cordova, this);
        stillHandKeyPointAnalyse = CordovaHelpers.initializeProvider(
            new MLStillHandKeypointAnalyser(cordova.getContext()), cordova, this);
        stillSkeletonAnalyse = CordovaHelpers.initializeProvider(new MLStillSkeletonAnalyser(cordova.getContext()),
            cordova, this);
        stillGestureAnalyser = CordovaHelpers.initializeProvider(new MLStillGestureAnalyser(cordova.getContext()),
            cordova, this);
        faceVerificationAnalyser = CordovaHelpers.initializeProvider(
            new MLStillFaceVerificationAnalyser(cordova.getContext()), cordova, this);
        interactiveLivenessDetectionAnalyser = CordovaHelpers.initializeProvider(new MLInteractiveLivenessDetectionAnalyser(
            cordova.getContext()), cordova, this);
        interactiveLivenessCustomDetectionHandler = CordovaHelpers.initializeProvider(
            new MLInteractiveLivenessCustomDetectionHandler(cordova.getContext(), cordova.getActivity()), cordova, this);
    }

    public boolean execute(final String action, final JSONArray args, final CallbackContext callbackContext) {
        JSONObject params = args.optJSONObject(0);
        try {
            switch (action) {
                case "ACTION_LIVENESS_DETECTION": {
                    HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("livenessDetection");
                    cordova.getActivity().runOnUiThread(() -> {
                        liveLivenessDetection.initializeLivenessAnalyser(params, callbackContext);

                    });
                    return true;
                }
                case "ACTION_STILL_SKELETON_ANALYSE": {
                    cordova.getThreadPool().execute(() -> {
                        HMSLogger.getInstance(cordova.getContext())
                            .startMethodExecutionTimer("stillSkeletonAnalyse");
                        try {
                            stillSkeletonAnalyse.initializeStillSkeletonAnalyser(params, callbackContext);
                        } catch (JSONException e) {
                            Log.e(TAG, "initializer: ACTION_STILL_SKELETON_ANALYSE ->" + e.getMessage());
                        }
                    });
                    return true;
                }
                case "ACTION_STILL_SKELETON_ANALYSE_STOP": {
                    cordova.getThreadPool().execute(() -> {
                        HMSLogger.getInstance(cordova.getContext())
                            .startMethodExecutionTimer("stillSkeletonAnalyseStop");
                        try {
                            stillSkeletonAnalyse.stopSkeleton(callbackContext);
                        } catch (IOException e) {
                            Log.e(TAG, "initializer: ACTION_STILL_SKELETON_ANALYSE_STOP ->" + e.getMessage());
                        }
                    });
                    return true;
                }
                case "ACTION_STILL_GESTURE_ANALYSE": {
                    cordova.getThreadPool().execute(() -> {
                        HMSLogger.getInstance(cordova.getContext())
                            .startMethodExecutionTimer("stillGestureAnalyse");
                        try {
                            stillGestureAnalyser.initializeStillGestureAnalyser(params, callbackContext);
                        } catch (JSONException e) {
                            Log.e(TAG, "initializer: ->ACTION_STILL_GESTURE_ANALYSE ->" + e.getMessage());
                        }
                    });
                    return true;
                }
                case "ACTION_STILL_GESTURE_ANALYSE_STOP": {
                    cordova.getThreadPool().execute(() -> {
                        HMSLogger.getInstance(cordova.getContext())
                            .startMethodExecutionTimer("stillGestureAnalyseStop");
                        stillGestureAnalyser.stopGestureAnalyser(callbackContext);
                    });
                    return true;
                }
                case "ACTION_STILL_GESTURE_ANALYSE_SETTING": {
                    cordova.getThreadPool().execute(() -> {
                        HMSLogger.getInstance(cordova.getContext())
                            .startMethodExecutionTimer("stillGestureAnalyseSetting");
                        try {
                            stillGestureAnalyser.getGestureAnalyserSetting(callbackContext);
                        } catch (JSONException e) {
                            Log.e(TAG, "StillGestureAnalyseSetting" + e.getMessage());
                        }
                    });
                    return true;
                }
                case "ACTION_STILL_HANDKEYPOINT_ANALYSE": {
                    cordova.getThreadPool().execute(() -> {
                        HMSLogger.getInstance(cordova.getContext())
                            .startMethodExecutionTimer("stillHandkeypointAnalyse");
                        try {
                            stillHandKeyPointAnalyse.initializeStillHandKeyAnalyser(params, callbackContext);
                        } catch (JSONException e) {
                            Log.e(TAG, "initializer: ACTION_STILL_HANDKEYPOINT_ANALYSE ->" + e.getMessage());
                        }
                    });
                    return true;
                }
                case "ACTION_STILL_HANDKEYPOINT_ANALYSE_STOP": {
                    cordova.getThreadPool().execute(() -> {
                        HMSLogger.getInstance(cordova.getContext())
                            .startMethodExecutionTimer("stillHandkeypointAnalyseStop");
                        stillHandKeyPointAnalyse.stopHandKeypoint(callbackContext);
                    });
                    return true;
                }
                case "ACTION_STILL_HANDKEYPOINT_ANALYSE_SETTING": {
                    cordova.getThreadPool().execute(() -> {
                        HMSLogger.getInstance(cordova.getContext())
                            .startMethodExecutionTimer("stillHandkeypointAnalyseSetting");
                        try {
                            stillHandKeyPointAnalyse.getHandKeypointSetting(callbackContext);
                        } catch (JSONException e) {
                            Log.e(TAG, " stillHandKeypointSetting" + e.getMessage());
                        }
                    });
                    return true;
                }
                case "ACTION_STILL_FACE_VERIFICATION": {
                    cordova.getThreadPool().execute(() -> {
                        HMSLogger.getInstance(cordova.getContext())
                            .startMethodExecutionTimer("stillFaceVerification");
                        try {
                            faceVerificationAnalyser.initializeFaceVerification(params, callbackContext);
                        } catch (JSONException e) {
                            Log.e(TAG, "initializer: ACTION_STILL_FACE_VERIFICATION ->" + e.getMessage());
                        }
                    });
                    return true;
                }
                case "ACTION_STOP_STILL_FACE_VERIFICATION": {
                    cordova.getThreadPool().execute(() -> {
                        HMSLogger.getInstance(cordova.getContext())
                            .startMethodExecutionTimer("stillFaceVerificationAnalyseStop");
                        faceVerificationAnalyser.stopStillFaceVerificationAnalyser(callbackContext);
                    });
                    return true;
                }
                case "ACTION_STILL_FACE_VERIFICATION_ANALYSE_SETTING": {
                    cordova.getThreadPool().execute(() -> {
                        HMSLogger.getInstance(cordova.getContext())
                            .startMethodExecutionTimer("stillFaceVerificationAnalyserSetting");
                        try {
                            faceVerificationAnalyser.getFaceVerificationAnalyserSetting(callbackContext);
                        } catch (JSONException e) {
                            Log.e(TAG,
                                "initializer : ACTION_STILL_FACE_VERIFICATION_ANALYSE_SETTING " + e.getMessage());
                        }
                    });
                    return true;
                }
                case "ACTION_STILL_FACE_VERIFICATION_FACEDETECTED":
                    HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("stillFace");
                    try {
                        faceVerificationAnalyser.setFaceDetected(params, callbackContext);
                    } catch (JSONException e) {
                        Log.e(TAG, "StillFaceVerificationDetected" + e.getMessage());
                    }
                    return true;
                case "ACTION_STILL_FACE_ANALYSER": {
                    cordova.getThreadPool().execute(() -> {
                        HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("stillFaceAnalyser");
                        stillFaceAnalyse.initializeStillFaceAnalyser(params, callbackContext);
                    });
                    return true;
                }
                case "ACTION_STILL_FACE_ANALYSER_SETTING": {
                    cordova.getThreadPool().execute(() -> {
                        HMSLogger.getInstance(cordova.getContext())
                            .startMethodExecutionTimer("stillFaceAnalyserSetting");
                        try {
                            stillFaceAnalyse.getAnalyzerSetting(callbackContext);
                        } catch (JSONException e) {
                            Log.e(TAG, "stillFaceVerificationAnalyser Setting" + e.getMessage());
                        }
                    });
                    return true;
                }
                case "ACTION_STILL_FACE_INFO":
                    HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("stillFaceAnalyserInfo");
                    stillFaceAnalyse.getFaceAnalyserInfo(callbackContext);
                    return true;
                case "ACTION_STOP_STILL_FACE_ANALYSER":
                    HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("stillFaceAnalyserStop");
                    stillFaceAnalyse.closeStillFaceAnalyser(callbackContext);
                    return true;
                case "ACTION_INTERACTIVE_LIVENESS_DETECTION": {
                    HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("interactiveLivenessDetection");
                    cordova.getActivity().runOnUiThread(() -> {
                        try {
                            interactiveLivenessDetectionAnalyser.initializeInteractiveLivenessAnalyser(params, callbackContext);
                        } catch (JSONException e) {
                            Log.e(TAG, "customInteractiveLivenessDetection" + e.getMessage());
                        }

                    });
                    return true;
                }
                case "ACTION_CUSTOM_INTERACTIVE_LIVENESS_DETECTION": {
                    HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("customInteractiveLivenessDetection");
                    cordova.getActivity().runOnUiThread(() -> {
                        try {
                            interactiveLivenessCustomDetectionHandler.customInteractiveLivenessAnalyser(params, callbackContext);
                        } catch (JSONException e) {
                            Log.e(TAG, "customInteractiveLivenessDetection" + e.getMessage());
                        }

                    });
                    return true;
                }
                default:
                    Log.e(TAG, "initializer: invalid action");
                    return false;
            }
        } catch (JSONException | IOException e) {
            Log.e(TAG, "initializer: error :" + e.getMessage());
            callbackContext.error(e.getMessage());
        }

        return false;
    }
}
