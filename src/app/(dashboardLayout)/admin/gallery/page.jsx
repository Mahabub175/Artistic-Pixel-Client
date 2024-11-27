"use client";

import CreateGallery from "@/components/AllSection/Dashboard/Admin/Gallery/CreateGallery";
import EditGallery from "@/components/AllSection/Dashboard/Admin/Gallery/EditGallery";
import DeleteModal from "@/components/Reusable/Modal/DeleteModal";
import DetailsModal from "@/components/Reusable/Modal/DetailsModal";
import TableHeader from "@/components/Reusable/Table/TableHeader";
import {
  useDeleteBulkGalleryMutation,
  useDeleteGalleryMutation,
  useGetGalleriesQuery,
  useGetSingleGalleryQuery,
} from "@/redux/services/gallery/galleryApi";
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

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [itemId, setItemId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [search, setSearch] = useState("");
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const { data: galleries, isFetching } = useGetGalleriesQuery({
    page: currentPage,
    limit: pageSize,
    search,
  });

  const { data: galleryData } = useGetSingleGalleryQuery(itemId, {
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

  const [deleteGallery] = useDeleteGalleryMutation();
  const [deleteBulkGallery] = useDeleteBulkGalleryMutation();

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
      title: "Click",
      dataIndex: "click",
      key: "click",
      align: "center",
    },
    {
      title: "Home Slider",
      dataIndex: "home_slider",
      key: "home_slider",
      align: "center",
      render: (home_slider) => (
        <Tag
          color={home_slider ? "green" : "red"}
          className="capitalize font-semibold"
        >
          {home_slider ? "Yes" : "No"}
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

  const tableData = galleries?.results?.map((item) => ({
    key: item._id,
    status: item?.status,
    click: item?.click,
    home_slider: item?.is_home_slider,
    image: item?.image,
    thumbnail: item?.thumbnail,
  }));

  return (
    <div className="px-5">
      <TableHeader
        setOpen={setOpen}
        title={"Gallery"}
        selectedRowKeys={selectedRowKeys}
        setSearch={setSearch}
        deleteBulk={deleteBulkGallery}
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
        total={galleries?.meta?.totalCount}
        current={currentPage}
        onChange={handlePageChange}
        pageSize={pageSize}
        showSizeChanger
        pageSizeOptions={["5", "10", "20"]}
        simple
      />

      <CreateGallery open={open} setOpen={setOpen} />
      <EditGallery itemId={itemId} open={openEdit} setOpen={setOpenEdit} />
      <DetailsModal
        itemId={itemId}
        modalOpen={detailsModalOpen}
        setModalOpen={setDetailsModalOpen}
        title={"Gallery"}
        details={galleryData}
      />
      <DeleteModal
        itemId={itemId}
        modalOpen={deleteModalOpen}
        setModalOpen={setDeleteModalOpen}
        text={"gallery"}
        func={deleteGallery}
      />
    </div>
  );
};

export default Gallery;
