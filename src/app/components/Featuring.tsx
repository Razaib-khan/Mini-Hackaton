import Image from "next/image"
import car1 from "../../../image/car1.jpg"
import car2 from "../../../image/car2.jpg"
import car3 from "../../../image/car3.jpg"
import car4 from "../../../image/car4.jpg"
import Link from "next/link"

export default function Featuring (){
    return(
        <div>
            <h1 className="font-semibold text-xl ml-12">
                Featured New Cars
            </h1>
            <div className="flex justify-evenly w-2/5 mt-6">
            <h1 className="font-semibold text-lg ml-12">Popular</h1>
            <h1 className=" text-lg ml-12">Upcoming</h1>
            <h1 className=" text-lg ml-12">Newly Launched</h1>
            </div>
            <div className="flex flex-row p-4 w-full justify-evenly h-72 border border-y border-t-gray-400 mt-4">
            <div className="h-56  w-1/5">
            <Link href="/car1">
            <Image src={car1} alt="car1"/>
            </Link>
            </div>
            <div className=" h-56  w-1/5">
            <Link href="/car2">
            <Image src={car2} alt="car2"/>
            </Link>
            </div>
            <div className=" h-56  w-1/5">
            <Link href="/car3">
            <Image src={car3} alt="car3"/>
            </Link>
            </div>
            <div className="  w-1/5">
            <Link href="/car4">
            <Image src={car4} alt="car4"/>
            </Link>
            </div>
            </div>
        </div>
    )
}