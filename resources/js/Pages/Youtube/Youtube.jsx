import React from 'react';

export const Youtube = ({
  //videoId,
  //setV,
  //V,
}) => {
 // const video =V.map((video)=>{

  //console.log("Vlast",V)
  //console.log("videoId",videoId.id.videoId)
        //const url2 = 'https://www.youtube.com/embed/' + video.id.videoId;
        const url2 = 'https://www.youtube.com/embed/' + "Nr7zUSuDzq8";
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
  //});
          return (
            <div style={{marginTop: '10px'}}>
              <h1>{video} </h1>
            </div>
)

        };

