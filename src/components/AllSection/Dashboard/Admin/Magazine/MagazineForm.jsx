import CustomInput from "@/components/Reusable/Form/CustomInput";
import FileUploader from "@/components/Reusable/Form/FileUploader";
import { Form, Switch } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

const MagazineForm = ({ attachment }) => {
  return (
    <>
      <FileUploader
        defaultValue={attachment}
        required={true}
        label={"Image"}
        name={"image"}
      />
      <div className="two-grid">
        <CustomInput
          label={"Name"}
          name={"name"}
          type={"text"}
          required={true}
        />
        <CustomInput
          label={"Redirect Link"}
          name={"redirect_link"}
          type={"text"}
          required={true}
        />
      </div>

      <Form.Item
        name="is_special"
        valuePropName="checked"
        label="Add This To Special Edition"
      >
        <Switch
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
        />
      </Form.Item>
    </>
  );
};

export default MagazineForm;
