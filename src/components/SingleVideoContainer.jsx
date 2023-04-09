import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeSideBar } from "../redux-store/ToggleSlice";
import ReactPlayer from "react-player";
const SingleVideoContainer = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const id = searchParams.get("v");
  useEffect(() => {
    dispatch(closeSideBar());
  }, []);

  
  return (
    <div>
      <ReactPlayer url={`https://www.youtube.com/embed/${id}`} controls />
    </div>
  );
};

export default SingleVideoContainer;
