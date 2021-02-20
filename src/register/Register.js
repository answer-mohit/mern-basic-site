import React,{useState} from 'react';
import axios from 'axios';
import './register.css';
const Register=()=>{
const [person,setperson]=useState({
    fname:'',
    lname:'',
    email:"",
    password:"",
    confirm_password:"",
    msg:""
});
const [people,setpeople]=useState([])
const handleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setperson({...person,[name]:value});
    console.log(value);

}

    const handleSubmit=(e)=>{
e.preventDefault();
if(person.password!==person.confirm_password){
 return   alert('please fill the same password');
}
if(!person.fname||!person.lname||!person.email||!person.confirm_password||!person.msg||!person.password){
  return  alert('fill the fields');
}
const newPeople={...person,id:new Date().getTime().toString()}
setpeople([...people,newPeople]);
//save the registration data in database
axios.post('http://localhost:8000/add',{
    fname:person.fname,
    lname:person.lname,
    email:person.email,
    password:person.password,
    msg:person.msg
}).then(()=>alert('the data is saved')).catch((err)=>console.log(err));


console.log(person.fname);
setperson({
    fname:'',
    lname:'',
    email:"",
    password:"",
    confirm_password:"",
    msg:""
})
    }
    return (<div className="container">
    <h1></h1>
<div className="row">
    <div className="col-sm-10 col-md-8 mx-auto">
    <div className="register my-5">
    <h2 className="text-primary fw-bold mb-4">Registration Form</h2>
<form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="fname" className="form-label">First name</label>
    <input type="text" 
    className="form-control"
     name="fname"
     autoComplete="off"
     value={person.fname}
     onChange={handleInput}
      id="fname"
      />
  </div>
  <div className="mb-3">
    <label htmlFor="lname" className="form-label">Last name</label>
    <input type="text" 
    className="form-control" 
    autoComplete="off" 
   value={person.lname}
   onChange={handleInput}
    id="lname"
        name="lname"
    />
  </div>
  <div className="mb-3">
    <label htmlFor="Email" className="form-label">Email</label>
    <input type="email"
     className="form-control" 
     autoComplete="off" 
    value={person.email}
    onChange={handleInput}
     id="Email" 
     name="email"
     aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="Password1" className="form-label">Password</label>
    <input type="password"
     className="form-control"
      autoComplete="off"
      value={person.password}
      onChange={handleInput}
       id="Password1"
           name="password"
           minLength="5"
       />
  </div>
  <div className="mb-3">
    <label htmlFor="Password2" className="form-label"> Confirm Password</label>
    <input type="password" 
    className="form-control" 
    autoComplete="off"
    value={person.confirm_password}
    onChange={handleInput}
     id="Password2"
         name="confirm_password"
         minLength="5"
     />
  </div>
  <div className="mb-3">
      <label htmlFor="msg" className="form-label">Message</label>
      <textarea type="text"
       className="form-control" 
       autoComplete="off"
       value={person.msg}
       onChange={handleInput}
        id="msg"
         rows="4"
             name="msg"
         />
  </div>
  
    <button type="submit" className="btn btn-primary">Register</button>
</form>
{/* {
    people.map((person,i)=>{
        const {id,fname,lname,email}=person;
     return <div key={id} className="person">
     <p>{i}</p>
         <p>{fname} {lname}</p>
         <p>{email}</p>
         
     </div>
})
} */}

</div>
    </div>
</div>

    </div>)
}
export default Register;