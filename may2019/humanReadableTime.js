const hours = seconds => {
  const hours = Math.floor(seconds / 3600);
  return hours < 10 ? "0"+hours : hours.toString();
}

const minutes = seconds => {
  const min = Math.floor((seconds % 3600) / 60);
  return min < 10 ? "0"+min : min.toString();
}

const secondos = seconds => {
  const sec = (seconds % 3600) % 60;
  return sec < 10 ? "0"+sec : sec.toString();
}

const humanReadable = seconds => {
  return `${hours(seconds)}:${minutes(seconds)}:${secondos(seconds)}`;
}
