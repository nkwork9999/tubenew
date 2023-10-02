import React,{ useState } from 'react';
import { VideoCardTitle } from './VideoCardTitle';
import { VideoCardDeleteButton } from './button/VideoCardDeleteButton';
import { VideoAddInput } from './input/VideoAddInput';
import { Draggable } from 'react-beautiful-dnd';
import { Youtube } from '../Youtube/Youtube';
import { Card,Stack,Container } from '@mui/material';
import Grid from '@mui/material/Grid';

export const VideoCard =({
    setV,
    V,
    videoCardsList, 
    setVideoCardsList,
    videoCard,
    index,
    keyword,
    setkeyword,
    videoId,
    setVideoId,
    channelId,
    setChannelId,

})=> {

    const [inputText, setInputText]= useState("");
    const [videoList, setVideoList]= useState([]);
    return(
        <Draggable draggableId={videoCard.id} index={index}>
            {(provided)=> (

                <div 
                className="videoCard" 
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                >
              

              <Container >
                <Card 
                variant="outlined"
                sx={{ 
                    Width: 900, 
                    height: 1000
                    }}
                
                >
                    <div className="videoCardTitleAndVideoCardDeletebutton">
               
                    <Stack direction="row" >
                    <VideoCardTitle />
                
   
                    <VideoCardDeleteButton 
                    videoCardsList={videoCardsList}
                    setVideoCardsList={setVideoCardsList}
                    videoCard={videoCard}
                    />
                    </Stack>
                    
         

                    </div>
                    {provided.placeholder}
                    <VideoAddInput 
                    
                    inputText={inputText}
                    setInputText={setInputText}
                    setVideoList={setVideoList}
                    videoList={videoList}
                    keyword={keyword}
                    setkeyword={setkeyword}
                    channelId={channelId}
                    setChannelId={setChannelId}
                    />
                    <Youtube 
                     setV={setV}
                     V={V}
                     videoId={videoId}
                     setVideoId={setVideoId}
                    />
                </Card> 
                </Container>
                </div>


            )}
        

        </Draggable>
        
  );
  };

