import React, {useState} from 'react'

function Contact({ personalInfo, mode }) {
  console.log(personalInfo);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async () => {
    // Ensure the form is valid (optional)
    if (!formData.firstName || !formData.email || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    console.log(formData);
    // Send form data to the backend API
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        }); // Reset form data
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  // return false;
  if (!personalInfo || !personalInfo.contact) {
    return <div>Loading...</div>;
  }
  // const { about_image, about_content, new_line } = personalInfo.about_info;
  const { email,phone } = personalInfo.contact;
  return (
    <section id="contact" className="text-white" style={{ backgroundColor: `${mode==='dark' ?"#161616":"#f5f5f5"}`  }}>
      <div className="container intro   
         align-items-center  
         justify-content-center  
         min-vh-100">
        <div className='row' style={{ paddingTop: "8%" }}>
          <p className='heading' style={{ fontWeight: "700", fontSize: "3rem", textAlign: "center" }}>Contact Me</p>
        </div>
        <div className='row' >
          {/* <!-- Contact Information Block --> */}
          <div className="col-5 contact-container">
            <h2 className="text-center mb-4">Leave a message</h2>

            <div className=" row contact-items mb-3">
              <div className="col-2 contact-item ">
                <i className="fa-solid fa-envelope">
                  <span className="h5">             &nbsp;Email</span></i><br></br>
                <div>
                  <span>{email}</span>
                </div>
              </div>

              <div className="col-2 contact-item ">
                <i className="fa-solid fa-phone">
                  <span className="h5">              &nbsp;Phone</span></i><br></br>

                <div>
                  <span>{phone}</span>
                </div>
              </div>
            </div>

            <div className="icon-container">
              <a href="https://github.com" className="icon">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com" className="icon">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>

          </div>


          {/* <!-- Contact Form Block --> */}
          <div className="col-7">
            <div className="row">
              <div className="col-6 mb-2">
                <label for="firstName" className="form-label">First Name</label>
                <input type="text" className="form-control" id="firstName" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange}/>
              </div>
              <div className="col-6 mb-2">
                <label for="lastName" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Last Name" value={formData.lastName}  onChange={handleChange}/>
              </div>
            </div>
            <div className='row'>
              <div className="col-6 mb-2">
                <label for="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email"  name="email" placeholder="name@example.com" value={formData.email}  onChange={handleChange}/>
              </div>
              <div className="col-6 mb-2">
                <label for="phone" className="form-label">Phone</label>
                <input type="tel" className="form-control" id="phone" name="phone" placeholder="+1234567890" value={formData.phone}  onChange={handleChange}/>
              </div>
            </div>

            <div className="mb-2">
              <label for="message"  className="form-label">Message</label>
              <textarea className="form-control" id="message" name="message"  rows="2" value={formData.message}  onChange={handleChange}></textarea>
            </div>
            <button type="button" className="btn btn-warning" onClick={handleSubmit}>Send Message</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
