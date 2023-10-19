import React,{useState,useEffect} from 'react';
import { VideoCards } from './Video/VideoCards2';

export const Appget = (lists) => {
  const [keyword2,setKeyword2]=useState("")
  const [channelId2,setChannelId2]=useState("") 

  return (
    <div>
      <div> 
          <VideoCards 
               setChannelId2={setChannelId2}
               channelId2={channelId2}
               setKeyword2={setKeyword2}
               keyword2={keyword2}
               lists={lists}
          />
      </div>
    </div>
          );
}

