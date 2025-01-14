"use client";

import { Layout } from "antd";
import Sidebar from "@/components/Shared/Sidebar/Sidebar";
import { Content, Header } from "antd/es/layout/layout";
import Profile from "@/components/Shared/Header/Profile";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/redux/store";
import PrivateRoute from "@/routes/PrivateRoute";

const DashboardLayout = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <PrivateRoute>
          <Layout>
            <Header className="!bg-black border-b-2 border-white/20 drop-shadow-primary">
              <Profile />
            </Header>
            <Layout className="relative">
              <Sidebar />
              <Content
                style={{
                  padding: 24,
                  minHeight: 280,
                  backgroundColor: "black",
                }}
              >
                {children}
              </Content>
            </Layout>
          </Layout>
        </PrivateRoute>
      </PersistGate>
    </Provider>
  );
};

export default DashboardLayout;
