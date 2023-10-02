import React,{ useState } from 'react';
import { VideoCard } from './VideoCard';
import { AddVideoCardButton } from "./button/AddVideoCardButton";
import { DragDropContext } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';
import { Card,Container} from '@mui/material';
import Grid from '@mui/material/Grid';
export const VideoCards = ({
  setV,
  V,
  setChannelId,
  channelId,
  videoCardslist,
  setvideoCardsList,
  videoCard,
  keyword,
  setkeyword,
  videoId,
  setVideoId})=> {
  const [videoCardsList,setVideoCardsList] = useState([
    {
      id:"0",
      draggableId: "item0",
    },
  ]);
  return (
    <DragDropContext>
    <Droppable droppableId="droppable" direction="horizontal">


      {(provided) =>(
      <div 
      className="videoCardsArea" 
      {...provided.droppableProps}
      ref={provided.innerRef}
      >
      
        
      <AddVideoCardButton 
      videoCardsList={videoCardsList}
      setVideoCardsList={setVideoCardsList}/>

   
    
      {videoCardsList.map((videoCard,index)=>(
      
      
      <VideoCard 
      key ={videoCard.id} 
      videoCardsList={videoCardsList} 
      setVideoCardsList={setVideoCardsList}
      videoCard={videoCard}
      index={index}
      keyword={keyword}
      setkeyword={setkeyword}
      videoId={videoId}
      setVideoId={setVideoId}
      channelId={channelId}
      setV={setV}
      V={V}
      />

     
    


    
      ))}
         
     

   
      </div>

        )}


    </Droppable>
  </DragDropContext>
  )
}

