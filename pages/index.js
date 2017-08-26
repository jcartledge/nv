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
          <p>
            <Button bsStyle="primary" href="/excerpt">Read more</Button>
            &nbsp;
            <Button bsStyle="primary" href="http://suecartledgebooks.bigcartel.com/product/newtown-voices">Order now</Button>
          </p>
        </Col>
        <Col sm={4}>
          <img src="/static/book.png" style={{width: '100%'}}/>
        </Col>
      </Row>
    </Jumbotron>

    <Row>
      <Col xs={8} xsOffset={2}>
        <h2 style={{textAlign: 'center', paddingBottom: '1em', lineHeight: '1.3em'}}>A verse novel by Sydney author and poet Sue Cartledge, published by <a href="http://www.ginninderrapress.com.au/">Ginninderra Press</a></h2>
        <p><big>Although the verse novel is set in the Sydney innercity suburb, Sue says her stories of the events of 1978 have wider relevance than than just Newtown. “As I was researching the incidents I was fictionalising, although I was living in Newtown, I could see how they would play out in all of Australia’s major cities, and even, to a lesser extent, in regional towns.</big></p>
        <p><big>“The 70s were a turbulent time; the rise and then dismissal of Gough Whitlam is to me emblematic of that whole decade.”</big></p>
      </Col>
    </Row>

    <Row>
      <Col xs={12}>
        <blockquote>
          <p><big>&ldquo;Newtown’s mean streets have found their bard, their Chandler, their Porter, in <Link href="/author" prefetch><a>Sue Cartledge</a></Link>.</big></p>
          <p>This is a memoir and a love ballad for a place and a time: Newtown, in the skirts of a city to which the wider world was arriving fast. In this elegant and witty, tender novel in verse, you’ll meet cops and crooks, journos and painters, emigres fleeing violence in Europe and bringing finer food and wilder ways in their luggage; you’ll walk King Street as it comes out of its closet and opens its eyes, as a new Australia dawned, to the way—more diverse, more sophisticated, more violent, more knowing—the real world works. This is an accomplished work of narrative verse, an assemblage of asides and monologues, newspaper clippings and lyric meditations. <em>Newtown Voices</em> smells like a detective novel, dances like a villanelle, builds and breaks and flies, reads like a stage play. A trim, tough and touching remembrance, cut through with meditations on Newtown today, <em>Newtown Voices</em> is a delight and a work of art.&rdquo;</p>
          <cite>Mark Tredinnick, winner of the Montreal Poetry Prize.</cite>
        </blockquote>
        <blockquote>
          <p>&ldquo;I’m reading it slowly so I can enjoy and savour each episode. It’s so rich with images, characters, feelings, I think I’m there. Am really enjoying it, and expect I’ll go back and read it again.&rdquo;</p>
          <cite>Chris L</cite>
        </blockquote>
        <blockquote>
          <p>&ldquo;I couldn’t put it down! I read it so fast, I’ll have to read it again. The history of Newtown was pretty wild back then!&rdquo;</p>
          <cite>MC</cite>
          </blockquote>
      </Col>
    </Row>

    <Row>
      <Col smOffset={3} sm={6}><center>
        <h2>Buy the book</h2>
        <p><Button bsStyle="primary" href="/buy">Buy online or from a bookshop</Button></p>
        <p><Button bsStyle="info" href="/excerpt">Read an excerpt</Button></p>
    </center></Col>
    </Row>
    <Row>
      <Col xs={12}>
        <h2>Make an enquiry</h2>
        <p>Do you have a question about distribution? Would you like to arrange a reading or media appearance with Sue? Whatever the question, please ask!</p>
        <Form action="https://www.enformed.io/x3bcbota" method="post">
          <input type="hidden" name="*subject" value="Website enquiry - Newtown Voices"/>
          <input type="hidden" name="*default_email" value="info@suecartledge.com" />
          <input type="hidden" name="*honeypot"/>
          <Row>
            <Col md={4}>
              <FormGroup>
                <ControlLabel>Name</ControlLabel>
                <FormControl type="text" name="Name"/>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <ControlLabel>Email address</ControlLabel>
                <InputGroup>
                  <InputGroup.Addon>
                    <FontAwesome name="envelope"/>
                  </InputGroup.Addon>
                  <FormControl type="email" name="Email"/>
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
                  <FormControl type="text" name="Phone number"/>
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Enquiry</ControlLabel>
            <FormControl componentClass="textarea" name="Enquiry"/>
          </FormGroup>
          <Button type="submit" bsStyle="primary">
            Send enquiry
          </Button>
        </Form>
      </Col>
    </Row>
  </Page>
);
