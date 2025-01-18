import { ConfigProvider } from "antd";
import { Toaster } from "sonner";

const AntDProvider = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            itemSelectedColor: "#5c159d",
            itemActiveBg: "#5c159d",
            itemHoverBg: "#5c159d",
            itemHoverColor: "#5c159d",
            inkBarColor: "#5c159d",
          },
          Menu: {
            itemSelectedBg: "#5c159d",
            itemSelectedColor: "#fff",
            itemActiveBg: "#5c159d",
            itemActiveColor: "#fff",
            itemHoverBg: "#5c159d",
            itemHoverColor: "#fff",
          },
          Input: {
            activeBorderColor: "#5c159d",
            hoverBorderColor: "#5c159d",
          },
          Upload: {
            colorPrimaryHover: "#5c159d",
            colorPrimary: "#5c159d",
          },
        },
        token: {
          colorPrimary: "#5c159d",
          colorBorder: "#ebe7e8",
          colorPrimaryBorder: "#5c159d",
        },
      }}
    >
      <Toaster closeButton duration={2000} richColors position="top-center" />
      {children}
    </ConfigProvider>
  );
};

export default AntDProvider;
