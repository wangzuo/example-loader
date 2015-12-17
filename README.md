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
  'Button': './button'
}
```


button.example
``` javascript
<Button color="blue">blue</Button>
<Button color="red">red</Button>
<Button color="yellow">yellow</Button>
```

require('./button.example')
``` javascript
import React from 'react';
import Button from './button';

module.exports = () => (
  <div className="example">
    <Button>gray</Button>
<Button color="blue">blue</Button>
<Button color="red">red</Button>
<Button color="yellow">yellow</Button>

    <pre>
      <code>
        {`<Button>gray</Button>
<Button color="blue">blue</Button>
<Button color="red">red</Button>
<Button color="yellow">yellow</Button>
`}
      </code>
    </pre>
  </div>
);
```

### License
ISC
