import Head from 'next/head';
import {Grid, Row, Col, PageHeader, Jumbotron, Button} from 'react-bootstrap';
import {Form, FormGroup, FormControl, InputGroup} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

export default () => (
  <div>
    <Head>
      <script src="https://use.fontawesome.com/fd4a2742b6.js"></script>
      <link rel="stylesheet" href="//brick.a.ssl.fastly.net/Cardo:400" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
      <link href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/sandstone/bootstrap.min.css" rel="stylesheet" integrity="sha384-G3G7OsJCbOk1USkOY4RfeX1z27YaWrZ1YuaQ5tbuawed9IoreRDpWpTkZLXQfPm3" crossorigin="anonymous"/>
      <style>{"p,div{font-family:Cardo}form,input,button{font-family:sans-serif}"}</style>
    </Head>
    <Grid>
      <PageHeader>
        Sue Cartledge <small>Poet and author</small>
      </PageHeader>
      <Jumbotron>
        <Row>
          <Col sm={8}>
            <h1>Newtown Voices</h1>
            <p>Everyday life in Newtown in 1978 through the voices of locals and newcomers: violence, intimidation, corruption, bombings, wogs, dagos, Abos and Aussies, racism, sexism, homophobia, poverty, drugs and disco dancing.</p>
            <p>The personal and emotional lives of Tom and Harry, Jaroslav and Buzz echo the political and social turmoil in Australian cities through the late 70s.</p>
            <p>Commenting on it all, from a strictly parochial viewpoint, is the fearless editor of the the local weekly paper, <em>The Newtown Voice</em>.</p>
            <p><Button bsStyle="primary">Learn more</Button></p>
          </Col>
          <Col sm={4}>
            <img src="/static/book.png" style={{width: '100%'}}/>
          </Col>
        </Row>
      </Jumbotron>

      <Row>
        <Col xs={12}>
          <blockquote>
            <p><big>&ldquo; Newtown’s mean streets have found their bard, their Chandler, their Porter, in Sue Cartledge.</big></p>
            <p>This is a memoir and a love ballad for a place and a time: Newtown, in the skirts of a city to which the wider world was arriving fast. In this elegant and witty, tender novel in verse, you’ll meet cops and crooks, journos and painters, emigres fleeing violence in Europe and bringing finer food and wilder ways in their luggage; you’ll walk King Street as it comes out of its closet and opens its eyes, as a new Australia dawned, to the way—more diverse, more sophisticated, more violent, more knowing—the real world works. This is an accomplished work of narrative verse, an assemblage of asides and monologues, newspaper clippings and lyric meditations. Newtown Voices smells like a detective novel, dances like a villanelle, builds and breaks and flies, reads like a stage play. A trim, tough and touching remembrance, cut through with meditations on Newtown today, Newtown Voices is a delight and a work of art. &rdquo;</p>
            <cite>Mark Tredinnick, winner of the Montreal Poetry Prize.</cite>
          </blockquote>
        </Col>
      </Row>

      <Row>
        <Col sm={6}>
          <h2>Attend the launch</h2>
          <ul className="fa-ul">
            <li><FontAwesome name="calendar" className="fa-li"/>4pm, May 28</li>
            <li><FontAwesome name="map-marker" className="fa-li"/>Better Read than Dead<br/>265 King St<br/>Newtown NSW 2042
            </li>
          </ul>
          <p>Sign up here for an invite:</p>
          <Form inline>
            <FormGroup>
              <InputGroup>
                <InputGroup.Addon>
                  <FontAwesome name="envelope"/>
                </InputGroup.Addon>
                <FormControl type="email" placeholder="jane.doe@example.com" />
              </InputGroup>
            </FormGroup>
            {' '}
            <Button type="submit">Send invitation</Button>
          </Form>
          <h2>Where to buy</h2>
          <h3>Online</h3>
          <a href="http://www.ginninderrapress.com.au/">Gininderra Press</a>
          <h3>Bookshops</h3>
          <ul>
            <li>Better Read than Dead</li>
            <li>Gleebooks</li>
          </ul>
        </Col>
        <Col sm={6}>
          <img src="/static/BRTD.jpg" style={{width: '100%'}}/>
        </Col>
      </Row>
    </Grid>
  </div>
);
