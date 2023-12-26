import Stripe from "stripe";
import { useUserApi } from "~/composables/api/useUser";

const PAYLINK_TO_VALUE = {
  plink_1OQYJbJQVTHYSYSmgDln1p7g: 50,
  plink_1OQgGwJQVTHYSYSmq9cp0BvP: 100,
  plink_1OQgHwJQVTHYSYSmDrnmbqys: 250,
};

export default defineEventHandler(async (event) => {
  const stripe_api = process.env.SRIPE_API as string;

  const stripe = new Stripe(stripe_api);
  const headers = event.node.req.headers;

  const body = await readRawBody(event);
  const sig = headers["stripe-signature"];
  let hookEvent: Stripe.Event;

  try {
    hookEvent = stripe.webhooks.constructEvent(
      body as string,
      sig as string,
      stripe_api
    );
  } catch (err) {
    console.log({ err });
    throw createError({ statusCode: 400, message: (err as Error).message });
  }

  switch (hookEvent.type) {
    case "checkout.session.completed":
      const userId = hookEvent.data.object.client_reference_id as string;
      console.log(hookEvent.data.object.payment_link);
      const greens =
        PAYLINK_TO_VALUE[
          `${hookEvent.data.object.payment_link}` as keyof typeof PAYLINK_TO_VALUE
        ];
      return await useUserApi().updateGreens(userId, greens);
    default:
      break;
  }
});
