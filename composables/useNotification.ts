type Notification = {
  title: string;
  content: string;
  type: "success" | "error" | "warning";
};

export const useNotification = () => {
  const notification: Ref<Notification | null> = useState("notification");

  const setNotification = (newNotification: Notification | null) => {
    notification.value = newNotification;

    setTimeout(() => {
      notification.value = null;
    }, 2000);
  };

  return {
    notification,
    setNotification,
  };
};
