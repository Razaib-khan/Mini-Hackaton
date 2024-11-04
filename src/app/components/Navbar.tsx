import Link from "next/link";
export default function Navbar() {
  return (
    <header>
      <nav className="border-neutral-500 w-full h-14 bg-black flex">
        <div className="flex justify-start items-center uppercase text-5xl font-extrabold text-white">
          <h1>PakWheels</h1>
        </div>

        <div className="flex justify-between w-10/12 items-center h-11 mt-1 ml-36 mr-2 text-white">
          
          <Link href=".">Used Cars</Link>
          <Link href=".">New Cars</Link>
          <Link href=".">Bikes</Link>
          <Link href=".">Auto Store</Link>
          <Link href=".">Videos</Link>
          <Link href=".">Forums</Link>
          <Link href=".">Blog</Link>
          <Link href=".">More</Link>
          <form>
            <button className="border-none bg-red-700 text-white p-2 rounded-lg ">Post an Ad</button>
          </form>
        </div>
      </nav>
    </header>
  );
}
