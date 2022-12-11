import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import twitter from '../assets/twitter.png'

export default function Contact() {
    const isMobile = window.innerWidth < 768;

    return (
        <>
            <h2 className='even pt-5'>Contact</h2>
            <div className={`${isMobile ? 'col ' : 'row pt-4'}  `}>
                <div className={`${isMobile ? 'row' : 'col'} `}
                    style={{
                    }}
                >

                    <form action="https://formspree.io/f/mpzkyqgd" method="POST"
                        style={{
                            width: '65vw',
                            paddingLeft: '20vw'

                        }}

                    >
                        <label for="name">Name</label>
                        <br />
                        <input type="text" name="name" required="required" />
                        <br />
                        <br />
                        <label for="mailid">Mail address</label>
                        <br />
                        <input type="email" name="mailid" required="required" />
                        <br />
                        <br />
                        <label for="message">Message</label>
                        <br />
                        <textarea name="message" rows="5" required="required"></textarea>
                        <br />
                        <br />
                        <div className='send-btn text-end'>
                            <button type="submit" variant='outline-danger'
                                style={{
                                    border: '2px solid #EC4067',
                                    color: 'white',
                                }}
                                className='bg-transparent py-1 px-4'
                            >Send</button>
                        </div>
                    </form>
                    {
                        !isMobile &&
                        <style>{`
                        form input, form textarea{
                            width:65%;
                        }
                        .send-btn{
                            width:65%;
                        }
                            `}
                        </style>
                    }
                    {
                        isMobile &&
                        <style>{`
                        .socialmedia li {
                            float: left;
                            list-style: none;
                            Margin: 0 15px;

                        `}</style>
                    }
                </div>
                <div className={isMobile ? 'row' : 'col'}>
                    <div className={isMobile ? 'text-center pt-3' : 'pt-3'}
                    >
                        <h3 style={{ marginTop: '10px' }}
                            className='odd'
                        >Connect with Me</h3>
                        <ul className={`socialmedia
                        ${isMobile ? 'd-flex justify-content-center' : ''}
                        `}>
                            <tr>
                                <li><a href="https://www.linkedin.com/in/rba1aji" target="_blank"
                                    rel='noreferrer'
                                ><img src={linkedin}
                                    alt="linkedin/rba1aji" /></a></li>
                                <li><a href="https://www.github.com/rba1aji"

                                    rel='noreferrer'
                                ><img src={github} alt="github/rba1aji" /></a>
                                </li>
                                <li><a
                                    rel='noreferrer'
                                    href="https://www.twitter.com/rba1aji" target="_blank">
                                    <img src={twitter}
                                        alt="twitter/rba1aji" /></a></li>
                            </tr>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    );
}