import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  console.log(categories);
  return (
    <>
      <h4 className="font-semibold text-xl text-dark-2 hidden md:block">All Category</h4>
      <ul className="ml-4 mt-4">
        {categories.map((category) => (
          <li key={category.id}>
            <NavLink to={`/${category.id}`} className="btn btn-ghost text-dark-4 justify-start w-full">
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Categories;
