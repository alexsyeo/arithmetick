export const reduceObjectValues = (obj, callback, initialValue) => Object.values(obj).reduce(callback, initialValue);

export const objectIsEmpty = (obj) => {
    for (let x in obj) {
        return false;
    }
    return true;
};