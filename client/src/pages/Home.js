import { useEffect, useState } from "react";
import { getAllBlogs } from "../services/http.service";
import "./Home.css";
import moment from "moment/moment";

function Home() {
  const [blogData, setBlogData] = useState([]);
  const fetchData = async () => {
    try {
      let apiData = await getAllBlogs();
      console.log("API DATA", apiData);
      if (apiData?.status) setBlogData(apiData.blogs);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="Home_Container">
      {blogData.map((item, index) => (
        <div className="Blog_Container">
          <h4>{item?.title}</h4>
          <div className="Img_Container">
            {item.image.map((img, imgIdx) => (
              <img src={img} alt="images" />
            ))}
          </div>
          <p>{item.content}</p>
          <h6>
            <i class="fa-regular fa-clock"></i>
            {moment(item?.createdAt).startOf("hour").fromNow()}
          </h6>
        </div>
      ))}
    </div>
  );
}

export default Home;
