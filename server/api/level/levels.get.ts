import { useLevelApi } from "~/composables/api/useLevels";
import type { Level } from "~/lib/data.types";

export default defineEventHandler(async (event) => {
  const data = await useLevelApi().getLevels();

  return data as Level[];
});
