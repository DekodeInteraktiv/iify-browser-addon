# Intro
This browser extension checks if it's friday

The extension add a new button to the browser.
When you want to know if it's friday, click on the button.
This plugin is mainly used by the support/devops team.
# Install

## Chrome

* From the top bar open Window.
* Click on Extensions.
* Click on Load unpacked.
* Select the manifest.json

## Firefox

To open the settings type this in address bar:
```
about:debugging
``` 
* Click This "This Firefox".
* Load Temporary Add-on...
* Select the manifest.json

Unfortunately, Firefox only supports loading the extension temporarily. This means you have to load it every time you close your browser.

To load the plugin permanent it is requried to have the plugin package, signed and reviewd by Firefox.
I did not bother jumping trough the hoops of get a developer account and go through their review process.

# Developer details
Nice to know details for any future development.

## Cross browser Chrome/Firefox
https://github.com/mozilla/webextension-polyfill

## Package files for firefox
https://hacks.mozilla.org/2015/09/lets_write_a_webextension/

## Helpfull links
https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension
https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension
https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Examples