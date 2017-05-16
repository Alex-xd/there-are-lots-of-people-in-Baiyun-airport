/* eslint-disable */
// TODO:优化封装一下 提升易用性 发布一个npm包
function startDrag(x, y) {//x为触发的值,y为拖拽的整个浮层
  //拖拽
  var mouseOffsetX = 0,//鼠标偏移值
    mouseOffsetY = 0,
    isDraging = false;
  //	鼠标事件1  在标题栏按下,获取当钱鼠标相对于标题栏的位置
  x.onmousedown = function (e) {
    var e = e || window.event;
    mouseOffsetX = e.pageX - y.offsetLeft;
    mouseOffsetY = e.pageY - y.offsetTop;
    isDraging = true;
  }
  //	鼠标事件2  鼠标移动,计算出鼠标应该移动的距离,为了防止移动过快,鼠标移动的时候不在标题栏上,所以在document上设置
  document.onmousemove = function (e) {
    var e = e || window.event;
    var mouseX = e.pageX,//鼠标当前位置
      mouseY = e.pageY;
    var moveX = 0,//新位置
      moveY = 0;
    if (isDraging) {
      moveX = mouseX - mouseOffsetX;
      moveY = mouseY - mouseOffsetY;


//			因为浮层移动的时候可能超出浏览器器窗口,设置范围限定
//			moveX>0并且moveX<(窗口宽度-浮层宽度)
      var bodyWidth = document.documentElement.clientWidth,
        bodyHeight = document.documentElement.clientHeight;
      var dWidth = y.offsetWidth,
        dHeight = y.offsetHeight;
      var maxX = bodyWidth - dWidth;
      var maxY = bodyHeight - dHeight;
      moveX = Math.min(maxX, Math.max(0, moveX));
      moveY = Math.min(maxY, Math.max(0, moveY));

      y.style.left = moveX + 'px';
      y.style.top = moveY + 'px';
    }
  }
  //	鼠标事件3 鼠标松开
  document.onmouseup = function () {
    isDraging = false;
  }

}
