"use client";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
<<<<<<< HEAD
import customIcon from "@/assets/images/Location.svg";
=======
import IconImg from "../../public/location.svg";
>>>>>>> 0f0dcf3ee00896ea795ad80dc24a524de8302fa2

const Map = () => {
  useEffect(() => {
    const map = L.map("map", {
      center: [42.88977, 74.613681],
      zoom: 17,
    });

<<<<<<< HEAD
    const icon = new L.Icon({
      iconUrl: customIcon.src,
      iconSize: [32, 32],
      iconAnchor: [16, 32], 
      popupAnchor: [0, -32], 
=======
    const customIcon = L.icon({
      iconUrl: IconImg.src,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
>>>>>>> 0f0dcf3ee00896ea795ad80dc24a524de8302fa2
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy;",
    }).addTo(map);

<<<<<<< HEAD
    L.marker([42.88977, 74.613681], { icon })
=======
    L.marker([42.88977, 74.613681], { icon: customIcon })
>>>>>>> 0f0dcf3ee00896ea795ad80dc24a524de8302fa2
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
