# react-user-avatar

## Install

Run `npm i react-useravatar --save`

![alt UserAvatar demo](/demo.JPG)

## Props

* **username** *string* (required)

* **size** *integer*

* **style** *object*

* **onPress** *function*

* **onLongPress** *function*

* **onPressIn** *function*

* **onPressOut** *function*

* **textLength** *integer*

* **textStyle** *object*

* **textColor** *string*

* **borderStyle** *boolean*

## Static

* **getColor** *function* : Get color with username, ex `UserAvatar.getColor("bltnico")` return `044FD1`

## Dev and test

Install babel by `npm install`

And compile with `babel src --out-dir lib`

Babel `.babelrc` use es2015 and react compiler
