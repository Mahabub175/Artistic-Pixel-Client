import { Form, Input } from "antd";

const CustomTextArea = ({ name, label, placeholder, required }) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[{ required: required, message: `${label} is required` }]}
    >
      <Input.TextArea
        size="large"
        placeholder={placeholder}
        required={required}
      />
    </Form.Item>
  );
};

export default CustomTextArea;
