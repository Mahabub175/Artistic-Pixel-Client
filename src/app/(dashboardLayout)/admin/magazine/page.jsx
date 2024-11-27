"use client";

import CreateMagazine from "@/components/AllSection/Dashboard/Admin/Magazine/CreateMagazine";
import EditMagazine from "@/components/AllSection/Dashboard/Admin/Magazine/EditMagazine";
import DeleteModal from "@/components/Reusable/Modal/DeleteModal";
import DetailsModal from "@/components/Reusable/Modal/DetailsModal";
import TableHeader from "@/components/Reusable/Table/TableHeader";
import {
  useDeleteBulkMagazineMutation,
  useDeleteMagazineMutation,
  useGetMagazinesQuery,
  useGetSingleMagazineQuery,
} from "@/redux/services/magazine/magazineApi";
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
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";

const Magazine = () => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [itemId, setItemId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [search, setSearch] = useState("");
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const { data: magazines, isFetching } = useGetMagazinesQuery({
    page: currentPage,
    limit: pageSize,
    search,
  });

  const { data: magazineData } = useGetSingleMagazineQuery(itemId, {
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

  const [deleteMagazine] = useDeleteMagazineMutation();
  const [deleteBulkMagazine] = useDeleteBulkMagazineMutation();

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
          alt={"magazine image"}
          className="w-10 h-10 rounded-xl"
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      align: "center",
    },
    {
      title: "Special",
      dataIndex: "special",
      key: "special",
      align: "center",
      render: (special) => (
        <Tag
          color={special === "true" ? "green" : "red"}
          className="capitalize font-semibold"
        >
          {special === "true" ? "Yes" : "No"}
        </Tag>
      ),
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

  const tableData = magazines?.results?.map((item) => ({
    key: item._id,
    name: item?.name,
    special: item?.is_special,
    status: item?.status,
    image: item?.image,
  }));

  return (
    <div className="px-5">
      <TableHeader
        setOpen={setOpen}
        title={"Magazine"}
        selectedRowKeys={selectedRowKeys}
        setSearch={setSearch}
        deleteBulk={deleteBulkMagazine}
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
        total={magazines?.meta?.totalCount}
        current={currentPage}
        onChange={handlePageChange}
        pageSize={pageSize}
        showSizeChanger
        pageSizeOptions={["5", "10", "20"]}
        simple
      />

      <CreateMagazine open={open} setOpen={setOpen} />
      <EditMagazine itemId={itemId} open={openEdit} setOpen={setOpenEdit} />
      <DetailsModal
        itemId={itemId}
        modalOpen={detailsModalOpen}
        setModalOpen={setDetailsModalOpen}
        title={"Magazine"}
        details={magazineData}
      />
      <DeleteModal
        itemId={itemId}
        modalOpen={deleteModalOpen}
        setModalOpen={setDeleteModalOpen}
        text={"magazine"}
        func={deleteMagazine}
      />
    </div>
  );
};

export default Magazine;
