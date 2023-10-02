import React, { useEffect } from "react";
import axios from "axios";

function AboutUs() {
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        console.log(pos?.coords);
        let { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${pos?.coords?.latitude}&lon=${pos?.coords?.longitude}&appid=32b9e87afc1cadd4cc8b5cd0c4994fea`
        );
        console.log(data);
      });
    } else {
      console.log("Location off");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return <div>AboutUs</div>;
}

export default AboutUs;
