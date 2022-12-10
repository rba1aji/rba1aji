
export default function About() {
    const isMobile = window.innerWidth < 768;

    return (
        <div
            style={{
                fontSize: isMobile ? 'auto' : '140%',
            }}
            className={`px-5  ${isMobile ? '' : 'mx-5 pt-5'}`}
        >
            <h2 className="odd mb-4 pt-5">About Me</h2>
            <p>
                Im a pre-final year student studying Computer Science and Engineering at K S Rangasamy College of Technology.
            </p>
            <p>
                Good at problem solving. Proficient in programming and logical thinking.
            </p>
            <p>
                An aspiring Software Development Engineer, Skilled in design, development and testing.
            </p>
            <p>
                Have hands-on experience in developing web applications using ReactJS, ASP.NET Core Web API, PostgreSQL, JavaScript, HTML, CSS, Bootstrap, DOM, REST APIs, Git, GitHub, BitBucket, Heroku and Firebase.
            </p>
            <p>
                Have a good understanding of Object Oriented Programming, Data Structures and Algorithms. 
            </p>
        </div>
    );
}