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
