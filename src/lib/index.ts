function RANDOM_INT_UP_TO (max: number) :number {
  return Math.floor(Math.random() * max)
}

function RANDOM_RGB_STRING () :string {
  return `rgb(${RANDOM_INT_UP_TO(255)},${RANDOM_INT_UP_TO(255)},${RANDOM_INT_UP_TO(255)})`;
}


export {
  RANDOM_INT_UP_TO,
  RANDOM_RGB_STRING
};

export default ({
  RANDOM_INT_UP_TO,
  RANDOM_RGB_STRING
});