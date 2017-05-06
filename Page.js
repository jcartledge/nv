import Head from 'next/head';
import Link from 'next/link';
import {Grid, PageHeader, Navbar, Nav, NavItem} from 'react-bootstrap';

const Page = (props) => (
  <div>
    <Head>
      <script src="https://use.fontawesome.com/fd4a2742b6.js"></script>
      <link rel="stylesheet" href="//brick.a.ssl.fastly.net/Cardo:400" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
      <link href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/sandstone/bootstrap.min.css" rel="stylesheet"/>
      <style>{"p,div{font-family:Cardo}form,label,input,button{font-family:sans-serif}footer{margin:3em 0 0;padding:1em;text-align:center;background-color:#f8f5f0}p a,p a:hover, li a,li a:hover{color:darkgreen}"}</style>
      <title>Newtown Voices | Sue Cartledge</title>
    </Head>
    <script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create', 'UA-98654391-1', 'auto');ga('send', 'pageview');</script>
    <Grid>
      <PageHeader>Sue Cartledge <small>Poet and author</small></PageHeader>
      <Navbar>
        <Nav activeHref={props.url.pathname}>
          <NavItem href="/">Home</NavItem>
          <NavItem href="/buy">Buy</NavItem>
          <NavItem href="/author">Author</NavItem>
          <NavItem href="/excerpt">Excerpt</NavItem>
        </Nav>
      </Navbar>
      {props.children}
    </Grid>
    <footer>
      &copy; Sue Cartledge 2017
    </footer>
  </div>
);

export default Page;
