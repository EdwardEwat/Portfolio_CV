import React, { useEffect } from "react";
import { fetchDuAn } from "../../redux/DuAnSlice/duAnSlice";
import { useDispatch, useSelector } from "react-redux";
import { Collapse } from "antd";
import LoadingPage from "../loadingPage/loadingPage";

const project = () => {
  const dispatch = useDispatch();
  const { loading, duAn, error } = useSelector((state) => state.duAn);

  useEffect(() => {
    dispatch(fetchDuAn());
  }, [dispatch]);

  const items = duAn.length
    ? duAn.map((project) => ({
        key: project.id,
        label: (
          <div>
            <h2 className="text-lg font-semibold">{project.tenDuAn}</h2>
            <p className="text-sm text-gray-500">
              {project.ngayBatDau} - {project.ngayKetThuc || "Unknown"}
            </p>
          </div>
        ),
        children: (
          <div key={project.id} className="ml-4 mt-2">
            <p className="text-sm text-black dark:text-white">
              {project.soThanhVien} members{" "}
              {project.viTri ? `|| Role- ${project.viTri}` : ""}
            </p>
            <p className="text-md text-black dark:text-white">My tasks:</p>
            <ul className="text-md p-2 text-black dark:text-white">
              {project.moTa.split("\n").map((item, index) => (
                <li key={index}>{item.trim()}</li>
              ))}
            </ul>
            <p className="text-md text-black dark:text-white">
              My technologies:
            </p>
            <div className="p-2">
              <p className="text-md text-black dark:text-white">
                {project.frontend ? `Frontend: ${project.frontend}` : ""}
              </p>
              <p className="text-md text-black dark:text-white">
                {project.backend ? `Backend: ${project.backend}` : ""}
              </p>
              <p className="text-md text-black dark:text-white">
                {project.mobile ? `Mobile: ${project.mobile}` : ""}
              </p>
              <p className="text-md text-black dark:text-white">
                {project.library ? `Library: ${project.library}` : ""}
              </p>
              <p className="text-md text-black dark:text-white">
                {project.database ? `Database: ${project.database}` : ""}
              </p>
            </div>
            <p className="text-md text-black dark:text-white">
              Github:{" "}
              <a href={project.gitHub} className="break-all">
                {project.gitHub}
              </a>
            </p>
          </div>
        ),
      }))
    : [];

  if (loading) {
    return <LoadingPage />;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="dark:bg-black dark:text-white h-auto min-h-screen">
      <h2 className="pt-12 pl-12 text-bold text-2xl font-bold">My Projects</h2>
      <div className="m-12">
        <Collapse
          accordion
          className="h-auto dark:bg-gray-800 dark:text-white light:bg-white"
          items={items}
        />
      </div>
    </div>
  );
};

export default project;
