import React from "react";
import { Workspace } from "@niklaspelli/fwk4-23-components";
import { TaskBoard } from "@niklaspelli/fwk4-23-components";
import MembersListAvatar from "../../avatar/MembersListAvatar"; // Justera sökvägen om nödvändigt

const WorkspacePage = () => {
  return (
    <>
      <Workspace /> 
      <MembersListAvatar />
      <TaskBoard />
    </>
  );
};

export default WorkspacePage;
