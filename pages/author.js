import Page from '../Page';
import {Row, Col, Image} from 'react-bootstrap';

export default (props) => (
  <Page {...props}>
    <Row>
      <Col xs={8}>
        <h1>About Sue Cartledge</h1>
        <p><big>I’ve been writing poetry and short stories since my early teens. After 30+ years of applying my word skills and interest in human nature to my work as a journalist and editor, I’m now channelling them into my creative writing. I find the narrative style of the verse novel is ideal for telling stories through the voices of different characters.</big></p>
        <p><em>Newtown Voices</em> is my first verse novel, based on stories I’ve been wanting to tell for eight years. I lived in Newtown for almost 12 years, and although I’m now living further along Parramatta Road, I’m still a Newtown chick at heart.</p>
        <p>As a practicing poet, I’m working on expanding my skills in different styles of poetry, and hope to release a collection some time in the near future. I’ve also started on the rough draft of another verse novel.</p>
      </Col>
      <Col xs={4}>
        <Image responsive src="/static/sue.jpg"/>
      </Col>
    </Row>
  </Page>
);
