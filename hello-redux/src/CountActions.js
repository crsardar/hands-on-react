export const increaseCounter = () => {
  return {
    type: "INCREASE_COUNTER",
    value: 1,
  };
};

export const decreaseCounter = () => {
  return {
    type: "DECREASE_COUNTER",
    value: 1,
  };
};
