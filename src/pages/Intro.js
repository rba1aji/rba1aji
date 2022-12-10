import { Container } from 'react-bootstrap'
import Balaji from '../assets/Balaji.jpeg'

export default function Intro() {
    const isMobile = window.innerWidth < 768;

    return (
        <Container
            style={{
                minHeight: '100vh',
                marginTop: isMobile ? '0' : '20vh',
            }}
            fluid
        >
            <>
                <div
                    className={isMobile ? 'col' : 'row'}
                >
                    <div
                        className={`${isMobile ? 'row' : 'col'} text-center`}
                        style={{
                            height: isMobile ? '40vh' : '100%',
                        }}
                    >
                        <img src={Balaji}
                            alt='Balaji'
                            style={{
                                width: isMobile ? '45vw' : '50vh',
                                borderRadius: '10px',
                                height: isMobile ? '46vw' : '51vh',
                            }}
                            className='p-0 m-auto img-fluid'
                        />
                    </div>
                    <div
                        className={isMobile ? 'row' : 'col'}
                    >
                        <div
                            style={{
                                textAlign: isMobile ? 'center' : 'left',
                            }}
                            className='mt-4'
                        >
                            <style>
                                {`
                                h1 {
                                    font-size: ${isMobile ? 'auto' : '4.5vw'};
                                    font-weight: 700;
                                    margin: 0;
                                }
                                p {
                                    font-size: ${isMobile ? 'auto' : '2vw'};
                                    font-weight: 400;
                                    margin: 0;
                                }
                            `}
                            </style>
                            <h1
                                style={{
                                    position: 'relative',
                                    bottom: isMobile ? '0px' : '-15px',
                                    lineHeight: isMobile ? 'auto' : '120%',
                                }}
                                className='mb-0'
                            >
                                Hi,
                                {!isMobile && <br />}
                                {' '}I'm
                                {isMobile && <br />}
                                <span className='Balaji'
                                    style={{
                                        letterSpacing: isMobile ? '2.5px' : 'auto',
                                    }}
                                >
                                    <span className='B'
                                        style={{
                                            color: '#D92027',
                                            paddingLeft: isMobile ? '0' : '20px',
                                            fontSize: isMobile ? '2.5rem' : '7vw',
                                            textShadow: isMobile ? '-3.5px -2px 0px #00c9c8' : '-7px -4px 0px #00c9c8',
                                            position: 'relative',
                                            bottom: isMobile ? '-3px' : '-5px',
                                        }}
                                    >
                                        B
                                    </span>
                                    alaji
                                </span>
                            </h1>
                            <p className='who-am-i mt-4'>
                                A pre-final year student
                                <br />
                                An aspiring software developer
                            </p>
                        </div>
                    </div>
                </div>
            </>
        </Container >
    );
}