
function Hero(){

    return(
        <div className="bg-[#25671E] text-[#F2B50B]">
            <br />
            <div className="text-center font-mono mt-10">
                <h1 className="text-6xl animate-bounce py-2 px-2 border-2 rounded-lg w-fit mx-auto mb-20">IU GPA CALCULATOR</h1>
                <h2 className="text-3xl mt-3">SGPA & CGPA Calculator for Integral University Students</h2>
                <br />
                <p className="text-2xl">Click on the <span className="font-bold text-[#F7F0F0]">Navigation Bar</span> to choose your program</p>
            </div>
            <div className="px-5 py-10 mt-5">
                <p className="font-mono text-3xl">All the calculations are done keeping in mind the official formulas and details cited by the Integral University's Website, which could be found in the <span className="font-bold text-[#F7F0F0]">Sources</span> section.</p>
            </div>
        </div>
    )
}

export default Hero;