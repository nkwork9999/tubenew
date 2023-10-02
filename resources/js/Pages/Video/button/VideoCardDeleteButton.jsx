import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

export const VideoCardDeleteButton =({
  videoCardsList,
  setVideoCardsList,
  videoCard,
}) => {
  const videoCardDeleteButton =(id) => {
    setVideoCardsList(videoCardsList.filter((e) => e.id !== id));
  };
  return (
    <div>
          <IconButton 
       
          className="videoCardDeleteButton" 
          onClick={() => videoCardDeleteButton(videoCard.id)} aria-label="delete">
            <DeleteIcon />
            </IconButton>
      
    </div>
    //<button
      //className="videoCardDeleteButton" 
      //onClick={() => videoCardDeleteButton(videoCard.id)}
      //>×</button>
  );
};

