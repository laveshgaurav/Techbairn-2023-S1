import { useEffect, useState } from "react";
import { getAllBlogs, saveBlog } from "../services/http.service";
import "./Home.css";
import moment from "moment/moment";

function Home() {
  const [blogData, setBlogData] = useState([]);
  const [body, setBody] = useState({
    userId: "64eb651431a0030ecfa1cfb1",
    title: "",
    content: "",
    image: [],
    location: "India",
  });
  const [activeOption, setActiveOption] = useState("link");
  const [imgUrl, setImgUrl] = useState("");

  const fetchData = async () => {
    try {
      let apiData = await getAllBlogs();
      console.log("API DATA", apiData);
      if (apiData?.status) setBlogData(apiData.blogs);
    } catch (e) {
      console.log(e);
    }
  };

  const savePost = async () => {
    try {
      let resp = await saveBlog(body);
      if (resp.status === true) {
        fetchData();
        setBody({
          userId: "64eb651431a0030ecfa1cfb1",
          title: "",
          content: "",
          image: [],
          location: "India",
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="Home_Container">
      {/* form component */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input
          placeholder="Enter Title"
          value={body.title}
          onChange={(e) =>
            setBody({
              ...body,
              title: e.target.value,
            })
          }
        />

        <textarea
          placeholder="Enter Content"
          value={body.content}
          onChange={(e) => {
            setBody({
              ...body,
              content: e.target.value,
            });
          }}
        />

        <label
          style={{
            marginBottom: "1.5rem",
          }}
        >
          Select type of image
          <select
            value={activeOption}
            onChange={(e) => setActiveOption(e.target.value)}
            style={{
              width: "120px",
            }}
          >
            {[
              {
                title: "Link",
                value: "link",
              },
              {
                title: "File",
                value: "file",
              },
            ].map((item, index) => (
              <option value={item.value}>{item.title}</option>
            ))}
          </select>
        </label>

        {activeOption === "link" && (
          <div>
            <input
              placeholder="Add image URL"
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
            />
            <button
              onClick={() => {
                if (imgUrl.trim().length === 0) {
                  return alert("Add valud image url");
                }
                setBody({
                  ...body,
                  image: [...body.image, imgUrl],
                });
                setImgUrl("");
              }}
            >
              Add
            </button>
            {body.image.map((item, index) => (
              <>
                <img
                  src={item}
                  alt="item"
                  style={{
                    width: "120px",
                    marginRight: "1rem",
                  }}
                />
                <button
                  onClick={() =>
                    setBody({
                      ...body,
                      image: body.image.filter((img, idx) => img !== item),
                    })
                  }
                >
                  DEL
                </button>
              </>
            ))}
          </div>
        )}

        <button onClick={savePost}>SAVE</button>
      </div>

      {/* rendering a list of data */}
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
