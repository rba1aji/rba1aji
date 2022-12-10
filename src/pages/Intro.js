import { Container } from 'react-bootstrap'
import Balaji from '../assets/Balaji.jpeg'

export default function Intro() {
    const isMobile = window.innerWidth < 768;

    return (
        <Container
            style={{
                minHeight: '100vh',
                paddingTop: isMobile ? '0' : '22vh',
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
                            height: isMobile ? '32.5vh' : '100%',
                        }}
                    >
                        <img src={Balaji}
                            alt='Balaji'
                            style={{
                                width: isMobile ? '0vw' : '50vh',
                                borderRadius: '10px',
                                height: isMobile ? '0vw' : '51vh',
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
                            className={isMobile ? 'mt-0' : 'mt-4'}
                        >
                            <style>
                                {`
                                h1 {
                                    font-size: ${isMobile ? '250%' : '4vw'};
                                    font-weight: 700;
                                    margin: 0;
                                }
                                h1 .B{
                                    font-size: ${isMobile ? '140%' : '6vw'};
                                }
                                p.who-am-i {
                                    font-size: ${isMobile ? '130%' : '2vw'};
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
                                        letterSpacing: isMobile ? '3.5px' : 'auto',
                                    }}
                                >
                                    <span className='B'
                                        style={{
                                            color: '#D92027',
                                            paddingLeft: isMobile ? '0' : '20px',
                                            textShadow: isMobile ? '-4.2px -3.5px 0px #00c9c8' : '-7px -4px 0px #00c9c8',
                                            position: 'relative',
                                            bottom: isMobile ? '-4px' : '-5px',
                                        }}
                                    >
                                        B
                                    </span>
                                    alaji
                                </span>
                            </h1>
                            <p className={`who-am-i ${isMobile ? 'mt-3' : 'mt-4'}`}>
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