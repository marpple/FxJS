class Stop {
  constructor(value) { this.value = value; }
}

export { Stop };

export default function stop(value) {
  return new Stop(value);
}