export default function Card() {
  return (
    <div className="container mx-auto px-4">
      <div class="flex items-center justify-between py-8">
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-md shadow dark:bg-black/50 dark:border-gray-700">
          <a
            href="#"
            class="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}
