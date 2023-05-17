import { Level } from "~/lib/data.types";
import { useLevelAPI } from "~/composables/api/useLevelAPI";

export default defineEventHandler(async (event) => {
  const data = await useLevelAPI().getLevels();

  return data as Level[];
});
