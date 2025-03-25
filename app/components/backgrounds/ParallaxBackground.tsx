"use client";

import { useEffect, useState } from "react";

export default function ParallaxBackground() {
	const [offset, setOffset] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			const x = (e.clientX / window.innerWidth - 0.5) * 15;
			const y = (e.clientY / window.innerHeight - 0.5) * 15;
			setOffset({ x, y });
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	return (
		<div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
			<img
				src="/images/forest-bg.png"
				alt="Tło lasu"
				className="w-full h-full object-cover transition-transform duration-100 ease-out"
				style={{
					transform: `translate(${offset.x}px, ${offset.y}px) scale(1.05)`,
				}}
			/>
		</div>
	);
}
