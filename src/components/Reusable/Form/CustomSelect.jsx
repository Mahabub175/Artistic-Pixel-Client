import { Form, Select } from "antd";

const CustomSelect = ({
  label,
  name,
  mode,
  required,
  options,
  loading,
  disabled,
}) => {
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <Form.Item
      label={label}
      name={name}
      rules={[{ required: required, message: `${label} is required` }]}
    >
      <Select
        showSearch
        optionFilterProp="children"
        filterOption={filterOption}
        mode={mode || undefined}
        loading={loading}
        disabled={disabled}
        placeholder={`Please Select ${label}`}
        allowClear
        size="large"
        options={options}
      />
    </Form.Item>
  );
};

export default CustomSelect;
