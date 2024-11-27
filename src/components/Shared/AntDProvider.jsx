"use client";

import { ConfigProvider } from "antd";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/redux/store";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const AntDProvider = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            itemSelectedColor: "#fff",
            itemActiveBg: "#fff",
            itemHoverBg: "#fff",
            itemHoverColor: "#fff",
            inkBarColor: "#fff",
          },
          Menu: {
            itemSelectedBg: "#fff",
            itemSelectedColor: "#fff",
            itemActiveBg: "#fff",
            itemActiveColor: "#fff",
            itemHoverBg: "#fff",
            itemHoverColor: "#fff",
          },
          Input: {
            // activeBorderColor: "#ebe7e8",
            // hoverBorderColor: "#ebe7e8",
          },
          Upload: {
            colorPrimaryHover: "#1677ff",
            colorPrimary: "#1677ff",
          },
          Progress: {
            defaultColor: "#fff",
          },
          Table: {
            rowHoverBg: "#ebe7e8",
            rowSelectedBg: "#ebe7e8",
            rowSelectedHoverBg: "#ebe7e8",
          },
        },
        token: {
          // colorPrimary: "#fff",
          // colorBorder: "#ebe7e8",
          // colorPrimaryBorder: "#fff",
        },
      }}
    >
      <Toaster closeButton duration={2000} richColors position="top-center" />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AntdRegistry>{children}</AntdRegistry>
        </PersistGate>
      </Provider>
    </ConfigProvider>
  );
};

export default AntDProvider;
