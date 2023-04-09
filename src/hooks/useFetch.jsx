import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearedVideoList,
  errorMethod,
  initialRender,
  loadingMethod,
} from "../redux-store/VideoListSlice";
const useFetch = (url) => {
  const dispatch = useDispatch();
  const { videoLists } = useSelector((store) => store.videoList);
  useEffect(() => {
    getVideos();
  }, [url]);

  async function getVideos() {
    try {
      dispatch(loadingMethod());
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error("Something Went Wrong");
      }
      const data = await res.json();
      const { items } = data;
      dispatch(initialRender(items));
    } catch (err) {
      dispatch(errorMethod(err.message));
    }
  }

  return {
    videoLists,
  };
};

export default useFetch;
