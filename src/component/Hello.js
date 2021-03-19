import React from 'react';

const Hello = () => {
    // return (<div>Hello world</div>)
    return React.createElement('div',null,React.createElement('h1',null,'hello world'))
   
}

export default Hello;