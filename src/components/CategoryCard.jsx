import { categorySearchUrl } from "../constant/Info";
import useFilterSearch from "../hooks/useFilterSearch";

const CategoryCard = ({ name }) => {
  const { getSearchByKeyword } = useFilterSearch(
    `${categorySearchUrl}&q=${name}`
  );
  const HandleClick = () => {
    getSearchByKeyword();
  };

  return (
    <div className="">
      <button
        onClick={HandleClick}
        className="border w-max-content h-max-content px-6 py-1  bg-gray-100 hover:bg-gray-300 rounded-md text-center"
      >
        {name}
      </button>
    </div>
  );
};

export default CategoryCard;
