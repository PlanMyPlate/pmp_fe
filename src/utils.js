export const meals = ['Breakfast', 'Lunch', 'Dinner']
export const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']

export const areDatesSame = (first, second) => {
  return first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate()
}

export const addDateBy = (date, count) => {
  const d = new Date(date);
  return new Date(d.setDate(d.getDate() + count))
}

export const getSunday = () => {
  const today = new Date();
  const first = today.getDate() - today.getDay();
  return new Date(today.setDate(first))
}