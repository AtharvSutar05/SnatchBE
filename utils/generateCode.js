export const generateMeetingCode = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    const c1 = getRandomString(3, chars);
    const c2 = getRandomString(3, chars);
    const c3 = getRandomString(3, chars);
    const result = `${c1}-${c2}-${c3}`;
    return result;
};