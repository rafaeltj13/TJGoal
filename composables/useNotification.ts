export type Notification = {
  title: string;
  content?: string;
  type: "success" | "error" | "warning";
};

export const useNotification = () => {
  const notifications: Ref<Notification[]> = useState("notification", () => []);
  const timeouts: Ref<NodeJS.Timeout[]> = ref([]);

  //  TODO: Implement function to remove notification clicking on X
  const setNotification = (newNotification: Notification) => {
    const timeout = setTimeout(() => {
      removeNotification(timeout);
    }, 3000);

    notifications.value = [...notifications.value, newNotification];
    timeouts.value.push(timeout);
  };

  const removeNotification = (timeout: NodeJS.Timeout) => {
    const index = timeouts.value.indexOf(timeout);
    if (index !== -1) {
      notifications.value.splice(index, 1);
      timeouts.value.splice(index, 1);
      clearTimeout(timeout);
    }
  };

  return {
    notifications,
    setNotification,
  };
};
