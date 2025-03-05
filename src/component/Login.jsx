import '../css/login.css';
import { createUserWithEmailAndPassword, sendPasswordResetEmail, updateProfile } from 'firebase/auth';
import {auth} from '../firebase/firebase';
import { useState } from 'react';


function Login(){
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);
    const [render, setRender] = useState("");

 

    //this block runs when submit is click in form tag
    const handleRegister = (e) => {
        console.log("hello")
        e.preventDefault();
        //target value in form tag
        const creatorID = e.target[0].value;
        const secretPass = e.target[1].value;
        //credential submit testing
        console.log(creatorID);
        console.log(secretPass);
        
        //user creation block
        try{
            //user email password signup
            const userCreate = createUserWithEmailAndPassword(auth, creatorID, secretPass);      
        }
        //error catcher
        catch (err){
            console.log(err)
            setErr(true);
            setLoading(false);
        }
        setRender(creatorID);
    };

return(
    <>
        <div className="login-form">

            <form onSubmit={handleRegister}>
                <label for="creator-id" className='creator-label'>Creator: </label>
                <input type="email" placeholder="Creator" className="creator-class" id="creator-phrase" name="creator-id" 
                required />
                <label for="secret-phrase" className='secret-label'>Secret Phrase: </label>
                <input type="password" name="secret-phrase" className="secret-class" id="secret-phrase" placeholder="Phrase" required />
                <button type="submit">Register</button>
            </form>

            <p className='tryPass'>try{render}</p>
        </div>
    </>
);
}

export default Login;