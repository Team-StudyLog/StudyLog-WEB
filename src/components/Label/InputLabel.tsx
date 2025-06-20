interface InputLabelProps {
  label: string;
  htmlFor: string;
}

const InputLabel = ({ label, htmlFor }: InputLabelProps) => {
  return (
    <label className="text-gray-700 font-head02-bold-20 mb-5" htmlFor={htmlFor}>
      {label}
    </label>
  );
};

export default InputLabel;
