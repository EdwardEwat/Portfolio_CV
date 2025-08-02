import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingPage from "../loadingPage/loadingPage";
import { getDiemSo } from "../../redux/diemSoSlice/diemSoSlice";
import { Collapse, Table } from "antd";
import "../education/education.css";

const education = () => {
  const dispacth = useDispatch();
  const { loading, diemSo, error } = useSelector((state) => state.diemSo);
  const [stateOpenKeys, setStateOpenKeys] = useState([]);

  const fetchData = async () => {
    try {
      await dispacth(getDiemSo());
    } catch (error) {
      console.error("Failed to fetch data diem so:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    {
      title: "Subject",
      dataIndex: "tenMonHoc",
      key: "tenMonHoc",
      sorter: (a, b) => a.tenMonHoc.localeCompare(b.tenMonHoc),
    },
    {
      title: "Number of credits",
      dataIndex: "soTinChi",
      key: "soTinChi",
      sorter: (a, b) => a.soTinChi - b.soTinChi,
    },
    {
      title: "Point",
      dataIndex: "diemSo",
      key: "diemSo",
      sorter: (a, b) => a.diemSo - b.diemSo,
    },
    {
      title: "Letter grades",
      dataIndex: "diemChu",
      key: "diemChu",
      sorter: (a, b) => a.diemChu.localeCompare(b.diemChu),
    },
  ];

  const items = [...new Set(diemSo.map((item) => item.hocKy))].map((hocKy) => ({
    key: hocKy,
    label: "Semester " + hocKy,
    children: (
      <div className="dark:bg-gray-900 dark:text-white rounded-lg overflow-x-auto">
        <Table
          columns={columns}
          dataSource={diemSo.filter((item1) => item1.hocKy === hocKy)}
          rowKey={(record, idx) => `${hocKy}-${record.tenMonHoc}-${idx}`}
          pagination={false}
        />
      </div>
    ),
  }));

  if (loading) {
    return <LoadingPage />;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="grid dark:bg-black dark:text-white h-auto min-h-screen w-auto min-w-screen">
      <div className="place-content-start flex xl:m-12 pt-12 pl-12 text-bold text-2xl font-bold">
        <div className="xl:w-4/5">
          <h1 className="text-2xl font-bold mb-4">Bachelor's Point</h1>
          <p className="m-4">GPA: 3.24</p>
          <Collapse
            accordion
            className="h-auto dark:bg-gray-800 dark:text-white light:bg-white"
            items={items.filter((item) => item.key < 8)}
          />
          <h1 className="text-2xl font-bold mt-8 mb-4">Enginerr's Point</h1>
          <p className="m-4">GPA: 3.36</p>
          <Collapse
            accordion
            className="h-auto dark:bg-gray-800 dark:text-white light:bg-white"
            items={items.filter((item) => item.key === 8)}
          />
        </div>
      </div>
    </div>
  );
};

export default education;
