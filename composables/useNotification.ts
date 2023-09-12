type Notification = {
  title: string;
  content: string;
  type: "success" | "error" | "warning";
};

export const useNotification = () => {
  const notification: Ref<Notification | null> = useState("notification");
  let timeOut: Ref<NodeJS.Timeout | undefined> = ref(undefined);

  const setNotification = (newNotification: Notification | null) => {
    if (notification.value && notification.value.title) {
      notification.value = null;
      clearTimeout(timeOut.value);
    }

    notification.value = newNotification;

    timeOut.value = setTimeout(() => {
      notification.value = null;
    }, 2000);
  };

  return {
    notification,
    setNotification,
  };
};
