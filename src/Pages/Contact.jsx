import { useState } from "react"

const Contact = ({theam}) => {
  const [error, setError] = useState({});
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (event) =>{
    const {name, value} = event.target;
    setData({
      ...data,
      [name]: value
    });
  }

  const validate = () => {
    const validationErrors = {}
    if(!data.name.trim()){
      validationErrors.name = "Name is Required";
    }
    if(!data.email.trim()){
      validationErrors.email = "Email is Required";
    }else if(!/\S+@\S+\.\S+/.test(data.email)){
      validationErrors.email = "Invalid email";
    }
    if(!data.message.trim()){
      validationErrors.message = "Message is Required";
    }
    setError(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };
  

  const handleSubmit = async (e) =>{
    e.preventDefault();
    // const isValid = Object.keys(error).length === 0 && Object.keys(data).every(key => data[key].trim() !== '')
    
    if(!validate()){
      alert("Please fill in all fields correctly!");
      return;
    }
    const payload = {
      ...data,
      access_key: "f24d5f44-1f5c-4048-ba7b-f68f38eb3447",
    }
    try{
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      if(result.success){
        alert("Form submitted successfully!");
        setData({
          name: '',
          email: '',
          message: '',
        });
        setError({});
      }else{
        alert("Something went wrong!");
      }
    } catch (error){
      console.error("Submission Error: ", error);
      alert("Network error. Try again later.");
    }
  };
  

  return (
    <>
        <section className={`contact ${theam ? "light": "dark"}`} id="contact">
        <h2 className="heading">Contact <span>Me!</span></h2>
        <form onSubmit={handleSubmit}>
            <div className="input-box">
                <div>
                 <input style={error.name && {border: "1px solid red"}} type="text" name="name" placeholder="Full Name" value={data?.name} onChange={handleChange} />
                 {error.name && <span style={{color: "red"}}>{error.name}</span>}
                </div>
                <div>
                 <input style={error.email && {border: "1px solid red"}} type="email" name="email" value={data?.email} onChange={handleChange} placeholder="Email Address" />
                 {error.email && <span style={{color: "red"}}>{error.email}</span>}
                </div>
            </div>
            <div>
             <textarea style={error.message && {border: "1px solid red"}} name="message" id="" cols="30" rows="5" placeholder="Your Message" value={data?.message} onChange={handleChange} ></textarea>
             {error.message && <span style={{color: "red"}}>{error.message}</span>}
            </div>
            <input type="submit" value="Send Message" className="btn" id="send-btn"/>
        </form>
    </section>
    </>
  )
}

export default Contact