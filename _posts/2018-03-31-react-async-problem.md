---
layout: post
title: "React setState with Async http request"
excerpt: "React lifecycle function"
categories: [react]
comments: true
---

# Problems
Background: React app where it can let two server communicate with each other(Play guess word games).
One server has to respond the other server's request response then send request.

While connecting to the express service. It's often to encounter Async problems.
React Components has their lifecycle methods which we can override. It includes but not limited to 
***render(), constructor(), componentDidMount()***, etc

While we want to send a HTTP request such as **GET, POST, PUT, DELETE** AFTER parent component's state's update. It may cause
some problems since setState is not taking effect immediately.

Due to React Official blog, *"Think of setState() as a request rather than an immediate command to update the component. 
For better perceived performance, React may delay it, and then update several components in a single pass. 
React does not guarantee that the state changes are applied immediately.setState() does not always immediately update the component. 
It may batch or defer the update until later. This makes reading this.state right after calling setState() a potential pitfall. 
Instead, use componentDidUpdate or a setState callback (setState(updater, callback)), 
either of which are guaranteed to fire after the update has been applied. If you need to set the state based on the previous state, 
read about the updater argument below."* 

For example:

```javascript
this.setState({name: Ryan});
fetch("https://www.google.com/search?q=" + this.state.name).then().catch();
```

This may fail due to above reasons.

Also, since fetch is also Async, during the 'then' block, you update the state, you may not able to use it immediately either.
like:

```javascript
fetch("http://example.com").then(resp => resp.ok ? this.setState(resp.json()) : Promise.reject(response.text())).catch();
console.log(this.state); // The state may not have been updated
```

# Solution: 
1. setState provides a callback parameter which we can use to do request right after we update the state.
```javascript
this.setState({name: Ryan}, () => xxxrequest());
```
2. or using **componentDidUpdate()**. However, in my case, since I have to update state in a request, using this lifecycle method
will cause infinite loop because each setState will cause re-render and re-render will call didupdate agiain then request setState again.

## Other problems related to Async request call

1. Send request in a chain (one by one)
```javascript
fetch(url1).then(fetch(url2).then(fetch(url3)))//pyramid 
```
2. axios.all method, check [axios API](https://github.com/axios/axios)

3. [Async/Await](https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9)
    [Async MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)


## See also

### Communication between child node and parent node in React w/o Flux
[link](https://www.javascriptstuff.com/component-communication/)