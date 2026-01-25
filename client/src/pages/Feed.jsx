import React, { useEffect, useState } from 'react'
import { dummyPostsData } from '../assets/assets';
import Loading from '../components/Loading.jsx';
import StoriesBar from '../components/StoriesBar.jsx';
import PostCard from '../components/PostCard.jsx';

const Feed = () => {
  const [feeds, setFeeds] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFeeds = async () => {
    setFeeds(dummyPostsData);
    setLoading(false);
  }

  useEffect(() => {
    fetchFeeds();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className='w-full max-w-7xl mx-auto px-4 py-6'>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
        
        {/* Main Feed Column */}
        <div className='lg:col-span-3 '>
          <StoriesBar />
          <div className='mt-6 space-y-6'>
            {/* content */ feeds.map((post)=>(<PostCard key={post._id} post={post}/>))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className='max-xl:hidden sticky top-0'>
          <div>
            <h1>Recent Messages</h1>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Feed;
