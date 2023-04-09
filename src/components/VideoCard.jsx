import { Link } from "react-router-dom";

const VideoCard = ({ imgUrl, title, viewCount, channelTitle ,id }) => {
  return (
    <Link to={`/watch?v=${id}`} >  <div className="w-64 m-6 h-72 shadow-lg rounded-b-md ">
    <img
      alt="Not found"
      src={imgUrl}
      className="border rounded-t-md "
    />

    <p className="px-2 text font-semibold ">{title}</p>
    <p className="px-2  text-sm">{channelTitle}</p>
    <p className="px-2 text-xs truncate">{viewCount ? `${viewCount} views` : "" } </p>
  </div>  </Link>
   
  );
};

export default VideoCard;
