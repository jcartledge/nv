import Page from '../Page';
import {Button} from 'react-bootstrap';

export default (props) => (
  <Page {...props}>
    <h1>Buy Newtown Voices</h1>

    <p>If you like the sound of these narrative poems on life in “daggy old 70s Newtown”,You can <a href="http://suecartledgebooks.bigcartel.com/product/newtown-voices">order Newtown Voices here</a>.</p>
    <p>Or if you can’t wait, ask for it at Inner West bookshops <a href="http://www.betterread.com.au/">Better Read Than Dead</a> or <a href="http://artonking.com/">Modern Times Bookstore</a> (Newtown), <a href="http://www.gleebooks.com.au/home">Gleebooks</a> (Glebe) and <a href="http://berkelouw.com.au/stores/leichhardt">Berkelouw Books</a> (Leichhardt).</p>

    <p>In Tasmania, try <a href="http://petrachs.com.au/">Petrarch's Bookshop</a> in Launceston.</p>

    <p>The ebook of Newtown Voices is available online through <a href="https://www.amazon.com.au/d/Newtown-Voices-Sue-Cartledge-ebook/B071CDYR3T/ref=sr_1_1?ie=UTF8&qid=1495166045&sr=8-1&keywords=Newtown+Voices">Amazon</a>.</p>

    <p><strong>Even better, you can <a href="http://suecartledgebooks.bigcartel.com/product/newtown-voices">buy direct from the author</a>!</strong></p>

    <ul>
      <li><a href="http://www.betterread.com.au/">Better Read Than Dead</a></li>
      <li><a href="http://www.gleebooks.com.au/home">Gleebooks</a></li>
      <li><a href="http://berkelouw.com.au/stores/leichhardt">Berkelouw Books</a></li>
      <li><a href="http://artonking.com/">Modern Times Bookstore</a></li>
      <li><a href="http://petrarchs.com.au">Petrarch's Bookshop</a></li>
    </ul>

    <p><Button bsStyle="primary" href="http://suecartledgebooks.bigcartel.com/product/newtown-voices">Buy now</Button></p>

  </Page>
);
