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
    <Form horizontal>
      <FormField label="Number of copies">
         <FormControl type="number" defaultValue="1"/>
       </FormField>
    </Form>
  </Page>
);
