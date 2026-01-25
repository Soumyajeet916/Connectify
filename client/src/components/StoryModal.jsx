import { ArrowLeft,TextIcon,Video,Camera, Upload,SendHorizonal} from 'lucide-react';
import React, { useState } from 'react'
import { toast } from 'react-hot-toast';

const StoryModal = ({setShowModal,fetchStories}) => {



    const bgColors=['#4f46e5','#f87171','#fbbf24','#34d399','#60a5fa','#a78bfa','#f472b6','#f97316'];
    const[background,setBackground]=useState(bgColors[0]);

    const[mode,setMode]=useState('text'); 
    const[text,setText]=useState("");
    const[media,setMedia]=useState(null);
    const [previewUrl,setPreviewUrl]=useState(null);

    const handleMediaUpload=(e)=>{
        const file=e.target.files?.[0]
        if(file){
            setMedia(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    }
    const handleCreateStory = async () => {}

return (
  <div className="fixed inset-0 z-[110] min-h-screen bg-black/80 backdrop-blur text-white flex items-center justify-center p-4">
    <div className="w-full max-w-md">
      {/* Header */}
      <div className="text-center mb-4 flex items-center justify-between">
        <button
          onClick={() => setShowModal(false)}
          className="text-white p-2 cursor-pointer"
        >
          <ArrowLeft />
        </button>
        <h2 className="text-lg font-semibold">Create Story</h2>
        <span className="w-10"></span>
      </div>

      {/* Story Area */}
      <div
        className="rounded-lg h-96 flex items-center justify-center relative"
        style={{ backgroundColor: background }}
      >
        {mode === "text" && (
          <textarea
            className="bg-transparent text-white w-full h-full p-6 text-lg resize-none focus:outline-none text-center"
            placeholder="Your next post starts here…"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        )}

        {mode === "media" && previewUrl && (
          media?.type.startsWith("image") ? (
            <img
              src={previewUrl}
              alt=""
              className="object-contain max-h-full rounded-lg"
            />
          ) : (
            <video
              src={previewUrl}
              className="object-contain max-h-full rounded-lg"
              autoPlay
              loop
              muted
              controls
            />
          )
        )}
      </div>

      {/* Background color options */}
      <div className="flex mt-4 gap-2 flex-wrap">
        {bgColors.map((color) => (
          <button
            key={color}
            className={`w-6 h-6 rounded-full ring-2 ring-white/30 cursor-pointer transition-transform hover:scale-110`}
            style={{ backgroundColor: color }}
            onClick={() => setBackground(color)}
          />
        ))}
      </div>
      <div className="flex gap-2 mt-4">
  
     <button
    onClick={() => {
      setMode('text');
      setMedia(null);
      setPreviewUrl(null);
    }}
    className={`flex-1 flex items-center justify-center gap-2 p-2 rounded 
      ${mode === "text" ? "bg-white text-black" : "bg-zinc-800 text-white"}`}
  >
    <TextIcon size={18} /> Text
  </button>

 
  <label
    className={`flex-1 flex items-center justify-center gap-2 p-2 rounded cursor-pointer 
      ${mode === 'media' ? "bg-white text-black" : "bg-zinc-800 text-white"}`}>
    <input onChange={(e) => {handleMediaUpload(e);setMode('media');}}
      type="file"
      accept="image/*,video/*"
      className="hidden"
    />
    {/*<Camera size={16} />/<Video size={16} /> Media*/}
    <Upload size={18}/> Media</label>
     </div>
       <button
  className="relative inline-flex items-center justify-center w-full mt-4 px-4 py-3 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
  onClick={() =>
    toast.promise(
      handleCreateStory(),
      {
        loading: 'Creating Story...',
        success: <p>Story added</p>,
        error: (e) => <p>{e.message}</p>,
      }
    )
  }
>
  <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>

  <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
    <svg
      className="w-5 h-5 text-green-900"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      ></path>
    </svg>
  </span>

  <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
    <svg
      className="w-5 h-5 text-green-200"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      ></path>
    </svg>
  </span>

  <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
    Share
  </span>
</button>


    </div>
  </div>
);
}

export default StoryModal
