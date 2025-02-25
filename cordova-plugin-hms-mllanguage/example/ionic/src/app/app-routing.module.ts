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
import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "aft",
    loadChildren: () => import("./aft/aft.module").then((m) => m.AftPageModule),
  },
  {
    path: "asr",
    loadChildren: () => import("./asr/asr.module").then((m) => m.AsrPageModule),
  },
  {
    path: "langdetect",
    loadChildren: () => import("./langdetect/langdetect.module").then((m) => m.LangdetectPageModule),
  },
  {
    path: "rtt",
    loadChildren: () => import("./rtt/rtt.module").then((m) => m.RttPageModule),
  },
  {
    path: "sounddect",
    loadChildren: () =>
      import("./sounddect/sounddect.module").then((m) => m.SounddectPageModule),
  },
  {
    path: "translate",
    loadChildren: () =>
      import("./translate/translate.module").then((m) => m.TranslatePageModule),
  },
  {
    path: "tts",
    loadChildren: () => import("./tts/tts.module").then((m) => m.TtsPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
