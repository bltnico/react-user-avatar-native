# react-user-avatar

## Install

Run `npm i react-useravatar --save`

![alt UserAvatar demo](/demo.JPG)

## Usage

**Basic**

```
import UserAvatar from 'react-useravatar-native'

...

render() {
    return (
        <UserAvatar
            username="bltnico"
            size={70}
            onLongPress={this.getUserInfos} />
    );
}

```

**Custom design**

```
import UserAvatar from 'react-useravatar-native'

...

constructor() {
    ...
    this.state = { opacity : 0 };
}

render() {
    let _opacity = this.state.opacity;

    return (
        <UserAvatar
            style={[ styles.customAvatar, { opacity : _opacity } ]}
            textStyle={styles.customAvatarText}
            username="bltnico"
            onPressIn={() => { this.setState({ opacity : 0.5 }); }}
            onPressOut={() => { this.setState({ opacity : 1 }); }} />
    );
}

let styles = StyleSheet.create({
    customAvatar : {
        position : 'absolute',
        justifyContent : 'flex-end'
    },
    customAvatarText : {
        fontWeight : "700"
    }
});

```

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
