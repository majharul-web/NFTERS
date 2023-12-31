import { FormControl, InputGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaSearch } from 'react-icons/fa';

const Appbar = () => {
    return (
        <Navbar key="xl" expand='xl' className="bg-body-tertiary my-2 header">
            <Container >
                <Navbar.Brand href="/" className='text-primary bold f-roboto' >NFTERS</Navbar.Brand>
                <Navbar.Toggle className='custom-toggler' aria-controls={`offcanvasNavbar-expand-xl`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-xl`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title className='text-primary bold f-roboto' id={`offcanvasNavbarLabel-expand-xl`}>
                            NFTERS
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-start flex-grow-1 pe-3">
                            <Nav.Link href="#marketplace">Marketplace</Nav.Link>
                            <Nav.Link href="#Resource">Resource</Nav.Link>
                            <Nav.Link href="#About">About</Nav.Link>
                        </Nav>
                        <div className='off-form'>

                            {/* <Form className="d-flex ">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                
                            </Form> */}

                            <Form className='mx-0 mx-lg-2'>
                                <InputGroup>
                                    <FormControl
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                        className='search-input'
                                    />
                                    <InputGroup.Text className='search-input-icon'>
                                        <FaSearch />
                                    </InputGroup.Text>
                                </InputGroup>
                            </Form>

                            <div className='nav-btns'>
                                <button className='btn btn-primary mx-1 mx-lg-2 px-3'>Upload</button>
                                <button className='btn btn-primary-outline mx-1 mx-lg-2 px-3'>Connect Wallet</button>
                            </div>
                        </div>

                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default Appbar;