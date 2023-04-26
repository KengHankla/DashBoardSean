import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Layout } from "antd";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";
import FadeIn from "react-fade-in";

import HomePage from "pages/home/index";
import LoginPage from "pages/login/index";
import SiderLayout from "layout/sider/index";
import HeaderLayout from "layout/header/index";
import { commonSelector } from "./store/slice/common";
const { Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [cookies] = useCookies(["token"]);
  const isLoading = useSelector(commonSelector).loading;

  const isHaveTokenLogin = cookies.token ? true : false;

  const LoginRoute = ({ component: Component, ...rest }: any) => (
    <Route
      {...rest}
      render={() =>
        isHaveTokenLogin ? <Redirect to="/home" /> : <Redirect to="/login" />
      }
    />
  );

  return (
    <>
      {isLoading ? (
        <Layout
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FadeIn>
            <h1>Fetching</h1>
          </FadeIn>
        </Layout>
      ) : (
        <Layout style={{ height: "100vh" }}>
          {isHaveTokenLogin ? (
            <FadeIn>
              <Layout hasSider>
                <SiderLayout collapsed={collapsed} />
                <Layout>
                  <HeaderLayout
                    collapsed={collapsed}
                    setCollapsed={setCollapsed}
                  />
                  <Content
                    style={{
                      margin: "24px 16px",
                      padding: 24,
                      background: "pink",
                    }}
                  >
                    <Router>
                      <Switch>
                        <Route path="/" component={HomePage}></Route>
                      </Switch>
                    </Router>
                  </Content>
                </Layout>
              </Layout>
            </FadeIn>
          ) : (
            <Router>
              <Switch>
                <Route path="/">
                  <LoginRoute />
                  <Route path="/login" component={LoginPage}></Route>
                </Route>
              </Switch>
            </Router>
          )}
        </Layout>
      )}
    </>
  );
}

export default App;
