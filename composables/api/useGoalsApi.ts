import { useAPI } from "~/composables/api/useAPI";

export const useGoalAPI = () => {
  const getHourlyRanking = async () => {
    console.log("oi");

    let { data, error } = await useAPI().rpc("hourly_ranking");

    if (error) console.error(error);
    else {
      console.log(data);
      // return data;
    }
  };

  return {
    getHourlyRanking,
  };
};
