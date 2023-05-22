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

import SiderLayoutAdmin from "pages/admin/layout/sider";
import HeaderLayoutAdmin from "pages/admin/layout/header";
import FooterLayoutAdmin from "pages/admin/layout/footer";

import HeaderLayoutCustomer from "pages/customer/layout/header";

import HomePage from "pages/customer/home";
import LoginPage from "pages/admin/login";
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
import { useTranslation } from "react-i18next";

const { Content } = Layout;

function App() {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [hiddenExpandSider, setHiddenExpandSider] = useState<boolean>(false);
  const [cookies] = useCookies(["accessToken"]);
  const isLoading = useSelector(commonSelector).loading;

  const isHaveTokenLogin = cookies.accessToken ? true : false;
  const mockRole = cookies.accessToken;
  const pathname = window.location.pathname;

  const LoginAdminRoute = ({ component: Component, ...rest }: any) => (
    <Route
      {...rest}
      render={() =>
        isHaveTokenLogin ? (
          <Redirect to="/home" />
        ) : (
          <Redirect to="/login-admin" />
        )
      }
    />
  );

  useEffect(() => {
    if (window.innerWidth < 600) {
      setCollapsed(true);
      setHiddenExpandSider(true);
    }
  }, []);

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
            <h1>{t("Loading")}...</h1>
          </FadeIn>
        </Layout>
      ) : (
        <Layout style={{ height: "100vh" }}>
          {isHaveTokenLogin ? (
            <Router>
              <FadeIn>
                <Layout hasSider>
                  <SiderLayoutAdmin collapsed={collapsed} />
                  <Layout style={{ marginLeft: !collapsed ? 200 : 80 }}>
                    <HeaderLayoutAdmin
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
                      {mockRole === "admin" ? routeAdmin() : <></>}
                    </Content>
                    <FooterLayoutAdmin />
                  </Layout>
                </Layout>
              </FadeIn>
            </Router>
          ) : (
            <div>
              {pathname === "/login-admin" ? (
                <Router>
                  <Switch>
                    <Route path="/">
                      <LoginAdminRoute />
                      <Route path="/login-admin" component={LoginPage}></Route>
                    </Route>
                  </Switch>
                </Router>
              ) : (
                <Router>
                  <HeaderLayoutCustomer />
                  <Content>
                    <Switch>
                      <Route exact path="/" component={HomePage}></Route>
                      <Route
                        path="/random-reward"
                        component={RandomRewardPage}
                      ></Route>
                      <Route
                        path="/claim-reward"
                        component={ClaimRewardPage}
                      ></Route>
                      <Route path="*" component={PageNotFound} />
                    </Switch>
                  </Content>
                </Router>
              )}
            </div>
          )}
        </Layout>
      )}
    </>
  );
}

export default App;
