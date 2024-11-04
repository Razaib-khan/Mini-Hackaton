import Image from "next/image"
import Car1 from "../../../image/car1.jpg"
import Link from "next/link" 
export default function car1 (){
    return(
        <div>
            <div className="underline text-2xl font-bold flex justify-center">
                <h1>Honda Civic 2024 Price in Pakistan, Images, Reviews & Specs</h1>
            </div>
            <div className="flex justify-center">
            <Image src={Car1} alt="car1" className="w-1/4 h-3/4"/>
            </div>
            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quam, dicta temporibus enim praesentium iusto 
                    quos voluptatem, magni incidunt tempora aliquam nesciunt et?
                     A in optio provident perspiciatis maiores voluptate. Lorem ipsum dolor 
                     nsit amet consectetur adipisicing elit. Aspernatur animi consectetur unde sed, aliquid qui molestiae
                      blanditiis fugit earum dolorem quam harum dolore, corrupti, id fugiat magnam saepe officia officiis?
                </p>
            </div>
            <div className="flex justify-center text-base">
                <h1 className="text-green-600">PKR 50,000,00</h1>
            </div>
            <div className="flex justify-center">
                <button className="bg-blue-900 text-white p-2 mt-4 rounded-sm"><Link href="/checkout">Buy Now</Link></button>
            </div>
        </div>
    )
}