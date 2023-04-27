import React, { useEffect, useState} from 'react';
import { PopulerIcon } from '../icons/icon';
import TweetBox from '../components/TweetBox';
import Divider from '../components/Divider';
import FeedList from '../components/FeedList';
import db from '../firebase';


const Content = () => {
  const [tweets, setTweets] = useState([]);   
  useEffect(() => {
       db.collection('feed')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => 
        setTweets(snapshot.docs.map((doc) => doc.data() ))
        );

   }, []);

   

  return (
    <main className="flex-1 flex flex-col border-r border-l border-gray-extraLight" >
      <header className=' sticky top-0 z-10 flex justify-between items-center p-4 border-b border-gray-extraLight bg-white'>
        <span className='font-bold text-xl text-gray-900'>Home</span>
         <PopulerIcon className='w-6 h-6 text-primary-base'/>
         </header> 
         <div className='flex space-x-4  px-4 py-3'>
         <img src='https://pbs.twimg.com/profile_images/1383339754620477440/84ZE_ANk_400x400.jpg' alt='Profile' className='n-8 h-8 rounded-full'/> 
          <TweetBox/>
         </div>
         <Divider/> 

         {/* Feed */}
         <FeedList tweets={tweets} />

      
    </main>
  );
  };

export default Content;
