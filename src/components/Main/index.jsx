import React from "react";
import Introduction from "./Introduction";
import Experience from "./Experience";
import Divider from "../Divider";
import AboutMe from "./AboutMe";
import Portifolio from "./Portifolio";
import Knowledge from "./Knowledge";
import MyCarrer from "./MyCarrer";
import Feedbacks from "./Feedbacks";
import Contacts from "./Contacts";

export default function MainComponent() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Introduction />
      <Divider />
      <Experience />
      <Divider />
      <AboutMe />
      <Portifolio />
      <Knowledge />
      <MyCarrer />
      <Feedbacks />
      <Contacts /> 

    </main>
  );
}

