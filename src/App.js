import { Navbar, Container, Nav } from 'react-bootstrap';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home'
import IndexPost from './pages/posts/Index';
import CreatePost from './pages/posts/Create';
import EditPost from './pages/posts/Edit';


function App() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/">EXPRESS.JS + REACT.JS</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/" className="nav-link">HOME</Nav.Link>
                  <Nav.Link as={Link} to="/posts" className="nav-link">POSTS</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={IndexPost} />
        <Route exact path="/posts/create" component={CreatePost} />
        <Route exact path="/posts/edit/:id" component={EditPost} />
      </Switch>
      
    </div>
  );
}

export default App;
