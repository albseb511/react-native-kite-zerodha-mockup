# DEPRECATED
Please use https://www.npmjs.com/package/react-native-simpl-sdk which supports both Android and iOS

## React Native Android Library for SimplSdk
This project serves as a SimplSdk wrapper to create custom React Native native SimplSDK modules that can later be installed through NPM and easily be used in production.

## Installing it as a library in your main project
There are many ways to do this, here's the way I do it:

2. Do `npm install --save git+https://github.com/GetSimpl/react-native-android-library-simpl-sdk` in your main project.
3. Link the library:
    * Add the following to `android/settings.gradle`:
        ```
        include ':react-native-android-library-simpl-sdk'
        project(':react-native-android-library-simpl-sdk').projectDir = new File(settingsDir, '../node_modules/react-native-android-library-simpl-sdk/android')
        ```

    * Add the following to `android/app/build.gradle`:
        ```xml
        ...

        repositories {
            maven { url "http://maven.getsimpl.com"}
        }

        dependencies {
            ...
            compile project(':react-native-android-library-simpl-sdk')
            compile "com.simpl.android:sdk:1.1.+"
        }
        ```
    * Add the following to `android/app/src/main/java/**/MainApplication.java`:
        ```java

        import com.android.smplSdk.SimplReactPackage;

        public class MainApplication extends Application implements ReactApplication {

            @Override
            protected List<ReactPackage> getPackages() {
                return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
                    new SimplReactPackage()     // add this for react-native-android-library-simpl-sdk
                );
            }
        }
        ```
4. Simply `import/require` it by the name defined in your library's `package.json`:

    ```javascript
   import SimplSdk from 'react-native-android-library-simpl-sdk'
    //TO check either user is approved or not
    SimplSdk.isApproved('cc253a6252f4472dee9bd3539d594c10', '9538651315', 'niraj@getsimpl.com', true,/*To test in sandbox mode*/
                          (result) => showOrHideSimplButton(result),
                          (approvalError) => console.log("User approval error: "+approvalError));


    showOrHideSimplButton = (result) => {
      if(result === true) {
        //Show Simpl button
      } else {
        //Hide Simpl button
      }
    }

    <Button
      onPress={authorizeTransaction}
      title="Simpl Pay"
    />

    authorizeTransaction = () => {
      //Authorise the transaction
      SimplSdk.authorizeTransaction(10000, ,"abcd1234"/*order_id*/, (transactionToken) => console.log("Transaction Token: "+transactionToken),
                                            (authError) => console.log("Authentication error: "+authError));
    }


    ```
5. You can test and develop your library by importing the `node_modules` library into **Android Studio** if you don't want to install it from _git_ all the time.
