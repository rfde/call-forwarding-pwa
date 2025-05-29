# Call Forwarding PWA

Setting up call forwarding on mobile phones is a tedious process and often requires typing lengthy USSD codes that no one can remember.

This repository contains a web app that makes this process easier. It assembles the relevant USSD codes for you and passes them to your dialer app with a single tap. In addition, it allows you to store frequently used target phone numbers as presets. Presets are stored locally on the device and never transmitted to the server.

Since the call forwarding USSD codes are standardized in the GSM specification, the app should work with most providers. Feel free to share your experiences in the [discussions](https://github.com/rfde/call-forwarding-pwa/discussions).

The web app [can also be permanently installed](https://support.google.com/chrome/answer/9658361?hl=en&co=GENIE.Platform%3DAndroid&oco=1) on your phone through the Progressive Web App technology.

A hosted version of this repository can currently be found at <https://tschlueter.eu/callfwd/>.
