const logo = document.querySelector('img');

//Event Listeners

const onClick = () => console.log('click event');
// const onDoubleClick = () => console.log('Double click event');
const onDoubleClick = () => {
 if (document.body.style.backgroundColor !== 'purple') {
  document.body.style.backgroundColor = 'purple';
  document.body.style.color = 'white';
 } else {
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
 }
};

const onRightClick = () => console.log('right click event');
const onMouseDown = () => console.log('mouse down event');
const onMouseUp = () => console.log('mouse up event');
const onMouseOver = () => console.log('mouse up event');
const onMouseOut = () => console.log('mouse up event');

logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('mouseup', onMouseUp);
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOver);