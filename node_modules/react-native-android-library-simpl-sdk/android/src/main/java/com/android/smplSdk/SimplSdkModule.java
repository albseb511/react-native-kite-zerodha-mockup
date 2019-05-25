package com.android.smplSdk;

import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.UiThreadUtil;
import com.simpl.android.sdk.Simpl;
import com.simpl.android.sdk.SimplAuthorizeTransactionListener;
import com.simpl.android.sdk.SimplTransactionAuthorization;
import com.simpl.android.sdk.SimplUser;
import com.simpl.android.sdk.SimplUserApprovalListenerV2;

public class SimplSdkModule extends ReactContextBaseJavaModule {
    private static final String TAG = SimplSdkModule.class.getSimpleName();

    public SimplSdkModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "SimplSdk";
    }

    @ReactMethod
    public void isApproved(final String merchantId, final String mobileNumber, final String emailId, final boolean isSandbox,
                           final Callback successCallback, final Callback errorCallback) {
        Simpl.init(getReactApplicationContext(), merchantId);
        Log.d(TAG, "isApproved(): merchantId: " + merchantId + " mobileNumber: " + mobileNumber + " emailId: " + emailId);
        if (isSandbox)
            Simpl.getInstance().runInSandboxMode();
        Simpl.getInstance().isUserApproved(new SimplUser(emailId, mobileNumber))
                .execute(new SimplUserApprovalListenerV2() {
                    @Override
                    public void onSuccess(final boolean b, String s, boolean b1) {
                        successCallback.invoke(b);
                    }

                    @Override
                    public void onError(Throwable throwable) {
                        errorCallback.invoke(throwable.getMessage());
                    }
                });
    }

    @ReactMethod
    public void authorizeTransaction(final int transactionAmountInPaise, final String orderId, final Callback successCallback, final Callback errorCallback) {
        Simpl.getInstance().authorizeTransaction(getReactApplicationContext(), transactionAmountInPaise)
                .addParam("order_id", orderId)
                .execute(new SimplAuthorizeTransactionListener() {
                    @Override
                    public void onSuccess(SimplTransactionAuthorization simplTransactionAuthorization) {
                        successCallback.invoke(simplTransactionAuthorization.getTransactionToken());
                    }

                    @Override
                    public void onError(Throwable throwable) {
                        errorCallback.invoke(throwable.getMessage());
                    }
                });
    }

}
