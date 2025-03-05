import './componentCSS/journalList.css'
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestoreDb } from '../firebase/firebase';

const JournalList = () => {
    
        const [journals, setJournals] =useState([]);

      useEffect(()=>{
        
          const fetchData = async () => {
            const querySnapshot = await getDocs(collection(firestoreDb, "Journeel"));
            const data = querySnapshot.docs.map((doc)=>({
              id: doc.id,
              ...doc.data()
            }))
            setJournals(data);
          };

          fetchData();
        
        
      },[])

      const handleClick = (id) => {
        // e.preventDefault();

        console.log(id);
      }


  return (
    <>
    <div className='entryList'>
        {journals.map((item)=>(
          <>
          <div  className='entryContainer' onClick={()=>handleClick(item.id)}>
          {/* <p>{item.id}</p> */}

          <div className="entry-date-mood">
          <p>Date : {item.dateTimeLocal}</p>
          <p>Mood : {item.moodEntry}</p>
          </div>
          <span>TItle : {item.titleEntry}</span>
          
              
          
          <p>Content : {item.contentEntry}</p>
          </div>
          </>
        ))}
        
    </div>
    </>
  )
}

export default JournalList;