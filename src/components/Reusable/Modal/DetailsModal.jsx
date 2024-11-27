"use client";

import { Modal, Spin, Descriptions, Tag, Image } from "antd";
import moment from "moment";
import { SubmitButton } from "../Button/CustomButton";

const formatLabel = (label) => {
  const withSpaces = label.replace(/_/g, " ");
  const spacedLabel = withSpaces.replace(/([a-z])([A-Z])/g, "$1 $2");
  const capitalizedLabel = spacedLabel
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return <strong className="capitalize">{capitalizedLabel}</strong>;
};

const DetailsModal = ({ modalOpen, setModalOpen, title, details }) => {
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const excludedKeys = details ? ["__v", "updatedAt", "_id"] : [];

  const formatDate = (value) => moment(value).format("Do MMM, YYYY");

  const renderValue = (key, value) => {
    if (key.toLowerCase().includes("date")) {
      return moment(value).format("Do MMM, YYYY");
    }

    if (key === "createdAt") {
      return moment(value).format("Do MMM, YYYY");
    }

    if (Array.isArray(value)) {
      return (
        <div
          key={key}
          label={formatLabel(key)}
          className="grid grid-cols-1 md:grid-cols-2"
        >
          {value.map((item, index) => (
            <div key={index} className="my-4">
              {Object.entries(item)
                .filter(([subKey]) => !excludedKeys.includes(subKey))
                .map(([subKey, subValue]) => (
                  <div key={subKey} className="flex items-center gap-2 mt-2">
                    <strong>{formatLabel(subKey)}:</strong>{" "}
                    {subKey === "is_default" ? (
                      <Tag
                        color={subValue ? "green" : "red"}
                        className="capitalize"
                      >
                        {subValue ? "Default" : "Not Default"}
                      </Tag>
                    ) : typeof subValue === "string" &&
                      subValue.startsWith("http") ? (
                      <Image
                        src={subValue}
                        alt={subKey}
                        height={50}
                        width={50}
                        className="rounded-xl"
                      />
                    ) : (
                      renderValue(subKey, subValue)
                    )}
                  </div>
                ))}
            </div>
          ))}
        </div>
      );
    }

    if (typeof value === "object" && value !== null) {
      return (
        <div className="my-4 border-t border-primary/20 first:border-0">
          {Object.entries(value)
            .filter(([subKey]) => !excludedKeys.includes(subKey))
            .map(([subKey, subValue]) => (
              <div key={subKey} className="flex items-center gap-2 mt-2">
                <strong>{formatLabel(subKey)}:</strong>{" "}
                {typeof subValue === "string" && subValue.startsWith("http") ? (
                  <Image src={subValue} alt="image" height={50} width={50} />
                ) : (
                  renderValue(subKey, subValue)
                )}
              </div>
            ))}
        </div>
      );
    }

    if (typeof value === "string" && value.startsWith("http")) {
      return (
        <>
          <a href={value} target="_blank" rel="noopener noreferrer">
            {value}
          </a>
          <Image src={value} alt="image" height={50} width={50} />
        </>
      );
    }

    return value;
  };

  const filteredDetails = details
    ? Object.entries(details).reduce((acc, [key, value]) => {
        if (
          !excludedKeys.includes(key) &&
          (!key.toLowerCase().includes("id") ||
            key.toLowerCase().includes("nid")) &&
          !(typeof value === "string" && value.startsWith("http"))
        ) {
          acc[key] = value;
        }
        if (key === "is_home_slider") {
          acc[key] = value;
        }
        if (key === "redirect_link") {
          acc[key] = value;
        }
        return acc;
      }, {})
    : {};

  const urlKeys = details
    ? Object.entries(details).filter(
        ([key, value]) =>
          !excludedKeys.includes(key) &&
          (!key.toLowerCase().includes("id") ||
            key.toLowerCase().includes("nid")) &&
          typeof value === "string" &&
          value.startsWith("http") &&
          !(key === "redirect_link")
      )
    : [];

  return (
    <Modal
      centered
      open={modalOpen}
      onCancel={handleCloseModal}
      footer={null}
      width={"50%"}
    >
      {details ? (
        <div className="p-5">
          <h2 className="text-center text-xl font-bold pb-2 w-1/3 mx-auto border-b-2 border-gray-500 mb-10">
            {title} Details
          </h2>

          <Descriptions bordered column={1}>
            {Object.entries(filteredDetails).map(([key, value]) => (
              <Descriptions.Item key={key} label={formatLabel(key)}>
                {key === "status" ? (
                  <Tag
                    color={value === "Active" ? "green" : "red"}
                    className="capitalize"
                  >
                    {value}
                  </Tag>
                ) : key === "is_special" ? (
                  <Tag
                    color={value === "true" ? "blue" : "red"}
                    className="capitalize"
                  >
                    {value === "true" ? "Special" : "Not Special"}
                  </Tag>
                ) : key === "is_home_slider" ? (
                  <Tag color={value ? "green" : "red"} className="capitalize">
                    {value ? "Yes" : "No"}
                  </Tag>
                ) : key === "redirect_link" ? (
                  <a href={value} target="_blank" rel="noopener noreferrer">
                    {value}
                  </a>
                ) : (
                  renderValue(key, value)
                )}
              </Descriptions.Item>
            ))}

            {urlKeys.length > 0 &&
              urlKeys.map(([key, value]) => (
                <Descriptions.Item key={key} label={formatLabel(key)}>
                  <Image
                    src={value}
                    alt="image"
                    height={80}
                    width={80}
                    className="rounded-xl"
                  />
                </Descriptions.Item>
              ))}
          </Descriptions>

          <div className="flex justify-end mt-10">
            <SubmitButton func={handleCloseModal} text={"Ok"} />
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-[60vh]">
          <Spin />
        </div>
      )}
    </Modal>
  );
};

export default DetailsModal;
