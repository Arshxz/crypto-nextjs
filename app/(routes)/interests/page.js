"use client";
import Title from "@/app/(routes)/components/title";
import DataTable from "../components/dataTable";
import { useState, useEffect } from "react";

export default function Interests() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/interests")
      .then((res) => res.json())
      .then((json) => {
        // Convert data object to array
        const dataArr = json.data ? Object.values(json.data) : [];
        setData(dataArr);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching interests data:", err);
        setData([]);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Title title="Projects I'm looking into" />
      <DataTable data={data} loading={loading} />
    </div>
  );
}
