import React,{ useState } from 'react'
import { useForm } from '@inertiajs/react';
import { Button,Card } from '@mui/material';
import { v4 as uuid } from "uuid";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import Modal from "@mui/material/Modal";

export const AddVideoCardButton =({videoCardsList,setVideoCardsList,lists})=> {
    const addVideoCard=()=>{
      const videoCardId = uuid();
        setVideoCardsList([
          ...videoCardsList,
          {
            id: videoCardId,
            draggableId: `item${videoCardId}`,
        }])
        post(route('list.store'));
        setShowModal(false);
    }

    const [showModal, setShowModal] = useState(false);
    const Show = () => {
        setShowModal(true);
      };
    const modalClose = ()=>{
        setShowModal(false);
    };
    const {  data,setData,processing,post,errors } = useForm({
      title: '',
      channel:'',
      keyword: '',
    });

    const handleChange = (e) =>{
      setData(e.target.name, e.target.value)
    };
    const handleChangeChannel= (e) =>{
      setData(e.target.name, e.target.value)
    };
    const handleChangeKeyword = (e) =>{
      setData(e.target.name, e.target.value)
    };

    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        minWidth: "40%",
      },
    };

  return (
    <div>
        <div>
          <Modal 
          open={showModal} 
          onClose={modalClose}
          style={customStyles}>
            <Card >
              <div>
                <ClearIcon onClick={modalClose}/>
              <form>
                <div className="register">
                  <input 
                  className="textinput"
                  //autoFocus
                  type="text" 
                  name="title"
                  placeholder="リストのタイトルを10文字以内で入れてね"
                  maxLength="10"
                  onChange={handleChange}
                  />
                  <input 
                  className="textinput"
                  type="text" 
                  name="channel"
                  placeholder="最新の動画を見たいチャンネルURLをコピー＆ペーストしてきてね" 
                  Length="10"
                  onChange={handleChangeChannel}
                  /> 
                  <input 
                  className="textinput"
                  type="text" 
                  name="keyword"
                  placeholder="入力したキーワードに関連するチャンネル内の最新動画を5件表示するよ(無しだとチャンネル内の最新動画5件)" 
                  onChange={handleChangeKeyword}
                  />
                </div>
                 <Button onClick={addVideoCard}>リストを登録</Button>
              </form>
              </div>
            </Card>
          </Modal>
    
        </div>
        <Fab className ="addTaskCardButton"  color="primary" aria-label="add" >
          <AddIcon onClick={Show}/>
        </Fab>
    </div>
  );
};


