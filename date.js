exports.getDate = function () {
  const today = new Date();
  const currentDay = today.getDay();
  const day = " ";
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  //
  return today.toLocaleDateString("en-US", options);
};
