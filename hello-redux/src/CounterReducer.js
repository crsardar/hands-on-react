export const counterReducer = (oldData = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREASE_COUNTER":
      return { count: oldData.count + action.value };

    case "DECREASE_COUNTER":
      return { count: oldData.count - action.value };

    default:
      return oldData;
  }
};
