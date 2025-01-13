import { Button } from "antd";

export const SubmitButton = ({ loading, text, func }) => {
  return (
    <Button
      htmlType="submit"
      size="large"
      type="primary"
      loading={loading}
      onClick={func}
      className="w-full"
    >
      {text}
    </Button>
  );
};

export const DeleteButton = ({ loading, text, func }) => {
  return (
    <Button
      htmlType="submit"
      size="large"
      loading={loading}
      onClick={func}
      style={{
        fontWeight: "bold",
        width: "100%",
        backgroundColor: "#1677ff",
        color: "white",
        borderRadius: "10px",
      }}
    >
      {text}
    </Button>
  );
};
