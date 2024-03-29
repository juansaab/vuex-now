# vuex-now
[![npm version](https://badge.fury.io/js/vuex-now.svg)](https://badge.fury.io/js/vuex-now)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A [Vuex](https://vuex.vuejs.org) plugin wich exposes a Reactive Time variable with auto update on a given interval. Useful when you need to update periodically a property on your Vue.JS component.

## Why this plugin?
Sometimes you need to update your Vue.JS component data based on the current time or you want to periodically update a computed property. Asigning new Date() to a computed variable might be not enough as time gets cached and property will not be reactive. 

This plugin exposes a variable on the Vuex store which autoupdates and computes on a given interval. Based on the idea exposed on the article [Reactive Time with Vue.js](https://cushionapp.com/journal/reactive-time-with-vuejs)

## Usage
Install the plugin via NPM.
```
npm install vuex-now
```
Import the plugin in your Vuex store definition.
```javascript
import VuexNow from 'vuex-now'
```
Create a constant to initialize the plugin with your desired updating interval.
```javascript
/* VuexNow(interval) - inverval: time in miliseconds for autoupdating the now variable */
const now = VuexNow(60 * 1000)
```
Import the plugin in your Vuex store definition
```javascript
export default new Vuex.Store({
  modules: {...},
  mutations: {...},
  getters: {...},
  plugins: [now]
})
```
Then you will be abble to map the Vuex variable into your component.
```html
<template>
Current time is {{ now }}
</template>
```
```javascript
import { mapState } from 'vuex'
export default {
    name: 'Your Component',
    data () {
        return { ... }
    },
    computed: {
        ...mapState('now', ['now'])
    }
}
```
### Preview using Vue Developer Chrome Plugin
![Preview on Vue Developer Plugin](https://github.com/juansaab/vuex-now/raw/master/docs/images/vuex-now-debug.png)

