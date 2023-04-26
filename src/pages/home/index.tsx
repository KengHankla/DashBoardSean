import { useEffect } from "react";
import { Container } from "./styles";
import { getData } from "api/common/authentication";

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

  return <Container>ddsasdasdas</Container>;
};

export default HomePage;
