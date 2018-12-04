export const normalizeInt = (value, length) => {
    if(!value) {
        return value;
    }
    const onlyNums = value.replace(/[^\d]/g, '');

    if(length) {
        return onlyNums.slice(0, length);
    }
    return onlyNums;
};
