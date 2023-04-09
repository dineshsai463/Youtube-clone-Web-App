import { categoryList } from "../constant/Info";
import CategoryCard from "./CategoryCard";

const Category = () => {
  return (
    <div className="flex flex-row items-center justify-evenly gap-1">
      {categoryList &&
        categoryList.map((elem) => {
          return <CategoryCard key={elem.id} {...elem} />;
        })}
    </div>
  );
};

export default Category;
