import React,{ useState,useEffect } from 'react';
import axios from 'axios';
export const Youtube = ({
  listkeyword,
  listchannel,
  listid,
}) => {
  const YOUTUBE_API_KEY = import.meta.env.VITE_APP_YOUTUBE_API_KEY;               //envファイルにてAPIキーを指定
  const YOUTUBE_SEARCH_API_URI = "https://www.googleapis.com/youtube/v3/search?";
  const [V,setV]=useState([]);
  const [ CID,setCID ] =useState("");

        useEffect(() => {
          //カスタムチャンネルURLからチャンネルID取得するためのクエリ文字列
          const NormalId = {
            key: YOUTUBE_API_KEY,
            part:"snippet",
            type:"channel",
            q:listchannel,
          };

          //カスタムチャンネルURLからAPI情報を得るために変換
          const IdParams = new URLSearchParams(NormalId).toString();
          const NormalId2= YOUTUBE_SEARCH_API_URI + IdParams
          
          //ノーマルチャンネルIDの取得
          axios
          .get(NormalId2)
          .then(response => {   
            setCID(response.data.items[0].snippet.channelId);            
          })
         
            

        }, []);

        useEffect(() => {
        if(CID){
         
          // 検索用のクエリ文字列
          const params = {
            key: YOUTUBE_API_KEY,
            q: ( listkeyword === null) ? '' : listkeyword, // 検索キーワード
            channelId:( CID === null) ? '' : CID,       //入力カスタムIDから変換したチャンネルID
            type: "video", 
            maxResults: "5", // 結果の最大数
            order: "date", // 新しい順
          };
            
            //入力したキーワード、チャンネルIDからyoutubeAPI情報を得るため変換
            const queryParams = new URLSearchParams(params).toString();
            const lastUrl= YOUTUBE_SEARCH_API_URI + queryParams
     
            axios
            .get(lastUrl)
            .then(response => {                  
              setV(response.data.items)
            })
          }

        }, [CID]);
  const video =V.map((video,index)=>{
    const url2 = 'https://www.youtube.com/embed/' + video.id.videoId;
    //console.log(video)
        return ( 
            <div style={{marginTop:'20px'}} key={index}>
                <iframe 
                  id="ytplayer" 
                  type="ytplayer" 
                  width="250" 
                  height="140"
                  src={url2}
                  frameBorder="0"
                  allowFullScreen
                />
            </div>
            )
  });
          return(
            <div style={{marginTop:'10px'}}>
             <div key={listid}>{video}</div>
            
            
            </div>
          )
        };

  //{video}