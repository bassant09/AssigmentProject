
alert("hi")
function handleDragStart(e) {
    this.style.opacity = '1';
  }
  
  function handleDragEnd(e) {
    this.style.opacity = '1';
  }
  
  let items = document.querySelectorAll('.card');
  items.forEach(function (item) {
    console.log('hi')
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragend', handleDragEnd);
  });