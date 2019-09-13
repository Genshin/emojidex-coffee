emojidex-web
============
emojidex-web provides a variety of tools and widgets to quickly incorporate emojidex
into any website or JavaScript based app. It's written in CoffeeScript and SLIM which
compiles into a JavaScript module that can be easily included into your project.  

By default all emoji assets are dynamically loaded from the emojidex CDN and dynamically
cached by the client. There is no need to store any assets on your own server or bundle
them with your app. The module is self contained and enclosed and should not interfere
with other components of your site or app.  

Check out the demo at:
[http://emojidex.github.io/emojidex-web](http://emojidex.github.io/emojidex-web)

Usage
=====
Basic usage is simple.

1\. First off load up the stylesheets and scripts:
```html
<head>
  ...
  <link href="https://cdn.emojidex.com/scripts/css/emojidex.min.css" rel="stylesheet" />
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="https://cdn.emojidex.com/scripts/javascript/emojidex.min.js"></script>
  ...
</head>
```
2\. Set emojidex-web  
In JavaScript / in a script tag
```js
$(document).ready(function() {
  ...
  $("body").emojidexReplace();
  await $('body').data().plugin_emojidexReplace; // Wait for initialization
  $(".emojidex-plain_text").emojidexAutocomplete();
  await $(".emojidex-plain_text").data().plugin_emojidexAutocomplete; // Wait for initialization
  $(".emojidex-content_editable").emojidexAutocomplete();
  await $(".emojidex-content_editable").data().plugin_emojidexAutocomplete // Wait for initialization
  ...
});
```
And you're all set!

Features
========
### .emojidexReplace()
Scans text in the specified element and replaces any colon ":" encased short codes
(eg: `:smile:`) or any UTF emoji (eg: `😄`) with emojidex emoji images.  
No conversion occurs when no emoji on emojidex is found that corresponds to the short code or
UTF code and the text remains unchanged.

```
emojidexReplace :kissing_heart:

UTF moji codes to emoji:
❤🛅😄😡💌💌😈👍💩
💙💙💙

Acknowledged ZWJ emoji:
👨‍👩‍👦

:code: to emoji:
❤:octopus::boar::frog:\:hand_salute: no_match:😄::no match::heart eyes(wh):
```

↓

![emojidex replace image](http://emojidex.github.io/emojidex-web/img/samples/emojidex_replace.png)

### Options
#### Defaults
```js
emojidexReplace({
  useLoadingImg: true,
  autoUpdate: true,
  selector: '*',
  ignore: 'script, noscript, canvas, img, style, iframe, input, textarea, pre, code',
  ignoreContentEditable: true
});
```

#### options.useLoadingImg
Type: `Boolean` Default: `true`

Specifies weather or not to show the loading image [specified in the CSS] while downloading emoji.

#### options.autoUpdate
Type: `Boolean` Default: `true`

Automatically run conversions on AJAX events.

#### options.selector
Type: `String` Default: `*`

Set tags to permission the contents of during blanket conversions.　\*Judge after options.ignore.

#### options.ignore
Type: `String` Default: `script, noscript, canvas, img, style, iframe, input, textarea, pre, code`

Set tags to ignore the contents of during blanket conversions.

#### options.ignoreContentEditable
Type: `Boolean` Default: `true`

Defines the behavior of `contenteditable="true"` elements. When true, ignore convert.


### .emojidexAutocomplete()
Enables the autocomplete pop when a `:` colon is entered for `input`, `textarea`,
and elements where `contenteditable="true"`.  

For `input`s and , `textarea`s colon enclosed shortcodes are shown as plain text.  
For `contenteditable="true"` elements the codes are converted immediately into emoji images.

### Options
#### Default options
```js
emojidexAutocomplete({
  listLimit: 15,
  content_editable: {
    insertImg: true
  }
});
```

#### options.listLimit
Type: `Int` Default: `15`

The maximum number of items displayed in a pop list.

#### options.content_editable.insertImg
Type: `Boolean` Default: `true`

Defines the behavior of `contenteditable="true"` elements. When true, codes are automatically
converted to images. When false they remain as plain text.


### .emojidexPalette()
Sets an element to open up an emoji palette chooser when clicked.

emoji are copied to the clipboard when clicked.
The palette contains a tabbed index, search functionality, and displays history and favorites when
a user is logged in.

### Options
#### Default options
```js
emojidexPalette({
  onEmojiButtonClicked: undefined,
  paletteEmojisLimit: 50
});
```

#### options.onEmojiButtonClicked
Type: `Function({imageTag: Img tag of clicked emoji, emojiCode: Code of clicked emoji})` Default: `undefined`

Calls the defined method when click an emoji button on the palette.

#### options.paletteEmojisLimit
Type: `Int` Default: `50`

The maximum number of items displayed in a palette.



Building
========
You will need node with a usable npm and yarn.

### Get the source
First off we need the actual source to build. Clone this repository if you haven't already:
```shell
git clone git@github.com:emojidex/emojidex-web.git
cd emojidex-web
```

### Install Packages and Obtain Required Sources
```shell
yarn install
```

### Build
For a regular one-off build:
```shell
yarn build
```
Modules will be built in the dist directory.

For development mode with dynamic compilation and dev server:
```shell
yarn dev
```
A live version of the latest build will be available at
[http://localhost:8000/dist/](http://localhost:8000/dist/).

Testing
=======
There are two types of specs: regular specs that use the test account and specs that require a
premium account with R-18 enabled. As a developer you are eligable to receive a complimentary
upgrade to a premium account if you are working on either an emojidex package or module or
integration of emojidex in your own software. Simply contact info@emojidex.com with the subject
"Developer Account" and list the following details:
1. Your username on emojidex
2. The project(s) you intend to work on

__Testing URL: localhost:8888/?random=false__

.env (optional)
---------------
After obtaining a permium account you can use it for testing. To do this you need to create a
file named '.env' with the following information:
```
USERNAME=Your_UserName
EMAIL=your@email.com
PASSWORD=YourPassword123
AUTH_TOKEN=0123456789abcdef
```
replacing the Your_UserName and 0123456789abcdef etc. with your actual username and auth_token...
The quickest way to find your auth_token is to log in on your browser, open up your user
settings by clicking on your username in the top right, and scrolling down to the Auth Token
field (or to do an auth request with CURL as in the developer.emojidex.com documentation).

License
=======
emojidex and emojidex tools are licensed under the [emojidex Open License](https://www.emojidex.com/emojidex/emojidex_open_license).

©2013 the emojidex project / K.K. GenSouSha
