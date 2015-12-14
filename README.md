# example-loader

webpack loader for react-example

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
import Button from './button';

module.exports = React.createClass({
  render() {
    return (
      <div className="example">
        <Button color="blue">blue</Button>
        <Button color="red">red</Button>
        <Button color="yellow">yellow</Button>

        <pre>
          <code>
            {`<Button color="blue">blue</Button>
              <Button color="red">red</Button>
              <Button color="yellow">yellow</Button>
            </div>`}
          </code>
        </pre>
      </div>
    );
  }
});
```

### License
ISC
