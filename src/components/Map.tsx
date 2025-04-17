"use client";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import IconImg from "../../public/location.svg"; // правильный импорт иконки

const Map = () => {
  useEffect(() => {
    const map = L.map("map", {
      center: [42.88977, 74.613681],
      zoom: 17,
    });

    const customIcon = L.icon({
      iconUrl: IconImg.src,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    L.marker([42.88977, 74.613681], { icon: customIcon })
      .addTo(map)
      .bindPopup("ул. Куренкеева, 138, Бишкек");

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      id="map"
      style={{ width: "477px", height: "234px", borderRadius: "1.7px" }}
    />
  );
};

export default Map;
