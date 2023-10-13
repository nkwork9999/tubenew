import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { useForm } from '@inertiajs/react';
export const VideoCardDeleteButton =({
  list,
}) => {
 
  const { delete: destory } = useForm();
  const handleDelete = (id) => {
    console.log("delete",id)
      destory(route("list.destroy", id), {
          preserveScroll: true,
      });
  };

  return (
    <div>
    
    <div>
          <IconButton className="videoCardDeleteButton" onClick={() => handleDelete(list.id)} aria-label="delete"><DeleteIcon /></IconButton>
    </div>
 
    </div>  
  );
};

