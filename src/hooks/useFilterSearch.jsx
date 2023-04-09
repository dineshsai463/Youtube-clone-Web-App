import { useDispatch, useSelector } from "react-redux";
import {
  errorMethod,
  loadingMethod,
  searchByKeyword,
} from "../redux-store/VideoListSlice";
const useFilterSearch = (url) => {
  const dispatch = useDispatch();
  const { videoLists } = useSelector((store) => store.videoList);
  async function getSearchByKeyword() {
    try {
      dispatch(loadingMethod());
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Some thing went wrong");
      }
      const data = await res.json();
      const { items } = data;

      if (items || items !== null || items !== undefined) {
        const filteredItems = items.filter((elem) =>
          elem.id.kind.includes("video")
        );
        dispatch(searchByKeyword(filteredItems));
      } else {
        dispatch(errorMethod("Some thing went wrong"));
      }
    } catch (err) {
      console.log(err.message);
      dispatch(errorMethod(err.message));
    }
  }
  return {
    videoLists,
    getSearchByKeyword,
  };
};

export default useFilterSearch;
