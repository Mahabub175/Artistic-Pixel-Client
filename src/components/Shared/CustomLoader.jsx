import { Spin } from "antd";
import { ImSpinner } from "react-icons/im";

const contentStyle = {
  padding: 50,
  background: "rgba(0, 0, 0, 0.05)",
  borderRadius: 50,
};

const CustomLoader = () => {
  const content = <div style={contentStyle} />;
  return (
    <div className="h-screen flex justify-center items-center w-screen">
      <Spin
        indicator={<ImSpinner className="animate-spin" spin />}
        tip={"Loading..."}
        size="default"
      >
        {content}
      </Spin>
    </div>
  );
};

export default CustomLoader;
