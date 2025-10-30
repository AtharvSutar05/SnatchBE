const getRandomString = (length, chars) => {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

export const generateMeetingCode = () => {
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  const c1 = getRandomString(3, chars);
  const c2 = getRandomString(3, chars);
  const c3 = getRandomString(3, chars);
  return `${c1}-${c2}-${c3}`;
};
