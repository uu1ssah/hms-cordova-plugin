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

import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from "rxjs";
export declare class HMSMLPlugin extends AwesomeCordovaNativePlugin {
    FEATURE: typeof FEATURE;
    LANGUAGE: typeof LANGUAGE;
    MLTtsConstants: typeof MLTtsConstants;
    Colors: typeof Colors;
    RectStyle: typeof RectStyle;
    MLRttLanguages: typeof MLRttLanguages;
    MLRttScenes: typeof MLRttScenes;
    /**
     * It sets Api Key or access token for application.
     * @param  {configReq} params Represents your API_KEY.
     * @returns Promise<any>
     */
    serviceInitializer(params: configReq): Promise<any>;
    /**
     * An app information class used to store basic information about apps with the HMS Core ML SDK integrated and complete the initialization of ML Kit. When using cloud services of the ML Kit, you need to set the apiKey of your app.
     * @param  {appSettingReq} appSettingReq Represents the parameter required.
     * @returns Promise<any>
     */
    appSetting(appSettingReq: appSettingReq): Promise<any>;
    /**
     * Sets a data processing location when you choose to manually manage and specify such a location.
     * @param  {region} region Represents the parameter.
     *         * REGION_DR_UNKNOWN = 1001,
               * REGION_DR_CHINA = 1002,
               * REGION_DR_RUSSIA = 1005,
               * REGION_DR_GERMAN = 1006,
               * REGION_DR_SINGAPORE = 1007
     * @returns Promise<any>
     */
    setUserRegion(region: number): Promise<any>;
    /**
     * Obtains the country/region code of the data processing location you have specified when you choose to manually manage and specify such a location.
     * @returns Promise<String>
     */
    getCountryCode(): Promise<String>;
    /**
     * This service enable logger service.
     * @returns Promise<any>
     */
    enableLogger(): Promise<any>;
    /**
     * This service disable logger service.
     * @returns Promise<any>
     */
    disableLogger(): Promise<any>;
}
export declare class HMSMLLanguage extends AwesomeCordovaNativePlugin {
    FEATURE: typeof FEATURE;
    LANGUAGE: typeof LANGUAGE;
    MLTtsConstants: typeof MLTtsConstants;
    Colors: typeof Colors;
    RectStyle: typeof RectStyle;
    MLRttLanguages: typeof MLRttLanguages;
    MLRttScenes: typeof MLRttScenes;
    /**
     * @param  {syncProbabilityDetect} syncRequestLocalLangDetect Represents the parameter.
     * @returns Promise<MLRemoteLangDetection>
     */
    syncProbabilityDetect(syncProbabilityDetect: syncRequestLocalLangDetect): Promise<MLRemoteLangDetection>;
    /**
     * @param  {syncProbabilityDetect} syncProbabilityDetect Represents the parameter.
     * @returns Promise<String>
     */
    syncFirstBestDetect(syncProbabilityDetect: syncRequestLocalLangDetect): Promise<String>;
    /**
     * Implements on-cloud text translation.
     * @param  {remotetranslateReq} remotetranslateReq Represents the parameter required for translate.
     * @returns Promise<any>
     */
    remoteTranslator(remotetranslateReq: remotetranslateReq): Promise<any>;
    /**
     * Implements on-cloud text translation.
     * @param  {localtranslateReq} localtranslateReq Represents the parameter required for translate.
     * @returns Promise<any>
     */
    localTranslator(localtranslateReq: localtranslateReq): Promise<any>;
    /**
     * Obtains all languages supported for local translation.
     * @param  {localAllLangReq} localAllLangReq Represents the parameter required for translate.
     * @returns Promise<any>
     */
    translatorLocalAllLang(localAllLangReq: localAllLangReq): Promise<any>;
    /**
     * Obtains all languages supported for on-cloud translation.
     * @param  {remoteAllLangReq} remoteAllLangReq Represents the parameter required for translate.
     * @returns Promise<any>
     */
    translatorRemoteAllLang(remoteAllLangReq: remoteAllLangReq): Promise<any>;
    /**
     * Detects languages on the cloud.
     * @param  {remoteLangDetectionReq} remoteLangDetectionReq Represents the parameter required for lang detection.
     * @returns Promise<RemoteLangDetectionAnalyser> | Promise<langDetectionWithFirstDetect>
     */
    remoteLangDetection(remoteLangDetectionReq: remoteLangDetectionReq): Promise<MLRemoteLangDetection | MLlangDetectionWithFirstDetect>;
    /**
     * Detects languages on local.
     * @param  {localLangDetectionReq} localLangDetectionReq Represents the parameter required for lang detection.
     * @returns Promise<any> | Promise<any>
     */
    localLangDetection(localLangDetectionReq: localLangDetectionReq): Promise<any>;
    /**
     * Download language model.
     * @param  {downloadTranslateReq} downloadTranslateReq Represents the parameter required for download model.
     * @returns Promise<any>
     */
    translatorDownloadModel(downloadTranslateReq: downloadTranslateReq): Promise<any>;
    /**
     * For delete language model.
     * @param  {deleteTranslateReq} deleteTranslateReq Represents the parameter required for delete model.
     * @returns Promise<any>
     */
    translatorDeleteModel(deleteTranslateReq: deleteTranslateReq): Promise<any>;
    /**
     * This method stop translator service.
     * @returns Promise<any>
     */
    stopTranslatorService(): Promise<any>;
    /**
     * This method return RTT setting.
     * @returns Promise<any>
     */
    getRTTSetting(): Promise<any>;
    /**
     * This method returns TTS setting.
     * @returns Promise<any>
     */
    getTTSSetting(): Promise<any>;
    /**
     * This method returns AFT setting.
     * @returns Promise<any>
     */
    getAFTSetting(): Promise<any>;
    /**
     * This method returns Lang Detection setting.
     * @returns Promise<any>
     */
    getLangDetectionSetting(): Promise<any>;
    /**
     * This method stop lang detection service.
     * @returns Promise<any>
     */
    stopLangDetectionService(): Promise<any>;
    /**
     * The sound detection service can detect sound events in online (real-time recording) mode. The detected sound events can help you perform subsequent actions.
     * @param  {soundDectReq} soundDectReq Represents the parameter required for Sound Detection analyser.
     * @returns Promise<any>
     */
    soundDectAnalyser(soundDectReq: soundDectReq): Promise<MLSoundDectResult>;
    /**
     * TTS can convert text information into audio output. Rich timbres, and volume and speed options are supported to produce more natural sounds.
     * @param  {ttsReq} ttsReq Represents the parameter required for text to speech.
     * @returns Promise<TtsAnalyser>
     */
    ttsAnalyser(ttsReq: ttsReq): Promise<MLTtsResult>;
    /**
     * TTS can convert text information into audio output offline. Rich timbres, and volume and speed options are supported to produce more natural sounds.
     * @param  {ttsReq} ttsReq Represents the parameter required for text to speech.
     * @returns Promise<TtsAnalyser>
     */
    ttsOfflineAnalyser(ttsReq: ttsReq): Promise<MLTtsResult>;
    /**
     * This service stop text to speech (TTS) service.
     * @returns Promise<any>
     */
    ttsAnalyserStop(): Promise<any>;
    /**
     * This service pauses text to speech (TTS) analyser.
     * @returns Promise<any>
     */
    ttsAnalyserPause(): Promise<any>;
    /**
     * This service continues text to speech (TTS) analyser.
     * @returns Promise<any>
     */
    ttsAnalyserResume(): Promise<any>;
    /**
     * This service shutdown text to speech (TTS) analyser.
     * @returns Promise<any>
     */
    ttsAnalysershutDown(): Promise<any>;
    /**
     * This method returns TTS Download setting.
     * @returns Promise<any>
     */
    ttsAnalyserDownloadSetting(): Promise<any>;
    /**
     * This service close AFT analyser.
     * @returns Promise<any>
     */
    aftAnalyserClose(): Promise<any>;
    /**
     * This service stop AFT analyser.
     * @returns Promise<any>
     */
    asrAnalyserStop(): Promise<any>;
    /**
     * This service destroy AFT analyser.
     * @returns Promise<any>
     */
    aftAnalyserDestroy(): Promise<any>;
    /**
     * This service pause AFT analyser.
     * @returns Promise<any>
     */
    aftAnalyserPause(): Promise<any>;
    /**
     * This service destroy Sound Detection analyser.
     * @returns Promise<any>
     */
    soundDectAnalyserDestroy(): Promise<any>;
    /**
     * The audio file transcription service can convert an audio file less than or equal to 60 seconds into a text file. Currently, Chinese and English are supported.
     * @param  {aftReq} aftReq Represents the parameter required for aft analyser.
     * @returns Promise<AftAnalyser>
     */
    aftAnalyser(aftReq: aftReq): Promise<MLAftResult>;
    /**
     * ASR can recognize speech not longer than 60s and convert the input speech into text in real time.
     * @param  {asrReq} asrReq Represents the parameter required for asr analyser.
     * @param  {any} success A callback function. It is called when function is executed successfully. It returns the results of text.
     * @param  {any} error A callback function. It is called when function is failed.
     * @returns callback
     */
    asrAnalyser(asrReq: asrReq): Observable<any>;
    /**
     * Real-time transcription enables your app to convert long speech (no longer than 5 hours) into text in real time. The generated text contains punctuation marks and timestamps.
     * @param  {rttReq} rttReq Represents the parameter required for rtt analyser.
     * @param  {any} success A callback function. It is called when function is executed successfully. It returns the results of text.
     * @param  {any} error A callback function. It is called when function is failed.
     * @returns callback
     */
    rttAnalyserStart(rttReq: rttReq): Observable<any>;
    /**
     * This method stop RTT analyser
     * @param  {any} success A callback function. It is called when function is executed successfully. It returns the results of text.
     * @param  {any} error A callback function. It is called when function is failed.
     * @returns callback
     */
    rttAnalyserStop(): Observable<any>;
}
export interface configReq {
    apiKey: string;
}
export interface appSettingReq {
    apiKey?: string | null;
    applicationId?: string | null;
    certFingerprint?: string | null;
}
export interface aftReq {
    audioPath: any;
    aftSetting?: AftSetting;
}
export interface AftSetting {
    languageCode?: string | null;
    punctuationEnabled?: boolean | null;
    timeOffset?: boolean | null;
    wordTimeOffsetEnabled?: boolean | null;
    sentenceTimeOffsetEnabled?: boolean | null;
}
export interface asrReq {
    language?: LANGUAGE | null;
    feature?: FEATURE | null;
}
export declare enum MLAsrConstants {
    PUNCTUATION_ENABLE = "PUNCTUATION_ENABLE",
    ERR_NO_NETWORK = 11202,
    ERR_NO_UNDERSTAND = 11204,
    ERR_SERVICE_UNAVAILABLE = 11203,
    FEATURE = "FEATURE",
    LANGUAGE = "LANGUAGE",
    LAN_EN_US = "en-US",
    LAN_FR_FR = "fr-FR",
    LAN_ZH = "zh",
    LAN_ZH_CN = "zh-CN",
    LAN_ES_ES = "es-ES",
    LAN_DE_DE = "de-DE",
    LAN_RU_RU = "ru-RU",
    LAN_IT_IT = "it-IT",
    LAN_AR = "ar",
    LAN_TH_TH = "th_TH",
    LAN_MS_MY = "ms_MY",
    LAN_FIL_PH = "fil_PH",
    Turkish = "tr-TR",
    ERR_INVALIDATE_TOKEN = 11219,
    FEATURE_ALLINONE = 12,
    FEATURE_WORDFLUX = 11,
    SCENES = "scenes",
    SCENES_SHOPPING = "shopping",
    STATE_LISTENING = 1,
    STATE_NO_NETWORK = 7,
    STATE_NO_SOUND = 2,
    STATE_NO_SOUND_TIMES_EXCEED = 3,
    STATE_NO_UNDERSTAND = 6,
    STATE_WAITING = 9,
    ACTION_HMS_ASR_SPEECH = "com.huawei.hms.mlsdk.action.RECOGNIZE_SPEECH",
    WAVE_PAINE_ENCODING = "ENCODING",
    WAVE_PAINE_SAMPLE_RATE = "SAMPLE_RATE",
    WAVE_PAINE_BIT_WIDTH = "BIT_WIDTH",
    WAVE_PAINE_CHANNEL_COUNT = "CHANNEL_COUNT"
}
export declare enum FEATURE {
    FEATURE_ALLINONE = 12,
    FEATURE_WORDFLUX = 11
}
export declare enum LANGUAGE {
    LAN_EN_US = "en-US",
    LAN_FR_FR = "fr-FR",
    LAN_ZH = "zh",
    LAN_ZH_CN = "zh-CN",
    LAN_ES_ES = "es-ES",
    LAN_DE_DE = "de-DE",
    LAN_RU_RU = "ru-RU",
    LAN_IT_IT = "it-IT",
    LAN_AR = "ar",
    LAN_TH_TH = "th_TH",
    LAN_MS_MY = "ms_MY",
    LAN_FIL_PH = "fil_PH",
    Turkish = "tr-TR"
}
export declare enum MLDocumentSkewCorrectionConstant {
    SUCCESS = 0,
    DETECT_FAILED = 1,
    CORRECTION_FAILED = 2,
    IMAGE_DATA_ERROR = 3
}
export interface remoteLangDetectionReq {
    sourceText: string;
    taskMode?: number;
    trustedThreshold?: number;
}
export interface localLangDetectionReq {
    sourceText: string;
    trustedThreshold?: number;
}
export interface syncRequestLocalLangDetect {
    sourceText: string;
    trustedThreshold?: number;
}
export declare enum MLLanguageDetection {
    FIRST_BEST_DETECTION_LANGUAGE_TRUSTED_THRESHOLD = 0.5,
    PROBABILITY_DETECTION_LANGUAGE_TRUSTED_THRESHOLD = 0.01,
    UNDETECTION_LANGUAGE_TRUSTED_THRESHOLD = "unknown"
}
export interface rttReq {
    mLSpeechRealTimeTranscriptionConfig: MLSpeechRealTimeTranscriptionConfig;
}
export interface MLSpeechRealTimeTranscriptionConfig {
    language: MLRttLanguages | null;
    punctuationEnable: boolean | null;
    wordTimeOffsetEnable: boolean | null;
    sentenceTimeOffsetEnable: boolean | null;
    scenes?: MLRttScenes | null;
}
export declare enum MLRttLanguages {
    LAN_ZH_CN = "zh-CN",
    LAN_EN_US = "en-US",
    LAN_FR_FR = "fr-FR",
    LAN_ES_ES = "es-ES",
    LAN_EN_IN = "en-IN",
    LAN_DE_DE = "de-DE"
}
export declare enum MLRttScenes {
    SCENES_SHOPPINGf = "shopping"
}
export declare enum MLSpeechRealTimeTranscriptionConstants {
    ERR_INVALIDE_TOKEN = 13219,
    ERR_NO_NETWORK = 13202,
    ERR_SERVICE_CREDIT = 13222,
    ERR_SERVICE_UNSUBSCRIBED = 13223,
    ERR_SERVICE_FREE_USED_UP = 13224,
    ERR_SERVICE_UNAVAILABLE = 13203,
    LAN_EN_US = " en-US",
    LAN_FR_FR = "fr-FR",
    LAN_ZH_CN = "zh-CN",
    RESULTS_PARTIALFINAL = "RESULTS_PARTIALFINAL",
    RESULTS_RECOGNIZING = "results_recognizing",
    RESULTS_SENTENCE_OFFSET = "RESULTS_SENTENCE_OFFSET",
    RESULTS_WORD_OFFSET = "RESULTS_WORD_OFFSET",
    SCENES_SHOPPING = "shopping",
    STATE_SERVICE_RECONNECTED = 43,
    STATE_SERVICE_RECONNECTING = 42,
    STATE_LISTENING = 1,
    STATE_NO_NETWORK = 7,
    STATE_NO_UNDERSTAND = 6,
    WAVE_PAINE_BIT_WIDTH = "BIT_WIDTH",
    WAVE_PAINE_CHANNEL_COUNT = "CHANNEL_COUNT",
    WAVE_PAINE_ENCODING = "ENCODING",
    WAVE_PAINE_SAMPLE_RATE = "SAMPLE_RATE"
}
export interface remotetranslateReq {
    USE_SYNC: boolean;
    targetLangCode: MLTranslateLanguages;
    sourceLangCode?: MLTranslateLanguages;
    sourceText: string;
}
export interface localtranslateReq {
    USE_SYNC: boolean;
    targetLangCode: MLTranslateLanguages;
    sourceLangCode: MLTranslateLanguages;
    sourceText: string;
}
export interface deleteTranslateReq {
    USE_SYNC: boolean;
    langcode: string;
}
export interface downloadTranslateReq {
    USE_SYNC: boolean;
    langcode: string;
}
export interface localAllLangReq {
    USE_SYNC: boolean;
}
export interface remoteAllLangReq {
    USE_SYNC: boolean;
}
export declare enum MLTranslateLanguages {
    AFRIKAANS = "af",
    ARABIC = "ar",
    BULGARIAN = "bg",
    BURMESE = "my",
    CROATIAN = "hr",
    CZECH = "cs",
    CHINESE = "zh",
    TRADITIONAL_CHINESE = "zh-hk",
    DANISH = "da",
    DUTCH = "nl",
    ESTONIAN = "et",
    ENGLISH = "en",
    FINNISH = "fi",
    FRENCH = "fr",
    GERMAN = "de",
    GUJARATI = "gu",
    GREEK = "el",
    HUNGARIAN = "hu",
    HINDI = "hi",
    HEBREW = "he",
    IRISH = "is",
    ITALIAN = "it",
    INDONESIAN = "id",
    KHMER = "km",
    KOREAN = "ko",
    JAPANESE = "ja",
    LATIN = "rm",
    LATVIAN = "lv",
    MALAY = "ms",
    MARATHI = "mr",
    NORWEGIAN = "no",
    PUNJABI = "pa",
    POLISH = "pl",
    PORTUGUESE = "pt",
    PERSIAN = "fa",
    RUSSIAN = "ru",
    ROMANIAN = "ro",
    SERBIAN = "sr",
    SPANISH = "es",
    SLOVAK = "sk",
    SWEDISH = "sv",
    TAMIL = "ta",
    TURKISH = "tr",
    THAI = "th",
    TAGALOG = "tl",
    TELUGU = "te",
    VIETNAMESE = "vi"
}
export interface soundDectReq {
    startType: boolean | null;
}
export interface MLTtsSpeaker {
    language?: string | null;
    modelSize?: string | null;
    name?: string | null;
    speakerDesc?: string | null;
}
export interface ttsEngineReq {
    language?: string | null;
    playerVolume?: number | null;
}
export interface ttsAnalyserSettingsResults {
    languages: String[];
    speakers: MLTtsSpeaker;
    speaker: MLTtsSpeaker;
    isLanguageAvailable: number;
}
export interface ttsReq {
    text: string;
    mlConfigs: MLConfigs;
    queuingMode: MLTtsConstants;
}
export interface MLTtsAudioFragment {
    audioData?: number | null;
    audioFormat?: number | null;
    channelInfo?: number | null;
    SampleRateInHz?: number | null;
}
export declare enum MLTtsAudioFragmentConstant {
    CHANNEL_OUT_MONO = 4,
    FORMAT_PCM_16BIT = 2,
    FORMAT_PCM_8BIT = 1,
    SAMPLE_RATE_16K = 16000
}
export interface MLConfigs {
    language: MLTtsConstants;
    person: MLTtsConstants;
    speed: number;
    volume: number;
    synthesizeMode: MLTtsConstants;
}
export declare enum MLTtsConstants {
    EVENT_PLAY_START = 1,
    EVENT_PLAY_RESUME = 2,
    EVENT_PLAY_PAUSE = 3,
    EVENT_PLAY_STOP = 4,
    EVENT_SYNTHESIS_START = 5,
    EVENT_SYNTHESIS_END = 6,
    EVENT_SYNTHESIS_COMPLETE = 7,
    EVENT_PLAY_STOP_INTERRUPTED = "interrupted",
    EVENT_SYNTHESIS_INTERRUPTED = "interrupted",
    LANGUAGE_AVAILABLE = 0,
    LANGUAGE_NOT_SUPPORT = 1,
    LANGUAGE_UPDATING = 2,
    TTS_EN_US = "en-US",
    TTS_LAN_AR_AR = "ar-AR",
    TTS_LAN_TR_TR = "tr-TR",
    TTS_SPEAKER_FEMALE_AR = "ar-AR-st-1",
    TTS_SPEAKER_FEMALE_TR = "tr-TR-st-1",
    TTS_LAN_ES_ES = "es-ES",
    TTS_LAN_FR_FR = "fr-FR",
    TTS_LAN_DE_DE = "de-DE",
    TTS_LAN_IT_IT = "it-IT",
    TTS_LAN_RU_RU = "ru-RU",
    TTS_LAN_PL_PL = "pl-PL",
    TTS_LAN_TH_TH = " th-TH",
    TTS_LAN_MS_MS = "ms-MS",
    TTS_ZH_HANS = "zh-Hans",
    TTS_SPEAKER_FEMALE_EN = "Female-en",
    TTS_SPEAKER_FEMALE_ZH = "Female-zh",
    TTS_SPEAKER_MALE_EN = "Male-en",
    TTS_SPEAKER_MALE_ZH = "Male-zh",
    TTS_SPEAKER_MALE_ZH_2 = "zh-Hans-st-4",
    TTS_SPEAKER_FEMALE_ZH_2 = "zh-Hans-st-3",
    TTS_SPEAKER_MALE_EN_2 = "en-US-st-4",
    TTS_SPEAKER_FEMALE_EN_2 = "en-US-st-3",
    TTS_SPEAKER_FEMALE_DE = "de-DE-st-1",
    TTS_SPEAKER_FEMALE_ES = "it-IT-st-1",
    TTS_SPEAKER_FEMALE_IT = "es-ES-st-1",
    TTS_SPEAKER_FEMALE_FR = "fr-FR-st-1",
    TTS_SPEAKER_FEMALE_RU = "ru-RU-st-1",
    TTS_SPEAKER_FEMALE_PL = "pl-PL-st-1",
    TTS_SPEAKER_FEMALE_TH = "th-TH-st-1",
    TTS_SPEAKER_FEMALE_MS = "ms-MS-st-1",
    TTS_SPEAKER_OFFLINE_EN_US_MALE_BOLT = "en-US-st-bolt-2",
    TTS_SPEAKER_OFFLINE_ZH_HANS_FEMALE_EAGLE = "zh-Hans-st-eagle-1",
    TTS_SPEAKER_OFFLINE_ZH_HANS_MALE_EAGLE = "zh-Hans-st-eagle-2",
    TTS_SPEAKER_OFFLINE_EN_US_FEMALE_EAGLE = "en-US-st-eagle-1",
    TTS_SPEAKER_OFFLINE_EN_US_MALE_EAGLE = "en-US-st-eagle-2",
    TTS_SPEAKER_OFFLINE_EN_US_FEMALE_BEE = "en-US-st-bee-1",
    TTS_SPEAKER_OFFLINE_FR_FR_FEMALE_BEE = "fr-FR-st-bee-1",
    TTS_SPEAKER_OFFLINE_ES_ES_FEMALE_BEE = "es-ES-st-bee-1",
    TTS_SPEAKER_OFFLINE_DE_DE_FEMALE_BEE = "de-DE-st-bee-1",
    TTS_SPEAKER_OFFLINE_IT_IT_FEMALE_BEE = "it-IT-st-bee-1",
    TTS_SPEAKER_OFFLINE_ZH_HANS_FEMALE_BOLT = "zh-Hans-st-bolt-1",
    TTS_SPEAKER_OFFLINE_ZH_HANS_MALE_BOLT = "zh-Hans-st-bolt-2",
    TTS_SPEAKER_OFFLINE_EN_US_FEMALE_BOLT = "en-US-st-bolt-1",
    TTS_ONLINE_MODE = "online",
    TTS_OFFLINE_MODE = "offline",
    QUEUE_APPEND = 0,
    QUEUE_FLUSH = 1,
    EXTERNAL_PLAYBACK = 2,
    OPEN_STREAM = 4
}
export declare enum Colors {
    RED = -65536,
    DKGRAY = -12303292,
    GRAY = -7829368,
    WHITE = -1,
    BLUE = -16776961,
    BLACK = -16777216,
    LTGRAY = -3355444,
    MAGENTA = -65281,
    YELLOW = -256,
    CYAN = -16711681,
    GREEN = -16711936,
    TRANSPARENT = 0
}
export declare enum RectStyle {
    STROKE = 1,
    FILL = 2,
    FILL_AND_STROKE = 3
}
export declare enum MLTtsError {
    ERR_AUDIO_PLAYER_FAILED = 11305,
    ERR_AUTHORIZE_FAILED = 11306,
    ERR_AUTHORIZE_TOKEN_INVALIDE = 11307,
    ERR_ILLEGAL_PARAMETER = 11301,
    ERR_INSUFFICIENT_BALANCE = 11303,
    ERR_INTERNAL = 11398,
    ERR_NETCONNECT_FAILED = 11302,
    ERR_SPEECH_SYNTHESIS_FAILED = 11304,
    ERR_UNKNOWN = 11399
}
export interface MLAftResult {
    eventName: string;
    text: string;
    taskId: string;
    complete: boolean;
}
export interface MLAftErrorResult {
    eventName: string;
    taskId: string;
    errorCode: MLAftErrorCodes;
    message: string;
}
export declare enum MLAftErrorCodes {
    ERR_AUDIO_FILE_NOTSUPPORTED = 11101,
    LANGUAGE_CODE_NOTSUPPORTED = 11102,
    ERR_AUDIO_FILE_SIZE_OVERFLOW = 11103,
    ERR_AUDIO_LENGTH_OVERFLOW = 11104,
    ERR_FILE_NOT_FOUND = 11105,
    ERR_ILLEGAL_PARAMETER = 11106,
    ERR_ENGINE_BUSY = 11107,
    ERR_NETCONNECT_FAILED = 11108,
    ERR_RESULT_WHEN_UPLOADING = 11109,
    ERR_TASK_NOT_EXISTED = 11110,
    ERR_AUDIO_TRANSCRIPT_FAILED = 11111,
    ERR_AUDIO_INIT_FAILED = 11112,
    ERR_AUDIO_UPLOAD_FAILED = 11113,
    ERR_TASK_ALREADY_INPROGRESS = 11114,
    ERR_NO_ENOUGH_STORAGE = 11115,
    ERR_AUTHORIZE_FAILED = 11119,
    ERR_SERVICE_CREDIT = 11122,
    ERR_SERVICE_UNSUBSCRIBED = 11123,
    ERR_SERVICE_FREE_USED_UP = 11124,
    ERR_INTERNAL = 11198,
    ERR_UNKNOWN = 11199
}
export interface MLAftEventResult {
    eventName: string;
    taskId: string;
    ext: string;
    eventId: string;
}
export declare enum MLAFTEventCodes {
    PAUSE_EVENT = 2,
    STOP_EVENT = 3,
    UPLOADED_EVENT = 1
}
export declare enum MLAftConstants {
    LANGUAGE_ZH = "zh",
    LANGUAGE_EN_US = "en-US"
}
export interface MLRemoteLangDetection {
    langCode: string;
    probability: number;
    hashCode: number;
}
export interface MLlangDetectionWithFirstDetect {
    langCode: string;
}
export interface MLTtsResult {
    eventName: string;
    taskID: string;
    start: number;
    end: number;
}
export interface MLSoundDectResult {
    soundType: MLSoundDectSoundTypeResult;
    eventName: string;
}
export declare enum MLSoundDectSoundTypeResult {
    SOUND_DECT_ERROR_NO_MEM = 12201,
    SOUND_DECT_ERROR_FATAL_ERROR = 12202,
    SOUND_DECT_ERROR_AUDIO = 12203,
    SOUND_DECT_ERROR_INTERNAL = 12298,
    SOUND_EVENT_TYPE_LAUGHTER = 0,
    SOUND_EVENT_TYPE_BABY_CRY = 1,
    SOUND_EVENT_TYPE_SNORING = 2,
    SOUND_EVENT_TYPE_SNEEZE = 3,
    SOUND_EVENT_TYPE_SCREAMING = 4,
    SOUND_EVENT_TYPE_MEOW = 5,
    SOUND_EVENT_TYPE_BARK = 6,
    SOUND_EVENT_TYPE_WATER = 7,
    SOUND_EVENT_TYPE_CAR_ALARM = 8,
    SOUND_EVENT_TYPE_DOOR_BELL = 9,
    SOUND_EVENT_TYPE_KNOCK = 10,
    SOUND_EVENT_TYPE_ALARM = 11,
    SOUND_EVENT_TYPE_STEAM_WHISTLE = 12
}
export declare enum CordovaErrors {
    UNKNOWN = -1,
    SUCCESS = 0,
    DISCARDED = 1,
    INNER = 2,
    INACTIVE = 3,
    NOT_SUPPORTED = 4,
    ILLEGAL_PARAMETER = 5,
    OVERDUE = 6,
    NO_FOUND = 7,
    DUPLICATE_FOUND = 8,
    NO_PERMISSION = 9,
    INSUFFICIENT_RESOURCE = 10,
    ANALYSIS_FAILURE = 11,
    INTERRUPTED = 12,
    EXCEED_RANGE = 13,
    DATA_MISSING = 14,
    AUTHENTICATION_REQUIRED = 15,
    TFLITE_NOT_COMPATIBLE = 16,
    INSUFFICIENT_SPACE = 17,
    HASH_MISS = 18,
    TOKEN_INVALID = 19,
    SERVICE_FAILURE = 20,
    ANALYSIS_NULL = 21
}
