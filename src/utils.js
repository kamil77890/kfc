// utils.js
export const groupBy = (collection, callback) => {
  return Array.isArray(collection)
    ? collection.reduce((groups, item, index, array) => {
        (groups[callback(item, index, array)] ||= []).push(item);
        return groups;
      }, {})
    : {};
};
