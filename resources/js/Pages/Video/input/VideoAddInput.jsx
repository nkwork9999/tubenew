import React,{useState} from 'react'
import { Button } from '@mui/material';
import { useForm } from '@inertiajs/react';
import { Stack } from '@mui/material';
import { Youtube } from '@/Pages/Youtube/Youtube';
import ClearIcon from '@mui/icons-material/Clear';

export const VideoAddInput =({
  list,
  keyword2,
  setKeyword2,
  channelId2,
  setChannelId2,
  listid,
  listtitle,
  listchannel,
  listkeyword,
})=> {
  const [isClick,setIsClick] = useState(false);
  const [inputCardTitle,setInputCardTitle] = useState("");
  const {  data,setData,processing,patch,errors } = useForm({
    id:{listid},
    title: '',
    channel:'',
    keyword: '',
  });
  const [Listtitle,setListtitle]=useState("")
  const [Listkeyword,setListKeyword]=useState("")
  const [ListchannelId,setListChannelId]=useState("") 
  const handleClick = () =>{
    setIsClick(true);
  };
  const handleClose = ()=>{
    setIsClick(false);
  };
  const handleChange = (e) =>{
    setListtitle(e.target.value);
    setData(e.target.name, e.target.value)
  };
  const handleChangeChannel= (e) =>{
    setListChannelId(e.target.value);
    setData(e.target.name, e.target.value)
  };
  const handleChangeKeyword = (e) =>{
    setListKeyword(e.target.value);
    setData(e.target.name, e.target.value)
  };
  const submit =(id)=>{
    patch(route('list.update',id));
  };

  return (
      <div onClick={handleClick}>  
        {isClick ? 
        <form  className='videoCardTitleInputArea'>
          <table class ="row">
            <tr key={listid}>
              <Stack spacing={2}>
                <td>リストタイトル:{listtitle}<br/>
                <input 
                type="text" 
                name="title"
                placeholder="タイトルを入れてね"
                className="videoCardTitleInput"
                onChange={handleChange} 
                value={Listtitle}
                maxLength="10"
                ></input></td>

                <td className="CID">チャンネルID:<br/>{listchannel}
                <input 
                type="text" 
                name="channel" 
                placeholder="ﾁｬﾝﾈﾙURLをｺﾋﾟﾍﾟ" 
                className="videoAddInput"
                onChange={handleChangeChannel}
                value={ListchannelId}
                maxLength="60"       
                ></input></td>

                <td>キーワード:
                {listkeyword}<br/>
                <input 
                type="text" 
                name="keyword"
                placeholder="ｷｰﾜｰﾄﾞを入れてね" 
                className="videoCardTitleInput"
                onChange={handleChangeKeyword}
                value={Listkeyword}
                ></input></td>

                <td>
                <button onClick={() => submit(listid)}><Button variant="contained" > 編集確定</Button></button>
                <button onClick={handleClose}>   <ClearIcon /></button>
                </td>
              </Stack>
            </tr>
          </table> 
        </form>
        :
        <div>
          <Button variant="contained">
          <Stack spacing={2}>
            <h1>リスト表示/編集</h1>
            <h1>タイトル:{listtitle}</h1>
            <h1>キーワード:{listkeyword}</h1>
          </Stack>
            </Button>
          <Stack spacing={2}>
          <Youtube
              listid={listid}
              listtitle={listtitle}
              listkeyword={listkeyword}
              listchannel={listchannel}
              />
          </Stack>
        </div>
        }
      </div>
    
  );
};

