# example-loader

button.example
``` html
<div className="example-buttons">
  <Button color="blue">blue</Button>
  <Button color="red">red</Button>
  <Button color="yellow">yellow</Button>
</div>
```

require('./button.example')
``` javascript
module.exports = React.createClass({
  render() {
    return (
      <div className="example">
        <div className="example-buttons">
          <Button color="blue">blue</Button>
          <Button color="red">red</Button>
          <Button color="yellow">yellow</Button>
        </div>

        <pre>
          <code>
            {`<div className="example-buttons">
              <Button color="blue">blue</Button>
              <Button color="red">red</Button>
              <Button color="yellow">yellow</Button>
            </div>
            `}
          </code>
        </pre>
      </div>
    );
  }
});
```
