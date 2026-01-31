import React, { useEffect, useState } from 'react'
import { dummyRecentMessagesData } from '../assets/assets'
import { Link } from 'react-router-dom'
import moment from 'moment'

const RecentMessages = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    setMessages(dummyRecentMessagesData)
  }, [])

  return (
    <div className="bg-white p-4 rounded-md shadow text-xs text-slate-800 h-full flex flex-col">
      <h3 className="font-semibold mb-4">Recent Messages</h3>

      {messages.length === 0 && (
        <p className="text-slate-400 text-center">No recent messages</p>
      )}

      <div className="flex flex-col gap-2">
        {messages.map(message => (
          <Link
            key={message._id}
            to={`/messages/${message.from_user_id._id}`}
            className="flex items-start gap-2 py-2 px-1 rounded hover:bg-slate-100"
          >
            <img
              src={message.from_user_id.profile_picture}
              alt=""
              className="w-8 h-8 rounded-full shrink-0"
            />
            <div className='w-full'>
                <div className='flex justify-between'>
            <span className="truncate font-medium">
              {message.from_user_id.full_name}
              <p className='text-[10px] text-slate-400'>{moment(message.createdAt).fromNow()}</p>
            </span>
            </div>
            <div className='flex justify-between'>
                <p className='text-gray-600'>{message.text? message.text:'Media'}</p>
                {!message.seen && <p className='bg-indigo-500 text-white w-4 h-4 flex items-center justify-center rounded-full text-[10px]'>1</p>}
            </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default RecentMessages
