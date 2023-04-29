import { ShoppingCartOutlined } from "@ant-design/icons";
import { Card, Col, Row, Skeleton } from "antd";
import React, { useCallback, useEffect, useState } from "react";

interface ITFDataProducts {
  name: string;
}

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const [dataProducts, setDataProducts] = useState<ITFDataProducts[]>([]);

  const logCount = useCallback(() => {
    const arrProduct = [];
    for (let index = 0; index < 100; index++) {
      arrProduct.push({ name: `Product ${index + 1}` });
    }
    setDataProducts(arrProduct);
  }, []);

  useEffect(() => {
    logCount();
  }, [logCount]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Row
        style={{ maxHeight: "100%", overflow: "scroll", overflowX: "hidden" }}
      >
        {dataProducts.map((item: ITFDataProducts) => {
          return (
            <Col span={8}>
              <Card
                style={{ width: 300, marginTop: 16 }}
                actions={[<ShoppingCartOutlined key="setting" />]}
              >
                <Skeleton loading={loading}>
                  <div>{item.name}</div>
                </Skeleton>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default App;
