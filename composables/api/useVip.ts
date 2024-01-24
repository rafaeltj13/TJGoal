import type { Vip } from "~/lib/data.types";
import type { VipObject } from "~/components/vip/types";
import { useSupabase } from "./useSupabase";

export const useVipApi = () => {
  const dayjs = useDayjs();

  const create = async (vipObject: VipObject) => {
    try {
      const { data, error } = await useSupabase()
        .from("vips")
        .insert({
          until: dayjs(new Date())
            .add(vipObject.durationDays || 0, "day")
            .toDate(),
          type: vipObject.type,
        })
        .select("*")
        .single();

      if (error) {
        throw error;
      }

      return data as Vip;
    } catch (error) {
      console.error({ error });
    }
  };

  const update = async (vip: Vip, vipObject: VipObject) => {
    try {
      await useSupabase()
        .from("vips")
        .update({
          until: dayjs(new Date(vip.until))
            .add(vipObject.durationDays || 0, "day")
            .toDate(),
          updated_at: new Date(),
          type: vipObject.type,
        })
        .eq("id", vip.id);
    } catch (error) {
      console.error({ error });
    }
  };

  return {
    create,
    update,
  };
};
