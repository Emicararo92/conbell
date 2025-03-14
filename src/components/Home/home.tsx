"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Init from "../Init/init";
import DivLine from "../divLine/divLine";
//import CallButton from "../CallButton/callButton";
//import Placard from "../Showrooms/placard/placard";
import Kitchen from "../Showrooms/kitchen/kitchen";
import Form from "../Contact/form/form";
import WhyUs from "../whyUs/whyUs";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-red">
      <div data-aos="fade-up">
        <Init />
      </div>
      <div data-aos="fade-down">
        <DivLine />
      </div>
      {/*  <div data-aos="zoom-in">
        <CallButton />
      </div> */}
      {/* <div data-aos="fade-left">
        <Placard />
      </div> */}
      <div data-aos="fade-right">
        <Kitchen />
      </div>
      <DivLine />
      <div data-aos="fade-left">
        <WhyUs />
      </div>
      <div data-aos="fade-right">
        <Form />
      </div>
      <div data-aos="fade-down">
        <DivLine />
      </div>
    </div>
  );
}
