"use client";

import { useEffect, useState } from "react";

export default function ParallaxBackground() {
	const [offset, setOffset] = useState({ x: 0, y: 0 });
	const [cursor, setCursor] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			const x = (e.clientX / window.innerWidth - 0.5) * 15;
			const y = (e.clientY / window.innerHeight - 0.5) * 15;
			setOffset({ x, y });
			setCursor({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	const maskStyle = {
		maskImage: `radial-gradient(circle at ${cursor.x}px ${cursor.y}px, rgba(0,0,0,0) 120px, rgba(0,0,0,1) 280px)`,
		WebkitMaskImage: `radial-gradient(circle at ${cursor.x}px ${cursor.y}px, rgba(0,0,0,0) 120px, rgba(0,0,0,1) 280px)`,
	};

	return (
		<div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
			{/* Tło lasu z paralaksą */}
			<div
				className="w-full h-full"
				style={{
					transform: `translate(${offset.x}px, ${offset.y}px) scale(1.05)`,
				}}>
				<img
					src="/images/forest-bg.png"
					alt="Tło lasu"
					className="w-full h-full object-cover"
				/>
			</div>

			{/* Mgła poruszająca się nieskończenie z maską */}
			<div
				className="absolute inset-0 opacity-40 bg-repeat "
				style={{
					backgroundImage: `url('/images/fog-bg.png')`,
					...maskStyle,
				}}
			/>
		</div>
	);
}
