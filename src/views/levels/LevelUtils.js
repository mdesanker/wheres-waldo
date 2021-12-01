const getClickCoords = (coords) => {
  const board = document.querySelector("#board");
  const { left, top, width, height } = board.getBoundingClientRect();

  // Click coords normalized to image top left
  const normX = coords[0] - left - window.scrollX;
  const normY = coords[1] - top - window.scrollY;

  // Convert coords to fraction of img dimensions
  const ratioX = normX / width;
  const ratioY = normY / height;

  // Original image dimensions
  const originalX = 1920;
  const originalY = 1080;

  // Convert coords to position on original img
  const adjustX = ratioX * originalX;
  const adjustY = ratioY * originalY;

  return [adjustX, adjustY];
};

const showMenu = (coords) => {
  const board = document.querySelector("#board");
  const { left, top, right, bottom } = board.getBoundingClientRect();

  // console.log(left, top, right, bottom);

  if (
    coords[0] >= left &&
    coords[0] <= right + window.scrollX &&
    coords[1] >= top &&
    coords[1] <= bottom + window.scrollY
  ) {
    return false;
  } else return true;
};

export { getClickCoords, showMenu };
