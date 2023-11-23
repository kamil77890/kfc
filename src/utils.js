export const groupBy = (array, callback) => {
  return array.reduce((groups, item, index, array) => {
    (groups[callback(item, index, array)] ||= []).push(item);
    return groups;
  }, {});
};
