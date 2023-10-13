import React,{ useState,useEffect } from 'react';
import axios from 'axios';
export const Youtube = ({
  listkeyword,
  listchannel,
}) => {
  const YOUTUBE_API_KEY = import.meta.env.VITE_APP_YOUTUBE_API_KEY;
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
      

            //カスタムチャンネルIDからAPI情報を得るために変換
            const IdParams = new URLSearchParams(NormalId).toString();
            const NormalId2= YOUTUBE_SEARCH_API_URI + IdParams

          
              //ノーマルチャンネルIDの取得
              axios
              .get(NormalId2)
              .then(response => {
                 console.count("チャンネル回数");            
                setCID(response.data.items[0].snippet.channelId);            
              })
         
               // 検索用のクエリ文字列
          const params = {
            key: YOUTUBE_API_KEY,
            q: listkeyword, // 検索キーワード
            //channelId: 'UChOwHpmAFqns45OX7udqgVw', //サムライフラッグ
            channelId:CID,       //入力カスタムIDから変換したチャンネルID
            type: "video", 
            maxResults: "5", // 結果の最大数
            order: "date", // 新しい順
          };
            
            //入力したキーワード、チャンネルIDからyoutubeAPI情報を得るため変換
            const queryParams = new URLSearchParams(params).toString();
            const lastUrl= YOUTUBE_SEARCH_API_URI + queryParams
            console.log("CID",CID)
     
              axios
                      .get(lastUrl)
                      .then(response => {                  
                        setV(response.data.items)
                      })

        }, [CID]);
       

  const video =V.map((video,index)=>{

        const url2 = 'https://www.youtube.com/embed/' + video.id.videoId;
   
        return ( 
  
            <div style={{marginTop:'20px'}}>
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
             
              <tr> 
              <td>{video}</td>
              </tr>
              
            </div>
          )
         

        };

