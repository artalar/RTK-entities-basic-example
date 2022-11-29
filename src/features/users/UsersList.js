import React from "react";
import { useAtom, useAction } from "@reatom/npm-react";
import { fetchUsers, removeUser } from "./usersSlice";
import styles from "./UsersList.module.css";

export function UsersList() {
  const [users] = useAtom(fetchUsers.dataAtom);
  const [count] = useAtom((ctx) => ctx.spy(fetchUsers.dataAtom).length);
  const [isLoading] = useAtom((ctx) => ctx.spy(fetchUsers.pendingAtom) > 0);
  const handleFetchUsers = useAction(fetchUsers);
  const handleRemoveUser = useAction(removeUser);

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Fetch Users"
          onClick={handleFetchUsers}
          disabled={isLoading}
        >
          Fetch Users
        </button>
      </div>
      <div className={styles.row}>
        There are <span className={styles.value}>{count}</span> users.{" "}
        {count === 0 && `Why don't you fetch some more?`}
      </div>
      {users.map((user) => (
        <div className={styles.row} key={user.id}>
          <div
            style={{ width: "80%" }}
          >{`${user.first_name} ${user.last_name}`}</div>
          <div style={{ width: "20%" }}>
            <button onClick={() => handleRemoveUser(user.id)}>remove</button>
          </div>
        </div>
      ))}
    </div>
  );
}
