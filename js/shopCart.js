/**
 * Created by a123 on 2017/2/19.
 */
window.onload = function () {
    deleteProduct();
}

/*
  删除商品 
 */
function deleteProduct() {
    // 1. 获取需要的元素
    var panel = document.getElementsByClassName('panel')[0];
    var trashes = document.getElementsByClassName('shop_deal_right');

    var checkBoxs = document.getElementsByClassName('cart_check_box');
    // 2. 监听点击
    var up; // 上面的盖子
    for(var i=0; i<trashes.length; i++){
        (function (index) {
            mjd.tap(trashes[i], function (e) {
                 // console.log(trashes[index]);
                 // console.log(e.target.parentNode);
                 // 2.1 实现垃圾篓翻盖
                 // 2.1.1 取到盖子
                 up = trashes[index].firstElementChild;
                 // console.log(up);

                 // 2.1.2 加过渡
                 up.style.transition = 'all .2s ease';
                 up.style.webkitTransition = 'all .2s ease';

                 // 2.1.3 实现动画
                 up.style.transformOrigin = '0 5px';
                 up.style.webkitTransformOrigin = '0 5px';

                 up.style.transform = 'rotate(-45deg)';
                 up.style.webkitTransform = 'rotate(-45deg)';

                 // 2.1 弹出面板
                 panel.style.display = 'block';
                 panelContent.className = 'panel_content jump'

            });
        })(i);
    }

  
}