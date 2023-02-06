export default function Input({ type, name, value, onChange, error }) {
  return (
    <>
      <input
        type={type || "text"}
        className={`block w-full px-4 py-2 mt-2 mb-2 text-purple-700 bg-white rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 ${
          error ? "border-red-700" : ""
        } border-2`}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && (
        <p className="text-sm text-red-600 dark:text-red-500">{error}</p>
      )}
    </>
  );
}
