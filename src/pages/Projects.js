import { Row, Col, Card } from 'react-bootstrap';

export default function Projects() {
    const projects = [
        'https://restoview.vercel.app',
        'https://busdtl.vercel.app',
        'https://rba1aji.github.io/Algorithms/',
    ]
    const isMobile = window.innerWidth < 768;

    return (
        <>
            <h2 className="odd pt-3 pb-3">Personal Projects</h2>

            <Row xs={1} md={2} className="g-4 px-3 mx-5">
                {Array.from({ length: projects.length }).map((_, idx) => (
                    <Col
                        className={`${isMobile ? '' : 'px-5'} pt-5`}
                    >
                        <iframe
                            src={projects[idx]}
                            width="100%"
                            height="350px"
                            title="Projects"
                            style={{
                                borderRadius: '10px',
                            }}
                            className='bg-white'
                        >
                        </iframe>
                    </Col>
                ))}
            </Row>
            <br />
            <br />

        </>
    );
}