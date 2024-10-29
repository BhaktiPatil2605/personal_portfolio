import React from 'react'

const Experience = ({ personalInfo, mode }) => {
    if (!personalInfo || !personalInfo.experience) {
        return <div>Loading...</div>;
    }
    return (
        <section id="experience" className="text-white" style={{ backgroundColor: `${mode==='dark'?"#131313":"#f2f3f4"}` }}>
            <div className="container intro d-flex  
         align-items-center  
         justify-content-center  
         min-vh-100">
                <div className='row'>
                    <p className='heading' style={{ fontWeight: "700", fontSize: "3rem", textAlign: "center" }}>Experience</p>
                    {personalInfo.experience.map((experience_set, index) => {
                        console.log(experience_set);
                        return (
                            <div key={index} className="timeline col-lg-12">
                                <div className={`timeline-item ${experience_set.fade_in}`}>
                                    <div className="timeline-icon">
                                        <span className="timeline-badge">
                                            <i className="devicon-php-plain fa-2x"></i>
                                        </span>
                                    </div>
                                    <div className="timeline-content">
                                        <div className="card ex_card">
                                            <div className="card-body ex_card-body">
                                                <span className="badge bg-warning">{experience_set.ex_year}</span>
                                                <h5>{experience_set.designation}</h5>
                                                <p>{experience_set.company}</p>
                                                <div className="tech-tags">
                                                {experience_set.ex_technologies && experience_set.ex_technologies.length > 0 ? (
                                                    experience_set.ex_technologies.map((tech, techIndex) => (
                                                            <span key={techIndex} className={`badge bg-${mode==='dark'?'light':'secondary'} ${mode==='dark'?'text-dark':'text-light'}`}>{tech.name}</span>
                                                    ))
                                                    ) : (
                                                    <li>No technologies listed</li>
                                                    )}
                                                   
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="hourglass-badge">
                                    <i className="fas fa-hourglass-half"></i>
                                </div>
                            </div>
                        )
                    }
                    )}
                </div>
            </div>
        </section>

    )
}

export default Experience
