import { configureStore } from "@reduxjs/toolkit";
import ToggleSlice from "./ToggleSlice";

import { Provider } from "react-redux";
import VideoListSlice from "./VideoListSlice";
import SearchSlice from "./SearchSlice";
export const store = configureStore({
  reducer: {
    toggle: ToggleSlice,
    videoList: VideoListSlice,
    search: SearchSlice
  },
});

const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
