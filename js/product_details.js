/**
 * Created by pang on 2017/1/11.
 */
$(function () {
    clicktap();
    buy_rightnowclick();

    addto_ShoppingCart();
})

// 点击切换详情和参数页面
function clicktap() {
    $('.product_pagebottom_title>li').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        // alert($(this).index());
        $('.product_pagebottom_contentlis>li').removeClass('active');
        $('.product_pagebottom_contentlis>li').eq($(this).index()).addClass('active');
    })
}

//点击立即购买及后续事件
function buy_rightnowclick() {
    $('.buy_rightnow').click(function () {
        $('.rightnowbuy_box_mask').addClass('rnbmask');
    })
    $('.rightnowbuy_close').click(function () {
        $('.rightnowbuy_box_mask').removeClass('rnbmask');
    })
    $('.rnb_product_type_li').click(function () {
        $('.rnb_product_type_li').removeClass('selected');
        $(this).addClass('selected');
    })

}

//点击加入购物车及后续事件
function addto_ShoppingCart() {
    $('.addto_ShoppingCart').click(function () {
        $('.addthingstoshoppingcart_mask').addClass('addtocartmask');
    })
    $('.rightnowbuy_close').click(function () {
        $('.addthingstoshoppingcart_mask').removeClass('addtocartmask');
    })
    $('.rnb_product_type_li').click(function () {
        $('.rnb_product_type_li').removeClass('selected');
        $(this).addClass('selected');
    })

}