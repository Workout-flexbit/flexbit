
// I love how small this helper function is! The smaller the better!
// We might want to make the T lowercase though, since this isn't a class or a constructor
const TimeParser = time => {
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  return minutes > 0 ? `${minutes}min ${seconds}sec` : `${seconds} sec`;
};


export default TimeParser;
