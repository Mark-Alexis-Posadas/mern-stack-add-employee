export const Input = ({ field, form, label, ...props }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor="firstName"
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input {...field} {...props} />
    </div>
  );
};
