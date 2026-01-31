import React, { useEffect, useState } from 'react'
import { dummyPostsData } from '../assets/assets'
import Loading from '../components/Loading.jsx'
import StoriesBar from '../components/StoriesBar.jsx'
import PostCard from '../components/PostCard.jsx'
import RecentMessages from '../components/RecentMessages.jsx'

const Feed = () => {
  const [feeds, setFeeds] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setFeeds(dummyPostsData)
    setLoading(false)
  }, [])

  if (loading) return <Loading />

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6 h-screen overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-full">

        {/* Main Feed Column (scrolls) */}
        <div className="lg:col-span-3 h-full overflow-y-auto pr-2 no-scrollbar">
          <StoriesBar />
          <div className="mt-6 space-y-6">
            {feeds.map(post => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        </div>

        {/* Right Sidebar (full height) */}
        <div className="max-xl:hidden h-full">
          <div className="h-full overflow-y-auto no-scrollbar">
            <RecentMessages />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Feed
