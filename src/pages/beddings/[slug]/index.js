import React from "react";
import { useRouter } from "next/router";

const Slug = () => {
  const router = useRouter();
  console.log("router", router);
  return <div>Slug</div>;
};

export default Slug;
