function hidetarbar(status){
  return {
    type: "HIDE_TABBAR", status
  }
}



export {
  hidetarbar //控制底部Tabbar的显示和隐藏
  // addCart,    //添加购物车
  // cancleCart, //删除购物车商品
  // addShop,    //增加购买数量
  // reduceShop,  //减少购买数量
  // Select,      //是否选中
  // allSelect    //全选
}