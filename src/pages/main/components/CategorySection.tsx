import type { CategoryT } from "../../../data/mockCategories.ts";

interface CategorySectionProps {
  categories: CategoryT[];
}

const CategorySection = (categories: CategorySectionProps) => {
  return (
    <div className={`flex flex-col mt-[30px] w-full mb-[40px]`}>
      <h3 className={`font-head03-bold-18 text-gray-700`}>인기 카테고리</h3>
      <div className={`flex flex-col`}>
        {categories.categories.length > 0 ? (
          categories.categories.map((category, index) => (
            <CategoryItem key={index} rank={index + 1} category={category} />
          ))
        ) : (
          <p
            className={`flex w-full justify-center font-body05-medium-14 text-gray-500 mt-[40px]`}
          >
            카테고리가 없어요
          </p>
        )}
      </div>
    </div>
  );
};

const CategoryItem = ({
  rank,
  category,
}: {
  rank: number;
  category: CategoryT;
}) => {
  return (
    <div className={`flex flex-col w-full mt-[20px]`}>
      <div className={`flex items-center ms-[14px]`}>
        <p className={`font-head03-bold-18 text-green-300`}>{rank}</p>
        <p className={`ms-[20px] font-body04-medium-16 text-gray-700`}>
          {category.name}
        </p>
        <p className={`ms-[6px] font-body08-regular-12 text-gray-500`}>
          {category.count}
        </p>
      </div>
      <hr className={`mt-[10px] w-full h-[1px] text-gray-200`} />
    </div>
  );
};

export default CategorySection;
