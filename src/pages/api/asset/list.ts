import Asset from "../../../collections/asset/Asset";
import {
  apiHandlerWrapper,
  InferApiResponse,
  queryFnWrapper,
} from "@italodeandra/next/api/apiHandlerWrapper";
import { QueryClient, useQuery } from "@tanstack/react-query";
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

export type AssetListApiResponse = InferApiResponse<typeof handler>;

const queryKey = "/api/asset/list";

export const useAssetList = () =>
  useQuery([queryKey], queryFnWrapper<AssetListApiResponse>(queryKey));

export const invalidate_assetList = async (queryClient: QueryClient) =>
  queryClient.invalidateQueries([queryKey]);
