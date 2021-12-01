const getClickCoords = (coords) => {
  // Original image dimensions
  const originalX = 1920;
  const originalY = 1080;

  // Convert coords to position on original img
  const adjustX = coords[0] * originalX;
  const adjustY = coords[1] * originalY;

  return [adjustX, adjustY];
};

const showMenu = (coords) => {
  if (coords[0] >= 0 && coords[0] <= 1 && coords[1] >= 0 && coords[1] <= 1) {
    return false;
  } else return true;
};

export { getClickCoords, showMenu };
