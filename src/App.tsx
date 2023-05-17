import { useEffect, useState } from "react";
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

import SiderLayout from "layout/sider";
import HeaderLayout from "layout/header";
import FooterLayout from "./layout/footer";
import HomePage from "pages/customer/home";
import LoginPage from "pages/login";
import RandomRewardPage from "pages/customer/randomReward";
import ClaimRewardPage from "pages/customer/claimReward";
import PageNotFound from "./pages/customer/pageNotFound";

import { commonSelector } from "./store/slice/common";

import homeAdminPage from "./pages/admin/home";
import userPage from "./pages/admin/user";
import rewardPage from "./pages/admin/reward";
import dataPage from "./pages/admin/data";
import staffPage from "./pages/admin/staff";
import rewardRandomPage from "./pages/admin/rewardRandom";
const { Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [hiddenExpandSider, setHiddenExpandSider] = useState<boolean>(false);
  const [cookies] = useCookies(["token"]);
  const isLoading = useSelector(commonSelector).loading;

  const isHaveTokenLogin = cookies.token ? true : false;
  const mockRole = cookies.token;

  const LoginRoute = ({ component: Component, ...rest }: any) => (
    <Route
      {...rest}
      render={() =>
        isHaveTokenLogin ? <Redirect to="/home" /> : <Redirect to="/login" />
      }
    />
  );

  useEffect(() => {
    if (window.innerWidth < 600) {
      setCollapsed(true);
      setHiddenExpandSider(true);
    }
  }, []);

  const routeCustomer = () => {
    return (
      <>
        <Switch>
          <Route exact path="/home" component={HomePage}></Route>
          <Route path="/random-reward" component={RandomRewardPage}></Route>
          <Route path="/claim-reward" component={ClaimRewardPage}></Route>
          <Route path="*" component={PageNotFound} />
        </Switch>
      </>
    );
  };

  const routeAdmin = () => {
    return (
      <>
        <Switch>
          <Route exact path="/home" component={homeAdminPage}></Route>
          <Route exact path="/user" component={userPage}></Route>
          <Route exact path="/reward" component={rewardPage}></Route>
          <Route
            exact
            path="/reward-random"
            component={rewardRandomPage}
          ></Route>
          <Route exact path="/data" component={dataPage}></Route>
          <Route exact path="/staff" component={staffPage}></Route>
          <Route path="*" component={PageNotFound} />
        </Switch>
      </>
    );
  };

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
            <h1>กำลังโหลด...</h1>
          </FadeIn>
        </Layout>
      ) : (
        <Layout style={{ height: "100vh" }}>
          {isHaveTokenLogin ? (
            <Router>
              <FadeIn>
                <Layout hasSider>
                  <SiderLayout collapsed={collapsed} />
                  <Layout style={{ marginLeft: !collapsed ? 200 : 80 }}>
                    <HeaderLayout
                      collapsed={collapsed}
                      setCollapsed={setCollapsed}
                      hiddenExpandSider={hiddenExpandSider}
                    />
                    <Content
                      style={{
                        margin: "24px 16px 0px 16px",
                        padding: 24,
                        height: "84vh",
                      }}
                    >
                      {mockRole === "admin" ? routeAdmin() : routeCustomer()}
                    </Content>
                    <FooterLayout />
                  </Layout>
                </Layout>
              </FadeIn>
            </Router>
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
