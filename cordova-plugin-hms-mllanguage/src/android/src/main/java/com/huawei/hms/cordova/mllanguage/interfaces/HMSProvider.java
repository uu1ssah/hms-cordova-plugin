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

package com.huawei.hms.cordova.mllanguage.interfaces;

import android.app.Activity;
import android.content.Context;

import org.apache.cordova.CordovaPlugin;

public abstract class HMSProvider {
    private Context ctx;

    private ActivityHolder activityHolder;

    private CordovaPlugin cordovaPlugin;

    public HMSProvider(Context ctx) {
        this.ctx = ctx;
    }

    public CordovaPlugin getCordovaPlugin() {
        return cordovaPlugin;
    }

    public void setCordovaPlugin(CordovaPlugin cordovaPlugin) {
        this.cordovaPlugin = cordovaPlugin;
    }

    public Activity getActivity() {
        if (this.activityHolder == null) {
            return null;
        }
        return this.activityHolder.getActivity();
    }

    public Context getContext() {
        return this.ctx;
    }

    public void setActivityHolder(ActivityHolder activityHolder) {
        this.activityHolder = activityHolder;
    }
}
