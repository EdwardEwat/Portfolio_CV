import React, { useEffect } from "react";
import hinhDaiDien from "../../assets/2873.jpg";
import { getThongTin } from "../../redux/ThongTinSlice/thongTinSlice";
import { useDispatch, useSelector } from "react-redux";
import MailDialog from "../../components/dialog/mailDialog/mailDialog.jsx";
import LoadingPage from "../loadingPage/loadingPage.jsx";

const mainPage = () => {
  const dispatch = useDispatch();
  const { loading, thongTin, error } = useSelector((state) => state.thongTin);

  const fetchData = async () => {
    try {
      await dispatch(getThongTin());
    } catch (error) {
      console.error("Failed to fetch data thong tin:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="xl:grid dark:bg-black dark:text-white h-auto min-h-screen ">
      <div className="m-2 xl:place-content-center xl:flex xl:m-16">
        <img
          src={hinhDaiDien}
          alt="hinh dai dien"
          className="rounded-[50%] w-xs max-h-[400px] xl:mr-8"
        />
        <div className="xl:w-1/2">
          <p className="font-[Roboto] text-xl font-normal xl:w-3xl">
            Hi, guys. I'm is
            <span className="text-yellow-400">
              {" "}
              {thongTin.ten} {thongTin.ho}
            </span>
            . I just graduated from Ho Chi Minh City University of Industry and
            Trade, majoring in software engineering last April with a bachelor's
            degree and a GPA of 3.24. I completed my engineering program last
            June and am waiting for
            <span className="text-yellow-400"> my engineering degree</span> with
            GPA 3.36 at the end of November this year. As a Frontend Developer
            Intern, I aim to be{" "}
            <span className="text-yellow-400">a Fullstack Developer.</span> I am
            currently looking for {""}
            <span className="text-yellow-400">
              an Intern/Fresher Frontend/Fullstack Developer job in Ho Chi Minh
              City.
            </span>{" "}
            The programming languages that I have learned and self-learned are
            divided into the following:{" "}
            {thongTin.moTa &&
              thongTin.moTa.split(";").map((item, index) => (
                <p key={index} className="text-yellow-400">
                  {item.trim()}
                </p>
              ))}
            Currently, here is my contact information if you feel I am suitable
            for some jobs that you think I am suitable for.{" "}
            <p className="text-yellow-400">
              {" "}
              Email: {thongTin.email} and my phone: {thongTin.soDienThoai}.
            </p>{" "}
            However, I usually check my email more than my phone because my
            phone number has been leaked to many scammers, so I usually don't
            answer strange numbers. Thank you for reading and giving feedback on
            my website.
          </p>
          {/* <MailDialog /> */}
        </div>
      </div>
    </div>
  );
};

export default mainPage;
