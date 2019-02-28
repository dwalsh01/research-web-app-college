export default function checkDate(date) {
  const compare = new Date(date);
  const now = new Date();
  if (compare.getTime() >= now.getTime()) {
    return true;
  }
  return false;
}
