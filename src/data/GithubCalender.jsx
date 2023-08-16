import React, { useEffect } from "react";
import SeparatorLine from "../Components/SepratorLine";
import GitHubCalendar from "github-calendar";
import { Spinner } from "@chakra-ui/react";
import "../Style/Github.css"
const GithubCalender = (container, clickhandler) => {
  GitHubCalendar(".calendar", "clickhandler");

  //  or enable responsive functionality:
  GitHubCalendar(".calendar", "clickhandler", { responsive:true});

  // Use a proxy
  useEffect(()=>{
    GitHubCalendar(".calendar", "clickhandler", {
      proxy(clickhandler) {
        return fetch(`https://your-proxy.com/github?user=${clickhandler}`);
      },
    }).then((r) => r);
  },[])


  return (
    <>
      <SeparatorLine />
      <label className="section_title">Github contribution</label>
      <div
        style={{ marginTop: "30px", marginBottom: "30px" }}
        className="calendar"
      >
        <Spinner />
        {/* Loading.... */}
      </div>
    </>
  );
};

export default GithubCalender;
