exports.Row = (props) => (
  <div className="row">
    {props.children}
  </div>
);

exports.Col= (props) => (
  <div className={`col col-${props.col}`}>
    {props.children}
  </div>
);
