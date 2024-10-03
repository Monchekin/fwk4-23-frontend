import React from "react";
import { Avatar } from "@niklaspelli/fwk4-23-components";
import { newMockUsers } from "../../data/MockMembers"; // Se till att sökvägen är korrekt
import styles from "./MembersListAvatar.module.css";

const MembersListAvatar = () => {
  return (
    <>
    <div className={styles.membersList}>
    <h4>Members in this project:</h4>
      <ul className={styles.avatarlist}>
        {newMockUsers.map((user, id) => (
          <li key={id}>
            <Avatar className={styles.avatar} src={user.profileImage} />
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default MembersListAvatar;
