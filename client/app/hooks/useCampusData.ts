import { useState, useEffect } from "react";
import { baseUrl } from "./baseurl";

export interface CampusItem {
  ID: string;
  Title: string;
  Description: string;
  Link: string[];
  Tipo: string;
  Grado_ID: string;
  Grado_Categoria: string;
  Grado_Nombre: string;
  createdAt: string;
  updatedAt: string;
}

const useCampusData = () => {
  const [campusData, setCampusData] = useState<CampusItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/campus`);
        const data = await response.json();
        setCampusData(data);
        setLoading(false);
      } catch (error: any) {
        console.error("Error fetching campus data:", error);
        setLoading(false);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return { campusData, loading, error };
};

export default useCampusData;
