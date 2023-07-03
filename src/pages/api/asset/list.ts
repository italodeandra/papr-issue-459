import Asset from "../../../collections/asset/Asset";
import { apiHandlerWrapper } from "@italodeandra/next/api/apiHandlerWrapper";
import connectToDb from "../../../db/db";

async function handler() {
  await connectToDb();

  return await Asset.find(
    {},
    {
      projection: {
        offers: 1,
      },
      sort: {
        updatedAt: -1,
      },
    }
  );
}

export default apiHandlerWrapper(handler);
