import { useEffect } from "react";
import { Container } from "./styles";
import { getData } from "api/common/authentication";
import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const HomePage = () => {
  const getDataa = async () => {
    try {
      const res = await getData();
      console.log(res);
    } catch (error) {}
  };
  useEffect(() => {
    if (false) {
      getDataa();
    }
  }, []);

  return (
    <Container>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </Container>
  );
};

export default HomePage;
