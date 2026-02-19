
function Navbar(){

    return(
        <div>
            <div className="flex justify-between border-2 py-1 px-2 bg-[#25671E]">
                <h2 className="text-2xl font-mono  text-[#F2B50B]">IU GPA Calculator</h2>
                <div className="flex gap-6">
                    <a href="#" className="text-2xl font-mono  text-[#F2B50B]">Sources</a>
                    <a href="#" className="text-2xl font-mono  text-[#F2B50B]">About Me</a>
                    <button aria-label="Open menu" className="flex flex-col justify-center gap-1.5 cursor-pointer text-2xl">
                        <span className="h-0.5 w-6 bg-[#F7F0F0] rounded"></span>
                        <span className="h-0.5 w-6 bg-[#F7F0F0] rounded"></span>
                        <span className="h-0.5 w-6 bg-[#F7F0F0] rounded"></span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;