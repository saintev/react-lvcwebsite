import { useState } from 'react';
import './Registration.css';

const ContactForm = () =>{

    const[message, setMessage] = useState('');
    const[name,setName]=useState('');    
    const[email,setEmail]=useState('');   
    const[text,setText]=useState('');

    function submit(event){
        event.preventDefault();
        setName('')
        setEmail('');
        setText('');
        setMessage('Thank you for contacting us!');
    }
    return(
        <div className="container">
                <form name="form1" onSubmit={submit}>
                    <label for="name">Name:<br></br>
                    <input type="text" name="name" required placeholder="Your Name here" value={name} onChange={e=>{setName(e.target.value)}}/>
                    </label><br></br>
                    
                    <label for="email">Email:<br></br>
                    <input type="email" name="email" required placeholder="Your email" value={email} onChange={e=>{setEmail(e.target.value)}}/>
                    </label><br></br>
                    
                    <label for="remarks">Your message:<br></br>
                    <textarea type="text" rows="4" cols="30" required value={text} onChange={e=>{setText(e.target.value)}}></textarea>
                    </label><br></br>
                    
                    <input type="submit" className="link" value="Submit"/>

                    <div className="thanks">
                        {message}
                    </div>
                    
                </form>
            </div>
    )
}
export default ContactForm;