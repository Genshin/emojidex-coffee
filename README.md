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
-----
Basic usage is simple.

1. First off load up the stylesheets and scripts:
```html
<head>
  ...
  <link href="http://assets.emojidex.com/scripts/css/emojidex-web.min.css" rel="stylesheet" />
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
  <script src="http://assets.emojidex.com/scripts/javascript/emojidex-web.min.js"></script>
  ...
</head>
```
2. Set emojidex-web  
In JavaScript / in a script tag
```js
$(document).ready(function() {
  ...
  $("body").emojidexReplace();
  $(".emojidex-plain_text").emojidexAutocomplete();
  $(".emojidex-content_editable").emojidexAutocomplete();
  ...
});
```
And you're all set!

Features
--------
### .emojidexReplace()
Scans text in the specified element and replaces any colon ":" encased short codes 
(eg: `:smile:`) or any UTF emoji (eg: `😄`) with emojidex emoji images.  
No conversion occurs when no emoji on emojidex is found that corresponds to the short code or 
UTF code and the text remains unchanged.

```
emojidexReplace :kissing_heart:

UTF moji codes to emoji:
❤🛅😄😡💌😈👍#️⃣

:code: to emoji:
❤:octopus::boar::frog:\:hand_salute: no_match:😄::no match::heart eyes(wh):
```

↓

![emojidex replace image](http://emojidex.github.io/emojidex-web/img/emojidex_replace.png)

### Options
#### Defaults
```js
emojidexReplace({
  onComplete: undefined,
  useLoadingImg: true,
});
```

#### options.onComplete
Type: `Function(jQuery element)` Default: `undefined`

Specifies a method to be run after a code has been converted into an emoji.  
A jQuery element reference is passed as an argument to the assigned method.  
  
Example:
```js
$("body").emojidexReplace({
  onComplete: function(element) {
    console.log('Completed emojidexReplace!!');
  }
});
```

#### options.useLoadingImg
Type: `Boolean` Default: `true`

Specifies weather or not to show the loading image [specified in the CSS] while downloading emoji.

### .emojidexAutocomplete()
Enables the autocomplete pop when a `:` colon is entered for `input`, `textarea`, 
and elements where `contenteditable="true"`.  

For `input`s and , `textarea`s colon enclosed shortcodes are shown as plain text.  
For `contenteditable="true"` elements the codes are converted immediately into emoji images.

### Options
#### Default options
```js
emojidexAutocomplete({
  listLimit: 10,
  insertImg: true
});
```
#### options.listLimit
Type: `Int` Default: `10`

The maximum number of items displayed in a pop list.

#### options.insertImg
Type: `Boolean` Default: `true`

Defines the behavior of `contenteditable="true"` elements. When true, codes are automatically 
converted to images. When false they remain as plain text.

Building
--------
You will need node with a usable npm, grunt and bower.

### Get the source
First off we need the actual source to build. Clone this repository if you haven't already:
```shell
git clone git@github.com:emojidex/emojidex-web.git
cd emojidex-web
```

### Install Packages and Obtain Required Sources
```shell
npm install
bower install
```

### Build
For a regular one-off build:
```shell
grunt
```
Modules will be built in the dist directory.

For development mode with dynamic compilation and dev server:
```shell
grunt dev
```
A live version of the latest build will be available at
[http://localhost:8000/dist/](http://localhost:8000/dist/).

License
=======
emojidex and emojidex tools are licensed under the [emojidex Open License](https://www.emojidex.com/emojidex/emojidex_open_license).

©2013 the emojidex project / Genshin Souzou K.K. [Phantom Creation Inc.]
