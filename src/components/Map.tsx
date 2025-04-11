"use client";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

const Map = () => {
  useEffect(() => {
    const map = L.map("map", {
      center: [42.889770, 74.613681],
      zoom: 17,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy;',
    }).addTo(map);

    L.marker([42.889770, 74.613681])
      .addTo(map)
      .bindPopup("ул. Куренкеева, 138, Бишкек");

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ width: "477px", height: "234px", borderRadius: "1.7px" }} />;
};

export default Map;
