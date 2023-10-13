import { Link, Head } from '@inertiajs/react';
import React from 'react'
import { Button,Card,Stack } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
export default function Welcome({ auth, laravelVersion, phpVersion }) {

    return (
        <>
    
      <div className="welcome">

            <div className=" sm:flex sm:justify-center sm:items-center min-h-screen">
                
                     
                <div className="max-w-7xl mx-auto p-6 lg:p-8">
                     <Card >
                        <CardMedia
                        image="images/bluecard.jpg"
                        >                        
                     <CardContent> 
                     <CardHeader
                   
                      />
                   <Card sx={{ width: '75%' }} >
              <img src="/images/logo3.jpg" alt="logo3"></img>
        </Card>
       
                   <Stack  spacing={4}>
                    <div className="flex justify-center">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            
                        >
                          <Button variant="contained" color="primary">  つべNewへ！ </Button> 
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                            <Button variant="contained" color="warning">  ログイン </Button>     
                            </Link>

                            <Link
                                href={route('register')}
                                className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                            <Button variant="contained" color="success">  登録 </Button>     
                            </Link>
                        </>
                    )}
                    </div>
                    <Typography sx={{ fontSize: 20 }}  gutterBottom>
                    つべNewは自分の見たいyoutubeチャンネル内の最新動画をリストにして表示してくれるツールです!<br />
                    キーワードを指定すれば、そのキーワードに関連する最新動画を表示してくれるよ!
                    </Typography>
         
                     </Stack>
                     </CardContent>
                     </CardMedia>
                    </Card> 
                    
                </div>
            </div>
            </div>
        
        </>
    );
}
