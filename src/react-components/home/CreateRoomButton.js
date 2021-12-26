import React from "react";
import { FormattedMessage } from "react-intl";
//import { createAndRedirectToNewHub } from "../../utils/phoenix-utils";
import { createAndRedirectToNewHub } from "../../utils/nophoenix-utils";
import { Button } from "../input/Button";
import { useCssBreakpoints } from "react-use-css-breakpoints";
// import { useHistory } from "react-router-dom"; // tk

export function CreateRoomButton() {
  const breakpoint = useCssBreakpoints();
  // let history = useHistory();

  return (
    <Button
      lg={breakpoint === "sm" || breakpoint === "md"}
      xl={breakpoint !== "sm" && breakpoint !== "md"}
      preset="primary"
      onClick={e => {
        e.preventDefault();
        createAndRedirectToNewHub(null, null, false);
        // e.push('/hub.html?hub_id=123');
        //        history.push("/hub.html?hub_id=123")
      }}
    >
      <FormattedMessage id="create-room-button" defaultMessage="Create Room" />
    </Button>
  );
}
