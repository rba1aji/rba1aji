import { Navbar, Nav, Container } from 'react-bootstrap'

export default function Header() {

    return (
        <Navbar bg="light" expand="lg"
            className="bg-transparent justify-content-end"
            fixed="bottom"
            style={{
                zIndex: 1,
                // backdropFilter: 'blur(25px)',
                textAlign: 'right',
                fontSize: '125%',
                textShadow: '0 0 15px #000',
            }}
            variant="dark"
        >
            <Container>
                {/* <Navbar.Brand href="#Intro" className='text-white ms-auto'
                    style={{
                        textAlign: 'right',
                    }}
                >
                    Balaji
                </Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav"
                    className='text-white border-0 bg-transparent shadow-none'
                />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link
                            href='#Intro'
                            className='text-white text-bolder px-3'
                        >
                            Balaji
                        </Nav.Link>
                        {
                            ["About", "Skills", "Projects", "Contact"]
                                .map((page, index) => {
                                    return (
                                        <Nav.Link
                                            id={index}
                                            href={`#${page}`}
                                            className='text-white px-3'
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