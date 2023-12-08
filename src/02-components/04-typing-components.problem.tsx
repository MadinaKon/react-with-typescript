import React from "react";

type PropsType = { className?: string };
export const Button = (props: PropsType) => {
  return <button className={props.className}></button>;
};

const Parent = () => {
  return (
    <>
      <Button></Button>

      <Button className="my-class"></Button>
    </>
  );
};
