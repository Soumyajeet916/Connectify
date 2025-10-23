import React, { useEffect, useState } from 'react'
import { dummyPostsData } from '../assets/assets';
import Loading from '../components/Loading.jsx';
import StoriesBar from '../components/StoriesBar.jsx';

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
        <div className='lg:col-span-3'>
          <StoriesBar />
          <div className='mt-6 space-y-6'>
            {/* content */}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className='space-y-6'>
          {/*<div className='bg-white rounded-lg shadow-sm p-4'>
            <h2 className='font-semibold text-lg mb-4'>Sponsored</h2>
          </div>*/}
          <div className='bg-white rounded-lg shadow-sm p-4'>
            <h2 className='font-semibold text-lg'>Recent Messages</h2>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Feed;
