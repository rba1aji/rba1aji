var sphere = require('../utils/skills-sphere.htm')

export default function Skills() {
    const isMobile = window.innerWidth < 768;
    return (
        <>
            <h2 className="even pb-4 pt-5">My Skills</h2>
            <div className={`${isMobile ? 'col' : 'row py-2'} px-5`}
                style={{
                    overflowX: 'hidden'
                }}
            >
                <div className={`${isMobile ? 'row' : 'col'} justify-content-center d-flex`}
                >
                    <iframe
                        className='p-3'
                        src={sphere}
                        title="Skills"
                        style={{
                            width: isMobile ? '45vh' : '60vh',
                            height: isMobile ? '45vh' : '60vh',
                            borderRadius: '100%',
                            fontSize: isMobile ? '2px' : 'auto',
                        }}
                    >
                    </iframe>
                </div>
                <div className={isMobile ? 'row' : 'col'}>

                    <div className="skill_set skillset2 d-flex justify-content-center "
                        style={{
                            marginTop: isMobile ? '5vh' : '15vh',
                        }}
                    >
                        <div
                            className='py-2 '
                            style={{
                                width: isMobile ? '70vw' : '60vh',
                                fontSize: isMobile ? '8%' : 'auto',
                            }}
                        >

                            <div class="bar front advanced" data-skill="FRONT END"
                                onclick="alert('\n\t&#9642; HTML\n\n\t&#9642; CSS\n')"></div>


                            <div class="bar back basic" data-skill="BACK END"
                                onclick="alert('\n\t&#9677; JAVA\n\n\t&#9677; C++\n')"></div>

                            <div class="bar back2 intermediate" data-skill="DBMS" onclick="alert('\n\t&#9656; SQL (basic)\n')">
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}