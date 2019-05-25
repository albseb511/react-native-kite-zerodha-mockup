/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { FirebaseApp, FirebaseOptions, FirebaseNamespace, FirebaseAppConfig } from '@firebase/app-types';
import { FirebaseService } from '@firebase/app-types/private';
export declare const DEFAULT_ENTRY_NAME = "[DEFAULT]";
/**
 * Global context object for a collection of services using
 * a shared authentication state.
 */
export declare class FirebaseAppImpl implements FirebaseApp {
    private firebase_;
    private options_;
    private name_;
    private isDeleted_;
    private services_;
    private _automaticDataCollectionEnabled;
    INTERNAL: any;
    constructor(options: FirebaseOptions, config: FirebaseAppConfig, firebase_: FirebaseNamespace);
    automaticDataCollectionEnabled: boolean;
    readonly name: string;
    readonly options: FirebaseOptions;
    delete(): Promise<void>;
    /**
     * Return a service instance associated with this app (creating it
     * on demand), identified by the passed instanceIdentifier.
     *
     * NOTE: Currently storage is the only one that is leveraging this
     * functionality. They invoke it by calling:
     *
     * ```javascript
     * firebase.app().storage('STORAGE BUCKET ID')
     * ```
     *
     * The service name is passed to this already
     * @internal
     */
    _getService(name: string, instanceIdentifier?: string): FirebaseService;
    /**
     * Callback function used to extend an App instance at the time
     * of service instance creation.
     */
    private extendApp;
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */
    private checkDestroyed_;
}
