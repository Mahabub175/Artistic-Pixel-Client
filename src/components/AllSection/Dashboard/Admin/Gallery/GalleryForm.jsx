import { countries } from "@/assets/data/countries";
import FileUploader from "@/components/Reusable/Form/FileUploader";
import ImageUploaderWithUrl from "@/components/Reusable/Form/ImageUploaderWithUrl";
import { Checkbox, Form, Button, Input, Select } from "antd";
import { GoPlusCircle, GoX } from "react-icons/go";

const GalleryForm = ({ attachment }) => {
  const countryOptions = countries?.map((item) => ({
    value: `${item?.name}|${item?.flag}`,
    label: item?.name,
  }));

  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <>
      <FileUploader
        defaultValue={attachment?.image}
        required={true}
        label={"Image"}
        name={"image"}
      />

      <ImageUploaderWithUrl />

      <div>
        <Form.List name={"artists"}>
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <div key={key}>
                  <div className="three-grid mt-6">
                    <Form.Item
                      {...restField}
                      name={[name, "photo"]}
                      label={"Photo"}
                    >
                      <Input
                        placeholder={"Enter Photo"}
                        type="text"
                        size="large"
                        allowClear
                      />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "name"]}
                      label={"Name"}
                      rules={[{ required: true, message: `Name is required` }]}
                    >
                      <Input
                        placeholder={"Enter Name"}
                        type="text"
                        size="large"
                        allowClear
                      />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "profession"]}
                      label={"Profession"}
                    >
                      <Input
                        placeholder={"Enter Profession"}
                        type="text"
                        size="large"
                        allowClear
                      />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "facebook"]}
                      label={"Facebook"}
                    >
                      <Input
                        placeholder={"Enter Facebook"}
                        type="text"
                        size="large"
                        allowClear
                      />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "instagram"]}
                      label={"Instagram"}
                    >
                      <Input
                        placeholder={"Enter Instagram"}
                        type="text"
                        size="large"
                        allowClear
                      />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "website"]}
                      label={"Website"}
                    >
                      <Input
                        placeholder={"Enter Website"}
                        type="text"
                        size="large"
                        allowClear
                      />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "flag"]}
                      label={"Country"}
                    >
                      <Select
                        showSearch
                        optionFilterProp="children"
                        filterOption={filterOption}
                        placeholder={`Please Select Country`}
                        allowClear
                        size="large"
                        options={countryOptions}
                      />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "is_default"]}
                      label={"Default"}
                      valuePropName="checked"
                    >
                      <Checkbox className="font-semibold">Default</Checkbox>
                    </Form.Item>
                  </div>
                  <div className="flex justify-center items-center">
                    <Button
                      onClick={() => remove(name)}
                      className="text-red-500 bg-light pt-1.5 pb-2 rounded"
                    >
                      <GoX className="text-xl font-bold" />
                    </Button>
                  </div>
                </div>
              ))}

              <Form.Item>
                <div className="flex justify-center mt-10">
                  <Button
                    type="button"
                    className="flex items-center bg-light px-10 py-2 font-bold rounded"
                    onClick={() => add()}
                  >
                    Add Artist
                    <GoPlusCircle className="ml-2" />
                  </Button>
                </div>
              </Form.Item>
            </>
          )}
        </Form.List>
      </div>

      <Form.Item name="is_home_slider" valuePropName="checked">
        <Checkbox className="font-semibold">Add This To Home Slider</Checkbox>
      </Form.Item>
    </>
  );
};

export default GalleryForm;
