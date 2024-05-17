/*
 * Copyright 2020-2024. Huawei Technologies Co., Ltd. All rights reserved.
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

export declare enum HMSNearbyEvent {
    EVENT_CONNECTION_ON_ESTABLISH = "eventConnectionOnEstablish",
    EVENT_CONNECTION_ON_RESULT = "eventConnectionOnResult",
    EVENT_CONNECTION_ON_DISCONNECT = "eventConnectionOnDisconnect",
    EVENT_SCAN_ON_FOUND = "eventScanOnFound",
    EVENT_SCAN_ON_LOST = "eventScanOnLost",
    EVENT_DATA_ON_RECEIVED = "eventDataOnReceived",
    EVENT_DATA_ON_TRANSFER_UPDATE = "eventDataOnTransferUpdate",
    EVENT_MESSAGE_ON_BLE_SIGNAL_CHANGED = "eventMessageOnBleSignalChanged",
    EVENT_MESSAGE_ON_DISTANCE_CHANGED = "eventMessageOnDistanceChanged",
    EVENT_MESSAGE_ON_FOUND = "eventMessageOnFound",
    EVENT_MESSAGE_ON_LOST = "eventMessageOnLost",
    EVENT_PUT_ON_TIMEOUT = "eventPutOnTimeout",
    EVENT_GET_ON_TIMEOUT = "eventGetOnTimeout",
    EVENT_STATUS_ON_PERMISSION_CHANGED = "eventStatusOnPermissionChanged"
}
export declare enum HMSPermission {
    PERMISSION_BLUETOOTH = "android.permission.BLUETOOTH",
    PERMISSION_BLUETOOTH_ADMIN = "android.permission.BLUETOOTH_ADMIN",
    PERMISSION_ACCESS_COARSE_LOCATION = "android.permission.ACCESS_COARSE_LOCATION",
    PERMISSION_ACCESS_FINE_LOCATION = "android.permission.ACCESS_FINE_LOCATION",
    PERMISSION_READ_EXTERNAL_STORAGE = "android.permission.READ_EXTERNAL_STORAGE",
    PERMISSION_WRITE_EXTERNAL_STORAGE = "android.permission.WRITE_EXTERNAL_STORAGE",
    PERMISSION_ACCESS_WIFI_STATE = "android.permission.ACCESS_WIFI_STATE",
    PERMISSION_CHANGE_WIFI_STATE = "android.permission.CHANGE_WIFI_STATE"
}
export declare enum Policy {
    POLICY_MESH = 1,
    POLICY_P2P = 2,
    POLICY_STAR = 3
}
export declare enum DataType {
    DATA_FILE = 1,
    DATA_BYTES = 2,
    DATA_STREAM = 3
}
export declare enum TransferState {
    TRANSFER_STATE_SUCCESS = 1,
    TRANSFER_STATE_FAILURE = 2,
    TRANSFER_STATE_IN_PROGRESS = 3,
    TRANSFER_STATE_CANCELED = 4
}
export declare enum MessagePolicyDistanceType {
    POLICY_DISTANCE_TYPE_DEFAULT = 0,
    POLICY_DISTANCE_TYPE_EARSHOT = 1
}
export declare enum MessagePolicyFindingMode {
    POLICY_FINDING_MODE_DEFAULT = 0,
    POLICY_FINDING_MODE_BROADCAST = 1,
    POLICY_FINDING_MODE_SCAN = 2
}
export declare enum MessagePolicyTtlSeconds {
    POLICY_TTL_SECONDS_DEFAULT = 240,
    POLICY_TTL_SECONDS_MAX = 86400,
    POLICY_TTL_SECONDS_INFINITE = 2147483647
}
export declare enum ChannelPolicy {
    CHANNEL_AUTO = 1,
    CHANNEL_HIGH_THROUGHPUT = 2,
    CHANNEL_INSTANCE = 3
}
export declare enum StatusCode {
    STATUS_SUCCESS = 0,
    STATUS_FAILURE = -1,
    STATUS_API_DISORDER = 8001,
    STATUS_NO_NETWORK = 8002,
    STATUS_NOT_CONNECTED = 8003,
    STATUS_TRANSFER_IO_ERROR = 8004,
    STATUS_ALREADY_BROADCASTING = 8005,
    STATUS_ALREADY_CONNECTED = 8006,
    STATUS_ALREADY_SCANNING = 8007,
    STATUS_POLICY_CONFLICT = 8008,
    STATUS_BLUETOOTH_OPERATION_FAILED = 8009,
    STATUS_CONNECT_REJECTED = 8010,
    STATUS_CONNECT_IO_ERROR = 8011,
    STATUS_ENDPOINT_UNKNOWN = 8012,
    STATUS_API_OCCUPIED = 8013,
    STATUS_MISSING_PERMISSION_ACCESS_COARSE_LOCATION = 8014,
    STATUS_MISSING_PERMISSION_BLUETOOTH = 8016,
    STATUS_MISSING_PERMISSION_BLUETOOTH_ADMIN = 8017,
    STATUS_MISSING_PERMISSION_RECORD_AUDIO = 8019,
    STATUS_MISSING_SETTING_LOCATION_ON = 8020,
    STATUS_AIRPLANE_MODE_MUST_BE_OFF = 8021,
    STATUS_MESSAGE_APP_UNREGISTERED = 8050,
    STATUS_MESSAGE_APP_QUOTA_LIMITED = 8051,
    STATUS_MESSAGE_BLE_BROADCASTING_UNSUPPORTED = 8052,
    STATUS_MESSAGE_BLE_SCANNING_UNSUPPORTED = 8053,
    STATUS_MESSAGE_BLUETOOTH_OFF = 8054,
    STATUS_MESSAGE_WRONG_CONTEXT = 8055,
    STATUS_MESSAGE_NOT_ALLOW = 8056,
    STATUS_MESSAGE_MISSING_PERMISSIONS = 8057,
    STATUS_MESSAGE_AUTH_FAILED = 8058,
    STATUS_MESSAGE_PENDING_INTENTS_LIMITED = 8059,
    STATUS_INTERNAL_ERROR = 8060,
    STATUS_FINDING_MODE_ERROR = 8061,
    STATUS_MESSAGE_TASK_ALREADY_IN_PROCESSING = 8062,
    STATUS_MISSING_PERMISSION_FILE_READ_WRITE = 8063,
    STATUS_MISSING_PERMISSION_INTERNET = 8064,
    STATUS_ANDROID_HMS_RESTRICTED = 8070
}
