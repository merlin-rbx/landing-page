import Image from "next/image";

import merlinLogo from "../../public/merlinLogo.svg";

export default function Home() {
    return (
        <div className="w-screen h-screen overflow-hidden flex justify-center">
            <div className="w-full h-full px-8 max-w-7xl sm:px-16 md:px-32 flex items-center justify-center flex-col">
                <div className="w-full lg:w-4/6 relative">
                    <Image src={merlinLogo} layout="responsive" alt="Merlin Logo"></Image>
                </div>

                <h1 className="mt-10 text-2xl font-medium text-gray-800 text-center">
                    Merlin is a Roblox moderation panel, built for{" "}
                    <span className="text-primary font-semibold">Scale</span>.
                </h1>

                <p className="mt-2 text-lg font-semibold text-gray-400">Coming Soon</p>
            </div>
        </div>
    );
}
