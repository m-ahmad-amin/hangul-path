const MS_PER_DAY = 86400000;

function getCurrentDay(startDate) {
  if (!startDate) return 0;
  const day = Math.floor((Date.now() - new Date(startDate).getTime()) / MS_PER_DAY) + 1;
  return Math.min(Math.max(day, 1), 30);
}

module.exports = { getCurrentDay, MS_PER_DAY };
