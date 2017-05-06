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
    <h1>Buy Newtown Voices</h1>

    <p>If you like the sound of these narrative poems on life in “daggy old 70s Newtown”,You can order Newtown Voices from the publisher, <a href="http://www.ginninderrapress.com.au/">Gininderra Press</a>.</p>
    <p>Or if you can’t wait, ask for it at Inner West bookshops <a href="http://www.betterread.com.au/">Better Read Than Dead</a> (Newtown), <a href="http://www.gleebooks.com.au/home">Gleebooks</a> (Glebe) and <a href="http://berkelouw.com.au/stores/leichhardt">Berkelouw Books</a> (Leichhardt).</p>

    <p>The ebook of Newtown Voices will shortly be available online through Amazon and Book Depository.</p>

    <ul>
      <li><a href="http://www.ginninderrapress.com.au/">Gininderra Press</a></li>
      <li><a href="http://www.betterread.com.au/">Better Read Than Dead</a></li>
      <li><a href="http://www.gleebooks.com.au/home">Gleebooks</a></li>
      <li><a href="http://berkelouw.com.au/stores/leichhardt">Berkelouw Books</a></li>
      <li>Amazon (Coming soon)</li>
      <li>Book Depository (Coming soon)</li>
    </ul>
  </Page>
);
