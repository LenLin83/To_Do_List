$(function(){
    $('.list_block').on('click','.check_block',function(){
        $(this).find(".check_botton").toggle()
        let cut_content_block = $(this).closest(".content_block").clone()
        $(this).closest(".content_block").remove()
        $('.seal_list_block').append(cut_content_block)
    });
});

$(function(){
    $('.seal_list_block').on('click','.check_block',function(){
        $(this).find(".check_botton").toggle()
        let cut_content_block = $(this).closest(".content_block").clone()
        $(this).closest(".content_block").remove()
        $('.list_block').append(cut_content_block)
    });
});


$(function() {
    $(".add_block").on("click",function(){
        let new_content_block = $(".template").clone().removeClass("template").show();
        $('.list_block').append(new_content_block)
    });
})


$(function () {
    $(".list_block").on("click",".delete_block",function(){
        $(this).closest(".content_block").remove()
    })
})
$(function () {
    $(".seal_list_block").on("click",".delete_block",function(){
        $(this).closest(".content_block").remove()
    })
})



$(function () {
    $(".seal_block").on("click",function(){
        $(".list_block").toggle()
        $(".seal_list_block").toggle();
    })
    
})



$(function () {
    
})
$(function () {
    
})
$(function () {
    
})