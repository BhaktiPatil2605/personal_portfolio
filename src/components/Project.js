import React from 'react'

function Project({personalInfo,mode}) {
  if (!personalInfo || !personalInfo.project_info) {
    return <div>Loading...</div>;
  }
  // const { title,description,image} = personalInfo.project_info;
  // console.log(title);
  console.log(personalInfo.project_info);
  
  return (
    <section id="project" className="text-white" style={{ backgroundColor: `${mode==='dark' ?"#161616":"#f5f5f5"}` }}>
      <div className="container intro align-items-center justify-content-center min-vh-100">
        <div className='row' style={{ paddingTop: "8%" }}>
          <p className='heading' style={{ fontWeight: "700", fontSize: "3rem", textAlign: "center" }}>Some of My Projects</p>
        </div>
        <div className='row scroll mt-3'>
          {personalInfo.project_info.map((project, index) => {
            // Log the current project object and index
            console.log('Current project:', project);
            console.log('Current index:', index);

            return (
              <div key={index} className='col-sm-3 col-md-3 col-lg-3 mb-3'>
                <div className="card project_card">
                  <div className="content project_content">
                    <div className="project_image">
                      {project.images && project.images.length > 0 ? (
                        <img src={project.images[0]} alt="project_image" />
                      ) : (
                        <div>No image available</div>
                      )}
                    </div>
                    <div className="project_info">
                      {/* Adjust the rendering according to your actual data structure */}
                      <h3>{project.title}<br /><span>{project.description}</span></h3>
                    </div>
                  </div>
                  <ul className="project_tech">
                    {project.technologies && project.technologies.length > 0 ? (
                      project.technologies.map((tech, techIndex) => (
                        <li key={techIndex}>
                          <i class={tech.class} ></i>
                        </li>
                      ))
                    ) : (
                      <li>No technologies listed</li>
                    )}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Project
