import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingPage from "../loadingPage/loadingPage";
import {
  fetchCompanies,
  fetchJobProjects,
  fetchJobs,
} from "../../redux/KinhNghiemSlice/kinhNghiemSlice";
import { Collapse, Table } from "antd";

const experience = () => {
  const dispatch = useDispatch();
  const { loading, companies, jobs, jobProjects, error } = useSelector(
    (state) => state.kinhNghiem
  );

  useEffect(() => {
    dispatch(fetchCompanies());
    dispatch(fetchJobs());
    dispatch(fetchJobProjects());
  }, [dispatch]);

  const items = companies.length
    ? companies.map((company) => ({
        key: company.id,
        label: (
          <div>
            <h2 className="text-lg font-semibold">{company.tenCongTy}</h2>
            <p className="text-sm text-gray-500">{company.diaChi}</p>
            <p className="text-sm text-gray-500">
              {company.ngayBatDau} - {company.ngayKetThuc || "Unknown"}
            </p>
          </div>
        ),
        children: (
          <div className="dark:bg-black dark:text-white rounded-lg">
            {jobs
              .filter((job) => job.congTyId === company.id)
              .map((job) => (
                <div
                  key={job.id}
                  className="mb-4 border-b border-gray-300 pb-2"
                >
                  <h3 className="text-base font-semibold">{job.tenCongViec}</h3>
                  <p className="text-sm text-gray-500">
                    {job.ngayBatDau} - {job.ngayKetThuc || "Unknown"}
                  </p>
                  {jobProjects
                    .filter((project) => project.congViecId === job.id)
                    .map((project) => (
                      <div key={project.id} className="ml-4 mt-2">
                        <h4 className="text-md font-semibold">
                          {project.tenDuAn}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {project.ngayBatDau} -{" "}
                          {project.ngayKetThuc || "Unknown"}
                        </p>
                        <p className="text-sm text-black dark:text-white">
                          {project.soThanhVien} members{" "}
                          {project.viTri ? `|| Role- ${project.viTri}` : ""}
                        </p>
                        <p className="text-md text-black dark:text-white">
                          My tasks:
                        </p>
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
                            {project.frontend
                              ? `Frontend: ${project.frontend}`
                              : ""}
                          </p>
                          <p className="text-md text-black dark:text-white">
                            {project.backend
                              ? `Backend: ${project.backend}`
                              : ""}
                          </p>
                          <p className="text-md text-black dark:text-white">
                            {project.mobile ? `Mobile: ${project.mobile}` : ""}
                          </p>
                          <p className="text-md text-black dark:text-white">
                            {project.library
                              ? `Library: ${project.library}`
                              : ""}
                          </p>
                          <p className="text-md text-black dark:text-white">
                            {project.database
                              ? `Database: ${project.database}`
                              : ""}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
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
      <h2 className="pt-12 pl-12 text-bold text-2xl font-bold">
        My experience
      </h2>
      <div className="m-12">
        <Collapse
          accordion
          className="h-auto dark:bg-gray-800 dark:text-white light:bg-white mb-2"
          items={items}
        />
      </div>
    </div>
  );
};

export default experience;
