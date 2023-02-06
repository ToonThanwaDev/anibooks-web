export default function CategorySearchbar() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between py-4">
        <div className="w-[20%] lg:max-w-sm mt-4">
          <label for="underline_select" class="sr-only">
            Underline select
          </label>
          <select
            id="underline_select"
            class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          >
            <option selected>Categories...</option>
            <option value="Action">Action</option>
            <option value="Harem">Harem</option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
            <option value="Sports">Sports</option>
            <option value="Supernatural">Supernatural</option>
          </select>
        </div>
        <form className="max-w-sm px-4">
          <div className="relative pt-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-4 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
