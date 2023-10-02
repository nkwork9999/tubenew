import React, {useState} from 'react'
import { Button } from '@mui/material';
export const VideoCardTitle = () => {
  const [isClick,setIsClick] = useState(false);
  const [inputCardTitle,setInputCardTitle] = useState("VideoListTitle");
  const handleClick = () =>{
    setIsClick(true);
  };
  const handleChange = (e) =>{
    setInputCardTitle(e.target.value);
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    setIsClick(false);
  };

  const handleBlur =()=>{
    setIsClick(false);
  }
  return (
    <div onClick={handleClick}>
      {isClick ? 
      <form onSubmit={handleSubmit} className='videoCardTitleInputArea'>
        <input 
        className="videoCardTitleInput"
        autoFocus
        type="text" 
        onChange={handleChange} 
        onBlur={handleBlur}
        value={inputCardTitle}
        maxLength="10"
        />
      </form>
      :
      <Button variant="contained">リストタイトル</Button>}
      
    
      </div>
  );
};
//<h3>{inputCardTitle}</h3>}