export default function CartContainer() {
  return (
    <div className="flex items-center justify-between hover:bg-white/10 -mx-8 px-6 py-5">
      <div className="flex jw-2/5">
        <div className="w-20 ml-2">
          <img
            className="h-24"
            src="https://res.cloudinary.com/dxz16dyxa/image/upload/v1675161115/personal%20project/Products/Demon_Slayer_tcboxo.webp"
            alt="product"
          />
        </div>

        <div className="flex flex-col justify-between ml-2 flex-grow">
          <span className="pt-9 font-bold text-md text-white font-GentiumPlus">
            Demon Slayer no.12
          </span>
        </div>
      </div>

      <div className="flex w-1/5 pl-20">
        <button className="text-white text-lg hover:underline">-</button>

        <input className="mx-2 border text-center w-8" type="text" value="1" />

        <button className="text-white text-lg hover:underline">+</button>
      </div>

      <span className="text-center w-1/5 font-GentiumPlus text-md text-white">
        $400.00
      </span>

      <button className="pr-4">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 5.98001C17.67 5.65001 14.32 5.48001 10.98 5.48001C9 5.48001 7.02 5.58001 5.04 5.78001L3 5.98001"
            stroke="#EE8877"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97"
            stroke="#EE8877"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.8499 9.14001L18.1999 19.21C18.0899 20.78 17.9999 22 15.2099 22H8.7899C5.9999 22 5.9099 20.78 5.7999 19.21L5.1499 9.14001"
            stroke="#EE8877"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.3301 16.5H13.6601"
            stroke="#EE8877"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 12.5H14.5"
            stroke="#EE8877"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
