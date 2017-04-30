import Page from '../Page';
import {Row, Col, Image} from 'react-bootstrap';
import {Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

function FormField({label, children}) {
  return (
    <FormGroup>
      <Col componentClass={ControlLabel} sm={2}>
        {label}
      </Col>
      <Col sm={10}>
        {children}
      </Col>
    </FormGroup>
  );
}

export default (props) => (
  <Page {...props}>
    <ul>
      <li><a href="http://www.ginninderrapress.com.au/">Gininderra Press</a></li>
      <li><a href="http://www.betterread.com.au/">Better Read than Dead</a></li>
      <li><a href="http://www.gleebooks.com.au/home">Gleebooks</a></li>
      <li>Amazon (Coming soon)</li>
      <li>BookDepository (Coming soon)</li>
    </ul>
  </Page>
);
