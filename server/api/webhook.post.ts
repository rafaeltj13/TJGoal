import Stripe from "stripe";
import { useUserApi } from "~/composables/api/useUser";

const PAYLINK_TO_VALUE = {
  plink_1OQYJbJQVTHYSYSmgDln1p7g: 50,
  plink_1OQgGwJQVTHYSYSmq9cp0BvP: 100,
  plink_1OQgHwJQVTHYSYSmDrnmbqys: 250,
};

export default defineEventHandler(async (event) => {
  const stripe = new Stripe(process.env.SRIPE_SECRET_KEY as string);

  const body = await readRawBody(event);
  const header = stripe.webhooks.generateTestHeaderString({
    payload: body || "",
    secret: process.env.SRIPE_ENDPOINT_SECRET as string,
  });

  let hookEvent: Stripe.Event;

  try {
    hookEvent = stripe.webhooks.constructEvent(
      body as string,
      header,
      process.env.SRIPE_ENDPOINT_SECRET as string
    );
  } catch (err) {
    console.log({ err });
    throw createError({ statusCode: 400, message: (err as Error).message });
  }

  switch (hookEvent.type) {
    case "checkout.session.completed":
      const userId = hookEvent.data.object.client_reference_id as string;
      const greens =
        PAYLINK_TO_VALUE[
          `${hookEvent.data.object.payment_link}` as keyof typeof PAYLINK_TO_VALUE
        ];
      return await useUserApi().updateGreens(userId, greens);
    default:
      break;
  }
});
