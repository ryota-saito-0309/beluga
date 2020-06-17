import React from "react";
import { withRouter } from "react-router-dom";

import PageWrapper from "../ui/PageWrapper";
import Paper from "@material-ui/core/Paper";

function Success(props) {
  return (
    <Paper style={{ padding: "40px", minHeight: "500px" }}>
      <h2 style={{ marginTop: 0, fontWeight: 600 }}>
        Thank you for your purchase!
      </h2>
      <p>
        A confirmation email has been sent to <b>{props.email}</b>.
      </p>
      <p>Order ID: {props.id.split("_")[1]}</p>
    </Paper>
  );
}

function Failure() {
  return (
    <Paper style={{ padding: "40px", minHeight: "500px" }}>
      <h2 style={{ marginTop: 0, fontWeight: 600 }}>
        支払い処理が失敗しました。
      </h2>
    </Paper>
  );
}
const Confirm = (props) => (
  <PageWrapper>
    {console.log(props.location.state.order.email != null)}
    {props.location.state.order.email != null && (
      <Success
        email={props.location.state.order.email}
        id={props.location.state.order.id}
      />
    )}
    {props.location.state.order.email == null && <Failure />}
  </PageWrapper>
);
export default withRouter(Confirm);
