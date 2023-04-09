

const VideoCardShimmer = ({ title, viewCount, channelTitle, id }) => {
  return (
    
      
      <div className="w-64 m-6 h-72 bg-gray-100 shadow-lg rounded-b-md opacity-100 flex flex-col items-center  justify-center gap-8">
        <div className="w-72  bg-gray-400"></div>

        <p className="px-2 text font-semibold w-56 h-8 border-2 bg-black-600  ">{title}</p>
        <p className="px-2 w-56 h-8 border-2 bg-black-600 ">{channelTitle}</p>
        <p className="px-2 w-56 h-8 border-2 bg-black-600 ">{viewCount}</p>
      </div>
  
  );
};

export default VideoCardShimmer;
