// import UserSagas from './user/sagas';
// import SignUpSagas from './signup/sagas';
import { all } from "redux-saga/effects";
import LoginSagas from "./login/sagas";
import RegisterSagas from "./register/sagas";
import ProductStatusSagas from "./productStatus/sagas";
import CustomerSagas from "./customer/sagas";
// import ProductOrderHistorySaga from "./productOrderHistory/sagas";

export default function* rootSaga() {
  yield all([
    LoginSagas(),
    RegisterSagas(),
    ProductStatusSagas(),
    CustomerSagas(),
    // MemberSagas(),
  ]);
}
