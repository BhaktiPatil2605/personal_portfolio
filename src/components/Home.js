import React from 'react'
import { ReactTyped, } from 'react-typed'


function Home({personalInfo,mode}) {
  if (!personalInfo || !personalInfo.basic_info) {
    return <div>Loading...</div>;
  }
  const { white_image,black_image,name,stroke,titles} = personalInfo.basic_info;
  // console.log(titles);
  return (
    <section id="home" className="text-white bg-image" style={{ backgroundImage: `url(${mode === 'dark' ? black_image : white_image})` ,opacity:1}}>
      <div className="container-fluid intro d-flex  
         align-items-center  
         justify-content-center  
         min-vh-100">
        <div >
          <div className='row'>
            
            <div className='col-lg-6 col-md-6 col-sm-6' style={{display:"flex",alignItems:'center'}}>
    
              
              <p className="intro-subtitle" style={{textAlign:'center',marginBottom:"0rem"}}>
                <p className='slide_text'>Hello!</p>
                {/* <span className="text-slider-items"></span> */}
                <strong className="text-slider">
                  <ReactTyped
                    strings={titles}
                    typeSpeed={70}
                    backDelay={1100}
                    backSpeed={30}
                    loop>
                    <input type="text" disabled className="slide_text" />
                  </ReactTyped>
                </strong>

                <br></br><br></br>
                <p className='wel'>Welcome to my Web-Page ___</p>
              </p>
            </div>

            <div className='col-lg-6 col-md-6 col-sm-6'>
              <h1 style={{textAlign:'center'}}>
                <span className="nameT">{name} <br></br><p className="stroke">{stroke}</p>
                
              <button className='btn btn-warning name-btn' ></button></span>
              </h1>
            </div>
            {/* <div className='col-md-4' style={{ backgroundColor: "black" }}>
              hgg
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
