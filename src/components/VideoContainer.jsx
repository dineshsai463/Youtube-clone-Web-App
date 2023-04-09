
import { useSelector } from "react-redux";
import { url } from "../constant/Info";
import useFetch from "../hooks/useFetch";

import VideoCardShimmer from "../shimmerUI/VideoCardShimmer";
import Category from "./Category";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const { isOpen } = useSelector((state) => state.toggle);
  const {videoLists  } = useFetch(url)
  
 
  return (
    <div className={`${isOpen ? "w-4/5" : ""}`}>
      <Category />
      <div className="flex flex-row flex-wrap justify-evenly">
        {videoLists
          ? videoLists.map((elem) => {
              return (
                <VideoCard
                  key={
                    typeof elem?.id === "object" ? elem?.id?.videoId : elem?.id
                  }
                  id={
                    typeof elem?.id === "object" ? elem?.id?.videoId : elem?.id
                  }
                  imgUrl={elem?.snippet?.thumbnails?.medium?.url}
                  title={elem?.snippet?.title}
                  viewCount={elem?.statistics?.viewCount}
                  channelTitle={elem?.snippet?.channelTitle}
                />
              );
            })
          : Array(15)
              .fill("")
              .map((elem, index) => {
                return (
                  <VideoCardShimmer
                    key={index}
                    id={elem?.id}
                    imgUrl={elem?.snippet?.thumbnails?.medium?.url}
                    title={elem?.snippet?.title}
                    viewCount={elem?.statistics?.viewCount}
                    channelTitle={elem?.snippet?.channelTitle}
                  />
                );
              })}

        {videoLists?.length === 0 && (
          <p className="p-12"> No Videos found. Try Again </p>
        )}
      </div>
    </div>
  );
};

export default VideoContainer;
