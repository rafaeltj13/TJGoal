import { useUserAPI } from "./../../../composables/api/useUserAPI";
import { User } from "~/lib/data.types";

export default defineEventHandler(async (event) => {
  const data = await useUserAPI().getUserRanking();
  return data as User[];
});
