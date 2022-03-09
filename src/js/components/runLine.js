export const runLine = () => {
  const runLineBox = document.querySelector('.runline');
  const runLineText = runLineBox.querySelector('.runline__text');
  let runLineTextCloneLeft = runLineText.cloneNode(true);
  let runLineTextCloneRight = runLineText.cloneNode(true);

  runLineBox.append(runLineTextCloneRight);
  runLineBox.prepend(runLineTextCloneLeft);
}