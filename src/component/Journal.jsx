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

        

    const handleForm1 = async (e) => {
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
            <div className="journal-entry">
                <form onSubmit={handleForm1} className="form1">
                  <span className="formTitle">Journal</span>
                   <div className="form1-div-1">
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

                    <textarea name="" id="" cols="30" rows="6" placeholder="what's on your mind?"
                    onChange={(e)=>setContent(e.target.value)}
                    value={content}></textarea>
                 
                    <button>Save</button>
                </form>
<hr />
                <form className="form2">
                    <span className="formTitle">Trade Journal</span>
                    <input type="text" placeholder="symbol"/>
                    <input type="datetime-local" />
                    <textarea name="" id="" cols="30" rows="6" placeholder="thoughts on why you made the trade?"></textarea>
                    <div className="toggle-button">
                        <button className="long">Long</button>
                        <button className="short">Short</button>
                    </div>
                    <div className="trade-details">
                        <div className="entry-lot">
                            <input type="number" placeholder="Entry Level"/>
                            <input type="number" placeholder="Lot size"/>
                        </div>
                        <div className="stop-take">
                            <input type="number" placeholder="Stoploss"/>
                            <input type="number" placeholder="Take profit"/>
                        </div>
                    </div>
                    <div className="pnl">
                        <div className="risk">
                            <span>Risk</span>
                            <span>-</span>
                            <span>-</span>
                        </div>
                        <div className="reward">
                            <span>Reward</span>
                            <span>-</span>
                            <span>-</span>
                        </div>
                    </div>
                    <button>Calculate</button>
                    

                </form>
            </div>
        </>
    )
}

export default Journal;