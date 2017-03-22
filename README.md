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

export const Code = () => (
  <div dangerouslySetInnerHTML={{__html: `<pre style="display:block;overflow-x:auto;padding:0.5em;color:#000;background:#f8f8ff;"><code>&lt;Row&gt;
  <span><span style="color:#000080;font-weight:normal;">&lt;<span style="color:#000080;font-weight:normal;">Col</span> <span>col</span>=<span style="color:#219161;">{10}</span>&gt;</span>
    </span>&lt;Button&gt;gray&lt;/Button&gt;<span>
    </span>&lt;Button color=&quot;blue&quot;&gt;blue&lt;/Button&gt;<span>
    </span>&lt;Button color=&quot;red&quot;&gt;red&lt;/Button&gt;<span>
    </span>&lt;Button color=&quot;yellow&quot;&gt;yellow&lt;/Button&gt;<span>
  <span style="color:#000080;font-weight:normal;">&lt;/<span style="color:#000080;font-weight:normal;">Col</span>&gt;</span></span>
&lt;<span style="color:#b68;">/Row&gt;
</span></code></pre>`}} />
);

export default ()  => (
  <Row>
  <Col col={10}>
    <Button>gray</Button>
    <Button color="blue">blue</Button>
    <Button color="red">red</Button>
    <Button color="yellow">yellow</Button>
  </Col>
</Row>

);
```

### License
ISC
