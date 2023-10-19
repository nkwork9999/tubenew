import React,{ useState } from 'react';
import { AddVideoCardButton } from "./button/AddVideoCardButton";
import { DragDropContext } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';
import { Card,Stack,Container} from '@mui/material';
import { Draggable } from 'react-beautiful-dnd';
import { VideoAddInput } from './input/VideoAddInput';
import { VideoCardDeleteButton } from './button/VideoCardDeleteButton';

export const VideoCards = ({
  setChannelId2,
  channelId2,
  setKeyword2,
  keyword2,
  lists,
})=> {

  const [videoCardsList,setVideoCardsList] = useState([
        {
          id:"0",
          draggableId: "item0",
        },
      ]);
  const [items] = useState([lists.lists]);
  const onDragEnd =(result)=>{
  const remove = items[0].splice(result.source.index,1);
  const put = items[0].splice(result.destination.index,0,remove[0])
  };

  return (
  <div>
    <DragDropContext onDragEnd={onDragEnd}>
    <Droppable droppableId="droppable" direction="horizontal">
      {(provided) =>(
        <div 
        className="videoCardsArea" 
        {...provided.droppableProps}
        ref={provided.innerRef}
        >
          <AddVideoCardButton 
        videoCardsList={videoCardsList}
        setVideoCardsList={setVideoCardsList}
        lists={lists}
        />
          {lists.lists.map((list,index)=>(
              <Draggable draggableId={list.title} index={index} key={list.id}  >
                {(provided)=> (
                  <div 
                  className="videoCard" 
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  >
                    <Container>
                      <Card 
                      variant="outlined"
                      sx={{ 
                          maxWidth:470, 
                          Width:320,
                          height: 950
                          }}
                      >
                        <div className="videoCardTitleAndVideoCardDeletebutton">
                          <Stack direction="row" spacing={2} >
                            <VideoAddInput 
                            keyword2={keyword2}
                            setKeyword2={setKeyword2}
                            channelId2={channelId2}
                            setChannelId2={setChannelId2}
                            list={list}
                            listid={list.id}
                            listtitle={list.title}
                            listkeyword={list.keyword}
                            listchannel={list.channel}
                            />
                            <VideoCardDeleteButton 
                            lists={lists}
                            list={list}
                            listid={list.id}
                            />
                          </Stack>
                        </div>
                      </Card>   
                    </Container>           
                  </div>
                )}
              </Draggable>
           ))}  
         {provided.placeholder}
        </div>
      )}
    </Droppable>
    </DragDropContext>
  </div>
  );
}
