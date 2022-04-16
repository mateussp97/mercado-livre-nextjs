import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getItems } from "../services/items";

export default function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const items = await getItems(router.query.search);
      console.log(items);
      setItems(items);
    };

    try {
      fetchData();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [router.query.search]);

  if (isLoading) return <h1>Carregando...</h1>;

  return (
    <div>
      <h1>Mercado Livre - Home</h1>
    </div>
  );
}
