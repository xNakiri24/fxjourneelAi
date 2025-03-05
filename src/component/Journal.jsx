import "./componentCSS/journal.css"
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { firestoreDb } from "../firebase/firebase";
import {v4 as uuidv4} from "uuid"

function Journal() {

        const [title, setTitle] = useState("");
        const [dateTime, setDateTime] = useState("");
        const [mood, setMood] = useState("");
        const [content, setContent] = useState("");
        // const [img, setImg] = useState(null);

        

    const handleSubmit = async (e) => {
        e.preventDefault();
        const docID = uuidv4();
     
        
        console.log(title);
        console.log(dateTime);
        console.log(mood);
        console.log(content);
        // console.log(img);

        //Uploading data to firebase
        await setDoc(doc(firestoreDb, "Journeel", docID),{
            dateTimeLocal: dateTime,
            moodEntry: mood,
            titleEntry: title,
            contentEntry: content,
            // img
        })

    }

    return(
        <>
            <div className="personal-journal">
                <form onSubmit={handleSubmit}>
                  
                   <div className="form-div-1">
                   <input type="datetime-local" className="my-date"
                   onChange={(e)=>setDateTime(e.target.value)}
                   value={dateTime}
                   />
                   
                   <select name="mood" 
                   id="mood" 
                   className="my-mood"
                   onChange={(e)=>setMood(e.target.value)}
                   value={mood}>
                       <option value="Happy">Happy</option>
                       <option value="Angry">Angry</option>
                       <option value="Sad">Sad</option>
                       <option value="Confuse">Confuse</option>
                       <option value="Careless">Careless</option>
                   </select>
                   </div>
                    
                    <input type="text" 
                    placeholder="Title"  
                    className="title-class" 
                    id="title-header"
                    name="title-name"
                    onChange={(e)=>setTitle(e.target.value)}
                    value={title}/>

                    <textarea name="" id="" cols="30" rows="10" placeholder="what's on your mind?"
                    onChange={(e)=>setContent(e.target.value)}
                    value={content}></textarea>
                 
                    <button>Save</button>
                </form>
            </div>
        </>
    )
}

export default Journal;