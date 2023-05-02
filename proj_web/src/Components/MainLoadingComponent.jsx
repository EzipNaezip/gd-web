import React from "react";
import { Progress } from "flowbite-react";

export default function MainLoadingComponent({ load_percent }) {
  return (
    <div className="flex flex-col">
      <h1 className="text-lg text-center mb-2">디자이너가 열심히 그리는 중...</h1>
      <Progress progress={load_percent} />
    </div>
  );
}
