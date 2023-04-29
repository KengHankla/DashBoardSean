import { Wheel } from "react-custom-roulette";
import { useState } from "react";
import FFF from "./images/background.jpg";
import { Container } from "./styles";

interface StyleType {
  backgroundColor?: string; // Optional
  textColor?: string; // Optional
  fontFamily?: string; // Optional
  fontSize?: number; // Optional
  fontWeight?: number | string; // Optional
  fontStyle?: string; // Optional
}

interface ImageProps {
  uri: string;
  offsetX?: number; // Optional
  offsetY?: number; // Optional
  sizeMultiplier?: number; // Optional
  landscape?: boolean; // Optional
}

interface WheelData {
  id: number;
  option?: string;
  image?: ImageProps;
  style?: StyleType; // Optional
  optionSize?: number; // Optional
  percent: number;
}

const RandomRewardPage = () => {
  const data: WheelData[] = [
    {
      id: 0,
      option: "it 1",
      percent: 0,
      image: {
        uri: FFF,
      },
    },
    { id: 1, option: "it 2", percent: 0 },
    { id: 2, option: "it 3", percent: 50 },
    { id: 3, option: "it 4", percent: 0 },
    { id: 4, option: "it 5", percent: 0 },
    { id: 5, option: "it 6", percent: 50 },
  ];

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const expanded = data.flatMap((item) => Array(item.percent).fill(item));
    const winner = expanded[Math.floor(Math.random() * expanded.length)];
    setPrizeNumber(winner.id);
    setMustSpin(true);
  };

  return (
    <>
      <Container>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
          // สี ขอบ
          outerBorderColor="green"
          // ขนาด เส้นขอบ
          outerBorderWidth={10}
          innerBorderColor="yellow"
          // สี เส้นแบ่งข้างใน
          radiusLineColor="blue"
          // ขนาด เส้นแบ่งข้างใน
          radiusLineWidth={10}
          // สี ตัวอักษร
          textColors={["black"]}
          // ขนาด ตัวอักษร
          fontSize={50}
          perpendicularText={true}
          backgroundColors={[
            "#F22B35",
            "#F99533",
            "#24CA69",
            "#514E50",
            "#46AEFF",
            "#9145B7",
          ]}
        />
        <button onClick={handleSpinClick} disabled={mustSpin}>
          SPIN
        </button>
        {!mustSpin ? data[prizeNumber].option : "0"}
      </Container>
    </>
  );
};

export default RandomRewardPage;
