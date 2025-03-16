import { useState, useEffect, useCallback } from "react";

interface Data {
  id: number;
  title: string;
}

const Child = ({ number }: { number: number }) => {
  const [data, setData] = useState([]);

  const fetchData: (() => Promise<void>) & { uniqueId?: string } =
    useCallback(async (): Promise<void> => {
      const url = `https://jsonplaceholder.typicode.com/todos?_limit=${number}`;
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    }, [number]);

  useEffect(() => {
    if (!fetchData?.uniqueId) {
      fetchData.uniqueId = crypto.randomUUID().substring(1, 7);
    }
    console.log("fetchData function is recreated!", fetchData.uniqueId);
  }, [fetchData]);
  console.log("fetchData function is recreated!", fetchData.uniqueId);

  console.log("FetchDataComponent rendered");

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button> <h3>Fetched Data:</h3>
      <ul className="dataList">
        {data.length === 0 ? (
          <h2>No data found!</h2>
        ) : (
          data.map((item: Data) => (
            <li className="card" key={item.id}>
              {item.title}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Child;
