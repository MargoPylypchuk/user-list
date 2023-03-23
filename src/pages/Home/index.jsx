import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "./List";
import "./Home.css";


function Home() {
  const [data, setData] = useState([]);

  const getUsers = async () => {
    const result = await axios(
      "https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9&page=1"
    );

    setData(result.data);
  };

  useEffect(() => {
    getUsers();
  }, []);
   


  // console.log(data);
  return data.length === 0 ? (
    <div>Loading...</div>
  ) : (
    
      <div className="home" >
        <div className="text">ListUsers</div>
        {data.map((item) => {
          return <List data={item} />;
        })}
      </div>
    
    
  );
}

export default Home;
