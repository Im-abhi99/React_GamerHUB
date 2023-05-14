import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar1() {
  return (
    <Navbar className='navbar fixed-top' bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand className='navbrand' href="#"><img className='img-fluid navimg' src="https://gamershub.gg/logo.png" alt="" />GamerHUB</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto me-auto my-2 my-lg-0 navlink"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='' href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Today's Best Deals</Nav.Link>
            <NavDropdown title="Category" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Console's</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Assessories
              </NavDropdown.Item>
              
              <NavDropdown.Item href="#action6">
                Gamimg Pc's
              </NavDropdown.Item>
              <NavDropdown.Item href="#action7">
                Gamimg Chairs
              </NavDropdown.Item>
              <NavDropdown.Item href="#action8">
                VR Games
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">
           Build Your PC
            </Nav.Link>
          </Nav>
          
          <Form className="d-flex me-5">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 search "
              aria-label="Search"
            />
            <Button className='search1' variant="outline-success">Search</Button>
          </Form>
          <Nav.Link href="#" className='me-3'>
          <i class=" text-secondary  fa-solid fa-user"></i>
            </Nav.Link>
            <Nav.Link href="#" className='me-5'>
            <i class="text-secondary fa-solid fa-cart-shopping"></i>
            </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;