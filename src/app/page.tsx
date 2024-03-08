import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-[#ECF2FF] text-white">
            <div className="flex flex-col md:flex-row my-auto bg-white rounded-2xl md:w-[736px] h-[809px] md:h-[512px]">


                <div className="flex flex-col rounded-b-[32px] md:rounded-[32px] w-[368px] h-[356px] md:h-[512px] p-6 px-12 md:p-14 items-center text-center" id="gradiente">
                    <p className="text-[24px] mb-4">Your result</p>
                    <img src="/assets/images/circle.svg" className="h-32 md:h-56" alt="" />
                    <div className="-mt-[118px] md:-mt-40">
                        <p className="text-[56px] md:text-[72px]">76</p>
                        <p className="text-[16px] md:text-[18px]">of 100</p>
                    </div>
                    <img src="" alt="" />
                    <h2 className="text-[24px] md:text-[32px] mt-12">Greate</h2>
                    <p className="text-[16px] md:text-[18px] mt-">Your performance exceed 65% of the people conducting the test here!</p>
                </div>


                <div className="text-black flex flex-col px-8 p-6 md:p-14 w-[368px] min-w-72 rounded-r-[32px]">
                    <h1 className="text-[24px]">Summary</h1>
                    <div className="flex flex-row bg-[#ff55553e] p-2 px-4 rounded-lg mt-4 justify-between h-[56px] items-center">
                        <div className="flex flex-row items-center">
                            <img src="/assets/images/icon-reaction.svg" alt="" />
                            <p className="text-[#FF5555] ml-2">Reaction</p>
                        </div>
                        <div className="flex flex-row">
                            <p className="mr-2">80</p>
                            <p className="opacity-50">/ 100</p>
                        </div>
                    </div>
                    <div className="flex flex-row bg-[#FFB21E3e] p-2 px-4 rounded-lg mt-4 justify-between h-[56px] items-center">
                        <div className="flex flex-row items-center">
                            <img src="/assets/images/icon-memory.svg" alt="" />
                            <p className="text-[#FFB21E] ml-2">Memory</p>
                        </div>
                        <div className="flex flex-row">
                            <p className="mr-2">92</p>
                            <p className="opacity-50">/ 100</p>
                        </div>
                    </div>
                    <div className="flex flex-row bg-[#00BB8F3e] p-2 px-4 rounded-lg mt-4 justify-between h-[56px] items-center">
                        <div className="flex flex-row items-center">
                            <img src="/assets/images/icon-verbal.svg" alt="" />
                            <p className="text-[#00BB8F] ml-2">Verbal</p>
                        </div>
                        <div className="flex flex-row">
                            <p className="mr-2">61</p>
                            <p className="opacity-50">/ 100</p>
                        </div>
                    </div>
                    <div className="flex flex-row bg-[#1125D63e] p-2 px-4 rounded-lg mt-4 justify-between h-[56px] items-center">
                        <div className="flex flex-row items-center">
                            <img src="/assets/images/icon-visual.svg" alt="" />
                            <p className="text-[#1125D6] ml-2">Visual</p>
                        </div>
                        <div className="flex flex-row">
                            <p className="mr-2">73</p>
                            <p className="opacity-50">/ 100</p>
                        </div>
                    </div>
                    <button className=" p-2 px-4 rounded-full text-center w-full mt-8 h-[56px] items-center bg-[#303B59] text-white">Continue</button>
                </div>


            </div>
        </main>
    );
}
