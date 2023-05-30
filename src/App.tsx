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
import adminPage from "./pages/admin/admin";
import staffPage from "./pages/admin/staff";
import rewardRandomPage from "./pages/admin/rewardRandom";
import { useTranslation } from "react-i18next";
import colorConstants from "./constants/colorConstants";
import { TYPE_ROLE } from "./constants";

const { Content } = Layout;

function App() {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [hiddenExpandSider, setHiddenExpandSider] = useState<boolean>(false);
  const [cookies] = useCookies(["accessToken", "userInfo"]);
  const isLoading = useSelector(commonSelector).loading;
  const userRole = useSelector(commonSelector).dataUser?.role || "";

  const isHaveTokenLoginAdmin = cookies.accessToken ? true : false;

  const pathname = window.location.pathname;

  const LoginAdminRoute = ({ component: Component, ...rest }: any) => (
    <Route
      {...rest}
      render={() =>
        isHaveTokenLoginAdmin ? (
          <Redirect to="/home111222" />
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
    const RouteAdmin = (
      <Route exact path="/admin" component={adminPage}></Route>
    );
    const RouteUser = <Route exact path="/user" component={userPage}></Route>;
    const RouteStaff = (
      <Route exact path="/staff" component={staffPage}></Route>
    );
    const RouteHome = (
      <Route exact path="/home" component={homeAdminPage}></Route>
    );
    const RouteData = <Route exact path="/data" component={dataPage}></Route>;
    const RouteReward = (
      <Route exact path="/reward" component={rewardPage}></Route>
    );
    const RouteRandomReward = (
      <Route exact path="/reward-random" component={rewardRandomPage}></Route>
    );
    const RoutePageNotFound = <Route path="*" component={PageNotFound} />;
    if (userRole === TYPE_ROLE.SUPER_ADMIN) {
      return (
        <>
          <Switch>
            {RouteHome}
            {RouteData}
            {RouteReward}
            {RouteRandomReward}
            {RouteAdmin}
            {RouteStaff}
            {RouteUser}
            {RoutePageNotFound}
          </Switch>
        </>
      );
    } else if (userRole === TYPE_ROLE.ADMIN) {
      return (
        <>
          <Switch>
            {RouteHome}
            {RouteData}
            {RouteReward}
            {RouteRandomReward}
            {RouteStaff}
            {RouteUser}
            {RoutePageNotFound}
          </Switch>
        </>
      );
    }
    return (
      <>
        <Switch>
          {RouteHome}
          {RouteData}
          {RouteReward}
          {RouteRandomReward}
          {RouteUser}
          {RoutePageNotFound}
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
          {isHaveTokenLoginAdmin ? (
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
                      {[
                        TYPE_ROLE.SUPER_ADMIN,
                        TYPE_ROLE.ADMIN,
                        TYPE_ROLE.STAFF,
                      ].includes(userRole) ? (
                        routeAdmin()
                      ) : (
                        <></>
                      )}
                    </Content>
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
                  <Content
                    style={{
                      background: colorConstants.Primary50,
                      padding: 24,
                      height: "100vh",
                    }}
                  >
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
