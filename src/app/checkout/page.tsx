import Link from "next/link"
export default function Checkout() {
  return (
    <div>
      <div className="flex justify-center mt-6 border border-b-gray-400">
        <h1 className="text-2xl font-bold ">Enter Your Details</h1>
      </div>
      <div className="flex justify-center">
        <form className="mt-40 p-4 w-80 flex flex-col">
          <input
            className="mb-4 p-2 border border-gray-400"
            type="text"
            placeholder="Enter Your Name"
          />
          <input
            className="mb-4 p-2 border border-gray-400"
            type="text"
            placeholder="Enter Your Email"
          />
          <input
            className="mb-4 p-2 border border-gray-400"
            type="text"
            placeholder="Enter Your Card Number"
          />
          <input
            className="mb-4 p-2 border border-gray-400"
            type="text"
            placeholder="Enter Your Address"
          />
          <button className="mb-4 py-2 border border-gray-400 ml-16 bg-blue-900 text-white font-semibold items-center rounded-sm w-40 text-xs">
            <Link href="/thankyou">Place Your Order</Link>
          </button>
        </form>
      </div>
    </div>
  );
}
