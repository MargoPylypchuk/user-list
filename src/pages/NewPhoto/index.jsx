import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import like from "../../assets/like.png";
import com from "../../assets/comments.jpg";
import save from "../../assets/save.png";
import "./NewPhoto.css";

function NewPhoto() {
  const navigate = useNavigate();
  const { photo } = useParams();
  const [data, setData] = useState([]);

  const getUser = async () => {
    const result = await axios(
      `https://api.unsplash.com/photos/${photo}/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9`
    );

    setData(result.data);
    console.log(result.data);
  };

  useEffect(() => {
    getUser();
  }, []);

  console.log(data);
  return data.length === 0 ? (
    <div>Loading...</div>
  ) : (
    <div className="block">
      <div className="header">
        <button onClick={() => navigate(-1)} className="b-back">
          Back
        </button>
      </div>
      <div className="page">
        <div className="header">
          <div className="about-u">
            <img src={data.user.profile_image.medium} className="u-photo" />
            <div className="u-name">{data.user.username}</div>
            <div className="data">{data.created_at.slice(0, 10)}</div>
          </div>
        </div>

        <img src={data.urls.regular} alt="d" className="new-img" />
        <div className="about">
          <div className="block-reaction">
            <div className="a">
              <img src={like} className="like b" />
              <img src={com} className="com b" />
            </div>
            <img src={save} className="save b" />
          </div>

          <div className="block-likes">
            <div className="likes">Likes {data.likes}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NewPhoto;
