import React from 'react';
import { render } from 'react-dom';

function Hello() {
    return <marquee>Hello there!!!</marquee>
}

render(<Hello/>, document.getElementById('root'));
