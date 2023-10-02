import React from 'react'
import { Button } from '@mui/material';
export const VideoAddInput =({
  inputText,
  setInputText,
  setVideoList,
  videoList,
  keyword,
  setkeyword,
  channelId,
  setChannelId,
})=> {
  
  const handleSubmit =(e)=>{
    e.preventDefault();
    if(inputText === "") {
      return;
    }
    setVideoList([
      ...videoList,
    {
      text: inputText,
      id:videoList.length,
      draggableId: `video-${videoList.length}`,
    },
    ]);
    setInputText("");
  };
  
  const handleChangeChannel= (e) =>{
    setChannelId(e.target.value);
  };
  const handleChangeKeyword = (e) =>{
    setkeyword(e.target.value)
  };


  return (
    <div>
       <div style={{marginTop: '5px', textAlign:'center'}}>
          <form >
            <input 
                 type="text" 
                 placeholder="ｷｰﾜｰﾄﾞを入れてね" 
                 className="videoAddInput"
                  onChange={handleChangeKeyword}
                  value={keyword}
                />
                <Button variant="outlined" color="secondary">固定</Button>
          </form>
                
       </div>
      <div style={{marginTop: '5px', textAlign:'center'}}>
        <form onSubmit={handleSubmit}>
      
        <input 
        type="text" 
        placeholder="ﾁｬﾝﾈﾙURLをﾄﾞﾗｯｸﾞ" 
        className="videoAddInput"
        onChange={handleChangeChannel}
        value={channelId}
        />
        <Button variant="outlined" color="success">検索</Button>
      </form>
      </div>
      
    </div>
  );
};

