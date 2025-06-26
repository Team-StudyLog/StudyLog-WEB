interface CategoryDotProps {
  color: string;
}

const CategoryDot = ({ color }: CategoryDotProps) => {
  return (
    <div
      className="mt-[4px] w-[10px] h-[10px] rounded-full"
      style={{ backgroundColor: color }}
    />
  );
};

export default CategoryDot;
