import React from "react";
import Heading from "./Heading";
import Input from "./Input";

function Container() {
  return (
    <section className=" ">
      <div className="flex flex-col gap-3 md:gap-7 ">
        <Heading />
        <div>
          <Input />
        </div>
      </div>
    </section>
  );
}

export default Container;
