import { action, reatomAsync, withDataAtom } from "@reatom/framework";
import userAPI from "./userAPI";

export const fetchUsers = reatomAsync(async (ctx) => {
  const response = await userAPI.fetchAll();
  return response.data;
}, "fetchUsers").pipe(withDataAtom([]));

export const removeUser = action((ctx, id) => {
  fetchUsers.dataAtom(ctx, (users) => users.filter((user) => user.id !== id));
}, "removeUser");
