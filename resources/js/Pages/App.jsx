import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { VideoCards } from './Video/VideoCards2';
export const Appget = () => {
  const YOUTUBE_API_KEY = import.meta.env.VITE_APP_YOUTUBE_API_KEY;
  const YOUTUBE_SEARCH_API_URI = "https://www.googleapis.com/youtube/v3/search?";
  const [url,geturl] = useState('https://www.youtube.com/embed/' + "Nr7zUSuDzq8")
  const [keyword,setkeyword] =useState("");
  const [videoId,setVideoId]=useState([]);
  const [V,setV]=useState([]);
  const [params,setparams]=useState("");
  const [channelId,setChannelId] = useState("https://www.youtube.com/@AusParlFan");
  const [ CID,setCID ] =useState("");
  console.log("V",V)
  console.log('CID',CID)

  useEffect((videoId) => {

    //カスタムチャンネルURLからチャンネルID取得するためのクエリ文字列
    const NormalId = {
      key: YOUTUBE_API_KEY,
      part:"snippet",
      type:"channel",
      q:channelId,
    };

  
    // 検索用のクエリ文字列
    const params = {
      key: YOUTUBE_API_KEY,
      q: keyword, // 検索キーワード
      //channelId: 'UChOwHpmAFqns45OX7udqgVw', //サムライフラッグ
      //channelId:'UCvaTdHTWBGv3MKj3KVqJVCw',    //okayu
      channelId:'UC6F5ZNp-AWBeA4j_PmqL8Rw',  //オーストラリア
      //channelId:CID,       //オーストラリア:入力カスタムIDから変換したチャンネルID
      type: "video", 
      maxResults: "5", // 結果の最大数
      order: "date", // 新しい順
    };
      
 

      //カスタムチャンネルIDからAPI情報を得るために変換
      const IdParams = new URLSearchParams(NormalId).toString();
      const NormalId2= YOUTUBE_SEARCH_API_URI + IdParams
      console.log("IdParams",IdParams)

      //入力したキーワード、チャンネルIDからyoutubeAPI情報を得るため変換
      const queryParams = new URLSearchParams(params).toString();
      const lastUrl= YOUTUBE_SEARCH_API_URI + queryParams
      
        //ノーマルチャンネルIDの取得
        axios
        .get(NormalId2)
        .then(response => {
         
          setCID(response.data.items[0].snippet.channelId);      
        })

        
        axios
                .get(lastUrl)
                .then(response => {
                console.log("data",response.data.items)
                  setV(response.data.items)
                  setVideoId(response.data.items[0]);      
        })
               
      //fetch(lastUrl)
        //.then((res) =>res.json())
        //.then(
          //(result)=>{
          //if (result.items && result.items.length !== 0) { 
          //const firstItem = result.items[0,1,2,3,4];
            // console.log("aaa",firstItem)
            //setVideoId(firstItem); 
          //}
      
        //})
  }, [keyword]);
  return (
    <div>
      <div> 
   
          <VideoCards 
               keyword={keyword}
               setkeyword={setkeyword}
               videoId={videoId}
               setVideoId={setVideoId}
               channelId={channelId}
               setChannelId={setChannelId}
               setV={setV}
               V={V}
          />
    
      </div>

    </div>
      
    )
  
}

