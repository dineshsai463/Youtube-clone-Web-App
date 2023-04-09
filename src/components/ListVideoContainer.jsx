import { useEffect } from "react";

import { useSearchParams } from "react-router-dom";
import { searchUrl } from "../constant/Info";
import useFilterSearch from "../hooks/useFilterSearch";

import ListVideoCard from "./ListVideoCard";

const ListVideoContainer = () => {
  const [searchQuery] = useSearchParams();
  const searchItem = searchQuery.get("search_query");
  const { videoLists, getSearchByKeyword } = useFilterSearch(
    `${searchUrl}&q=${searchItem}`
  );
  useEffect(() => {
    getSearchByKeyword();
  }, [searchQuery.get("search_query")]);

  return (
    <div className="flex flex-col w-5/6">
      {videoLists &&
        videoLists.map((elem, index) => {
          return (
            <ListVideoCard
              key={elem?.id?.videoId || index}
              id={elem?.id?.videoId}
              descriptions={elem?.snippet?.description}
              imgUrl={elem?.snippet?.thumbnails?.medium?.url}
              title={elem?.snippet?.title}
              channelTitle={elem?.snippet?.channelTitle}
            />
          );
        })}

      {videoLists?.length === 0 && (
        <p className="text-center p-12"> No videos found.Try Again </p>
      )}
    </div>
  );
};

export default ListVideoContainer;
