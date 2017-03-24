# example-loader

webpack loader for (react) example

### Installation
``` sh
npm install example-loader -D
```

### Usage
check [example](https://github.com/wangzuo/example-loader/tree/master/example) for a working example

``` javascript
// webpack.config.js
module: {
  rules: [
    { test: /\.example$/, loader: 'babel-loader!example-loader' },
    { test: /\.js$/, loader: 'babel-loader' }
  ]
}
```

button.example
``` javascript
import React from 'react';
import { Row, Col } from './grid';
import Button from './button';

export default () => (
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

import ButtonExample, { Code } from './button.example';

``` javascript
import React from 'react';
import { Row, Col } from './grid';
import Button from './button';

export default () => (
  <Row>
    <Col col={10}>
      <Button>gray</Button>
      <Button color="blue">blue</Button>
      <Button color="red">red</Button>
      <Button color="yellow">yellow</Button>
    </Col>
  </Row>
);

export const Code = () => (
  <pre className="language-javascript">
    <code className="language-javascript" dangerouslySetInnerHTML={{__html: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Row<span class="token punctuation">,</span> Col <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./grid'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">'./button'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Row<span class="token operator">></span>
    <span class="token operator">&lt;</span>Col col<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Button<span class="token operator">></span>gray<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
      <span class="token operator">&lt;</span>Button color<span class="token operator">=</span><span class="token string">"blue"</span><span class="token operator">></span>blue<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
      <span class="token operator">&lt;</span>Button color<span class="token operator">=</span><span class="token string">"red"</span><span class="token operator">></span>red<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
      <span class="token operator">&lt;</span>Button color<span class="token operator">=</span><span class="token string">"yellow"</span><span class="token operator">></span>yellow<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Col<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Row<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
`}} />
  </pre>
);
```

### License
ISC
