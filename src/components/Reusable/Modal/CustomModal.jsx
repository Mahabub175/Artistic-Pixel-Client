import { Modal } from "antd";

const CustomModal = ({ open, setOpen, children, loading, title, width }) => {
  return (
    <Modal
      centered
      open={open}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
      footer={null}
      loading={loading}
      title={<div className="text-center py-2 text-xl font-bold">{title}</div>}
      width={width || 1000}
      destroyOnClose
    >
      <div className="py-10">{children}</div>
    </Modal>
  );
};

export default CustomModal;
