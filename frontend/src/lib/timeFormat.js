const timeFormat = (time) => {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  return `${hours}h ${minutes}min`;
}

export default timeFormat