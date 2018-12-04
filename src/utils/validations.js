export const required = value => {
    return value || typeof value === 'number' ? null : 'Required';
};
