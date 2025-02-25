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

package com.huawei.hms.cordova.mltext;

import static android.app.Activity.RESULT_OK;

import android.content.Intent;
import android.graphics.Bitmap;
import android.util.Log;

import com.huawei.hms.cordova.mltext.helpers.CordovaHelpers;
import com.huawei.hms.cordova.mltext.logger.HMSLogger;
import com.huawei.hms.cordova.mltext.providers.textproviders.bankcard.CustomViewHandler;
import com.huawei.hms.cordova.mltext.providers.textproviders.bankcard.MLBankCardAnalyser;
import com.huawei.hms.cordova.mltext.providers.textproviders.document.MLImageDocumentAnalyser;
import com.huawei.hms.cordova.mltext.providers.textproviders.formrecognition.MLFormRecognitionAnalyser;
import com.huawei.hms.cordova.mltext.providers.textproviders.generalcard.MLGeneralCardAnalyser;
import com.huawei.hms.cordova.mltext.providers.textproviders.idcard.MLIcrCardAnalyser;
import com.huawei.hms.cordova.mltext.providers.textproviders.idcard.MLIcrCnCardAnalyser;
import com.huawei.hms.cordova.mltext.providers.textproviders.idcard.MLIcrVnCardAnalyser;
import com.huawei.hms.cordova.mltext.providers.textproviders.text.MLImageTextAnalyser;
import com.huawei.hms.cordova.mltext.utils.HMSMLUtils;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;

public class HMSMLText extends CordovaPlugin {

    public static final String TAG = HMSMLText.class.getSimpleName();

    private static CallbackContext callbackCtx;

    private MLImageTextAnalyser mlTextService;

    private MLImageDocumentAnalyser mlDocumentService;

    private MLBankCardAnalyser bcrAnalyse;

    private MLGeneralCardAnalyser generalCardAnalyse;

    private MLIcrVnCardAnalyser icrVnCardAnalyser;

    private MLIcrCardAnalyser mlIcrCardAnalyser;

    private MLIcrCnCardAnalyser mlIcrCnCardAnalyser;

    private MLFormRecognitionAnalyser formRecognitionAnalyser;

    private CustomViewHandler customViewHandler;

    private static final int REQUEST_CODE_SCAN_CUSTOMIZED = 14;

    public static CallbackContext getCallbackContext() {
        return callbackCtx;
    }

    public static void setCallbackContext(final CallbackContext callbackContext) {
        callbackCtx = callbackContext;
    }

    public void pluginInitialize() {
        mlTextService = CordovaHelpers.initializeProvider(new MLImageTextAnalyser(cordova.getContext()), cordova, this);
        mlDocumentService = CordovaHelpers.initializeProvider(new MLImageDocumentAnalyser(cordova.getContext()),
            cordova, this);
        generalCardAnalyse = CordovaHelpers.initializeProvider(new MLGeneralCardAnalyser(cordova.getContext()), cordova,
            this);
        formRecognitionAnalyser = CordovaHelpers.initializeProvider(new MLFormRecognitionAnalyser(cordova.getContext()),
            cordova, this);
        bcrAnalyse = CordovaHelpers.initializeProvider(new MLBankCardAnalyser(cordova.getContext()), cordova, this);
        icrVnCardAnalyser = CordovaHelpers.initializeProvider(new MLIcrVnCardAnalyser(cordova.getContext()), cordova,
            this);
        mlIcrCnCardAnalyser = CordovaHelpers.initializeProvider(new MLIcrCnCardAnalyser(cordova.getContext()), cordova,
            this);

        mlIcrCardAnalyser = CordovaHelpers.initializeProvider(new MLIcrCardAnalyser(cordova.getContext()), cordova,
            this);

        customViewHandler = CordovaHelpers.initializeProvider(
            new CustomViewHandler(cordova.getContext(), cordova.getActivity(), cordova, this), cordova, this);

    }

    public boolean execute(final String action, final JSONArray args, final CallbackContext callbackContext) {

        setCallbackContext(callbackContext);
        JSONObject params = args.optJSONObject(0);
        int ocrType;
        try {
            switch (action) {
                case "ACTION_IMAGE_TEXT_ANALYSER": {
                    if (!params.has("ocrType") || params.isNull("ocrType")) {
                        Log.e(TAG, "Illegal argument. ocrType field is mandatory and it must not be null.");
                        callbackContext.error("Illegal argument. ocrType field is mandatory and it must not be null.");
                        return false;
                    }
                    HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("imageTextAnalyser");
                    ocrType = params.getInt("ocrType");
                    switch (ocrType) {
                        case 0:
                            Log.i(TAG, "ImageTextAnalyse: localImageTextAnalyser");
                            mlTextService.initializeLocalImageTextAnalyser(params, callbackContext);
                            return true;
                        case 1:
                            Log.i(TAG, "ImageTextAnalyse: remoteImageTextAnalyser");
                            mlTextService.initializeRemoteImageTextAnalyser(params, callbackContext);
                            return true;
                        default:
                    }
                    break;
                }
                case "ACTION_GET_IMAGE_TEXT_INFO":
                    HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("imageTextAnalyserInfo");
                    mlTextService.getImgTextAnalyserInfo(callbackContext, cordova);
                    return true;
                case "ACTION_GET_IMAGE_TEXT_SETTING":
                    HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("imageTextAnalyserSetting");
                    mlTextService.getTextSetting(callbackContext);
                    return true;
                case "ACTION_STOP_TEXT_ANALYSER":
                    HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("imageTextAnalyserStop");
                    mlTextService.closeImgTextAnalyser(callbackContext, cordova);
                    return true;
                case "ACTION_GET_GCR_SETTING":
                    HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("gcrAnalyserSetting");
                    generalCardAnalyse.getGCRSetting(callbackContext);
                    return true;
                case "ACTION_DOCUMENT_IMAGE_ANALYSER": {
                    cordova.getThreadPool().execute(() -> {
                        HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("documentImageAnalyser");
                        mlDocumentService.initializeDocumentAnalyser(params, callbackContext);
                    });
                    return true;
                }
                case "ACTION_STOP_DOCUMENT_IMAGE_ANALYSER": {
                    cordova.getThreadPool().execute(() -> {
                        HMSLogger.getInstance(cordova.getContext())
                            .startMethodExecutionTimer("documentImageAnalyserStop");
                        try {
                            mlDocumentService.stopDocumentAnalyser(callbackContext);
                        } catch (IOException e) {
                            Log.e(TAG, "documentImageAnalyserStop" + e.getMessage());
                        }
                    });
                    return true;
                }
                case "ACTION_CLOSE_DOCUMENT_IMAGE_ANALYSER":
                    HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("documentImageAnalyserClose");
                    mlDocumentService.closeDocumentAnalyser(callbackContext);
                    return true;
                case "ACTION_GET_DOCUMENT_IMAGE_ANALYSER_SETTING":
                    HMSLogger.getInstance(cordova.getContext())
                        .startMethodExecutionTimer("documentImageAnalyserSetting");
                    mlDocumentService.getDocumentAnalyserSetting(callbackContext);
                    return true;
                case "ACTION_FORM_RECOGNITION": {
                    cordova.getThreadPool().execute(() -> {
                        HMSLogger.getInstance(cordova.getContext())
                            .startMethodExecutionTimer("formRecognitionAnalyser");
                        try {
                            formRecognitionAnalyser.initializeFormRecognitionAnalyser(params, callbackContext);
                        } catch (JSONException e) {
                            Log.i(TAG, "formRecognition :" + e.getMessage());
                        }
                    });
                    return true;
                }
                case "ACTION_FORM_RECOGNITION_STOP": {
                    cordova.getThreadPool().execute(() -> {
                        HMSLogger.getInstance(cordova.getContext())
                            .startMethodExecutionTimer("formRecognitionAnalyserStop");
                        try {
                            formRecognitionAnalyser.stop(callbackContext);
                        } catch (IOException e) {
                            Log.e(TAG, "formRecognitionStop :" + e.getMessage());
                        }
                    });
                    return true;
                }
                case "ACTION_BANK_CARD_DETECTOR": {
                    cordova.getThreadPool().execute(() -> {
                        HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("bankCardDetector");
                        bcrAnalyse.initializerBCRAnalyser(params, callbackContext);
                    });
                    return true;
                }
                case "ACTION_STOP_BANK_CARD_DETECTOR":
                    HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("bankCardDetectorStop");
                    bcrAnalyse.stopBankCardAnalyser(callbackContext, cordova);
                    return true;
                case "ACTION_BANK_CARD_SET_RESULT_CALLBACK":
                    HMSLogger.getInstance(cordova.getContext())
                        .startMethodExecutionTimer("bankCardDetectorResultCallback");
                    bcrAnalyse.setOnBcrResultCallback(callbackContext);
                    return true;
                case "ACTION_BANK_CARD_SET_RESULT_TYPE":
                    HMSLogger.getInstance(cordova.getContext())
                        .startMethodExecutionTimer("bankCardDetectorSetResultType");
                    bcrAnalyse.setResultType(callbackContext, params);
                    return true;
                case "ACTION_BANK_CARD_SET_RECMODE":
                    HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("bankCardDetectorRecMode");
                    bcrAnalyse.setRecMode(callbackContext, params);
                    return true;

                case "ACTION_GET_BANK_CARD_SETTING":
                    HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("bankCardDetectorSetting");
                    bcrAnalyse.getBCRSetting(callbackContext);
                    return true;
                case "ACTION_GENERALCARD_PLUGIN_DETECTOR": {
                    HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("generalcardPluginDetector");
                    generalCardAnalyse.initializeGeneralCardAnalyser(params, callbackContext);
                    return true;
                }
                case "ACTION_ICRVN_PLUGIN_DETECTOR": {
                    HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("icrVnPluginDetector");
                    icrVnCardAnalyser.initializeIcrVnCardAnalyser(params, callbackContext);
                    return true;
                }
                case "ACTION_ICRVN_CREATE": {
                    HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("icrVnPluginCreate");
                    icrVnCardAnalyser.create(callbackContext);
                    return true;
                }
                case "ACTION_ICRVN_CAPTURE": {
                    HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("getIcrCapture()");
                    icrVnCardAnalyser.getIcrVnCapture(callbackContext);
                    return true;
                }
                case "ACTION_ICRVN_GET_INSTANCE": {
                    HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("getIcrCapture()");
                    icrVnCardAnalyser.getInstance(callbackContext);
                    return true;
                }

                case "ACTION_ICRCN_PLUGIN_DETECTOR": {
                    HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("icrCnPluginDetector");
                    mlIcrCnCardAnalyser.initializeIcrCnCardAnalyser(params, callbackContext);
                    return true;
                }
                case "ACTION_ICRCN_CAPTURE": {
                    HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("getIcrCapture()");
                    mlIcrCnCardAnalyser.getIcrCnCapture(callbackContext);
                    return true;
                }
                case "ACTION_ICRCN_CREATE": {
                    HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("getIcrCreate()");
                    mlIcrCnCardAnalyser.create(callbackContext);
                    return true;
                }
                case "ACTION_ICRCN_GET_INSTANCE": {
                    HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("getIcrCapture()");
                    mlIcrCnCardAnalyser.getInstance(callbackContext);
                    return true;
                }

                case "ACTION_LOCAL_ANALYSER": {
                    HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("localAnalyser");
                    mlIcrCardAnalyser.initializeIcrCardAnalyser(params, callbackContext);
                    return true;
                }
                case "ACTION_LOCAL_ANALYSER_CREATE": {
                    HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("localAnalyserCreate");
                    mlIcrCardAnalyser.createIdCard(params, callbackContext);
                    return true;
                }
                case "ACTION_LOCAL_ANALYSER_STOP": {
                    HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("localAnalyserStop");
                    mlIcrCardAnalyser.stopIcrCard(callbackContext);
                    return true;
                }
                case "startCustomizedView": {
                    HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("customViewMode");
                    customViewHandler.startCustomizedView(params, callbackContext);
                    return true;
                }
                case "switchLight": {
                    HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("switchLight");
                    customViewHandler.switchLight(callbackContext);
                    return true;
                }
                case "getLightStatus": {
                    HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("getLightStatus");
                    customViewHandler.getLightStatus(callbackContext);
                    return true;
                }
                default:
            }
        } catch (IOException | JSONException e) {
            Log.e(TAG, "error: " + e.getMessage());
        }

        return false;
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent intent) {
        if (resultCode != RESULT_OK) {
            return;
        }
        if (resultCode == RESULT_OK) {
            if (requestCode == REQUEST_CODE_SCAN_CUSTOMIZED) {
                formatIdCardResult(intent);
            }
        }
    }

    private void formatIdCardResult(Intent intent) {

        JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.putOpt("number", intent.getStringExtra("number"));
            Bitmap originalBitmap = intent.getParcelableExtra("bitmap");
            Bitmap numberBitmap = intent.getParcelableExtra("numberBitmap");
            jsonObject.putOpt("expire", intent.getStringExtra("expire"));
            jsonObject.putOpt("issuer", intent.getStringExtra("issuer"));
            jsonObject.putOpt("type", intent.getStringExtra("type"));
            jsonObject.putOpt("organization", intent.getStringExtra("organization"));
            jsonObject.putOpt("originalBitmap", HMSMLUtils.bitmapToBase64(originalBitmap));
            jsonObject.putOpt("numberBitmap", HMSMLUtils.bitmapToBase64(numberBitmap));
            getCallbackContext().success(jsonObject);
            HMSLogger.getInstance(cordova.getContext()).sendSingleEvent("bankCardDetector");
        } catch (JSONException e) {
            getCallbackContext().error(e.getMessage());
            HMSLogger.getInstance(cordova.getContext()).sendSingleEvent("bankCardDetector", e.getMessage());
        }
    }

}
