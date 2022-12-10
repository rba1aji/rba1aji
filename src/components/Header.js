import { Navbar, Nav, Container } from 'react-bootstrap'

export default function Header() {

    return (
        <Navbar bg="light" expand="lg"
            className="bg-transparent"
            fixed="bottom"
            style={{
                zIndex: 1,
                backdropFilter: 'blur(25px)'
            }}
        >
            <Container>
                <Navbar.Brand href="#Intro" className='text-white'>
                    Balaji
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {
                            ["About", "Skills", "Projects", "Contact"]
                                .map((page, index) => {
                                    return (
                                        <Nav.Link
                                            id={index}
                                            href={`#${page}`}
                                            className='text-white'
                                        >
                                            {page}
                                        </Nav.Link>
                                    )
                                })
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}