import { Link } from "react-router-dom";
const ListVideoCard = ({ imgUrl, title, channelTitle ,id ,descriptions }) => {
  return (
    <Link to={`/watch?v=${id}`}>
      
      <div className=" m-6 shadow-lg rounded-b-md flex-row flex  ">
        <img alt="Not found" src={imgUrl} className="border rounded-t-md " />
         
         <div className="flex flex-col p-2 gap-2.5" >  
        <p className="px-2 text font-semibold  ">{title}</p>
        
        <p className="px-2 text-sm ">{channelTitle}</p>
        <p className="px-2 text-xs" >{descriptions}</p>
        </div>
      </div>{" "}
    </Link>
  );
};

export default ListVideoCard;
