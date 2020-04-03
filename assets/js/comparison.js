        var list = [];
        $("#searchChoices").on('click', '.addToCompare', function () {
        $(".comparePanle").show();
        $(this).toggleClass("rotateBtn");
        $(this).parents(".selectFood").toggleClass("selected");
        var productID = $(this).parents('.selectFood').attr('id');
        alert(productID);

        var inArray = $.inArray(productID, list);
        if (inArray < 0) {
            if (list.length > 1) {
                alert('The maximum of comparing is 2');
                $(this).toggleClass("rotateBtn");
                $(this).parents(".selectFood").toggleClass("selected");
                return;
            }

            if (list.length < 2) {
                list.push(productID);

                var displayTitle = $(this).parents('.selectFood').attr('data-name');
                $(".comparePan").append('<div id="' + productID + '" class="list-center"><span id="' + productID + '" class="ptitle">' + displayTitle + '</span><a class="selectedItemCloseBtn closebtn">&times</a></div>');
            }
        } else {
            list.splice($.inArray(productID, list), 1);
            var prod = productID.replace(" ", "");
            $('#' + prod).remove();
            hideComparePanel();

        }
        if (list.length > 1) {
            $(".cmprBtn").addClass("active");
            $(".cmprBtn").removeAttr('disabled');
        } else {
            $(".cmprBtn").removeClass("active");
            $(".cmprBtn").attr('disabled', '');
        }
    });

    $(document).on('click', '.cmprBtn', function () {
        if ($(".cmprBtn").hasClass("active")) {
            /* this is to print the  features list statically*/
            $(".contentPop").append('<div class="col-md-3 compareItemParent relPos">' + '<ul class="product"><li class=" relPos compHeader">产品信息</li><li>名称</li><li>屏幕大小</li><li>重量</li><li>系统</li><li class="cpu">CPU</li><li>电池容量</li></ul></div>');

            for (var i = 0; i < list.length; i++) {
                /* this is to add the items to popup which are selected for comparision */
                product = $('.selectFood[id="' + list[i] + '"]');
                //var image = $('[data-title=' + list[i] + ']').find(".productImg").attr('src');
                var title = $('[id=' + list[i] + ']').attr('data-name');
                /*appending to div*/
                $(".contentPop").append('<div class="col-md-3 compareItemParent relPos">' + '<ul class="product">' + '<li class="compHeader"></li>' + '<li>' + title + '</li>' + '<li>' + $(product).data('protei') + '</li>' + '<li>' + $(product).data('carboh') + '</li><li>'+ $(product).data('sugars') +'</li><li class="cpu">' + $(product).data('sodium') + '</li>' + '<li>' + $(product).data('fatty') + '</ul>' + '</div>');
            }
        }
        $(".modPos").show();
    });

    $(document).on('click', '.modal-closebtn', function () {
        $(".contentPop").empty();
        $(".comparePan").empty();
        $(".comparePanle").hide();
        $(".modPos").hide();
        $(".selectFood").removeClass("selected");
        $(".cmprBtn").attr('disabled', '');
        list.length = 0;
        $(".rotateBtn").toggleClass("rotateBtn");
    });

    //删除对比项
    $(".comparePan").on('click', '.selectedItemCloseBtn', function () {
        var test = $(this).siblings("span").attr('id');
        $('[id=' + test + ']').find(".addToCompare").click();
        hideComparePanel();
    });

    function hideComparePanel() {
        if (!list.length) {
            $(".comparePan").empty();
            $(".comparePanle").hide();
        }
    };
    
    