import type { User } from "~/lib/data.types";
import { useUserApi } from "../../../composables/api/useUser";

export default defineEventHandler(async (event) => {
  const data = await useUserApi().getUserRanking();
  return data as User[];
});
