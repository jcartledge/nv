import Page from '../Page';
import {Row, Col, Image} from 'react-bootstrap';

export default (props) => (
  <Page {...props}>
    <Row>
      <Col sm={8} smOffset={4}>
        <h1>Scoop!</h1>
        <p><big>
            TOM King St, Newtown<br/>
            The night of Thursday, February 16, 1978
        </big></p>
        <p>
          I come around the corner to the taste <br/>
          of smoke, of burning rubber and petrol <br/>
          on the night air. Falling cinders smudge <br/>
          my face, my eyes burn with the haze.  <br/>
          I’ve been disco dancing down at the Hub, <br/>
          and I’m walkin home to clear my head<br/>
          of music and booze and ciggie smoke, of girls <br/>
          in flashy dresses and too much makeup <br/>
          and the Greeks and Turks in their too tight jeans <br/>
          leerin at the girls and leerin at me. Christ! <br/>
          This is huge! The Rural Bank an the jeweller’s, <br/>
          an several other buildings, like somethin from<br/>
          photos of the Blitz! Fire bombed and still alight.
        </p>
      </Col>
    </Row>
  </Page>
);
