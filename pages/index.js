import Head from 'next/head';
import {Grid, Row, Col, PageHeader, Jumbotron, Button} from 'react-bootstrap';
import {Form, FormGroup, FormControl, InputGroup} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

export default () => (
  <div>
    <Head>
      <script src="https://use.fontawesome.com/fd4a2742b6.js"></script>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css" />
    </Head>,
    <Grid>
      <PageHeader>
        Sue Cartledge <small>Poet and author</small>
      </PageHeader>
      <Jumbotron>
        <h1>Newtown Voices</h1>
        <p>Everyday life in Newtown in 1978 through the voices of locals and newcomers: violence, intimidation, corruption, bombings, wogs, dagos, Abos and Aussies, racism, sexism, homophobia, poverty, drugs and disco dancing.</p>
        <p>The personal and emotional lives of Tom and Harry, Jaroslav and Buzz echo the political and social turmoil in Australian cities through the late 70s.</p>
        <p>Commenting on it all, from a strictly parochial viewpoint, is the fearless editor of the the local weekly paper, <em>The Newtown Voice</em>.</p>
        <p><Button bsStyle="primary">Learn more</Button></p>
      </Jumbotron>

      <Row>
        <Col xs={12}>
          <blockquote>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit; Aenean commodo ligula
              eget dolor; Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus! Donec quam felis, ultricies nec, pellentesque
              eu, pretium quis, sem!</p>
            <cite>Mark Tredinnick, Poet</cite>
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
