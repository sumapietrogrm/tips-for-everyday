To debug firebase events on android studio follow these steps.

Run in the terminal after the boot of an AVD or a pairing debug whit a physical device:

```
adb shell setprop log.tag.FA VERBOSE
adb shell setprop log.tag.FA-SVC VERBOSE
adb logcat -v time -s FA FA-SVC
```


If you want to create a file with the result of the log use this commands:

```
notepad logcat.log
adb logcat -v time -s FA FA-SVC -v threadtime -d > logcat.log
```
