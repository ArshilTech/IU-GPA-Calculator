
function Hero(){

    return(
        <div className="bg-[#25671E] text-[#F2B50B]">
            <br />
            <div className="text-center font-mono mt-12 px-4">
                <h1 className="text-6xl font-bold py-3 px-4 border-2 border-[#F2B50B] rounded-lg w-fit mx-auto mb-20 text-[#F2B50B] hover:border-[#F7F0F0] hover:text-[#F7F0F0] transition-all duration-300 transform hover:scale-105 shadow-lg">IU GPA CALCULATOR</h1>
                <h2 className="text-3xl mt-5 text-[#F2B50B] hover:text-[#F7F0F0] transition-colors duration-200">SGPA & CGPA Calculator for Integral University Students</h2>
                <br />
                <p className="text-2xl text-[#F2B50B] leading-relaxed">Click on the <span className="font-bold text-[#F7F0F0] hover:text-white transition-colors">Navigation Bar</span> to choose your program</p>
            </div>
            <div className="px-6 py-12 mt-8">
                <p className="font-mono text-2xl text-[#F2B50B] leading-relaxed">All the calculations are done keeping in mind the official formulas and details cited by the Integral University's Website, which could be found in the <span className="font-bold text-[#F7F0F0] hover:text-white transition-colors cursor-pointer">Sources</span> section.</p>
            </div>
        </div>
    )
}

export default Hero;