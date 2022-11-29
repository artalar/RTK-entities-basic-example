import { createCtx, connectLogger } from "@reatom/framework";

export const ctx = createCtx();

connectLogger(ctx);
