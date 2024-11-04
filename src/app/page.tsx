import Search from "./components/Search"
import Otherdata from "./components/Otherdata"
import Featuring from "./components/Featuring"
export default function Home (){
  return(
    <div>
    <div className="bg-gradient-to-b from-black via-slate-800 to-blue-900 w-full -mt-8 h-96">
      <h1 className="flex text-white font-bold justify-center h-20 align-middle pt-36 text-3xl">
        Find Used Cars In Pakistan
      </h1>
      <Search/>
    </div>

    <div>
         <Otherdata/>
         </div>
         <div>
          <Featuring/>
         </div>
      
         </div>
  )
}