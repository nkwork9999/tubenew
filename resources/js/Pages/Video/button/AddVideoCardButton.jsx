import React from 'react'
import { v4 as uuid } from "uuid";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
export const AddVideoCardButton =({videoCardsList,setVideoCardsList})=> {

    const addVideoCard=()=>{
      const videoCardId = uuid();
        setVideoCardsList([
          ...videoCardsList,
          {
            id: videoCardId,
            draggableId: `item${videoCardId}`,
        }])
    }
  return (
    
    <div className="addVideoCardButtonArea">
       <Fab className ="addTaskCardButton" onClick ={addVideoCard} color="primary" aria-label="add" >
             <AddIcon />
      </Fab>
        
        </div>
//<button className ="addTaskCardButton" onClick ={addVideoCard}>+</button>

  )
}

