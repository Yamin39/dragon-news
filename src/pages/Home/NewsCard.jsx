import PropTypes from "prop-types";
import { IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";

const NewsCard = ({ aNews }) => {
  const { _id, author, title, image_url, details, rating, total_view } = aNews;
  return (
    <div className="border border-dark-6 rounded-md">
      {/* author */}
      <div className="bg-dark-7 py-4 px-5">
        <div className="flex items-center gap-4">
          <img className="w-10 h-10 rounded-full" src={author.img} />
          <div className="font-medium dark:text-white">
            <h4 className="font-semibold text-dark-2">{author.name}</h4>
            <div className="text-sm text-gray-500 dark:text-gray-400">{author.published_date}</div>
          </div>
        </div>
      </div>

      {/* news */}
      <div className="p-5">
        <h4 className="font-bold text-xl text-dark-2 leading-9">{title}</h4>
        <div>
          <img className="h-72 w-full object-cover py-5" src={image_url} />
        </div>
        <p className="text-[#706F6F] leading-6">
          {details > 200 ? (
            details
          ) : (
            <>
              {details.slice(0, 200)}...
              <Link to={`/news/${_id}`} className="block font-semibold text-[#FF8C47]">
                Read More
              </Link>
            </>
          )}
        </p>
      </div>

      <hr className="border-b-dark-6 mx-5" />

      {/* rating */}
      <div className="p-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="rating">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
          </div>
          <p className="text-dark-3 font-medium">{rating.number}</p>
        </div>
        <div className="flex items-center gap-3 text-dark-3 font-medium">
          <IoEye className="text-2xl" />
          <p>{total_view}</p>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  aNews: PropTypes.object,
};

export default NewsCard;
