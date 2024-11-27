"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import {
  Dropdown,
  Image,
  Menu,
  Pagination,
  Space,
  Table,
  Tag,
  Tooltip,
} from "antd";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import {
  useDeleteBulkInterviewMutation,
  useDeleteInterviewMutation,
  useGetInterviewsQuery,
  useGetSingleInterviewQuery,
} from "@/redux/services/interview/interviewApi";

const CreateInterview = dynamic(
  () =>
    import("@/components/AllSection/Dashboard/Admin/Interview/CreateInterview"),
  { ssr: false }
);
const EditInterview = dynamic(
  () =>
    import("@/components/AllSection/Dashboard/Admin/Interview/EditInterview"),
  { ssr: false }
);
const DeleteModal = dynamic(
  () => import("@/components/Reusable/Modal/DeleteModal"),
  { ssr: false }
);
const DetailsModal = dynamic(
  () => import("@/components/Reusable/Modal/DetailsModal"),
  { ssr: false }
);
const TableHeader = dynamic(
  () => import("@/components/Reusable/Table/TableHeader"),
  { ssr: false }
);

const Interview = () => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [itemId, setItemId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [search, setSearch] = useState("");
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const { data: interviews, isFetching } = useGetInterviewsQuery({
    page: currentPage,
    limit: pageSize,
    search,
  });

  const { data: interviewData } = useGetSingleInterviewQuery(itemId, {
    skip: !itemId,
  });

  const handlePageChange = (page, size) => {
    setCurrentPage(page);
    setPageSize(size);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const [deleteInterview] = useDeleteInterviewMutation();
  const [deleteBulkInterview] = useDeleteBulkInterviewMutation();

  const handleMenuClick = (key, id) => {
    setItemId(id);
    switch (key) {
      case "edit":
        setOpenEdit(true);
        break;
      case "delete":
        setDeleteModalOpen(true);
        break;
      default:
        break;
    }
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      width: 100,
      render: (image) => (
        <Image
          height={50}
          width={50}
          src={image}
          alt={image}
          className="w-10 h-10 rounded-xl"
        />
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      align: "center",
    },
    {
      title: "Slug",
      dataIndex: "slug",
      key: "slug",
      align: "center",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      align: "center",
      render: (status) => (
        <Tag
          color={status === "Active" ? "green" : "red"}
          className="capitalize font-semibold"
        >
          {status}
        </Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (item) => {
        const menu = (
          <Menu
            onClick={({ key }) => handleMenuClick(key, item.key)}
            className="w-full flex flex-col gap-2"
          >
            <Menu.Item key="edit">
              <Tooltip placement="top" title={"Edit"}>
                <button className="bg-green-500 p-2 rounded-xl text-white hover:scale-110 duration-300">
                  <FaEdit />
                </button>
              </Tooltip>
            </Menu.Item>
            <Menu.Item key="delete">
              <Tooltip placement="top" title={"Delete"}>
                <button className="bg-red-500 p-2 rounded-xl text-white hover:scale-110 duration-300">
                  <MdDelete />
                </button>
              </Tooltip>
            </Menu.Item>
          </Menu>
        );

        return (
          <Space size="middle">
            <Tooltip placement="top" title={"Details"}>
              <button
                onClick={() => {
                  setItemId(item.key);
                  setDetailsModalOpen(true);
                }}
                className="bg-blue-600 p-2 rounded-xl text-white hover:scale-110 duration-300"
              >
                <TbListDetails />
              </button>
            </Tooltip>
            <Dropdown overlay={menu} trigger={["click"]} placement="bottom">
              <Tooltip placement="top" title={"More"}>
                <button className="bg-blue-500 p-2 rounded-xl text-white hover:scale-110 duration-300">
                  <BsThreeDotsVertical />
                </button>
              </Tooltip>
            </Dropdown>
          </Space>
        );
      },
    },
  ];

  const tableData = interviews?.results?.map((item) => ({
    key: item._id,
    title: item?.title,
    status: item?.status,
    slug: item?.slug,
    image: item?.thumbnail_image,
  }));

  return (
    <div className="px-5">
      <TableHeader
        setOpen={setOpen}
        title={"Interview"}
        selectedRowKeys={selectedRowKeys}
        setSearch={setSearch}
        deleteBulk={deleteBulkInterview}
        setSelectedRowKeys={setSelectedRowKeys}
      />

      <Table
        columns={columns}
        rowSelection={rowSelection}
        pagination={false}
        dataSource={tableData}
        className="mt-10"
        loading={isFetching}
        scroll={{ x: 500 }}
      />

      <Pagination
        className="flex justify-end items-center !mt-10"
        total={interviews?.meta?.totalCount}
        current={currentPage}
        onChange={handlePageChange}
        pageSize={pageSize}
        showSizeChanger
        pageSizeOptions={["5", "10", "20"]}
        simple
      />

      <CreateInterview open={open} setOpen={setOpen} />
      <EditInterview itemId={itemId} open={openEdit} setOpen={setOpenEdit} />
      <DetailsModal
        itemId={itemId}
        modalOpen={detailsModalOpen}
        setModalOpen={setDetailsModalOpen}
        title={"Interview"}
        details={interviewData}
      />
      <DeleteModal
        itemId={itemId}
        modalOpen={deleteModalOpen}
        setModalOpen={setDeleteModalOpen}
        text={"interview"}
        func={deleteInterview}
      />
    </div>
  );
};

export default Interview;
