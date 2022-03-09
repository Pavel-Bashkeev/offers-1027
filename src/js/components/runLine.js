export const runLine = () => {
  const runLineBox = document.querySelector('.runline');
  const runLineText = runLineBox.querySelector('.runline__text');
  let runLineTextCloneLeft = runLineText.cloneNode(true);
  let runLineTextCloneRight = runLineText.cloneNode(true);
    runLineBox.prepend(runLineTextCloneRight);
  runLineBox.prepend(runLineTextCloneLeft);
  for(let i = 0; i < 5; i++){
    let runLineTextCloneRightNew = runLineText.cloneNode(true);
    runLineBox.prepend(runLineTextCloneRightNew);
  }
  
}