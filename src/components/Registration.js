import { useState } from 'react';
import './Registration.css';

const Registration = () =>{

    const[message, setMessage] = useState('');
    const[name,setName]=useState('');
    const[location,setLocation]=useState('');
    const[email,setEmail]=useState('');
    const[course,setCourse]=useState('');
    const[text,setText]=useState('');

    function submit(event){
        event.preventDefault();
        setName('')
        setLocation('');
        setEmail('');
        setCourse('');
        setText('');
        if(name===''){
            setMessage('Please fill out your name!')
        }
        //setMessage(`Thank you ${name} for registering!`);
        
    }
    
    return(
        <div className="container">
            <form name="htmlForm1" onSubmit={submit}>
                <label htmlFor="name" >Name:<br></br>
                <input type="text" name="name" placeholder="Your Name here" value={name} onChange={e=>{setName(e.target.value)}}/>
                </label><br></br>

                <label htmlFor="location">Location:<br></br>
                    <input type="text" name="location" required placeholder="Your location" value={location} onChange={e=>{setLocation(e.target.value)}}/>
                </label><br></br>
                    
                <label htmlFor="email">Email:<br></br>
                    <input type="email" name="email" required placeholder="Your email" value={email} onChange={e=>{setEmail(e.target.value)}}/>
                </label><br></br>
                    
                <label htmlFor="course">Course:
                    <select required value={course} onChange={e=>{setCourse(e.target.value)}}>
                        <option value=""></option>
                        <option value="MEAN">MEAN</option>
                        <option value="MERN">MERN</option>
                        <option value="JAVA">JAVA</option>
                    </select>
                </label><br></br>
                    
                    <label htmlFor="remarks">Remarks:<br></br>
                    <textarea type="text" rows="4" cols="30" value={text} onChange={e=>{setText(e.target.value)}}></textarea>
                    </label><br></br>
                    
                    <input type="submit" className="link" value="Submit"></input>

                    <div className="thanks">
                        {message}
                    </div>
            </form>
        </div>
    )
}
export default Registration;