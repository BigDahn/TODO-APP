import React from "react";
import Heading from "./Heading";
import Input from "./Input";

function Container() {
  return (
    <section>
      <div className="flex flex-col items-center">
        <Heading />
        <div>
          <Input />
        </div>
      </div>
    </section>
  );
}

export default Container;
