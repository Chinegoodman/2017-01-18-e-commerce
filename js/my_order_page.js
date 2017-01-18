/**
 * Created by pang on 2017/1/11.
 */
$(function () {
    // tab切换
    tabchange();
})


// tab切换
function tabchange() {
    $('.order_top_status_lis>li').click(function () {
        // alert($(this).index());
        $('.order_top_status_lis>li').removeClass('selected');
        $('.order_top_status_lis>li').eq($(this).index()).addClass('selected');


        $('.allorder_lis').removeClass('active');
        $('.allorder_lis').eq($(this).index()).addClass('active');
    })
}