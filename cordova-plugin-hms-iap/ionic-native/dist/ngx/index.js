/*
    Copyright 2020-2024. Huawei Technologies Co., Ltd. All rights reserved.

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

import { __decorate, __extends } from "tslib";
import { Injectable } from "@angular/core";
import { AwesomeCordovaNativePlugin, cordova } from "@awesome-cordova-plugins/core";
import * as i0 from "@angular/core";
var HMSInAppPurchases = /** @class */ (function (_super) {
    __extends(HMSInAppPurchases, _super);
    function HMSInAppPurchases() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSInAppPurchases.prototype.isEnvReady = function (isSupportAppTouch) { return cordova(this, "isEnvReady", { "otherPromise": true }, arguments); };
    HMSInAppPurchases.prototype.isSandboxActivated = function () { return cordova(this, "isSandboxActivated", { "otherPromise": true }, arguments); };
    HMSInAppPurchases.prototype.obtainOwnedPurchases = function (obtainOwnedPurchasesReq) { return cordova(this, "obtainOwnedPurchases", { "otherPromise": true }, arguments); };
    HMSInAppPurchases.prototype.obtainProductInfo = function (product) { return cordova(this, "obtainProductInfo", { "otherPromise": true }, arguments); };
    HMSInAppPurchases.prototype.createPurchaseIntent = function (purchaseIntentReq) { return cordova(this, "createPurchaseIntent", { "otherPromise": true }, arguments); };
    HMSInAppPurchases.prototype.consumeOwnedPurchase = function (consumeOwnedPurchaseReq) { return cordova(this, "consumeOwnedPurchase", { "otherPromise": true }, arguments); };
    HMSInAppPurchases.prototype.obtainOwnedPurchaseRecord = function (obtainOwnedPurchaseRecordReq) { return cordova(this, "obtainOwnedPurchaseRecord", { "otherPromise": true }, arguments); };
    HMSInAppPurchases.prototype.startIapActivity = function (startIapActivityReq) { return cordova(this, "startIapActivity", { "otherPromise": true }, arguments); };
    HMSInAppPurchases.prototype.enablePendingPurchase = function () { return cordova(this, "enablePendingPurchase", { "otherPromise": true }, arguments); };
    HMSInAppPurchases.prototype.enableLogger = function () { return cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    HMSInAppPurchases.prototype.disableLogger = function () { return cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    HMSInAppPurchases.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSInAppPurchases, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    HMSInAppPurchases.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSInAppPurchases });
    HMSInAppPurchases.pluginName = "HMSInAppPurchases";
    HMSInAppPurchases.plugin = "cordova-plugin-hms-iap";
    HMSInAppPurchases.pluginRef = "HMSInAppPurchases";
    HMSInAppPurchases.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HMSInAppPurchases.platforms = ["Android"];
    HMSInAppPurchases = __decorate([], HMSInAppPurchases);
    return HMSInAppPurchases;
}(AwesomeCordovaNativePlugin));
export { HMSInAppPurchases };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSInAppPurchases, decorators: [{
            type: Injectable
        }], propDecorators: { isEnvReady: [], isSandboxActivated: [], obtainOwnedPurchases: [], obtainProductInfo: [], createPurchaseIntent: [], consumeOwnedPurchase: [], obtainOwnedPurchaseRecord: [], startIapActivity: [], enablePendingPurchase: [], enableLogger: [], disableLogger: [] } });
export var SignAlgorithmConstants;
(function (SignAlgorithmConstants) {
    SignAlgorithmConstants["SIGNATURE_ALGORITHM_SHA256WITHRSA_PSS"] = "SHA256WithRSA/PSS";
})(SignAlgorithmConstants || (SignAlgorithmConstants = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbmF0aXZlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0VBY0U7QUFFRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7OztJQWVyRCxxQ0FBMEI7Ozs7SUFNL0Qsc0NBQVUsYUFBQyxpQkFBMkI7SUFTdEMsOENBQWtCO0lBVWxCLGdEQUFvQixhQUNsQix1QkFBMEM7SUFXNUMsNkNBQWlCLGFBQUMsT0FBdUI7SUFVekMsZ0RBQW9CLGFBQ2xCLGlCQUFvQztJQVd0QyxnREFBb0IsYUFDbEIsdUJBQWdEO0lBV2xELHFEQUF5QixhQUN2Qiw0QkFBK0M7SUFXakQsNENBQWdCLGFBQUMsbUJBQXdDO0lBU3pELGlEQUFxQjtJQVNyQix3Q0FBWTtJQVNaLHlDQUFhO21IQTlHRixpQkFBaUI7dUhBQWpCLGlCQUFpQjs7Ozs7O0lBQWpCLGlCQUFpQixrQkFBakIsaUJBQWlCOzRCQWhDOUI7RUFnQ3VDLDBCQUEwQjtTQUFwRCxpQkFBaUI7NEZBQWpCLGlCQUFpQjtrQkFEN0IsVUFBVTs4QkFPVCxVQUFVLE1BU1Ysa0JBQWtCLE1BVWxCLG9CQUFvQixNQVlwQixpQkFBaUIsTUFVakIsb0JBQW9CLE1BWXBCLG9CQUFvQixNQVlwQix5QkFBeUIsTUFZekIsZ0JBQWdCLE1BU2hCLHFCQUFxQixNQVNyQixZQUFZLE1BU1osYUFBYTtBQTRIZixNQUFNLENBQU4sSUFBWSxzQkFFWDtBQUZELFdBQVksc0JBQXNCO0lBQ2hDLHFGQUEyRCxDQUFBO0FBQzdELENBQUMsRUFGVyxzQkFBc0IsS0FBdEIsc0JBQXNCLFFBRWpDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgIENvcHlyaWdodCAyMDIwLTIwMjQuIEh1YXdlaSBUZWNobm9sb2dpZXMgQ28uLCBMdGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcblxyXG4gICAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKVxyXG4gICAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gICAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcblxyXG4gICAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcbiAgICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAgICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAgICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICAgIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICAgIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tIFwiQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmVcIjtcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBITVNJbkFwcFB1cmNoYXNlc1xyXG4gKiBAZGVzY3JpcHRpb25cclxuICogSHVhd2VpJ3MgSW4tQXBwIFB1cmNoYXNlcyAoSUFQKSBzZXJ2aWNlIGludGVncmF0ZXMgbXVsdGlwbGUgcGF5bWVudCBtZXRob2RzIGZvciBnbG9iYWwgcGF5bWVudCBhbmQgYWxsb3dzIHlvdSB0byBlYXNpbHkgb2ZmZXIgaW4tYXBwIHB1cmNoYXNlcy5cclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6IFwiSE1TSW5BcHBQdXJjaGFzZXNcIixcclxuICBwbHVnaW46IFwiY29yZG92YS1wbHVnaW4taG1zLWlhcFwiLFxyXG4gIHBsdWdpblJlZjogXCJITVNJbkFwcFB1cmNoYXNlc1wiLFxyXG4gIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hNUy1Db3JlL2htcy1jb3Jkb3ZhLXBsdWdpblwiLFxyXG4gIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSE1TSW5BcHBQdXJjaGFzZXMgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGN1cnJlbnRseSBzaWduZWQtaW4gSFVBV0VJIElEIGlzIGxvY2F0ZWQgaW4gYSBjb3VudHJ5IG9yIHJlZ2lvbiB3aGVyZSBIVUFXRUkgSUFQIGlzIGF2YWlsYWJsZS5cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPElzRW52UmVhZHlSZXN1bHQ+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgaXNFbnZSZWFkeShpc1N1cHBvcnRBcHBUb3VjaD86IGJvb2xlYW4pOiBQcm9taXNlPElzRW52UmVhZHlSZXN1bHQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyB3aGV0aGVyIHRoZSBzaWduLWluIEhVQVdFSSBJRCBhbmQgYXBwIEFQSyB2ZXJzaW9uIG1lZXRzIHRoZSByZXF1aXJlbWVudHMgb2YgdGhlIHNhbmRib3ggdGVzdGluZy5cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPElzU2FuZGJveEFjdGl2YXRlZFJlc3VsdD59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBpc1NhbmRib3hBY3RpdmF0ZWQoKTogUHJvbWlzZTxJc1NhbmRib3hBY3RpdmF0ZWRSZXN1bHQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFF1ZXJpZXMgaW5mb3JtYXRpb24gYWJvdXQgYWxsIHB1cmNoYXNlZCBpbi1hcHAgcHJvZHVjdHMsIGluY2x1ZGluZyBjb25zdW1hYmxlcywgbm9uLWNvbnN1bWFibGVzLCBhbmQgYXV0by1yZW5ld2FibGUgc3Vic2NyaXB0aW9ucy5cclxuICAgKiBAcGFyYW0gcHJpY2VUeXBlXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxPd25lZFB1cmNoYXNlc1Jlc3VsdD59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBvYnRhaW5Pd25lZFB1cmNoYXNlcyhcclxuICAgIG9idGFpbk93bmVkUHVyY2hhc2VzUmVxOiBPd25lZFB1cmNoYXNlc1JlcVxyXG4gICk6IFByb21pc2U8T3duZWRQdXJjaGFzZXNSZXN1bHQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE9idGFpbnMgaW4tYXBwIHByb2R1Y3QgZGV0YWlscyBjb25maWd1cmVkIGluIEFwcEdhbGxlcnkgQ29ubmVjdC5cclxuICAgKiBAcGFyYW0gcHJvZHVjdFxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UHJvZHVjdEluZm9SZXN1bHQ+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgb2J0YWluUHJvZHVjdEluZm8ocHJvZHVjdDogUHJvZHVjdEluZm9SZXEpOiBQcm9taXNlPFByb2R1Y3RJbmZvUmVzdWx0PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIG9yZGVycyBmb3IgUE1TIHByb2R1Y3RzLCBpbmNsdWRpbmcgY29uc3VtYWJsZXMsIG5vbi1jb25zdW1hYmxlcywgYW5kIHN1YnNjcmlwdGlvbnMuXHJcbiAgICogQHBhcmFtIHB1cmNoYXNlSW50ZW50XHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxQdXJjaGFzZVJlc3VsdEluZm8+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgY3JlYXRlUHVyY2hhc2VJbnRlbnQoXHJcbiAgICBwdXJjaGFzZUludGVudFJlcTogUHVyY2hhc2VJbnRlbnRSZXFcclxuICApOiBQcm9taXNlPFB1cmNoYXNlUmVzdWx0SW5mbz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3VtZXMgYSBjb25zdW1hYmxlIGFmdGVyIHRoZSBjb25zdW1hYmxlIGlzIGRlbGl2ZXJlZCB0byBhIHVzZXIgd2hvIGhhcyBjb21wbGV0ZWQgcGF5bWVudC5cclxuICAgKiBAcGFyYW0gb3duZWRQdXJjaGFzZVxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8Q29uc3VtZU93bmVkUHVyY2hhc2VSZXN1bHQ+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgY29uc3VtZU93bmVkUHVyY2hhc2UoXHJcbiAgICBjb25zdW1lT3duZWRQdXJjaGFzZVJlcTogQ29uc3VtZU93bmVkUHVyY2hhc2VSZXEgXHJcbiAgKTogUHJvbWlzZTxDb25zdW1lT3duZWRQdXJjaGFzZVJlc3VsdD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT2J0YWlucyB0aGUgaGlzdG9yaWNhbCBjb25zdW1wdGlvbiBpbmZvcm1hdGlvbiBhYm91dCBhIGNvbnN1bWFibGUgb3IgYWxsIHN1YnNjcmlwdGlvbiByZWNlaXB0cyBvZiBhIHN1YnNjcmlwdGlvbi5cclxuICAgKiBAcGFyYW0gb3duZWRQdXJjaGFzZVJlY29yZFxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8T3duZWRQdXJjaGFzZXNSZXN1bHQ+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgb2J0YWluT3duZWRQdXJjaGFzZVJlY29yZChcclxuICAgIG9idGFpbk93bmVkUHVyY2hhc2VSZWNvcmRSZXE6IE93bmVkUHVyY2hhc2VzUmVxXHJcbiAgKTogUHJvbWlzZTxPd25lZFB1cmNoYXNlc1Jlc3VsdD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQnJpbmdzIHVwIGluLWFwcCBwYXltZW50IHBhZ2VzLCBpbmNsdWRpbmcgU3Vic2NyaXB0aW9uIEVkaXRpbmcgUGFnZSBhbmQgU3Vic2NyaXB0aW9uIE1hbmFnZW1lbnQgUGFnZVxyXG4gICAqIEBwYXJhbSB1cmlcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc3RhcnRJYXBBY3Rpdml0eShzdGFydElhcEFjdGl2aXR5UmVxOiBTdGFydElhcEFjdGl2aXR5UmVxKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUbyBpbXBsZW1lbnQgcGVuZGluZyBwdXJjaGFzZSBpbiB5b3VyIGFwcCwgY2FsbCB0aGlzIG1ldGhvZCBiZWZvcmUgYSBwdXJjaGFzZSByZXF1ZXN0IGlzIG1hZGUuXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGVuYWJsZVBlbmRpbmdQdXJjaGFzZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqRW5hYmxlcyB0aGUgSE1TTG9nZ2VyIGNhcGFiaWxpdHkgd2hpY2ggaXMgdXNlZCBmb3Igc2VuZGluZyB1c2FnZSBhbmFseXRpY3Mgb2YgSUFQIFNESydzIG1ldGhvZHMgdG8gaW1wcm92ZSB0aGUgc2VydmljZSBxdWFsaXR5LlxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBlbmFibGVMb2dnZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEaXNhYmxlcyB0aGUgSE1TTG9nZ2VyIGNhcGFiaWxpdHkgd2hpY2ggaXMgdXNlZCBmb3Igc2VuZGluZyB1c2FnZSBhbmFseXRpY3Mgb2YgSUFQIFNESydzIG1ldGhvZHMgdG8gaW1wcm92ZSB0aGUgc2VydmljZSBxdWFsaXR5LlxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBkaXNhYmxlTG9nZ2VyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG5cclxuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIElOVEVSRkFDRVNcclxuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXR1cyB7XHJcbiAgZXJyb3JTdHJpbmc6IHN0cmluZztcclxuICBzdGF0dXNDb2RlOiBudW1iZXI7XHJcbiAgc3RhdHVzTWVzc2FnZTogc3RyaW5nO1xyXG4gIGhhc1Jlc29sdXRpb246IGJvb2xlYW47XHJcbiAgaXNDYW5jZWxlZDogYm9vbGVhbjtcclxuICBpc0ludGVycnVwdGVkOiBib29sZWFuO1xyXG4gIGlzU3VjY2VzczogYm9vbGVhbjtcclxuICBkZXNjcmliZUNvbnRlbnRzOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJc0VudlJlYWR5UmVzdWx0IHtcclxuICByZXR1cm5Db2RlOiBudW1iZXI7XHJcbiAgc3RhdHVzOiBTdGF0dXM7XHJcbiAgY291bnRyeTogc3RyaW5nO1xyXG4gIGNhcnJpZXJJZDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSXNTYW5kYm94QWN0aXZhdGVkUmVzdWx0IHtcclxuICByZXR1cm5Db2RlOiBudW1iZXI7XHJcbiAgZXJyTXNnOiBzdHJpbmc7XHJcbiAgaXNTYW5kYm94VXNlcjogYm9vbGVhbjtcclxuICBpc1NhbmRib3hBcGs6IGJvb2xlYW47XHJcbiAgdmVyc2lvbkluQXBrOiBzdHJpbmc7XHJcbiAgdmVyc2lvbkZyTWFya2V0OiBzdHJpbmc7XHJcbiAgc3RhdHVzOiBTdGF0dXM7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBPd25lZFB1cmNoYXNlc1JlcSBleHRlbmRzIEJhc2VSZXEge1xyXG4gIHNpZ25hdHVyZUFsZ29yaXRobT86IHN0cmluZztcclxuICBwcmljZVR5cGU6IG51bWJlcjtcclxuICBjb250aW51YXRpb25Ub2tlbj86IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIE93bmVkUHVyY2hhc2VzUmVzdWx0IHtcclxuICBzaWduYXR1cmVBbGdvcml0aG0/OiBzdHJpbmc7XHJcbiAgY29udGludWF0aW9uVG9rZW46IHN0cmluZztcclxuICBlcnJNc2c6IHN0cmluZztcclxuICBpdGVtTGlzdDogc3RyaW5nW107XHJcbiAgaW5BcHBQdXJjaGFzZURhdGFMaXN0OiBzdHJpbmdbXTtcclxuICBpbkFwcFNpZ25hdHVyZTogc3RyaW5nW107XHJcbiAgcGxhY2VkSW5hcHBQdXJjaGFzZURhdGFMaXN0OiBzdHJpbmdbXTtcclxuICBwbGFjZWRJbmFwcFNpZ25hdHVyZUxpc3Q6IHN0cmluZ1tdO1xyXG4gIHJldHVybkNvZGU6IG51bWJlcjtcclxuICBzdGF0dXM6IFN0YXR1cztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFByb2R1Y3RJbmZvUmVxIGV4dGVuZHMgQmFzZVJlcSB7XHJcbiAgcHJpY2VUeXBlOiBudW1iZXI7XHJcbiAgcHJvZHVjdExpc3Q6IHN0cmluZ1tdO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdEluZm9SZXN1bHQge1xyXG4gIHJldHVybkNvZGU6IG51bWJlcjtcclxuICBlcnJNc2c6IHN0cmluZztcclxuICBwcm9kdWN0SW5mb0xpc3Q6IFByb2R1Y3RJbmZvW107XHJcbiAgc3RhdHVzOiBTdGF0dXM7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0SW5mbyB7XHJcbiAgcHJvZHVjdElkOiBzdHJpbmc7XHJcbiAgcHJpY2VUeXBlOiBudW1iZXI7XHJcbiAgcHJpY2U6IHN0cmluZztcclxuICBtaWNyb3NQcmljZTogbnVtYmVyO1xyXG4gIG9yaWdpbmFsTG9jYWxQcmljZTogc3RyaW5nO1xyXG4gIG9yaWdpbmFsTWljcm9QcmljZTogbnVtYmVyO1xyXG4gIGN1cnJlbmN5OiBzdHJpbmc7XHJcbiAgcHJvZHVjdE5hbWU6IHN0cmluZztcclxuICBwcm9kdWN0RGVzYzogc3RyaW5nO1xyXG4gIHN1YlNwZWNpYWxQcmljZU1pY3JvczogbnVtYmVyO1xyXG4gIHN1YlNwZWNpYWxQZXJpb2RDeWNsZXM6IG51bWJlcjtcclxuICBzdWJQcm9kdWN0TGV2ZWw6IG51bWJlcjtcclxuICBzdGF0dXM6IG51bWJlcjtcclxuICBvZmZlclVzZWRTdGF0dXM6IG51bWJlcjtcclxuICBzdWJHcm91cFRpdGxlOiBzdHJpbmc7XHJcbiAgc3ViUGVyaW9kOiBzdHJpbmc7XHJcbiAgc3ViU3BlY2lhbFBlcmlvZDogc3RyaW5nO1xyXG4gIHN1YlNwZWNpYWxQcmljZTogc3RyaW5nO1xyXG4gIHN1YkZyZWVUcmlhbFBlcmlvZDogc3RyaW5nO1xyXG4gIHN1Ykdyb3VwSWQ6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFB1cmNoYXNlSW50ZW50UmVxIGV4dGVuZHMgQmFzZVJlcSB7XHJcbiAgc2lnbmF0dXJlQWxnb3JpdGhtPzogc3RyaW5nO1xyXG4gIHByaWNlVHlwZTogbnVtYmVyO1xyXG4gIHByb2R1Y3RJZDogc3RyaW5nO1xyXG4gIGRldmVsb3BlclBheWxvYWQ6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFB1cmNoYXNlSW50ZW50UmVzdWx0IHtcclxuICByZXR1cm5Db2RlOiBudW1iZXI7XHJcbiAgZXJyTXNnOiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlQWxnb3JpdGhtPzogc3RyaW5nO1xyXG4gIHN0YXR1czogU3RhdHVzO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFB1cmNoYXNlUmVzdWx0SW5mbyB7XHJcbiAgcmV0dXJuQ29kZTogbnVtYmVyO1xyXG4gIGVyck1zZzogc3RyaW5nO1xyXG4gIGluQXBwUHVyY2hhc2VEYXRhOiBzdHJpbmc7XHJcbiAgaW5BcHBEYXRhU2lnbmF0dXJlOiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlQWxnb3JpdGhtPzogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29uc3VtZU93bmVkUHVyY2hhc2VSZXEgZXh0ZW5kcyBCYXNlUmVxIHtcclxuICBzaWduYXR1cmVBbGdvcml0aG0/OiBzdHJpbmc7XHJcbiAgaW5BcHBQdXJjaGFzZURhdGE6IHN0cmluZztcclxuICBkZXZlbG9wZXJDaGFsbGVuZ2U6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIENvbnN1bWVPd25lZFB1cmNoYXNlUmVzdWx0IHtcclxuICBzaWduYXR1cmVBbGdvcml0aG0/OiBzdHJpbmc7XHJcbiAgY29uc3VtZVB1cmNoYXNlRGF0YTogc3RyaW5nO1xyXG4gIGRhdGFTaWduYXR1cmU6IHN0cmluZztcclxuICBlcnJNc2c6IHN0cmluZztcclxuICByZXR1cm5Db2RlOiBudW1iZXI7XHJcbiAgc3RhdHVzOiBTdGF0dXM7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTdGFydElhcEFjdGl2aXR5UmVxIHtcclxuICBwcm9kdWN0SWQ/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFzZVJlcSB7XHJcbiAgcmVzZXJ2ZWRJbmZvcj86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGVudW0gU2lnbkFsZ29yaXRobUNvbnN0YW50cyB7XHJcbiAgU0lHTkFUVVJFX0FMR09SSVRITV9TSEEyNTZXSVRIUlNBX1BTUyA9IFwiU0hBMjU2V2l0aFJTQS9QU1NcIixcclxufVxyXG4iXX0=