(function(){
    var iframe;
    var offset = 0;
    if(document.querySelector("#closure-editor") == undefined)
    {
        offset = 1;
        iframe = document.querySelector("#item_description_ifr").contentDocument;
    }
    else
    {
        iframe = document.querySelector("#closure-editor").contentDocument;
    }
    var title = iframe.querySelectorAll("table:nth-of-type(" + (1 + offset) +")")[0].innerText.trim().split(/[\s,]+/);

    var pStr = "";
    var descript1 = iframe.querySelector("table:nth-of-type(" + (3 + offset) +") td:nth-of-type(2)").innerText;
    var str_array = descript1.trim().split(/[\s,]+/);
    for (var i = 0; i < str_array.length; i++) {
        pStr += "<p>" + str_array[i] + "</p>";
    }
    descript1 = pStr;

    pStr = "";
    var descript2 = iframe.querySelector("table:nth-of-type("+(3+offset)+") td:nth-of-type(4)").innerText;
    str_array = descript2.trim().split(/[\s,]+/);
    for (var i = 0; i < str_array.length; i++) {
        pStr += "<p>" + str_array[i] + "</p>";
    }
    descript2 = pStr;

    pStr = "";
    var descript3 = iframe.querySelector("table:nth-of-type(" + (5 + offset) +") td:nth-of-type(2)").innerText;
    str_array = descript3.trim().split(/[\s,]+/);
    for (var i = 0; i < str_array.length; i++) {
        pStr += "<p>" + str_array[i] + "</p>";
    }
    descript3 = pStr;

    var sizeInfo;
    if(offset != 0)
    {
        if (iframe.querySelector("table:nth-of-type(8) table") != null)
        {
            sizeInfo = iframe.querySelector("table:nth-of-type(8) table").outerHTML;
        }
        else if (iframe.querySelector("table:nth-of-type(9) table") != null)
        {
            sizeInfo = iframe.querySelector("table:nth-of-type(9) table").outerHTML;
        }            
        else if (iframe.querySelector("table:nth-of-type(10) table") != null)
        {
            sizeInfo = iframe.querySelector("table:nth-of-type(10) table").outerHTML;
        }
    }        
    else
    {
        sizeInfo = iframe.querySelector("table:nth-of-type(7) td:nth-of-type(2)>center").innerHTML;
    }
    var newHTML;
    
    if(offset == 0)
    {
        newHTML = '<div style="text-align:center; margin:auto;"><div class="description" style="max-width: 100%;text-align:center;display: inline-block;"> <img src="https://sddd1234567.github.io/sleepwear/images/descript_logo.png" style="display:block;max-width:100%;"> <div id="title" style="background-color: #cab9fa;width: 96.39%;display: inline-block;margin-right: 0.7%;line-height: 1.5;color: white;font-size: 23px;font-weight: bold;"> 男士棉絨居家睡衣 </div> <img src="https://sddd1234567.github.io/sleepwear/images/description_01_04.gif" style="display:block;max-width: 100%;"> <div style="width:100%;display:table;margin-left:1.19%;"> <div style="display:table-row;"> <div id="descript1" style="display:table-cell;width: 32.2%;background-color: #ffa7d2;color:#ff00ff;"> <p>棉100%</p> </div> <div style="width: 1.2%;display: table-cell;"></div> <div id="descript2" style="color: #9900ff;display:table-cell;width: 59%;background-color: #cab9fa;"> <p>整套含長袖上衣+長褲</p> <p>適穿冬天</p> </div> <div style="width: 3%;display: table-cell;"></div> </div> </div> <img src="https://sddd1234567.github.io/sleepwear/images/description_01_10.gif" style="display:block;max-width:100%;"> <div style="width:100%;display:table;margin-left:1.19%;"> <div style="display:table-row;"> <div id="descript3" style="display:table-cell;width: 32.2%;background-color: #ffb5b3;color: #ff007f;"> <p>M~適穿165-175cm</p> <p>L~適穿175-185cm</p> <p>LL~適穿175-185cm</p> </div> <div style="width: 1.2%;display: table-cell;"></div> <div id="aboutme" style="color: #9900ff;display:table-cell;width: 59%;background-color: #c99afa;"> <p>下標前請參閱<a href="https://tw.bid.yahoo.com/tw/show/aboutme?userID=Y0578133717">關於我</a></p> </div> <div style="width: 3%;display: table-cell;"></div> </div> </div> <img src="https://sddd1234567.github.io/sleepwear/images/description_01_16.gif" style="display:block;max-width:100%;"> <div id="size-table" style="background-color: rgb(255, 167, 210); width: 96.6%; margin-left: 1.2077293992%; text-align: center;"> </div> <img src="https://sddd1234567.github.io/sleepwear/images/description_01_20.gif" style="display:block;max-width:100%;"> <div class="welcon-logo" style="text-align:center;"> <a href="http://tw.user.bid.yahoo.com/tw/booth/Y0578133717"><img src="https://sddd1234567.github.io/sleepwear/images/welcome_01.gif" alt="" style="display:inline-block;max-width:100%;"></a> </div> </div></div>';
        iframe.querySelector("body").innerHTML = newHTML;
    }
    else
    {
        newHTML = '#size-table{ margin-left:1.19%; } #size-table table { margin: auto; } .table-cell { display: table-cell; } .table-row { display: table-row; } .description { display: inline-block; } .table { display: table; margin-left: 1.19%; } .container{ text-align: center; margin: auto; } #title{ background-color: #cab9fa; width: 96.39%; display: inline-block; margin-right: 0.7%; line-height: 1.5; color: white; font-size: 23px; font-weight: bold; } </style> <div class="container"> <div class="description" style="max-width: 100%;text-align:center;display: inline-block;"> <img src="https://sddd1234567.github.io/sleepwear/images/descript_logo.png" style="display:block;max-width:100%;"> <div id="title" style="background-color: #cab9fa;width: 96.39%;display: inline-block;margin-right: 0.7%;line-height: 1.5;color: white;font-size: 23px;font-weight: bold;"> 男士棉絨居家睡衣 </div> <img src="https://sddd1234567.github.io/sleepwear/images/description_01_04.gif" style="display:block;max-width: 100%;"> <div class="table" style="width:100%;display:table;margin-left:1.19%;"> <div class="table-row" style="display:table-row;"> <div class="table-cell" id="descript1" style="display:table-cell;width: 33.8%;background-color: #ffa7d2;color:#ff00ff;"> <p>棉100%</p> </div> <div class="table-cell" style="width: 1.2%;display: table-cell;"></div> <div class="table-cell" id="descript2" style="color: #9900ff;display:table-cell;width: 61.98%;background-color: #cab9fa;"> <p>整套含長袖上衣+長褲</p> <p>適穿冬天</p> </div> <div class="table-cell" style="width: 3%;display: table-cell;"></div> </div> </div> <img src="https://sddd1234567.github.io/sleepwear/images/description_01_10.gif" style="display:block;max-width:100%;"> <div class="table" style="width:100%;display:table;margin-left:1.19%;"> <div class="table-row" style="display:table-row;"> <div class="table-cell" id="descript3" style="display:table-cell;width: 33.8%;background-color: #ffb5b3;color: #ff007f;"> <p>M~適穿165-175cm</p> <p>L~適穿175-185cm</p> <p>LL~適穿175-185cm</p> </div> <div class="table-cell" style="width: 1.2%;display: table-cell;"></div> <div class="table-cell" id="aboutme" style="color: #9900ff;display:table-cell;width: 61.98%;background-color: #c99afa;"> <p>下標前請參閱<a href="http://class.ruten.com.tw/user/about.php?s=sandy9601">關於我</a></p> </div> <div class="table-cell" style="width: 3%;display: table-cell;"></div> </div> </div> <img src="https://sddd1234567.github.io/sleepwear/images/description_01_16.gif" style="display:block;max-width:100%;"> <div id="size-table" style="background-color: rgb(255, 167, 210); width: 96.6%; margin-left: 1.2077293992%; text-align: center;"> </div> <img src="https://sddd1234567.github.io/sleepwear/images/description_01_20.gif" style="display:block;max-width:100%;"> <div class="welcon-logo" style="text-align:center;"> <a href="http://class.ruten.com.tw/user/about.php?s=sandy9601"><img src="https://sddd1234567.github.io/sleepwear/images/welcome_01.gif" alt="" style="display:inline-block;max-width:100%;"></a> </div> </div> </div>';
        var stylesheet = iframe.querySelector("body p style").innerHTML;
        iframe.querySelector("body").innerHTML = "<style>" + stylesheet + newHTML;
    }

    iframe.querySelector("#size-table").innerHTML = sizeInfo;
    iframe.querySelector("#size-table table").style.width = "96%";
    iframe.querySelector("#size-table table").style.margin = "auto";
    iframe.querySelector("#title").innerHTML = "<b>" + title + "</b>";
    iframe.querySelector("#descript1").innerHTML = descript1;
    iframe.querySelector("#descript2").innerHTML = descript2;
    iframe.querySelector("#descript3").innerHTML = descript3;

    if (document.querySelector("#closure-editor") != undefined)
    {
        document.querySelector("#editor textarea").value = iframe.querySelector("body").innerHTML;
    }
})()