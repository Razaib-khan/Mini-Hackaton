export default function Search (){
    return(
        <div>
            <form className="flex justify-center mt-12">
                <input type="search" placeholder="Car Make or Model" className="rounded-tl rounded-bl border-r border-r-slate-400" />
                <input type="search" placeholder="All Cities" className="border-r border-r-slate-400"/>
                <input type="search" placeholder="Price Range" className="border-r border-r-slate-400"/>
                <button className="bg-green-500 text-white p-4 rounded-r">Search</button>
            </form>
            <form className="flex justify-center">
                <button className="flex border border-white text-white mt-6">
                    Advanced Filter &gt; 
                </button>
            </form>
        </div>
    )
}