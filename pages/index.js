import Page from '../Page';
import Link from 'next/link';
import {Row, Col} from 'react-bootstrap';
import {Jumbotron, Button} from 'react-bootstrap';
import {Form, FormGroup, FormControl, InputGroup, ControlLabel} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

export default (props) => (
  <Page {...props}>
    <Jumbotron>
      <Row>
        <Col sm={8}>
          <h1>Newtown Voices</h1>
          <p>Everyday life in Newtown in 1978 through the voices of locals and newcomers: violence, intimidation, corruption, bombings, wogs, dagos, Abos and Aussies, racism, sexism, homophobia, poverty, drugs and disco dancing.</p>
          <p>The personal and emotional lives of Tom and Harry, Jaroslav and Buzz echo the political and social turmoil in Australian cities through the late 70s.</p>
          <p>Commenting on it all, from a strictly parochial viewpoint, is the fearless editor of the the local weekly paper, <em>The Newtown Voice</em>.</p>
          <p><Button bsStyle="primary" href="/excerpt">Read more</Button></p>
        </Col>
        <Col sm={4}>
          <img src="/static/book.png" style={{width: '100%'}}/>
        </Col>
      </Row>
    </Jumbotron>

    <Row>
      <Col xs={12}>
        <blockquote>
          <p><big>&ldquo;Newtown’s mean streets have found their bard, their Chandler, their Porter, in <Link href="/author" prefetch><a>Sue Cartledge</a></Link>.</big></p>
          <p>This is a memoir and a love ballad for a place and a time: Newtown, in the skirts of a city to which the wider world was arriving fast. In this elegant and witty, tender novel in verse, you’ll meet cops and crooks, journos and painters, emigres fleeing violence in Europe and bringing finer food and wilder ways in their luggage; you’ll walk King Street as it comes out of its closet and opens its eyes, as a new Australia dawned, to the way—more diverse, more sophisticated, more violent, more knowing—the real world works. This is an accomplished work of narrative verse, an assemblage of asides and monologues, newspaper clippings and lyric meditations. <em>Newtown Voices</em> smells like a detective novel, dances like a villanelle, builds and breaks and flies, reads like a stage play. A trim, tough and touching remembrance, cut through with meditations on Newtown today, <em>Newtown Voices</em> is a delight and a work of art.&rdquo;</p>
          <cite>Mark Tredinnick, winner of the Montreal Poetry Prize.</cite>
        </blockquote>
      </Col>
    </Row>

    <Row>
      <Col sm={6}>
        <h2>Buy the book</h2>
        <ul>
          <li><a href="http://www.ginninderrapress.com.au/">Gininderra Press</a></li>
          <li><a href="http://www.betterread.com.au/">Better Read than Dead</a></li>
          <li><a href="http://www.gleebooks.com.au/home">Gleebooks</a></li>
          <li>Amazon (Coming soon)</li>
          <li>BookDepository (Coming soon)</li>
        </ul>
      </Col>
      <Col sm={6}>
        <h2>Come to the launch</h2>
        <ul className="fa-ul">
          <li><FontAwesome name="calendar" className="fa-li"/>4pm, June 4</li>
          <li>
            <FontAwesome name="map-marker" className="fa-li"/>
            <a href="http://www.betterread.com.au/">Better Read than Dead</a><br/>
            265 King St<br/>
            Newtown NSW 2042
          </li>
        </ul>
        <p>Sign up to the mailing list to receive an invite to the launch.</p>
        <Form action="//saveourcitrusinfo.us2.list-manage.com/subscribe/post?u=d7a8d097ec28f14c93ef45ce5&amp;id=b04fecef76" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate inline>
          <FormGroup>
            <InputGroup>
              <InputGroup.Addon>
                <FontAwesome name="envelope"/>
              </InputGroup.Addon>
              <FormControl type="email" id="mce-EMAIL" name="EMAIL" placeholder="jane.doe@example.com" />
            </InputGroup>
          </FormGroup>
          {' '}
          <Button type="submit">Register</Button>
        </Form>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <h2>Make an enquiry</h2>
        <p>Do you have a question about distribution? Would you like to arrange a reading or media appearance with Sue? Whatever the question, please ask!</p>
        <Form action="//formspree.io/jcartledge@gmail.com" method="post">
          <input type="hidden" name="_subject" value="Website enquiry - Newtown Voices"/>
          <Row>
            <Col md={4}>
              <FormGroup>
                <ControlLabel>Name</ControlLabel>
                <FormControl type="text"/>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <ControlLabel>Email address</ControlLabel>
                <InputGroup>
                  <InputGroup.Addon>
                    <FontAwesome name="envelope"/>
                  </InputGroup.Addon>
                  <FormControl type="email"/>
                </InputGroup>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <ControlLabel>Phone number</ControlLabel>
                <InputGroup>
                  <InputGroup.Addon>
                    <FontAwesome name="phone"/>
                  </InputGroup.Addon>
                  <FormControl type="text"/>
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Enquiry</ControlLabel>
            <FormControl componentClass="textarea"/>
          </FormGroup>
          <Button type="submit">
            Send enquiry
          </Button>
        </Form>
      </Col>
    </Row>
  </Page>
);
