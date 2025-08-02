import { configureStore } from "@reduxjs/toolkit";
import thongTinReducer from "./ThongTinSlice/thongTinSlice";
import diemSoReducer from "./DiemSoSlice/diemSoSlice";
import kinhNghiemReducer from "./KinhNghiemSlice/kinhNghiemSlice";
import duAnReducer from "./DuAnSlice/duAnSlice";

export const store = configureStore({
  reducer: {
    thongTin: thongTinReducer,
    diemSo: diemSoReducer,
    kinhNghiem: kinhNghiemReducer,
    duAn: duAnReducer,
  },
});
