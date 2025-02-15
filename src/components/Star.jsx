import React from "react";

export default function Star({ index, starCount, arrayOrder }) {
  const [chosenClass, setChosenClass] = React.useState("");
  const elementOrder = arrayOrder.indexOf(index);
  React.useEffect(() => {
    setTimeout(() => {
      let funct = () => setChosenClass("animate-spinSlow");
      funct();
    }, elementOrder * 200);
  }, [index, elementOrder]);
  const left = Math.floor(Math.random() * 90) + 1;
  const top = (index / starCount) * 100 + 2;
  const style = { top: `${top}%`, left: `${left}%` };
  return (
    <img
      src="./src/assets/icons/Star.svg"
      key={index}
      style={style}
      className={`absolute opacity-0 ${chosenClass} w-10 h-10 z-[1] drop-shadow-[0_0_10px_rgba(171,32,253,1)]`}
    ></img>
  );
}
