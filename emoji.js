$(function(){

    $(".go-btn").on("click",function(){
        var validatCount=0;
        $(".form-check-input").each(function(index){
            if(!$(this).prop("checked")){
                validatCount++;
            }
        });

        if(validatCount==0){
            location.href='EmojiFormDetail.html';
        }else{
            $(".error-message").show();
        }
    });
    
    //絵文字のテキストボックス増殖
    $(".form-huyasu").on("click",function(){
        var formCount = $(".emoji-request-form").length;
        var maxCount=30;
        if (formCount < maxCount){
            var element = $('.emoji-request-form'+".no-delete").clone(true);// 末尾をイベントごと複製
            // 複製したinputのクリア
            var inputList = element[0].querySelectorAll('input[type="text"], textarea');
            for (var i = 0; i < inputList.length; i++) {
              inputList[i].value = "";
            }
            element.find(".form-label").text((formCount+1)+"つ目");
            element.find(".form-control").attr('id', "emoji"+(formCount+1));
            element.find(".form-control").attr('name', "requestWord"+(formCount+1));
            element.find(".form-label").attr('for', "emoji"+(formCount+1));
            element.removeClass("no-delete");
            $('.emoji-request-form-area').append(element);// 末尾追加
          }
    });

    //絵文字のテキストボックス減らす
    $('.delete-btn').on('click', function(){// イベントごと複製しているのでonのselectorは未設定
        var inputCount = $('.emoji-request-form').length;
        let minCount=1;
        if (inputCount > minCount){
          $(this).closest('.emoji-request-form').remove();
        }
        $(".emoji-request-form").each(function(index){
            $(this).find(".form-label").text((index+1)+"つ目");
            $(this).find(".form-control").attr('id', "emoji"+(index+1));
            $(this).find(".form-control").attr('name', "requestWord"+(index+1));
            $(this).find(".form-label").attr('for', "emoji"+(index+1));
        });
    });

    //登録しちゃうよん
    $(".soushin-btn").on("click",function(){
        let count=0;
        if(!$(".misskey-id").val()){
            $(".id-error").show();
            count++;
        }
        
        if(!$(".request-number").val()){
            $(".number-error").show();
            count++;
        }

        if(!$(".mail-address").val()){
            $(".mail-error").show();
            count++;
        }

        $(".request-word").each(function(index){
            if(!$(this).val()){
                $(".word-error").show();
                count++;
            }
            
        });

        if(count==0){
            $(".request-word-length").val($(".request-word").length);
            $("#google").submit();
        }
        
    });

});
