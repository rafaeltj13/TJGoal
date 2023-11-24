import { useLevelAPI } from "~/composables/api/useLevelAPI";
import type { Level } from "~/lib/data.types";

export default defineEventHandler(async (event) => {
  const data = await useLevelAPI().getLevels();

  return data as Level[];
});
