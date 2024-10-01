import React from "react";
import { Avatar } from "@niklaspelli/fwk4-23-components";
import { newMockUsers } from "../../data/MockMembers"; // Se till att sökvägen är korrekt
import styles from "./MembersListAvatar.module.css";

const MembersListAvatar = () => {
  return (
    <>
    <h4>Members in this project:</h4>
      <ul className={styles.avatarlist}>
        {newMockUsers.map((user, id) => (
          <li key={id}>
            <Avatar src={user.profileImage} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default MembersListAvatar;
