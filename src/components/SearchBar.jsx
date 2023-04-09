import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";

import axios from "axios";
import jsonpAdapter from "axios-jsonp";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../redux-store/SearchSlice";

const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchState = useSelector((state) => state.search);
  const [searchItem, setSearchItem] = useState("");
  const [suggestionResults, setsuggestionResults] = useState(null);
  const [showSuggestion, setshowSuggestion] = useState(false);
  useEffect(() => {
    const timeFun = setTimeout(() => {
      if (searchState[searchItem]) {
        setsuggestionResults(searchState[searchItem]);
      } else {
        getResults();
      }
    }, 500);

    return () => {
      clearTimeout(timeFun);
    };
  }, [searchItem]);

  async function getResults() {
    const GOOGLE_AC_URL = `https://clients1.google.com/complete/search`;
    try {
      const res = await axios({
        url: GOOGLE_AC_URL,
        adapter: jsonpAdapter,
        params: {
          client: "youtube",
          hl: "en",
          ds: "yt",
          q: searchItem,
        },
      });
      setsuggestionResults(res.data[1]);

      dispatch(
        cacheResults({
          [searchItem]: res.data[1],
        })
      );
    } catch (err) {
      console.log(err.message);
    }
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (!searchItem) {
      return;
    }
    setshowSuggestion(false);
    navigate(`/results?search_query=${searchItem}`);
  };
  

  return (
    <>
      <div className="basis-1/2">
        <form onSubmit={submitHandler}>
          <input
            onFocus={() => {
              setshowSuggestion(true);
            }}
            type={"text"}
            name="search"
            className="border border-slate-600 rounded-md w-9/12 p-1 mx-4 outline-0"
            value={searchItem}
            onChange={(e) => {
              if (showSuggestion === false) {
                setshowSuggestion(true);
              }
              setSearchItem(e.target.value);
            }}
          />
          <button type="submit" className="" onClick={submitHandler}>
            <BsSearch className="w-auto h-4" />
          </button>
        </form>
        {showSuggestion && suggestionResults?.length > 0 ? (
          <div
            className="absolute bg-white border rounded-b-xl basis-1/2 p-2 px-4 mx-6 w-4/12"
            onMouseEnter={() => {
              setshowSuggestion(true);
            }}
            onMouseLeave={() => {
              setshowSuggestion(false);
            }}
          >
            <ul>
              {suggestionResults &&
                suggestionResults.map((elem, index) => {
                  return (
                    <li
                      key={index}
                      className="hover:bg-gray-100 px-2 pt-1 pb-1"
                    >
                      <button
                        onClick={() => {
                          setshowSuggestion(false);
                          setSearchItem(elem[0])
                          navigate(`/results?search_query=${elem[0]}`);
                        }}
                        className=" hover:bg-gray-100 w-auto h-auto"
                      >
                        {elem[0]}
                      </button>
                    </li>
                  );
                })}
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default SearchBar;
