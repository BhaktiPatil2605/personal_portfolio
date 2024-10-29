import React from 'react'

function Skills({personalInfo, mode}) {
    if (!personalInfo || !personalInfo.skills) {
        return <div>Loading...</div>;
      }
      console.log(personalInfo.skills);
    return (
        <section id="skills" className={`text-white bg-${mode}`}>
            <div className="container intro  
       align-items-center  
       justify-content-center  
       min-vh-100">

                <div className='row' style={{ paddingTop: "8%" }}>
                    <p className='heading' style={{ fontWeight: "700", fontSize: "3rem", textAlign: "center" }}>Skills</p>
                </div>
                <div className='row skills-container'>
                    {personalInfo.skills.map((skills_set, index) => {
                        console.log(skills_set);
                        return(
                        <div key={index} class="col-lg-2 skill-card">
                            <i className={`${skills_set.icon} img`}></i><br></br>
                            <span>{skills_set.name}</span>
                        </div>
                        )
                    }
                    )}
        
    </div>
            </div>
            {/* </div> */}
        </section>
    )
}

export default Skills
