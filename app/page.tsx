import Link from "next/link";

export default function Home() {
	return (
		<div className="h-screen w-screen flex flex-col justify-center items-center">
			<Link
				href={"/map"}
				className="text-2xl px-2 py-4 bg-blue-500 text-white rounded-md hover:scale-90 transform transition-transform">
				<span>DO MAPY</span>
			</Link>
		</div>
	);
}
