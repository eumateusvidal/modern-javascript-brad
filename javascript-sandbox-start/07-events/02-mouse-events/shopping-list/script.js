const logo = document.querySelector('img');

const onClick = () => console.log('click event');
const onDoubleClick = () => {
  if ((document.body.style.backgroundColor = 'purple')) {
    document.body.style.backgroundColor = 'purple';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
};

const onRightClick = () => console.log('right click event');

const onMouseDown = () => console.log('mouse down event');
const onMouseUp = () => console.log('mouse down event');
const onMouseWheel = () => console.log('mouse down event');
const onMouseOver = () => console.log('mouse over event');
const onMouseOut = () => console.log('mouse out event');
const onDragStart = () => console.log('drag start event');
const onDragEnd = () => console.log('drag start event');

// Event Listeners

logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('mouseup', onMouseWheel);
logo.addEventListener('mousover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);
logo.addEventListener('mouseout', onDragEnd);
