interface CategoryChipProps {
  category: string;
  color: string;
}

const CategoryChip = ({ category, color }: CategoryChipProps) => {
  return (
    <span
      className="inline-block max-w-max rounded-[20px]
      font-body03-semibold-12 text-white px-[15px] py-[8px]"
      style={{ backgroundColor: color }}
    >
      {category}
    </span>
  );
};

export default CategoryChip;
