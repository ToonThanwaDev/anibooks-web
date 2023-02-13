export default function EditProductForm() {
  return (
    <>
      <form className="mt-10 flex flex-col space-y-4">
        <div>
          <label
            htmlFor="productName"
            className="text-xs font-Brawler text-gray-500"
          >
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            placeholder="Product Name"
            className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div>
          <label
            htmlFor="writer"
            className="text-xs font-Brawler text-gray-500"
          >
            Writer
          </label>
          <input
            type="text"
            id="writer"
            name="writer"
            placeholder="Writer"
            className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div className="relative">
          <label htmlFor="price" className="text-xs font-Brawler text-gray-500">
            Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            placeholder="200.00"
            className="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div className="relative">
          <label
            htmlFor="detail"
            className="text-xs font-Brawler text-gray-500"
          >
            Detail
          </label>
          <input
            type="text"
            id="detail"
            name="detail"
            placeholder="Short Story"
            className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <button
          type="submit"
          className="mt-4 inline-flex w-full items-center justify-center rounded bg-purple-600 hover:bg-purple-800  font-GentiumPlus py-2.5 px-4 text-base tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg"
        >
          Confirm
        </button>
      </form>
    </>
  );
}
