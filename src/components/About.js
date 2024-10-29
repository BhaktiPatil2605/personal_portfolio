import React from 'react'

function About({ personalInfo,mode }) {
  if (!personalInfo || !personalInfo.about_info) {
    return <div>Loading...</div>;
  }
  const { about_image, about_content, new_line } = personalInfo.about_info;

  const handleDownload = () => {
    // alert('hii');
    const link = document.createElement('a');
    link.href = '/resume.pdf';  // No need to use PUBLIC_URL in most cases
    link.download = 'Bhakti_Patil_Resume.pdf';  // Set the file name for download
    link.click();
  };
  return (
    <section id="about" className={`${mode==='light'?'text-white':'text-dark'} bg-${mode}`}>
      <div className="container intro d-flex  
         align-items-center  
         justify-content-center  
         min-vh-100">

        <div className='row'>
          <p className='heading' style={{ fontWeight: "700", fontSize: "3rem", textAlign: "center" }}>About Me</p>

          <div className='col-4' style={{ justifyContent: 'center', display: "flex", alignItems: "center" }}>
            <div className="profile-card">
              <img src={about_image} alt="Profile" className="profile-pic" />

            </div>
          </div>
          <div className='col-8' style={{ justifyContent: 'center', display: "flex", alignItems: "center" }}>

            <div className="about-me-text">

              <div className="window-controls">
                <span className="red"></span>
                <span className="yellow"></span>
                <span className="green"></span>
              </div>
              <h5>Hi :)</h5>
              <p>
                {about_content}<br></br>
                <p>{new_line}</p>
                <button type="button" class="btn btn-warning" onClick={handleDownload}>Download Resume</button>
              </p>
              <div className="window-controls" style={{ float: 'right' }}>
                <span className="green"></span>
                <span className="yellow"></span>
                <span className="red"></span>
              </div>
            </div>
          </div>
        </div>
        
      </div>


      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

    </section>
  )
}

export default About
