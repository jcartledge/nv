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
    <p>Or if you can’t wait, ask for it at Inner West bookshops <a href="http://www.betterread.com.au/">Better Read Than Dead</a> or <a href="http://artonking.com/">Modern Times Bookstore</a> (Newtown), <a href="http://www.gleebooks.com.au/home">Gleebooks</a> (Glebe) and <a href="http://berkelouw.com.au/stores/leichhardt">Berkelouw Books</a> (Leichhardt).</p>

    <p>The ebook of Newtown Voices is available online through <a href="https://www.amazon.com.au/d/Newtown-Voices-Sue-Cartledge-ebook/B071CDYR3T/ref=sr_1_1?ie=UTF8&qid=1495166045&sr=8-1&keywords=Newtown+Voices">Amazon</a> and <a href="https://www.bookdepository.com/Newtown-Voices-Sue-Cartledge/9781760413415">Book Depository</a>.</p>

    <ul>
      <li><a href="http://www.ginninderrapress.com.au/">Gininderra Press</a></li>
      <li><a href="http://www.betterread.com.au/">Better Read Than Dead</a></li>
      <li><a href="http://www.gleebooks.com.au/home">Gleebooks</a></li>
      <li><a href="http://berkelouw.com.au/stores/leichhardt">Berkelouw Books</a></li>
      <li><a href="http://artonking.com/">Modern Times Bookstore</a></li>
      <li><a href="https://www.amazon.com.au/d/Newtown-Voices-Sue-Cartledge-ebook/B071CDYR3T/ref=sr_1_1?ie=UTF8&qid=1495166045&sr=8-1&keywords=Newtown+Voices">Amazon</a></li>
      <li><a href="https://www.bookdepository.com/Newtown-Voices-Sue-Cartledge/9781760413415">Book Depository</a></li>
    </ul>
  </Page>
);
