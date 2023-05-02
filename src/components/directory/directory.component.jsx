import "./directory.styles.scss";
import CategoryItem from "../category-item/category-item.component";

const Directory = ({ list }) => (
  <div className="directory-container">
    {list.map((category) => (
      <CategoryItem key={category.id} category={category} />
    ))}
  </div>
);

export default Directory;
