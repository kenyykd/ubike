"use client";

import Header from "./components/header";
import BikeSiteArea from "./components/bikeSiteArea";
import StationInfoTable from "./components/stationInfoTable";
import { useState, useEffect } from "react";
import axios from "axios";

interface YoubikeStation {
  sna: string;
  ar: string;
  sarea: string;
  sbi: number;
  bemp: number;
}

export default function Home() {
  const [allAreas, setAllAreas] = useState<YoubikeStation[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSareas, setSelectedSareas] = useState<string[]>([]);

  useEffect(() => {
    const fetchYoubikeData = async () => {
      try {
        const api =
          "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";
        const response = await axios.get(api);
        setAllAreas(response.data);
      } catch (error) {
        console.error("取得 YouBike 資料失敗:", error);
      }
    };
    fetchYoubikeData();
  }, []);

  const filteredDatas = allAreas.filter((data) => {
    const matchesSearchTerm =
      data.sna.includes(searchTerm) || data.ar.includes(searchTerm);
    const matchesSelectedAreas =
      selectedSareas.length === 0 || selectedSareas.includes(data.sarea);
    return matchesSearchTerm && matchesSelectedAreas;
  });

  return (
    <div className="responsiveContainer">
      <Header />
      <BikeSiteArea
        areas={allAreas}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedSareas={selectedSareas}
        setSelectedSareas={setSelectedSareas}
      />
      <StationInfoTable datas={filteredDatas} />
    </div>
  );
}
