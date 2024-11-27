import { Form, Input } from "antd";

const CustomInput = ({ type, name, label, max, value, required, prefix }) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[{ required: required, message: `${label} is required` }]}
    >
      {(type === "password" && (
        <Input.Password
          placeholder={`Please Enter ${label}`}
          size="large"
          allowClear
          max={max}
        />
      )) ||
        (type === "textarea" && (
          <Input.TextArea
            placeholder={`Please Enter ${label}`}
            size="large"
            allowClear
            max={max}
          />
        )) || (
          <Input
            type={type}
            placeholder={`Please Enter ${label}`}
            size="large"
            allowClear
            value={value}
            max={max}
            prefix={prefix ? prefix : null}
          />
        )}
    </Form.Item>
  );
};

export default CustomInput;
