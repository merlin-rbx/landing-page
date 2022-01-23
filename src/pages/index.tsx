import Image from "next/image";

export default function Home() {
    return (
        <div className="w-screen h-screen overflow-hidden flex justify-center">
            <div className="w-full h-full px-2 max-w-7xl sm:px-4 md:px-8 flex items-center justify-center flex-col">
                <div className="w-full h-40 relative">
                    <Image src="/merlinLogo.svg" layout="fill" objectFit="fill" alt="Merlin Logo"></Image>
                </div>

                <h1 className="mt-10 text-2xl font-medium text-gray-800">
                    Merlin is a moderation panel for Roblox, built for{" "}
                    <span className="text-primary font-semibold">Scale</span>.
                </h1>

                <p className="mt-2 text-lg font-semibold text-gray-400">Coming Soon</p>
            </div>
        </div>
    );
}
