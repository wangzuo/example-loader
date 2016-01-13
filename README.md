# example-loader

webpack loader for react example

### Installation
``` sh
npm install example-loader -D
```

### Usage
``` javascript
// webpack.config.js
module: {
  loaders: [
    { test: /\.js$/, loader:  'babel-loader' },
    { test: /\.example$/, loader:  'babel-loader!../lib/loader' }
  ]
},
example: {
  'Button': './button',
  'Row, Col': './grid'
}
```


button.example
``` javascript
<Row>
  <Col col={10}>
    <Button>gray</Button>
    <Button color="blue">blue</Button>
    <Button color="red">red</Button>
    <Button color="yellow">yellow</Button>
  </Col>
</Row>
```

require('./button.example')
``` javascript
import React from 'react';
import Button from './button';
import {Row, Col} from './grid';

module.exports = () => (
  <div className="example">
    <Row>
  <Col col={10}>
    <Button>gray</Button>
    <Button color="blue">blue</Button>
    <Button color="red">red</Button>
    <Button color="yellow">yellow</Button>
  </Col>
</Row>

    <pre>
      <code>
        {`<Row>
  <Col col={10}>
    <Button>gray</Button>
    <Button color="blue">blue</Button>
    <Button color="red">red</Button>
    <Button color="yellow">yellow</Button>
  </Col>
</Row>
`}
      </code>
    </pre>
  </div>
);
```

### License
ISC
