import React from "react";
import { Avatar } from "@niklaspelli/fwk4-23-components";
import { mockMembers } from "../../data/MockMembers";

const MembersListAvatar = () => {
  return (
    <>
      <ul>
        {mockMembers.map((member, id) => (
          <li key={id}>
            <Avatar src={member.profileImage} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default MembersListAvatar;
