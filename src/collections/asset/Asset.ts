import db from "@italodeandra/next/db";
import { onlyServer } from "@italodeandra/next/utils/isServer";
import { schema, types, VALIDATION_ACTIONS, VALIDATION_LEVEL } from "papr";

const assetSchema = onlyServer(() =>
  schema(
    {
      offers: types.array(
        types.object({
          price: types.number({ required: true }),
          name: types.string(),
          createdAt: types.date({ required: true }),
          accepted: types.boolean(),
          repliedAt: types.date(),
        })
      ),
    },
    {
      timestamps: true,
      validationLevel: VALIDATION_LEVEL.OFF,
      validationAction: VALIDATION_ACTIONS.WARN,
    }
  )
);

const Asset = onlyServer(() => db.model("assets", assetSchema));

export default Asset;
