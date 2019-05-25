Logic for database


1.  Request for Phone no: // check for valid phone and other checks
2.  Send for OTP:
3.  Log session request:
4.  Connect to Simpl for authentication?
5.  Wait for authentication? goto 6: show error
6.  Enter OTP? goto 7: show error
7.  Log Unlock request and change screen to unlock screen
8.  Change App2Machine_status from false to true
9.  Machine waits for App2Machine_status, if value is changed from false to true then request is sent from Server to          unlock fridge. App2Machine_status => false
10. Machine monitors information on which all items are removed, and weight is monitored
11. Once door is closed, and hall effect sensor is triggered, then door closes. If door isnt closed monitor data after        timeout inform Admin.
12. Machine requests Machine2App_status to change from false to true
13. Machine updates information about what Item was taken and collects that data
14. App waits for Machine2App_status to change from false to true, if true, it shows information of items purchased
    and total cost associated with it
15. App takes information and total is sent to Simpl for bill collection to the Simpl account
16. log data //Incase of failure, we know amount and logs to clarify usage. Keep logs year/month/daywise
17. Once billed, inform user.
