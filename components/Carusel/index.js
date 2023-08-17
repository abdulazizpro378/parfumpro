"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Image from "next/image";
import { ShopOutlined, ShoppingOutlined } from "@ant-design/icons";
import axios from "axios"; // Don't forget to import axios.
// import SampleNextArrow from "../SampleNextArrow";
// import SamplePrevArrow from "../SamplePrevArrow";
// import Imagela from "../../assets/1618553780_27-phonoteka_org-p-genetika-fon-32.jpg";
import Link from "next/link";
import "./carusel.css";
import { Image } from "antd";

const Carusel = () => {
  const [carusel, setCarusel] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let { data } = await axios.get(
          `https://vodiy-parfum-backend.vercel.app/api/v1/last-products`
        );

        setCarusel(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="">
      <div className="sarlavhaCarus">
      
    
      </div>
      <Slider {...settings}>
        {carusel?.map((pr) => (
          <div key={pr} className="cadw">
            {pr?.image?.url ? (
              <div className="img">
                <Image
                  src={pr?.image.url}
                  alt="Najot ta'lim"
                  className="cardw__img"
                  width={200}
                  height={200}
                />
              </div>
            ) : (
              <div className="placeholder-image">salom</div>
            )}
            <span className="cardw__footer">
              {pr?.title ? (
                <span style={{ fontSize: "17px", fontWeight: "bold" }}>
                  {pr.title}
                </span>
              ) : (
                <span style={{ fontSize: "17px", fontWeight: "bold" }}>
                  No title
                </span>
              )}
            </span>
            <Link href={`abautr`} className="cardw__action">
              <ShoppingOutlined
                style={{ fontWeight: "bold", fontSize: "30px", color: "black" }}
              />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carusel;
