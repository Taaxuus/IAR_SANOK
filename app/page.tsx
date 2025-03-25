import Link from "next/link";
import ParallaxBackground from "./components/backgrounds/ParallaxBackground";

export default function Home() {
	return (
		<>
			<ParallaxBackground />
			<div className="h-screen w-screen flex flex-col justify-center items-center relative z-10">
				<Link
					href="/map"
					className="text-2xl px-6 py-4 bg-black opacity-70 text-white rounded-md hover:scale-90 transform transition-transform duration-200 shadow-lg">
					<span>DO MAPY</span>
				</Link>
			</div>
		</>
	);
}
