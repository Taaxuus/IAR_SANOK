"use client";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import Map from "ol/Map";
import { transform } from "ol/proj";
import { OSM } from "ol/source";
import VectorSource from "ol/source/Vector";
import View from "ol/View";
import React, { useEffect } from "react";

export default function OpenLayersComponet() {
	const mapStateRef = React.useRef<any>(null);
	const sourceRef = React.useRef<any>(null);

	useEffect(() => {
		if (!mapStateRef.current) {
			const raster = new TileLayer({ source: new OSM() });

			sourceRef.current = new VectorSource();

			const vector = new VectorLayer({ source: sourceRef.current });

			mapStateRef.current = new Map({
				layers: [raster, vector],
				target: "map",
				view: new View({
					center: transform(
						[15.243629268374999, 49.272716766783859],
						"EPSG:4326",
						"EPSG:3857"
					),
					zoom: 4,
				}),
			});

			// dopiero teraz updateSize
			mapStateRef.current.updateSize();
		}
	}, []);

	return (
		<div className="py-8 h-screen flex flex-col gap-4">
			<div id="map" className="h-full w-full" />
		</div>
	);
}
