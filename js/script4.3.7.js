// Write JavaScript here /
/*----------------------------------

3697-3SJ

*/
///////////////////////////////////////
//                                   //
//         全てはここからスタート        //
//                                   //
///////////////////////////////////////
var test = function(){
//  aModal('start');
 //  startDownload(url);
//  scrapeAll('大豆田とわ子');
//  scraping('https://www.allcinema.net/search?send_type=form&mypage_off=&search_exist=1&search_target=all&search_word=スプートニク');
    //'https://nomado.mine.nu/2021/06/20/%e8%a6%8b%e3%82%8b%e3%81%93%e3%81%a8%e3%81%a8%e9%9a%a0%e3%81%99%e3%81%93%e3%81%a8/');
//  scraping('http://www.minnano-av.com/search_result.php?search_scope=actress&search_word=%E7%A7%8B%E5%B1%B1%E8%8F%9C%E3%80%85%E7%B7%92&search=+Go+');
//  alert('jjjjj-1')
}
$(function(){
////////////////////////////////////////////

  var version = '4.3.7';

////////////////////////////////////////////
  document.getElementById('version').innerHTML = 'ver.' + version;
  $("#ofile").prop('disabled', true);
   cookieRead();
//  test();
  var select = document.getElementById("selBox2");
  select.options[1].selected = true;
//  $('#size option[value="500"]').prop('selected', true);
//      $("[name=mySelect2]").val('500');
//  $('#size').val('500');
//  $('#size').text('500');
//  select.options[2].selected = true;
//  $('#300').click();
  $('#date').css('color','#faa');
//  $('#imgURL').css('background-color','#eeffff');
//  $('#url').css('background-color','#ffffee');
//  $('#selBox2').css('background-color','#ffffee');
  $("#p-id").prop('disabled', true);
//  document.getElementById('ptabB').setAttribute('style','color: #084;');
  $("#all").click(idChanged);
  $('#wiki').click(idChanged);
  $("#minna").click(idChanged);
  idChanged();

  setEditor();

  csrTop();

  document.getElementById('style-light').disabled = true;
  document.getElementById('style-dark').disabled = false;
//  $('#style-dark').disabled('false');


});


csrTop = () => {
  var appear = false;
  var pagetop = $('#page_top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 10) {  //100pxスクロールしたら
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
          'right': '0px' //右から0pxの位置に
        }, 300); //0.3秒かけて現れる
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
          'right': '-80px' //右から-50pxの位置に
        }, 300); //0.3秒かけて隠れる
      }
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
    $('.nav-pills a[href="#tabA"]').tab('show');
    return false;
  });

}


var cookieRead = function(){
/*  var nenrei = $.cookie('nenrei');
  if (!nenrei) nenrei = $.cookie('toshi');
  if (nenrei) {
    var toshi = parseInt(nenrei);
    var color = '#0000ff';
    if ((toshi > 60) || (toshi < 10)) {
      color = '#ff0000';
    }
    document.getElementById('n').style.color = color;
    $("#n").text(' 現在' + nenrei + '歳');
    $.cookie('nenrei',"",{expires:-1});
    $.removeCookie('nenrei',"",{path:"/",expires:-1});
    $.cookie('toshi',"",{expires:-1});
    $.removeCookie('toshi',"",{path:"/",expires:-1});
  } else {
    var nen = $('#prof').val().match(/生年月日\D(\d{4})\D(\d{1,2})\D(\d{1,2})/);
    if (nen) {
      genzai(nen[0],'n');
    }
  }*/ 
  if ($.cookie('dmmImage')) {
    var delImg = document.getElementById('dmmImage');
    if (delImg) delImg.remove();
    var el = document.getElementById('tabD');
    var aImg = document.createElement('img');
    aImg.src = $.cookie('dmmImage');

    aImg.id = 'dmmImage';
    el.appendChild(aImg);
    console.log(aImg.src);
  } 

  if ($.cookie('main') > 0){
    var txt = '';
    for (var i = 0;i < $.cookie('main');i++){
      txt += $.cookie('main'+ i);
    }
    $('#feel').val(txt);
    txt = '';
    for (var i = 0;i < $.cookie('sub');i++){
      txt += $.cookie('sub'+ i);
    }
    $('#append').val(txt);
  }

  if ($.cookie('max') > 0){
    document.getElementById( "changed" ).innerHTML = $.cookie('max');
  }

  var minna = $.cookie('minna');
  var prof = $.cookie('prof');
  if (prof) {
    var num = 100;
    var p = $("#prof").val();
    if (p != "") p += '\n\n\n';
    for (var i = 0;i < prof;i++){
      p += $.cookie('prof' + i);
    }
    $("#prof").val(p);
    $.cookie('prof',"",{expires:-1});
    $.removeCookie('prof',"",{path:"/",expires:-1});
    $('#p').prop('checked', 'true');
    genzai(p,'n');
  } else if (minna) {
    alert('minnna');
    var p = $("#prof").val();
    if (p != "") p += '\n\n\n';
    p += minna;
    $("#prof").val(p);
    $.cookie('minna',"",{expires:-1});
    $.removeCookie('minna',"",{path:"/",expires:-1});
    $('#p').prop('checked', 'true');
    genzai(p,'n');
  } 

  var birth = $.cookie('birth');
  if (birth) {
    var a = $("#prof").val();
    if (a.length > 0) {
      var i;
      var line = a.split(/\r|\n|\r\n/g); a = "";
      for (i = 0; i < line.length;i++) {
        if (line[i].indexOf("生年月日") >= 0) {
          a += birth + '\n';
        } else a += line[i] + '\n';
      }
      $("#prof").val(a);
      genzai(a,'n');
    }
    $.cookie('birth',"",{expires:-1});
    $.removeCookie('birth',"",{path:"/",expires:-1});
    $('#p').prop('checked', 'true');
  }

  var title = $.cookie('title');    
  if (title) {
    var credit = "";
    $("#title").val(title);     $.cookie('title',"",{expires:-1});
    $.removeCookie('title',"",{path:"/",expires:-1});
    var media = $.cookie('media');
    var m = $("#append").val();
    if (m != "") m += '\n\n\n';
    m += media;
    $("#append").val(m);     $.cookie('media',"",{expires:-1});
    $.removeCookie('media',"",{path:"/",expires:-1});
    var i = 0; 
    var credit = "";
    var c;
    var temp = 'credit0';
    while ((c = $.cookie(temp))) {
      credit += c; 
      $.cookie(temp,"",{expires:-1});
      $.removeCookie(temp,"",{path:"/",expires:-1});
      i++; temp = 'credit' + i;
    }
    $("#prof").val(credit); 
    $('#s').prop('checked', 'true');
  }
};


/////////////// reload ////////////////
window.onunload = function() {
  alert('Onload');
};

$(window).on('beforeunload', function(event) {
//  if ($('#changed').val() == '') return;　 
//  return 'jquery beforeunload 2';
});


//////////////////////////////
//      CLICK functions     //
//////////////////////////////


//  document.getElementById('ptabB').setAttribute('style','color: #084;');
//
//});


$('#pClear').on('click',function(){
  $('#prof').val('');
})


$('#moon').click(function(){
  var thum = 300;
  var a = $('#img').val().match(/<a href="(.+?)".*?>/);
  var img = $('#img').val().match(/src=.+?"/);
  var alt = $('#img').val().match(/alt=.+?"/);
  var wid = $('#img').val().match(/width=.+?"/);
  var hei = $('#img').val().match(/height=.+?"/);
  if (!a) return;
  var ah = prompt('\n画像のリンク先アドレス\n（未入力ならそのまま）\n\n' + a[1] +'\n\n');
  if (ah == '') {
    ah = a[1];
  }
  if (!ah) return;
  var w,h,r;
  if ((!wid) || (!hei)) {
    w = 0; h = 0;
  } else {
    w = parseInt(wid[0].match(/\d+/));
    h = parseInt(hei[0].match(/\d+/));
    r = thum / w;
    if (h > w) r = thum / h;
  }
  

  var i = '<a href="' + ah + '" target="_blank" rel="noopener"><img ' + img + ' ';
  if (w != 0) i += 'width="' + Math.round(w * r) + '" height="' + Math.round(h * r) + '" ';
  $("#img").val( i + alt
    + ' class="alignleft size-full" style="max-width:300px; max-height: 300px; float: left; padding: 0.5em"></a>'
    );

  $('#cmt').val('');
  $('#prof').val('');
  $('#append').val('');
  $('#date').val('');
  $('#p-id').val('');
  makeCode(true);
});


function sample(){
  $('#sampleModal').modal();
}


$('#inputSample').click(function(){
  var p = $('#append').val();
  if (p != '') p += '\n\n';
  p += '<凡例＞\n\n（FF）　改頁\n（LF）　改行';
  $('#append').val(p);
});


$('#loadTxt').click(function(){
  if ($('#changed').val() == '*') {
    if(!confirm('変更されています。\n読み込みますか？')) return;
  }
  change = false;
  $('#selfile').click();
});


$('#partsOK').click(function(){
  var id = $('#str3').text();
  var item = $('#partsItem').val();
  menuF(id, item);
  $('#partsModal').modal('hide');
  var area = document.getElementById(id);
  area.focus();
});


$('#scripter').click(function(){
  var num = 500;
  var main = $('#feel').val();
  var sub = $('#append').val();
  var date = new Date();
  date.setTime(date.getTime() + (2*60*1000));
  for (var i = 0;i < main.length / num;i++) {
    $.cookie('main' + i,main.substr(i * num, num),{expires: date , path:'/'});
  }
  $.cookie('main',main.length / num,{expires: date , path:'/'});
  for (var i = 0;i < main.length / num;i++) {
    $.cookie('sub' + i,sub.substr(i * num, num),{expires: date , path:'/'});
  }
  $.cookie('sub',sub.length / num,{expires: date , path:'/'});
  window.location.href = "../scripter/index.html" 
});

$('#p').click(function(){
  var obj = document.getElementById("prof");
  obj.placeholder = "プロフィール";
});

$('#s').click(function(){
  var obj = document.getElementById("prof");
  obj.placeholder = "スタッフ";
});

$('#z').click(function(){
  var obj = document.getElementById("prof");
  obj.placeholder = "材料";
});

$('#titlecopy').on('click',function(){
  ////////////// test Function /////////////
  test();
  var copyTarget = document.getElementById("title");
  copyTarget.select();
  document.execCommand("Copy");
  aModal('タイトルをコピーしました。','title');
});

$('#feelcopy').click(function(){
  var txt = $('#feel').val();

  // 置き換え
  txt = txt.replace(/〈/g,'《').replace(/〉/g,'》');
  txt = txt.replace(/”/g,'"');
 
  $('#feel').val(txt);
  var copyTarget = document.getElementById("feel");
  copyTarget.select();
  document.execCommand("Copy");
  aModal('感想をコピーしました。','feel');
});

$('#selall').click(function(){
  var copyTarget = document.getElementById("code");
  copyTarget.select();
  document.execCommand("Copy");
  aModal('コードをコピーしました。','code');
});

codeCopy = () => {
  $('.nav-pills a[href="#tabA"]').tab('show');

  var copyTarget = document.getElementById("code");
  copyTarget.select();
  document.execCommand("Copy");
  aModal('コードをコピーしました。　２','code');
};

goTop = () => {
  $('.nav-pills a[href="#tabA"]').tab('show');
}

$("#t-btn").click(function(){
  $("#title").val('');
});

$("#easeClear").click(function(){
  $("#url").val('');
//  $("#comboField").val("amz-r");
});


/*function Alert(txt,ele) {
  $('#modal-txt').text(txt);
  $('#str2').text(ele);
  $('#alertModal').modal();
}*/


$('#replacer').click(function(){
  var title = $("#title").val();
  if (title.length == 0) title = "no title";
  var amazlet = $("#img").val();
  if (amazlet.indexOf('https://www.amazon') < 0)
    amazlet = "not amazlet";
  var birth = "no birth date";
  var date = $('#date').val();
  var res;
  if ((amazlet.indexOf('https://www.amazon') > 0) && (date.length == 0)) {
    res = amazlet.match(/\d{4}.\d{2}.\d{2}/);
    if (res == null) {
      if (!confirm("no Amazlet data")) return;
      res = "";
    }
  } else {// not amazon
    res = date.match(/\d{4}.\d+.\d+/);
    if (res == null){
      if (!confirm("発売日がありません")) return;
      res = "";
    } else $('#date').val(res);
  } //not amazon
//  document.getElementById( "changed" ).innerHTML = '';
  a = $("#prof").val();
  if (a.length > 0) {
    var i;
    var line = a.split(/\r|\n|\r\n/g);
    for (i = 0; i < line.length;i++) {
      if (line[i].indexOf("生年月日") >= 0) {
        birth = line[i];
        break;
      }
    }
  }
  title = encodeURIComponent(title);
  amazlet = encodeURIComponent(amazlet);
  res = encodeURIComponent(res);
  birth = encodeURIComponent(birth);
  window.location.href = "../replacer/index.html" + "?date=" + res + "&birth=" + birth + "&title=" + title + "&amazlet=" + amazlet; 
});


$('#gazou').click(function(){
  $('#img').val("");
  aModal('画像をクリアしました。','img');
});


/*$('#js-selectFile').on('click', 'button', function () {
    $('#js-upload').click();
    return false;
});


$('#js-upload').on('change', function() {
//選択したファイル情報を取得し変数に格納
    file = $(this).prop('files')[0];
    $('#ofile').val(file.name);
});*/


$('#appcopy').click(function(){
  var copyTarget = document.getElementById("append");
  copyTarget.select();
  document.execCommand("Copy");
  $("#append").val("");
});


$('#eng').click(function(){
  var copyTarget = document.getElementById("english");
  copyTarget.select();
});


/////// UNDO CLEAR ///////

$('#undo').click(function(){
  if(!confirm('復元しますか？')) 
    return;

  if (!allFromCookie()) {
    $('#selfile').click();
    return;
  }
  
/*  $('#title').val($.cookie("c01"));
  $('#date').val($.cookie("c02",));
  $('#p-id').val($.cookie("c03"));
  $('#p-no').val($.cookie("c04"));
  $('#img').val($.cookie("c05"));
  $('#append').val($.cookie("c06"));
  $('#feel').val($.cookie("c07"));
  $('#prof').val($.cookie("c08"));
  $('#cmt').val($.cookie("c09"));
  $('#code').val($.cookie("c10"));
  $('#ofile').val($.cookie("c11"));
  $("#url").val($.cookie("c12"));
  $("#english").val($.cookie("c13"));
  $("#n").text($.cookie("c14"));
  $("#imgURL").text($.cookie("c15"));*/
});


/////// CLEAR ///////

$('#clear').click(function(){
  if(!confirm('クリアーしますか？')){
    return;
    }

  var fileName = $('#title').val().substr(0,32) + '.txt';
  console.log(fileName);
  saveToFile(allToText(),fileName);

  document.getElementById( "changed" ).innerHTML = '';
  saveToCookie();
  
  $('#title').val("");
  $('#date').val("");
  $('#p-id').val("");
  $('#p-no').val("");
  $('#img').val("");
  $('#append').val("");
  $('#feel').val("");
  $('#prof').val("");
  $('#cmt').val("");
//  $('#code').val("");
//  $('#ofile').val("");
  $("#url").val("");
  $("#english").val("");
  $("#imgURL").val("");
  $("#n").text("（現在の年齢）");

  $('#feel').focus();
});


$('#make').click(function(){
  makeCode(true);
});

                 
/////////////////////////////////
//        make code
///////////////////////////////// 

function makeCode(flag,c = 'white') { // ture do false test
  var RedAndOrangeRed = '<style type="text/css">a {color: orangered;} a:link {color: red;} </style>'
  var DodgerBlueAndDeepSkyBlue = '<style type="text/css">a {color: deeskyblue;} a:lpink {color: dodgerblue;} </style>'

  var pStyle;
  if (c == 'white') pStyle = DodgerBlueAndDeepSkyBlue;
  else pStyle = RedAndOrangeRed;   
  
  var date = $("#date").val();
  var img = $("#img").val();
  var feel = replaceTag($('#feel').val());
  var comment = $('#cmt').val();
  var prof = $('#prof').val();
  var hidden = $('#p-no').val();
  var append = $('#append').val();
  var eng = replaceTag($('#english').val());
  var txt = '';
  var amazon =  img.indexOf('://www.amazon');
  if (flag && (img.length === 0)) {
    if (!confirm('画像がありません')) return;
    img = '<img src="https://medias.mine.nu/wp-content/uploads/2019/03/no_image300.jpg" style=" float: left; padding: 0.5em">';
  }
  txt += img;
  if ((amazon < 0) && (date.length > 0)) {
    var cdate = date.match(/(\d{4}).(\d{1,2}).(\d{1,2})/);
    if (cdate) {
      date = cdate[1] + '/' + ('00' + cdate[2]).slice(-2) + '/' + ('00' + cdate[3]).slice(-2);
      $('#date').val(date);
    }
    txt += '発売日：' + date + '\n\n<div style="clear: both;"></div>\n\n';
  }
  
  // 復元が必要であれば
  feel = feel.replace(/《/g,'〈').replace(/》/g,'〉');
  // とりあえず、外しておきます。

  txt += '<!--感想-->\n' + replaceReg( feel) + '\n\n\n';
  if (eng.length > 0) {
    // 戻す
    eng = eng.replace(/《/g,'{').replace(/》/g,'}');
    eng = replaceReg(eng);
    eng = eng.replace(/<\/ /g,'</').replace(/> </g,'><')
      .replace(/\(\^\s?_\s?\^;\)/g,'(^_^;)');
    txt += '<div style="border-top-style: double; border-bottom-style: double;">&lang;impressions&rang; \n\n' + eng + '\n</div>\n\n\n';
  }
  txt += '<div style="clear: both;"></div>'
  if (prof.length > 0) {
    if ($('#z').prop("checked")) {
      txt += "[材質等]\n\n";
    } else if ($('#title').val().indexOf('著') > 0) {
      txt += "[著者等(プロフィール)]\n\n";
    } else if (prof.match(/生年月日/)) {
      console.log('profile');
      txt += "[出演者(プロフィール)]\n\n";
    } else if ((prof.indexOf('監督') >= 0) || (prof.indexOf('演出') >= 0)) {
      txt += "[スタッフ・キャスト等]\n\n";      
    } else {
      if ($('#z').prop("checked")) txt += "[出演者(プロフィール)等]\n\n";
      txt += "[スタッフ・キャスト等]\n\n";
    } //else txt += "[キャスト・スタッフ等]\n\n";      
    txt += prof + '\n\n\n\n';
  }
  if (comment.length > 0) {
    txt += '<div style="padding: 10px; margin-bottom: 10px; border: 1px     dashed;"><!--コメント-->' + comment + '</div>\n\n\n\n';
  }
  if (append.length > 0)  {
    txt += '<!--追加コード-->' + append + '\n\n';
  }//alert(txt);
  txt += '<!--隠しコード--><div style="clear: both;"></div><h6 style="color: #888888">[' + hidden + ']</h6>';// + '\n\n';
  
  txt = txt.replace(/T00:00:01Z/g, '');
//  txt = replaceReg(txt); // Tag
  txt = replaceLink(txt); //Link
  txt = txt.replace(/\r|\n|\r\n/g, '<br>\n');
  txt = txt.replace(/(&lt;)/g, '<')
            .replace(/(&gt;)/g, '>')
            .replace(/(&quot;)/g,'"')
            .replace(/(&#39;)/g, "'")
            .replace(/(&amp;)/g, '&')
            .replace(/<\/p><br>\n/g,'</p>\n')
            ;
  
  txt += '<style> .m0 {text-indent: 0.8em; margin: -0.4em; line-height: 1.6em;} '
    + '.m1 {margin-bottom: -0.4em; font-weight: bolder;} '
    + '.m2 {font-size: larger; margin-bottom: -0.4em;} '
    + '.m3 {font-size: larger; margin-bottom: -0.4em; font-weight: bolder;} '
    + '.m4 {font-size: x-large; margin-bottom: -0.4em;} '
    + '.m5 {font-size: x-large; margin-bottom: -0.4em; font-weight: bolder;} '
    + '.n {color: #888888; font-size: smaller; text-indent: 0.8em; margin: -0.6em; line-height: 1.6em;}</style>';
  
  $("#code").val(txt);
  $("#preview_result").empty();
  var today = new Date();
  var tdate = ( today.getFullYear() * 10000 ) + (( today.getMonth() + 1 ) * 100 ) + today.getDate() ;
  var bd = txt.match(/\[nenrei \d{8}\]/g);
  if (bd) {
    txt = txt.replace(/\[nenrei \d{8}\]/g,function(match){
      return genzai(match);
   });
//    txt = txt.replace(bd[0], genzai(bd[1],'n'));
/*    for (var i = 0;i < bd.length;i++) {
      var bdate = bd[i].match(/\d+/);
      txt = txt.replace(
        bd[i],
        '<span style="color: #222288;">現在'
        + Math.floor((tdate - bdate)/10000)
        + '歳</span>');
    }
    document.getElementById('n').style.color = '#060';
    $('#n').text('（現在' + Math.floor((tdate - bdate)/10000) + '歳）');
    */
  }
  txt = pStyle + txt;
  txt = '<h2 style="background: rgba(255,36,36,0.2); border: solid 1px #ff8888;">' 
    + $('#title').val() + '</h2><br>' + txt;
  $(txt).appendTo($("#preview_result")); //$($("#code").val()).appendTo($("#preview_result"));
  
  aModal('コードを作成しました',"code");
  $('#ptabB').css('color','#f44');

  if (flag) {
   $('.nav-pills a[href="#tabB"]').tab('show');
  }
};


///////////////////////////
//        make code end
////////////////////////////



/////////////////////////////////////////
//     ease up
/////////////////////////////////////////
function search(url,item) {
  var items = ['class=','src=','alt=','width=','height=','style=','href='];
  for(var i = 0;i < items.length;i++) {
    if (items[i] != item) continue;
    var f = url.indexOf(item,0); if (f < 0) return "";
    f += 1 + item.length;
    var r = url.indexOf('"',f);
    //    alert( f + '+' + r + '+' + url.substring(f, r));
    return url.substring(f, r);
  }
};


$('#ease').click(function(){
  var txt,ease;
  var urlData = $('#url').val();

  if (urlData.length === 0) {
    alert("URL等を記入してください。");
    return;
  }
  var sp = urlData.split('/');
  ease = $("#selBox2").val();


  //------------ Okashi or Lemon ------------ 
  if (ease == "okashi-r") {
    var append = $('#append').val();
    var pid = urlData.match(/\/p\/(\d+?).html/);
    if (!pid) {alert('商品IDが見つかりません。確認してください。\n\n' + urlData);
      return;}
    var osnap = false;
    if (urlData.indexOf('okashik.atype', 0) > 0) {
      osnap = true;
    }
    
    $("#p-id").val(pid[1]);

    var file = document.getElementById('ofile').files[0];
    //  alert(typeof(file));
    if (typeof(file) == "undefined") {
      alert('ファイルが選択されていません'); return;
    } //else alert(file.name);
    if ($('#ofile').val().length === 0) {
      alert('ファイルが選択されていません'); return;   
    }
    if (window.File && window.FileReader && window.FileList && window.Blob) {
    } else {
      alert('The File APIs are not fully supported in this browser.');
    }


    var reader = new FileReader();
    reader.readAsText(file, 'UTF-8'); 
    alert("読み込み成功");
    var size = $("#size").val();
    if ((isNaN($("#size").val())) || (+$("#size") == 0)) {
      size = 500;
      $('#size').val("500");
    }
    var exist = false;
    var arr = reader.result.split(/\r\n|\r|\n/);
    var txt;
    for (var i in arr) {//arr.length;i++){
      if (!arr[i].startsWith(pid[1])) continue;
      exist = true;
      var ar = arr[i].split(',');
      if (osnap) {//okashi
        txt = imgShaping(ar[15], size) + '\n' + imgShaping(ar[16], size);
      } else {//lemonUp
        txt = ar[13].replace(' style="border : 1px solid #000000;"', ' ');
      }
      var mUrl = txt.match(/images\/(.+?)\//)
      $("#img").val(txt);
      if ($("#date").val().length == 0) {
        $("#date").val(ar[1]);
      }
      if ($("#title").val().length == 0) {
        $("#title").val(ar[2].replace('/','　'));
      }
      if (ar[7].length > 0) {
        if ($('#cmt').val().length == 0) $("#cmt").val(ar[7]);
      }

      if (append.length > 0) append +=  '\n\n\n\n[Sample Movie]\n\n';
      if (osnap) {
        var smp = ar[17].match(/width="(\d+?)".+?height="(\d+?)"/);
        if (smp) {
          var wh = 'width="' + parseInt(smp[1]) * 2 + '" height="' + parseInt(smp[2]) * 2
            + '" style="max-width:100%;"';
          ar[17] = ar[17].replace(smp[0],wh);
        }
        
//        if (mUrl) {
//            append += '<video width="100%" controls><source src="https://okashik.atype.jp/sample/'
//            + mUrl[1] + '.mp4"><p>ご使用のブラウザでは動画再生に対応していません</p></video>\n\n\n';
//          } else
        append += ar[17]  + '\n\n\n';
      } else {
        var smp = ar[14].match(/width:.+?height.+?;/);
        if (smp) ar[14] = ar[14].replace(smp,'width:700px;height:394px;max-width:100%;');
        append += ar[14]  + '\n\n\n';
      } // movie
      append += "[Snap Shots]" + '\n\n';
      for(var j = 0;j < parseInt(ar[3],10);j++) {
        if (osnap) {
          append += snap(ar[24 + j]);
        } else {
          append += snap(ar[21 + j]);
        }
      }
      if (osnap) {
        append += '\n\n出演作品（お菓子系）：' + ar[19]  + '\n';
      } else {
        append += '\n\n出演作品（LemmonUp）：' + ar[16]  + '\n';
      }
      $("#append").val(append);
      break;
    }
    if (exist === false) alert("商品が見つかりませんでした。");
    return;
  }

 
  //------------ NeoWing ------------ 
  if (ease == 'neo-r') {
    if (urlData.indexOf("www.neowing.co.jp") < 0) {alert("NeowingのURLではありません。"); return; }
    var spd = urlData.split('product/');
    var img = $("#img").val();
    var url = '<a href="https://www.neowing.co.jp/aff/click.cgi/PytJTGW7Lok/5651/A221250/product%2F' + spd[1] + '" target="_blank">';
    url += img + '</a>';
    $("#img").val(url);
    return;
  }


  //------------ surugaya ------------ 
  if (ease == 'suruga-r') {
    if (urlData.indexOf("www.suruga-ya.jp") < 0) {alert("駿河屋のURLではありません。"); return; }
    var spd = urlData.split('product/detail/');
    var img = $("#img").val();
    var url = '<a href="https://affiliate.suruga-ya.jp/modules/af/af_jump.php?user_id=1861&amp;goods_url=https%3A%2F%2Fwww.suruga-ya.jp%2Fproduct%2Fdetail%2F' + spd[1] + '" rel="nofollow" target="_blank">';
    if (img == "") {url += '<img src="https://www.suruga-ya.jp/database/pics/game/' + spd[1] + '.jpg" alt="' + $("#title").val() + '" style="border: none;" /></a>';
                   } else {url += img + '</a>';
                          }
    $("#img").val(url);
    return;
  }

  //------------ gekiyasu ------------
  if (ease == 'geki-r') {
    if (urlData.indexOf("www.gekiyasu-dvdshop.jp") < 0) {alert("激安のURLではありません。"); return; }
    var spd = urlData.split('detail');
    $("#p-id").val(spd[1]);
//    var res = urlData.indexOf(".jp/products/");
    var img = $("#img").val();
    var url = '<a href="http://www.gekiyasu-dvdshop.jp/affiliate/link.php?id=N0000044&adwares=A0000014&url=http%3A%2F%2Fwww.gekiyasu-dvdshop.jp%2Fproducts%2Fdetail' + spd[1] + '" target="_blank">' + img + '</a>';
    $("#img").val(url);
//    if (res == -1) return;
    if(confirm("Sample Movie'\nを作成しますか？"))
    {
      var append = $("#append").val();
      if (append.length > 0) append += '\n\n\n';
      var url = append + '<video width="100%" controls><source src="http://www.gekiyasu-dvdshop.pink/video/' + spd[1] + '.mp4"><p>ご使用のブラウザでは動画再生に対応していません</p></video>';
      $("#append").val(url);
    }
    //aModal('Start Scraping Gekiyasu','url');
    //scrapeGekiyasu(urlData);
    return;
  }

  //------------ DMM movie ------------
  if (ease == 'dsample-r') {
    var append = $("#append").val();
    if (urlData.indexOf('www.dmm.com') > 0) {
      var sp = urlData.match(/cid=(.+?)\//);
      if (sp) {
        if (append.indexOf(sp[1]) > 0) {
          alert("すでにSample動画があります");
          return;}
        var url = '<iframe type="text/html" src="https://www.dmm.com/service/digitalapi/-/html5_player/=/cid='
          + sp[1]
          + 'mtype=CARdWwNE/service=mono/floor=dvd/mode=/" id="DMMSample_player_now" scrolling="no" border="0" style="border:none;" allowfullscreen="" width="560" height="440" frameborder="0"></iframe>';
        $('#append').val(append + url);
        aModal('サンプル動画を追加しました','easeUp');
        return;
      }
      alert('サンプル動画が見つかりません');
      return;
    }
    if (urlData.indexOf("www.dmm.co.jp") < 0) {alert("ＤＭＭのURLではありません。"); return; }
    var r = urlData.indexOf('/?');
    if (r >= 0) urlData = urlData.substring(0, r);
    else urlData = urlData.substring(0, urlData.length -1);
    sp = urlData.split('/=/');
    if (append.indexOf(sp[1]) > 0) {
      alert("すでにSample動画があります");
      return;}
    var url = append + '<iframe width="644" height="414" src="https://www.dmm.co.jp/litevideo/-/part/=/affi_id=char-001/' +sp[1] + '/size=644_414/" scrolling="no" frameborder="0" allowfullscreen></iframe>';
    $("#append").val(url);
    aModal('サンプル動画を追加しました','easeUp');
    return;
  }

  //------------ Tokyo Hot ------------
  if (ease == 't-hot-r') {
    var pid = urlData.match(/tokyo-hot.com\/product\/(.+?)\//);
    if (pid) {
      var append = $('#append').val();
      if (append.length > 0) append +='\n\n\n';
      append += '<video width="100%" controls><source src="http://my.cdn.tokyo-hot.com/media/samples/' 
      + pid + '.mp4"><p>ご使用のブラウザでは動画再生に対応していません</p></video>';
      $('#append').val(append);
    } else aModal('Tokyo-HotのURLではありません','ease');
    return;
  }

  //------------ DMM ------------
  if (ease == 'dmm-r') {
    if (urlData.indexOf("www.dmm.") < 0) {aModal("ＤＭＭのURLではありません。",'ease'); return; }
    var img = $("#img").val();
//    if (img.length == 0) img = '<img src="../../no_image300.jpg">';
    var ssp = sp[8].split('=');
    var url = encodeURIComponent(urlData);
    url = '<a href="https://al.dmm.co.jp/?lurl=' + url + '%2F&af_id=char-001&ch=link_tool&ch_id=text" rel="nofollow" target="_blank">' + img + '</a>';
    $("#img").val(url);
    var cid = urlData.match(/\/cid=(.+?)\//);
    console.log(urlData);
    if (cid) {
      console.log('DMM cid = ' + cid[1]);
      if (urlData.match(/www.dmm.com/)) mainDmm2(cid[1]);
      if (urlData.match(/www.dmm.co.jp/)) mainDmm(cid[1]);
    }
    return;
  }


  //------------ APEX -----------
  if (ease == 'apex-r') {
    if (urlData.indexOf("duga.jp") < 0) {aModal("APEXのURLではありません。",'ease'); return; }
    var pId = urlData.match(/ppv\/(.+?)\//);
    if (!pId) return;
    var img = $('#img').val();
    if (img.indexOf(pId[1]) < 0) {// image
      img += '<a href="https://click.duga.jp/ppv/' + pId[1] + '/40739-01" rel="nofollow"></a>';
      $('#img').val(img);
    }

    var smpl = $('#append').val();
    if (smpl.indexOf(pId[1]) < 0) {// Sample Movie
      smpl += '<div style="max-width:100%;" id="dugaflvplayer-' + pId[1] 
        + '" data-w="756" data-h="420" data-o="dugaflvplayer-' + pId[1]
        + '" data-l="ppv" data-p="' +pId[1]
        + '" data-a="40739" data-b="01"><a href="https://click.duga.jp/ppv/' + pId[1]
        + '/40739-01" target="_blank">' 
        + $('#title').val()
        + '</a></div><script type="text/javascript" src="https://ad.duga.jp/flash/dugaflvplayer.js" defer></script>';
      $('#append').val(smpl);
    }
    
    var items = pId[1].split('-');
    if (items.length > 1) {// Sample Image
      var delImg = document.getElementById('dmmImage');
      if (delImg) delImg.remove();
      var el = document.getElementById('tabD');
      var aImg = document.createElement('img');
      aImg.src = 'https://pic.duga.jp/unsecure/' + items[0] + '/' + items[1]
        + '/noauth/jacket.jpg';
    
     $.cookie('dmmImage',aImg.src,{expires: 14 , path:'/'});

      aImg.id = 'dmmImage';
      el.appendChild(aImg);
      console.log(aImg.src);
      aModal('APEX Image を作成','p-ID');
    }

    return;
  }

  //------------ DTI ------------
  if (ease == 'dti-r') {
    var site = [
      '18',
      '450',
      '352',      
      '6',
      '290',
      '365',
      '320',
      '361',
      '292',
      '262',
      '356',
      '286'
    ];

    var org = [
      "1pondo.tv",
      "heyzo.com",
      "heydouga.com",
      "caribbeancom.com",
      "caribbeancompr.com",
      "muramura.tv",
      "pacopacomama.com",
      "nyoshin.com",
      "10musume.com",
      "h4610.com",
      "kin8tengoku.com",
      "h0930.com"
    ];

    var mov = [
      "/1080p.mp4",
      "heyzo.com",
      "heydouga.com",
      "/sample_m.mp4",
      "/sample_m.mp4",
      "muramura.tv",
      "/480p.mp4",
      "nyoshin.com",
      "/1080p.mp4",
      "h4610.com",
      "kin8tengoku.com",
      "h0930.com"];
    
    var des = [
      "9018999-18-184037",
      "9450999-450-184037",
      "9352999-352-184037",
      "9006999-6-184037",
      "9290999-290-184037",
      "9365999-365-184037",
      "9320999-320-184037",
      "9361999-361-184037",
      "9292999-292-184037",
      "9262999-262-184037",
      "9356999-356-184037",
      "9286999-286-184037"
    ];

    for (var i in org) {
      if (urlData.indexOf(org[i], 0) > 0) {
        var res = urlData.indexOf("/movie");
        if (res == -1) break;
        var img = $("#img").val();
        var url = '<a href="https://click.dtiserv2.com/Direct/' + des[i] + urlData.substring(res) + '" target="_blank">';
        $("#img").val(url + img + '</a>');
        var str = urlData.split('/');
//            for (var i in str) {
//              alert(str[i]);
//            }
        var test = "script>";
        var append = $("#append").val();
        if (append.length > 0) {
          append += '\n\n\n';
        }
        if (mov[i].indexOf('/') < 0) {
          append += url + '[Sample Movie (Original Site)]</a>';
        } else {
          append += '<script name="setAffplayer' + str[4] + '" id="setAffplayer' + str[4] + '" type="text/javascript" src="https://affiliate.dtiserv.com/js/setAffplayerVideo.js?affid=184037&siteid=' + site[i] + '&video=https://smovie.' + org[i] + '/sample/movies/' + str[4] + mov[i] + '&img=https://www.' + org[i] + '/moviepages/' + str[4] + '/images/l_t.jpg&w=640&h=388&url=https://www.' + org[i] + '&id=' + str[4] + '&m_flag=1"></' + test;
        }
        $('#append').val(append);
        break;
      }
    }
    return;
  }

  //------------ MGS ------------
  if (ease == 'mgs-r') {
    if (urlData.indexOf("www.mgstage.com") < 0) {alert("ＭＧＳのURLではありません。"); return; }
    var aid = 'script>';
//    sp = urlData.split('/');
    txt = '<a href="' + urlData + '?aff=8IMROFDGQICYG35O5PYD6L72F3" target="_blank">' + $("#img").val() + '</a>';
    $("#img").val(txt);
    txt = $('#append').val() + '<script type="text/javascript" charset="utf-8" src="https://www.mgstage.com/js/mgs_sample_movie.js?p=' + sp[5] + '&r=1&c=8IMROFDGQICYG35O5PYD6L72F3"></' + aid;
    $('#append').val(txt);
    return;
  }
  
  
  //----------- Delta ----------
  if (ease == 'delta-r') {
    if (urlData.indexOf('girlsdelta.com') < 0) {
      alert("GirlsDeltaのURLではありません。"); return;
    }
txt = '<a href="http://refer.ccbill.com/cgi-bin/clicks.cgi?CA=933350-0000&PA=2611967&HTML=http://www.girlsdelta.com/product/';
    txt += sp[4] + '" target="_blank">' + $('#img').val() + '</a>';
    $('#img').val(txt);
  }
  
  
  //----------- Test Scrape ----------
  if (ease == 'scrape-r') {
    aModal('Start Scraping Gekiyasu','url');
    scrapeTest(urlData);
  }
 
 
  //------------ FC2 ------------
 if (ease == 'fc2-r') {
    if (urlData.indexOf('fc2.com/') < 0) {
      alert("FC2のURLではありません。"); return;
    }
    var sp = urlData.split('/');
    $('#append').val('<iframe width="700" height="394" style="max-width:100%;" src="https://adult.contents.fc2.com/embed/' + sp[4] + '?i=TVRjM05UUTFORFE9&info=0&logo=0" frameborder="0" allowfullscreen></iframe>');
    $('#p-no').val('FC2 PPV ' + sp[4]);
    $('#img').val('<div class="sample_block"><a href="https://adult.contents.fc2.com/aff.php?aid=' + sp[4] + '&affuid=TVRjM05UUTFORFE9" target="_blank">' + $('#title').val() + '</a></div>');
  }
});

//////////////////////////////////////
//////////// Ease up END /////////////
//////////////////////////////////////


var saveToCookie = function(num = 500){
//  var date=new Date();
//  date.setTime(date.getTime() + (60*60*1000));
  var txt = allToText();//encodeURIComponent(allToText());
  for (var i = 0;i < txt.length / num;i++) {
    $.cookie('codeMaker' + i,txt.substr(i * num, num),{expires: 14 , path:'/'});
  }
  $.cookie('codeMaker',txt.length / num,{expires: 14 , path:'/'});
  
/*  $.cookie("c01",$('#title').val(),{expires: 7 });
  $.cookie("c02",$('#date').val(),{expires: 7 });
  $.cookie("c03",$('#p-id').val(),{expires: 7 });
  $.cookie("c04",$('#p-no').val(),{expires: 7 });
  $.cookie("c05",$('#img').val(),{expires: 7 });
  $.cookie("c06",$('#append').val(),{expires: 7 });
  $.cookie("c07",$('#feel').val(),{expires: 7 });
  $.cookie("c08",$('#prof').val(),{expires: 7 });
  $.cookie("c09",$('#cmt').val(),{expires: 7 });
  $.cookie("c10",$('#code').val(),{expires: 7 });
  $.cookie("c11",$('#ofile').val(),{expires: 7 });
  $.cookie("c12",$("#url").val(),{expires: 7 });
  $.cookie("c13",$("#english").val(),{expires: 7 });
  $.cookie("c14",$("#n").text(),{expires: 7 });
  $.cookie("c15",$("#imgURL").text(),{expires: 7 });*/
//  $.cookie("size",$("#size").val(),{expires: 7 });
};

var allFromCookie = () => {
  var no = $.cookie('codeMaker');
  if (!no) return(false);

  var txt = '';
  for (var i = 0;i < no;i++) {
    txt += $.cookie('codeMaker' + i);
  }

  //txt = decodeURIComponent(txt);
  var txts = txt.split('\t');
  for (var item of txts) {
    var el = item.match(/<!-- (.+?) -->([\S\s]*)/);
    if (el) {
      $('#' + el[1]).val(el[2]);
    }
  }
  return(true);
 };


var allToText = () => {
  var txt = '<!-- title -->' + $('#title').val() + '\t';
  txt += '<!-- date -->' + $('#date').val() + '\t';
  txt += '<!-- p-no -->' + $('#p-no').val() + '\t';
  txt += '<!-- p-id -->' + $('#p-id').val() + '\t';
  txt += '<!-- img -->' + $('#img').val() + '\t';
  txt += '<!-- feel -->' + $('#feel').val() + '\t';
  txt += '<!-- english -->' + $('#english').val() + '\t';
  txt += '<!-- prof -->' + $('#prof').val() + '\t';
  txt += '<!-- cmt -->' + $('#cmt').val() + '\t';
  txt += '<!-- append -->' + $('#append').val() + '\t';
  txt += '<!-- url -->' + $('#url').val() + '\t';
  txt += '<!-- imgURL -->' + $('#imgURL').val() + '\t';
  txt += '<!-- ofile -->' + $('#ofile').val() + '\t';
  txt += '<!-- n -->' + $('#n').val() + '\t';
  return (txt);
}


$('#save').click(function(){
  var fileName = $('#title').val().substr(0,32) + '.txt'; 
  saveToFile(allToText(),fileName);
});


var saveToFile = function(txt,fileName){
  let blob = new Blob([txt],{type:"text/plan"});
  let link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
//  URL.revokeObjectURL();
//del  changed = false;
  document.getElementById( "changed" ).innerHTML = '';
};


function load(){
  var file = document.getElementById('selfile').files[0];
  if (file.name.indexOf('.opml') >= 0)
  {
    readOpml(file);
    return;
  }
  if (file.name.indexOf('.txt') < 0)
  {
    alert('テキストファイルではありません。');
    return;
  }
 if (typeof(file) == "undefined") {
    alert('ファイルが選択されていません'); return;
  }
  if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
    alert('The File APIs are not fully supported in this browser.')
  }
  var reader = new FileReader();
  reader.readAsText(file, 'UTF-8');

  reader.onloadend = function() {
    
    //var enc = encodeURIComponent(reader.result);
    //console.log(enc);
    //console.log(decodeURIComponent(enc));

    alert("読み込み成功");
    var txt = reader.result.split('\t');
    for (var line of txt) {
      var ele = line.match(/<!-- (.+?) -->([\S\s]*)/);
      if (ele) {
        $('#' + ele[1]).val(ele[2]);
      }
      console.log(line);
    }
/*    addition('#title',txt[0]);
    addition('#date',txt[1]);
    addition('#p-no',txt[2]);
    addition('#p-id',txt[3]);
    addition('#img',txt[4]);
    addition('#feel',txt[5]);
    addition('#english',txt[6]);
    addition('#prof',txt[7]);
    addition('#cmt',txt[8]);
    addition('#append',txt[9]);
    addition('#url',txt[10]);
    addition('#imgURL',txt[11]);*/
    document.getElementById( "changed" ).innerHTML = '';
  };
};


function snap(img) {
  var im = search(img, 'src=');
//  var li = search(img, 'href=');
  return('<a href="' + im + '"><img src="' + im + '" width="300" style="max-width:100%;height:auto;margin:5px;"></a>');
};


function addition(id,txt){
  var i = txt.indexOf('>');
  if (i > 0) {
  $(id).val(txt.substring(i + 1));
  }
};


function imgShaping( img,size,b) {
  var res;
  var rate;
  img = img.replace(' style="border : 1px solid #000000;"', ' ');
  var f = img.indexOf('width="');
  var r = img.indexOf('" ',f + 7);
  var width = search(img,'width=');
  var ff = img.indexOf('height="');
  var rr = img.indexOf('" ',ff + 8);
  var height = search(img,'height=');
    if (width > height) {
      rate = size / width;
      height = Math.round(height * rate);
      width = size;
    } else {
      rate = size / height;
      width = Math.round(width * rate);
      height = size;      
    }
  res = img.substring(0, f) + 'width="' + width + '" height="' + height + '" target="_blank"' + img.substring(rr);
  return res;
};


function ShowChange() {
  var txt = document.getElementById( "feel" ).value;
  genzai($('#prof').val(),'n');
  document.title = $('#title').val();
  console.log($('title').val())
//del  changed = true;
  document.getElementById( "changed" ).innerHTML = ' *'
  document.getElementById( "mojisuu" ).innerHTML = '' + txt.length; //.length.toString();
  makeCode(false);
};


function imageFocus() {
  var img = $('#img').val();
  if (img.indexOf('://www.amazon') > 0) {
    $('#date').css('color','#faa');
    var date = $("#date").val();
    if (date.length > 0) return;
    var rez = img.match(/\d{4}\D\d{1,2}\D\d{1,2}/);
    if (rez){
      var repl = rez[0].replace(/-/g,'/');
      $('#img').val(img.replace(rez,repl));
      $('#date').val(repl);
    }
  } else {
    $('#date').css('color','#fff');
  }
};


function dateClick(){
  $('#date').css('color','#fff');
};


function ShowLength(){
  var txt = document.getElementById( "feel" ).value;
  document.getElementById( "mojisuu" ).innerHTML = '' + txt.length.toString();
};


//$('#size').select2({
//  placeholder: '画像サイズ',
//  allowClear: true,
//  allowClear: false,
//  tags: true
//});


function getSelect(){
  var ease = $("#selBox2").val();
  var area = document.getElementById("url");
  area.focus();
  area.select();
  document.execCommand("Copy");
  area.value ='';
  switch (ease) {
    case "dti-r":
    case "dmm-r":
    case "mgs-r":
    case "neo-r":    
    case "delta-r":
    case "suruga-r":
    case "fc2-r":
    case "geki-r":
      $('#date').css('color','#fff');
      $(".id-okashi").prop('disabled', true);
      $("#p-id").prop('disabled',true); return;
    case "okashi-r":
      $('#date').css('color','#fff');
      $(".id-okashi").prop('disabled', false);
      $("#p-id").prop('disabled',false); return;
    default: 
      $('#date').css('color','#fff');
      $(".id-okashi").prop('disabled', true);
      $("#p-id").prop('disabled', true);
  }
};


///////////////////////////////
/////// Select Function ///////
///////////////////////////////

function getInsert3(){
  $('.sub').css('display','none');
  var item = $('#partsItem').val();
  switch (item) {
    case 'mp4' :
      $('#partsTitle').text('動画ファイル[mp4,etc]');
      $('#partsTxt').attr('placeholder','画像ファイルのアドレス');
      $('#partsSubTxt').attr('placeholder','画像ファイル')
        .css('display','block');
      return;
    case 'link' :
      $('#partsTitle').text('リンク先アドレス');
      return;
    case 'wiki' :
      $('#partsTitle').text('[Wiki(JP)]アイテム');
      return;
    case 'wikiUS' :
      $('#partsTitle').text('[Wiki(US)]アイテム');
      return;
    case 'girl' :
      $('#partsTitle').text('[女の子が好き]検索 アイテム');
      return;
    case 'note' :
      var num = noteNum();
      $('#partsTitle').text('注釈-[' + num + ']');
      return;
    case 'tag' :
      $('#partsTitle').text('挿入するタグ');
      return;
    default : 
      $('#partsTitle').text('部品追加 [' + item + ']');
  }
};


$('#alertModal').on('show.bs.modal', function(){
  var myModal = $(this);
  clearTimeout(myModal.data('hideInterval'));
  myModal.data('hideInterval', setTimeout(function(){
    myModal.modal('hide');
  }, 500));
});


$('#alertModal').on('hidden.bs.modal',function(){
  var p = $('#str2').text();
  document.getElementById(p).focus();
});


$('#sampleModal').on('hidden.bs.modal',function(){
  var p = $('#str4').text();
  document.getElementById(p).focus();
});


//------------------------------
//            部品挿入
//------------------------------

function menuF(id,item){
  var area = document.getElementById(id);
  area.focus();
  var start = area.value.substring(0,area.selecmptionStart);
  var selected = area.value.substring(area.selectionStart,area.selectionEnd);
  var end = area.value.substring(area.selectionEnd);
  var cursor = area.selectionStart;
  var txt = $('#partsTxt').val();
  var sub = $('#partsSubTxt').val();

  switch(item) {
    case 'scrape' :
      selected = selected.toLowerCase().replace('-','');
      if (id == 'p-no') {
        scrapeDmm($('#p-no').val().toLowerCase().replace('-',''));}
      if (id == 'prof') {
        if (selected.length > 0) addWiki(selected,false);
        else addWiki($('#prof').val(),false);
      }
      if (id = 'feel') {
        testFetch($('#feel').val());
      }
      break;
    case "date" : //日付
      var date = new Date();
      area.value = start + date.toDateString() + ' ' + ('0' + date.getHours()).slice(-2)
        + ':' + ('0' + date.getMinutes()).slice(-2)
        + ':' + ('0' + date.getSeconds()).slice(-2)
        + ' (JST)' + end;
      break;
    case 'under' : //アンダーライン
      area.value = start + '<u>' + selected + '</u>' + end;
      break;
    case 'bold' : //ボールド
      area.value = start + '<b>' + selected + '</b>' + end;
      break;
    case 'clear' : //クリアー
      area.value = ''; return;
    case 'copyClear' : //コピーしてクリア
      area.select();
      document.execCommand("Copy");
      area.value = ''; return;
    case 'copyAll' : //すべてコピー
      area.select();
      document.execCommand("Copy"); return;
    case 'redo' : //やり直し
      document.execCommand("redo"); return;
    case 'copy' : //コピー
      document.execCommand("Copy"); return;
    case 'cut' : //カット
      document.execCommand("cut"); return;
    case 'do-paste' : //ペースト
      var txt = $('#InputTextarea').val();
      area.value = start + txt + end; return;
    case 'paste' : //オリジナル　ペースト
      var key = document.execCommand("paste");
      if (!key) {
        $('.str1').text(id);
        $('#InputTextarea').val('');
        $('#inputModal').modal();
      } return;
    case 'selAll' : //すべて選択
      area.select(); return;
    case 'parts' : // モーダル　部品
      $('.str3').text(id);
      $('#partsModal').modal();
      break;
    case 'b-quot' : // 引用 B-Quote
      area.value = start + "<blockquote>" +  selected + "</blockquote>" + end;
      break;
    case 'blooming' : //吹き出し
      area.value = start + '<div class="speech-wrap sb-id-3 sbs-line sbp-l sbis-cb cf"><div class="speech-person"><figure class="speech-icon"><img class="speech-icon-image" src="https://nomado.mine.nu/wp-content/themes/cocoon-master/images/b-man.png" alt="man" /></figure></div><div class="speech-balloon"><p>' +  selected + '</p></div></div>' + end;
      break;
    case 'dot' : //点線
      area.value = start + '<div style="padding: 10px; margin-bottom: 10px; border: 1px dashed;"><!--コメント-->' + selected + '</div>' + end;
      break;
    case 'double': //上下二重線-impression&CR
      area.value = start + '<div style="border-top-style: double; border-bottom-style: double;">&lang;impressions&rang; \n\n' + selected + ' \n\n</div>' + end; 
      break;
    case 'mp4' : //MP4
      if (txt == '') txt = prompt('リンク先アドレス');
      if ((txt == null) || (txt == "")) return;
      txt = txt.replace('https', 'http');
      if (txt.match(/^\/\//)) txt = 'http:' + txt;
      area.value = '<video width="100%" controls poster="' + sub + '" src="' + txt 
        + '"><p>ご使用のブラウザでは動画再生に対応していません</p></video>\n\n' + start + selected + end;
//      area.value = start + '<video width="100%" controls><source src="' + txt 
//      + '"><p>ご使用のブラウザでは動画再生に対応していません</p></video>' + selected + end;
      break;
    case 'link' : //リンク
      if (txt == '') txt = prompt('リンク先アドレス');
      if ((txt == null) || (txt == "")) return;
      area.value = start + '[' + selected + '](' + txt + ')' + end;
      break;
    case 'wiki' : //Wiki JP
      if (selected == '') {
        if (txt == '') txt = prompt('[wiki]アイテム');
        if ((txt == null) || (txt == "")) return;
      } else txt = selected;
      area.value = start + '[' + txt + '](W)' + end; 
      break;
    case 'girl' : //女の子が好き
      if (selected == '') {
        if (txt == '') txt = prompt('[女の子が好き]検索 アイテム');
        if ((txt == null) || (txt == "")) return;
      } else txt = addWiki(selected,true);
      area.value = start + txt + end; 
      break;
    case 'wikiUS' : //Wiki US
      if (selected == '') {
        if (txt == '') txt = prompt('[wiki(US)]アイテム');
      } else txt = selected;
      area.value = start + '[' + txt + '](U)' + end; 
      break;
    case 'strong' : //強調
      area.value = start + '<strong>' + selected + '</strong>' + end;
      break;
    case 'italic' : //斜体
      area.value = start + '<i>' + selected + '</i>' + end;
      break;
    case 'kasen' : //アンダーライン
      area.value = start + '<span class="kasen">' + selected + '</span>' + end;
      break;
    case 'wavy' : //下線波
      area.value = start + '<span class="wavy">' + selected + '</span>' + end;
      break;
    case 'through' : //取り消し
      area.value = start + '<span class="through">' + selected + '</span>' + end;
      break;
    case 'marker' : //マーカー
      area.value = start + '<span class="marker">' + selected + '</span>' + end;
      break;
    case 'gray' : //グレー
      area.value = start + '<span class="gray">' + selected + '</span>' + end;
      break;
    case 'ff' : //FF
      area.value = start + '（FF）' + selected + end;
      break;
    case 'lf' : //LF
      area.value = start + '（FF）' + selected + end;
      break;
    case 'ff' : //FF
      area.value = start + '（FF）' + selected + end;
      break;
    case 'daishou' :
      area.value = start + '&lang;' + selected + '&rang;' + end;
      break;
    case 'tag' : //タグ
      if (txt == '') txt = prompt('挿入するタグ');
      if ((txt == null) || (txt == "")) return;
      area.value = start + '<' + txt + '>' + selected + '</' + txt + '>' + end; break;
    case 'note' : //注釈
      var app = $('#append').val();
      var num = noteNum();
      if (num == 1) {
        if (app.length > 0) app += '\n'; 
        app += '＜注釈＞';
      }
      if (txt == '') txt = prompt('注釈-[' + num + ']');
      if ((txt == null) || (txt == '')) return;
      area.value = start + selected + '<a href="#note-' + num + '" id="note-to-' + num + '">[' + num + ']</a>' + end;
      app += '\n<a href="#note-to-' + num + '" id="note-' + num + '">[' + num + ']</a> ' + txt;
      $("#append").val(app);
      break;
      
    default : //デフォルト 
      alert('"' + item +'"\nメニューにない項目です');
  };
  area.focus();
  area.setSelectionRange(start.length,area.value.length - end.length);
};


var dblClick = function() {
  var area = document.getElementById($('#str3').text());
  var selected = area.value.substring(area.selectionStart,area.selectionEnd);
//  console.log(selected.length,$('#str3').text(),$('#p-no').val());
  if ((selected.length == 0) && ($('#str3').text() == 'p-no')) {
    selected = $('#p-no').val();
  }

  // 動画の画像ファイル
  var img = $('#append').val().match(/img src="(.+?)"/);
  if (img) $('#partsSubTxt').val(img[1]);
  else {
    var img = $('#img').val().match(/img src="(.+?)"/); 
    if (img) $('#partsSubTxt').val(img[1]);
    else {
      var img = $('#dmmImage').attr('src');
      if (img.length > 0) {
        $('#partsSubTxt').val(img)
      }
    }
  }

  $('#partsTxt').val(selected);
  getInsert3();
  $('#partsModal').modal();
  area = document.getElementById('partsTxt');
  area.focus();
  
};


var outFocus = function(item) {
  $('#str3').text(item);
  $('#str4').text(item);
  csrChange('auto','outFocus');
  imageFocus();
};


function noteNum(){
  var txt = $("#append").val();
  var res = txt.match(/\[\*{0,1}\d+?\]/g);
  if (res) return (res.length);
  else return (0);
};


$("#partsClear").click(function(){
  $("#partsSubTxt").val('');
  $("#partsTxt").val('');
});


function replaceReg(txt){
  var regs = 
      [['~~~','~~~','wavy'],
       ['___','___','kasen'], // Wavy
       ['\\*\\*\\*','***','marker'],
       ['~~','~~','through'],
       ['__','__','italic'],
       ['\\*\\*','**','bold'],
       ['``','``','gray'],
       ['`','`','code']
      ];
  for (var i = 0;i < regs.length;i++){
    var words = txt.match(new RegExp(regs[i][0] + '.{1,}?' + regs[i][0],'g'));
    if (words != null) {
      for (var word of words){
        var strs = word.split(regs[i][1]);
        var str = '<span class="' + regs[i][2] + '">' + strs[1] + '</span>';
        txt = txt.replace(word,str);
      };
    };
  };
  return txt;
};


function replaceLink(txt){

//  txt = txt.replace(/\] +\(/g,'](');
  var lin = txt.match(/\[.+?\][\s\S ]?\(.+?\)/g);
  if (lin)
    for (i = 0;i < lin.length;i++) {
      var item = lin[i].match(/\[(.+?)\][\s ]?\((.+?)\)/);
      if (item[2].length < 4)
        item[2] = item[2].toUpperCase();
      var makeL;
      switch (item[2]) {
        case 'L' :
          makeL = '<a href="' + item[1] + '" target="_blank">' + item[1] + '</a>';
          txt = txt.replace(lin[i],makeL);
          break;
        case 'S' :
          makeL = '<a href="' + item[1] + '" target="_blank">' + item[1] + '</a>';
          txt = txt.replace(lin[i],makeL);
          break;
        case 'M' :
          makeL = '<a href="https://medias.mine.nu/?s=' + item[1] + '" target="_blank">' + item[1] + '</a>';
          txt = txt.replace(lin[i],makeL);
          break;
        case 'U' :
          makeL = item[1] + '<a href="ttps://en.wikipedia.org/wiki/' 
          + item[1] + '" target="_blank">[wiki(US)]</a>';
          txt = txt.replace(lin[i],makeL);
          break;
        case 'W' :
          makeL = item[1] + '<a href="https://ja.wikipedia.org/wiki/' 
          + item[1] + '" target="_blank">[wiki(JP)]</a>';
          txt = txt.replace(lin[i],makeL);
          break;
        case 'G' :
          makeL = '<a href="https://girls.galleria.mine.nu/?s=' + item[1] + '" target="_blank">' + item[1] + '</a>';
          txt = txt.replace(lin[i],makeL);
          break;
        case 'GW' :
        case 'WG' :
          makeL = '<a href="https://girls.galleria.mine.nu/?s=' + item[1] + '" target="_blank"><span class="m2">' + item[1] + '</span></a><a href="https://ja.wikipedia.org/wiki/' 
            + item[1] + '" target="_blank">[wiki(JP)]</a>';
          txt = txt.replace(lin[i],makeL);
          break;
        default :
          break;
      }
      txt = txt.replace(lin[i],'<a href="' + item[2]
           + '" target="_blank">' + item[1]
           + '</a>');
    }
  return txt;
};


function replaceTag(txt){//-[nn]- note を変換
  var rez = '';
  var max = txt.match(/max ?= ?(\d+?) ?layer ?=/);
  var txts = txt.split(/\r|\n|\r\n/g);
  for (var i = 0;i < txts.length;i++) {
    var line = txts[i];
    if (line.match(/max ?= ?(\d+?) ?layer ?=/)) break;
    if (line.indexOf('[*]') == 0) {
      rez += '<div class="n">' + line.substr(3) + '</div>\n';
    continue;
    }
    if (line.match(/\[\*\d+?\]/)) {
      var notes = line.match(/\[\*\d+?\]/g);
      for (var n of notes) {
        var nn = n.match(/\d+/);
        line = line.replace(n, '<a href="#note-' + nn + '">[' + nn + ']</a>');
      }
    }
//    rez += '<div class="m';
    var n = line.match(/^\-\[(\d+?)\]\-/);
    if (n && max) {
      rez += '<h' + (parseInt(max[1]) + 1 - parseInt(n[1])) + '>' 
      +  line.replace(n[0],'') + '</h' + (parseInt(max[1]) + 1 - parseInt(n[1])) + '>\n';
    } else {
      if (line == '') rez += '\n';
      else rez += '<p>' + line + '</p>\n';
    }

  }
  return rez;
};


function readOpml(file){
  var reader = new FileReader();
  reader.readAsText(file, 'UTF-8');
  reader.onloadend = function (){
    var main = $('#feel').val();
    if (main != '') main += '\n\n';
    var sub = $('#append').val();
    if (sub != '') sub += '\n\n';
    var layer = 0; var max = 0;
    var noteNo = noteNum();
    var rez = reader.result;
    var lines = rez.split(/\r|\n|\r\n/g);
    for (var l = 0;l < lines.length;l++) {
      if (lines[l].indexOf('</outline>') >= 0) {
        layer--;
        continue;
      }
      if (lines[l].indexOf('<outline text=') >=0){
        var strs = lines[l].split('"');
        if (layer == 0)
          $('#title').val(strs[1]);
        else
          main += '-[m' + layer + ']-' + strs[1] + '\n';
        switch (strs[2]) {
          case '>' :
            layer++;
            if (max < layer) max = layer;
            break;              
          case '/>' :
            break;
          case ' _note=' :
            var notes = strs[3].split('&#10;');
            var nFlag = false;
            for (var n = 0;n < notes.length;n++) {
              if (notes[n].indexOf('[*]') == 0) {
                // 注釈
                notes[n] = notes[n].replace('[*]','');
                var sss = strs[1].replace('[*]','[*' + noteNo + ']');
               sub += '<div class="m0"><a href="#note-to-' + noteNo + '" id="note-' + noteNo + '">[' + noteNo + ']</a> ' + notes[n] + '</div>\n';
                main = main.replace(strs[1], sss);
                strs[1] =sss;
                noteNo++;
                nFlag = true;
              } else {
                if (nFlag) sub += '<div class="m0">' + notes[n] + '</div>\n'; // 注釈続き
                else {
                  var img = notes[n].match(/img src=/);
                  if ((layer == 0) && (img)) {
$('#img').val(decodeURI(notes[n]));
                  } else
                    main += '[*]' + notes[n] + '\n';
                }// note
              }
            }
            if (strs[4] == '>') {
              layer++;
              if (max < layer) max = layer;
            }
            break;
          default :
            alert('default <<' + strs[2] +'>>');

        }
      }
    }
//    main += 'max = ' + max + ' layer = ' + layer;
    main = main.replace(/\n{3,}/g, '\n\n');

    // 再変換
    lines = main.split(/\r|\n|\r\n/g);
    main = '';
    for (var i = 0;i < lines.length;i++){
      var m = lines[i].match(/^\-\[m(\d)\]\-(.*)/);
      if (m) {
        var h =  3 + parseInt(m[1]); - max;
        if (h == 5) main += '<p>' + m[2] + '</p>';
        else {
          main += '<h' + h + '>';
          if (m[2]) main += m[2];
          main += '</h' + h + '>';
        }
      } else main += '<p>' + lines[i] + '</p>';

    }

    $('#wEditor').trumbowyg('html', main);
    wEditorToFeel();
    $('#append').val(sub);
    alert('Read OPML Complete !!\n\nmax=' + max + ' layer=' + layer);
  };
};


var addWiki = function(txt,long) {
  var strs = txt.split('\t');
  var str;
  if (strs.length > 1) str = strs[1];
  else str = strs[0];
  str = str.replace(/[ ／]/g,'、');
  var names = str.split(/[ ・／、]/);
  var l = names.length;
  var nDim = [];

  for (var i = 0;i < l;i++) {
    if ((names[i].match(/人目/)) || (names[i] == '') || (names[i].match(/[\[()].*?[\])]/))) continue;
    names[i] = names[i].replace('?','');
    var m = names[i].match(/\[.+?\]\((.+?)\)/);
    if (m) {//alert(m)
      nDim.push(m[1]); //scrapeMinna(m[1],long);
    }
    else {// alert(names[i])
      nDim.push(names[i]); //scrapeMinna(names[i],long);
    }
  }
//alert(nDim);
  scrapeMinna(nDim,long);
//  $('#title').val('出演：' + str);
//return txt;
//  if (long) return '';
  return (str);
};

  
$('.example').click(function(){
  var id = $('#str4').text();
  var item = $(this).data('value');
 //  if (item)
  menuF(id, item);
  $('#sampleModal').modal('hide');
  var area = document.getElementById(id);
  area.focus();
});


$('#imgAdd').click(function(){
  //test data
  if ($('#imgURL').val() == '')
    $('#imgURL').val(
  '<img src="https://girls.galleria.mine.nu/wp-content/uploads/2021/05/81fopuIpC2L._AC_SL1500_.jpg" alt="マジメで無口な幼馴染がモジモジ誘惑パンチラで全力アピール チラ見する僕に興奮しちゃって濡れ染みびっちょり！ 八木奈々" height="1500" class="alignnone size-full wp-image-29176" /><img src="https://girls.galleria.mine.nu/wp-content/uploads/2021/05/9mide822pl.jpg" alt="マジメで無口な幼馴染がモジモジ誘惑パンチラで全力アピール チラ見する僕に興奮しちゃって濡れ染みびっちょり！ 八木奈々" width="800" height="439" class="alignnone size-full wp-image-29177">\n<img src="https://girls.galleria.mine.nu/wp-content/uploads/2021/05/51Kom8naX1L._AC_.jpg" alt="その爽やかさ、反則 成宮りか SOD専属AVデビュー" width="352" height="500" class="alignnone size-full wp-image-29158" /><img src="https://girls.galleria.mine.nu/wp-content/uploads/2021/05/81MYsbx1quL._AC_SL1500_-1.jpg" alt="姉の挑発を真に受けた童貞弟がイッてるのに気づかず爆走ピストン　深田えいみ" width="1054" class="alignnone size-full wp-image-29168" />\n<img src="https://girls.galleria.mine.nu/wp-content/uploads/2021/05/f6191719fff91f4f7382ef5a89ccbacd.jpg" alt="「頭の中がおち○ちんの事でいっぱいなんです…」 竹内乃愛 思春期の少女がハマるおち○ぽ研究" width="800" height="537" class="alignnone size-full wp-image-29151" />\n<img src="https://girls.galleria.mine.nu/wp-content/uploads/2021/05/DHgLx2wV0AAUwBm.jpg" alt="「頭の中がおち○ちんの事でいっぱいなんです…」 竹内乃愛 思春期の少女がハマるおち○ぽ研究" class="alignnone size-full wp-image-29153" />'
  );

  var num;
  var ap = $('#imgURL').val().match(/<img .+?>/g);
  if (!ap) {
    alert('画像ファイルがありません。');
    return;
  }
  var is = $('#size').val();
  if (parseInt(is) < 1) {
    
  }
  $('#imageSize').val($('#size').val());
  $('#imageThumb').val(300);
  var ele =  
      document.getElementById('imageList');
  var clone = ele.cloneNode( false ); //ガワだけ複製して…
ele.parentNode.replaceChild( clone , ele ); //すげ替え。 
  for (var i = 0;i < ap.length;i++) {
    addNode(ap[i],true,ap.length,i);
  }
  $('#imageModal').modal();
});
    

//////////////////////////
//------- ADD Node -------
//////////////////////////

var addNode = function(ap,b,max,num) {
  if (ap == '') return;
  var imgList = document.getElementById('imageList');
  var el = document.createElement('li');
  var cName = 'list-group-item dark imgNo' + num; 
  el.className = cName;
  el.id = 'imgNo' + num;
  imgList.appendChild(el);

  var inp = document.createElement('input');
  inp.className = 'form-check-input col-sm-1';
  inp.type = 'checkbox';
  var check = 'imgCheck' + num;
  inp.setAttribute('id',check);
  el.appendChild(inp);
  if (b) inp.checked = 'true';
  
  var sel = document.createElement('select');
  sel.className = 'imgSelect' + num;
  sel.setAttribute('id', 'imgSelect' + num);
  var att = "numChange('" + num + ',' + max + "')";
  sel.setAttribute(
    'onchange',att);
  sel.style = 'color: #220022;';
  for (var i = 0;i < max;i++) {
    var n = document.createElement('option');
    n.textContent = String(i);
    if (i == num) 
      n.selected = true;
    sel.appendChild(n);
  }
  el.appendChild(sel);

  var image = ap.match(/src=\"(.*?)\"/);
  var alt = ap.match(/alt=\"(.*?)\"/);
  if (!alt) ap = ap.substring(0,ap.lastIndexOf('"')) + '" alt="" />';
  var width = ap.match(/width=\"(.*?)\"/);
  var height = ap.match(/height=\"(.*?)\"/);

  if (image) {
    var img = document.createElement('a');
    img.href = image[1];
    img.target = '_blank';
    
    var src = document.createElement('img');
    src.src = image[1];
    src.className = 'img-rounded img-thumnail mx-1';
    src.height = 100;
    img.appendChild(src);
    el.appendChild(img);
  }

  var size = $('#imageSize').val();
  var wid = document.createElement('span');
  if (!width) {
    wid.style = 'color: #ff8888;';
    wid.textContent = ' No Width';
  } else {
    if (parseInt(width[1]) / parseInt(size) > 1.4)
      wid.style = 'color: #226622;';
    else
      wid.style = 'color: #aa2222;';
    wid.textContent = ' ' + width[0];
  }
  wid.id = 'width' + num;
  el.appendChild(wid);
  //  } //else {ap = ap.substring(0,ap.lastIndexOf('"'))  + '" width="" />';}
  
  //  if (height) {
  var hei = document.createElement('span');
  if (!height) {
    hei.style = 'color: #ff8888;';
    hei.textContent = ' No Height';
  } else {
    if (parseInt(height[1]) / parseInt(size) > 1.4)
      hei.style = 'color: #226622;';
    else hei.style = 'color: #aa2222;';
    hei.textContent = ' ' + height[0];
  }
  hei.id = 'height' + num;
  el.appendChild(hei);
    //  } //else {ap = ap.substring(0,ap.lastIndexOf('"')) + '" height="" />';}
  if (!width || !height) imgSize(image[1],num);
  
  var hi = document.createElement('span');
  hi.style = 'color: #aaaa66';
  hi.setAttribute('id', 'numOld' + num);
  hi.value = ap;
  hi.textContent = String(num);
  el.appendChild(hi);
  
  var al = document.createElement('input');
  var altNum = 'alt' + num;
  al.setAttribute('id',altNum);
  if (alt)
    al.value = alt[1];
  al.style = 'width: 100%;'
  al.className = 'alt dark';
  altNum = 'altChange("' + num + '")';
  al.setAttribute('onchange',altNum);
  el.appendChild(al);
  if ((!alt) || (alt[1] == ''))
    el.style = 'background-color: #fcc;';

};


var numChange = function(item){
  var items = item.split(',');
  var num = $('#imgSelect' + items[0] ).val();
  var old = $('#numOld' + items[0] ).text();
  for (var i = 0;i < items[1];i++) {
    var n = $('#imgSelect' + i).val();
    if ((String(i) != String(item[0]))
         && (String(n) == String(num))) {
      $('#numOld' + item[0]).text(num);
      $('#numOld' + i).text(old);
      $('#imgSelect' + i).val(old);
        break;
    }
  }
};


$('#imageImage').click(function(){
  mainImage();
  makeCode(false);
});


$('#imageAppend').click(function(){
  subImage();
  makeCode(false);
});


$('#imageOK').click(function(){
  mainImage();
  subImage();
  makeCode(false);
});


$('#imgClear').click(function(){
  $('#imgURL').val('');
});


$('#iCl').click(function(){
  $('#imgURL').val('');
});


var imgSize = (url,num) => {
  var element = new Image() ;
  element.onload = function () {
    var s = $('#imageSize').val();
    var size = new Object();
    size.w = element.naturalWidth ;
    size.h = element.naturalHeight ;
//  alert(size.width)
    var wid = document.getElementById('width' + num);
    wid.textContent = ' width="' + size.w + '"';
    if (parseInt(size.w) / parseInt(s) > 1.4)
      wid.style = 'color: #226622; background-color: #ddd;';
    else
      wid.style = 'color: #aa2222; background-color: #ddd;';
    var hei = document.getElementById('height' + num);
    hei.textContent = ' height="' + element.naturalHeight + '"';
    if (parseInt(size.h) / parseInt(s) > 1.4)
      hei.style = 'color: #226622; background-color: #ddd;';
    else
      hei.style = 'color: #aa2222; background-color: #ddd;';

  return size;
  }

  element.src = url ;
};


altChange = (num) => {
  var img = document.getElementById('imgNo' + num);
  if ($('#alt' + num).val().length > 0) {
    img.setAttribute('style','background-color: #fff;');
  } else {
    img.setAttribute('style','background-color: #fcc;');
  }
};


mainImage = () => {
  for (var i = 0;;i++) {
    var num = $('#imgSelect' + i).val();
    if (!num) break;
    if (num == '0') {
      var alt = ' alt="' + $('#alt' + i).val() + '"';
      var width = $('#width' + i).text().match(/.?width=\"(\d+?)\"/);
      var height = $('#height' + i).text().match(/.?height=\"(\d+?)\"/);
      var rate;
      var size = parseInt($('#imageSize').val());

      if ((isNaN(size)) || (parseInt(size) == 0)) {
        size = 500;
        $('#size').val("500");
      }

      var style = ' style="max-width: ' + size + 'px; max-height: ' + size
        + 'px; border: none; float: left; padding: 0.5em" class="align-top"';

      if ((width) && (height)) {
        if (parseInt(width[1]) > parseInt(height[1])) {
          rate = size / width[1];
          height[1] = Math.round(height[1] * rate);
          width[1] = size;
        } else {
          rate = size / height[1];
          width[1] = Math.round(width[1] * rate);
          height[1] = size;      
        }
      }

      var item = $('#numOld' + i).val();
      var src = item.match(/src=\"(.*?)\"/);
      var img = $('#img').val();
      
      var link = img.match(/\[\]\((.+?)\)/);
      if (link) {
//        img = img.replace(link.[0],'[' + )
      }
      var orgImage = img.match(/<img(.+?)>/);

      var altImage = '<img ' + src[0] + alt + style;
      if (width) altImage += ' width="' + width[1] + '"';
      if (height) altImage += ' height="' + height[1] + '"';
      altImage += '>';

      var ahref = img.match(/<a href=.+?>/g);
      if (orgImage) {
        $('#img').val(img.replace(orgImage[0],altImage));
      } else if (ahref) {
        $('#img').val(img.substring(0,img.indexOf(ahref[0]) + ahref[0].length)
        + altImage + img.substring(img.indexOf(ahref[0]) + ahref[0].length));
      } else {
        $('#img').val('[' + altImage + '](' + src[1] + ')' + img);
      }
      return;
    }
  }
  alert('タイトル画像用データがありません');
};


subImage = () => {
  var app = $('#append').val();
  var sub = '';
  var max;
  var size = parseInt($('#imageThumb').val());
  for (max = 0;;max++) {
    if (max > 100) break;
    if (!$('#numOld' + max).val()) break;
  }

  for (var no = 0;no < max + 1;no++) {//no = object No
    for (var i = 0;i < max;i++) {//i = search No
      var num = $('#imgSelect' + i).val();
      if (!num) break;
      if (num == no) {
        if (document.getElementById('imgCheck' + i).checked == false) break;
        var item = $('#numOld' + i).val();
        if (!item) break;

        var src = item.match(/src=\"(.*?)\"/);

        if (app.match(src[1])) break;

        var width = $('#width' + i).text().match(/width=\"(\d+?)\"/);
        var height = $('#height' + i).text().match(/height=\"(\d+?)\"/);
        var alt = $('#alt' + i).val();

        var rate;
        if ((width) && (height)) {
          if (parseInt(width[1]) > parseInt(height[1])) {
            rate = size / width[1];
            height[1] = Math.round(height[1] * rate);
            width[1] = size;
          } else {
            rate = size / height[1];
            width[1] = Math.round(width[1] * rate);
            height[1] = size;      
          }
        }

        sub += '[<img src="' + src[1] + '" alt="' + alt + '" style="max-width: ' + size + 'px; max-height: ' + size 
          +'px; padding: 10px; vertical-align: baseline;"';

        if (width) sub += ' width="' + width[1] + '"';
        if (height) sub += ' height="' + height[1] + '"';

        sub +='>](' + src[1] + ')';
//        console.log(sub);

        break;
      }
    }
  }
  if ((app != '') && (sub != '')) app += '\n\n';
  $('#append').val(app + sub);
};


/////////////////////////////////////////
//                                     //
//                Scraping             //
//                                     //
/////////////////////////////////////////


var scraping = (url) => {

  var key = 'ak-nve11-shv51-c72g7-6xnnp-kr5e3';

alert(url);
  var option = {url:url,renderType:"HTML",outputAsJson:true};
  var payload = JSON.stringify(option);
  payload = encodeURIComponent(payload);
  var urlx = "https://phantomjscloud.com/api/browser/v2/"+ key +"/?request=" + payload;                
alert('urlx = ' + urlx);

fetch(urlx, {
  method: "GET",
}).then(response => response.text())
.then(text => {
  alert('status = ' + JSON.parse(text)["content"]["statusCode"]);
  alert('Json = ' + JSON.parse(text)["content"]["data"]);
  saveToFile(JSON.parse(text)["content"]["data"],'test.txt');
  alert('fetch = ' + text);
});

/*var xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.send();
xhr.onload = ()=> {
  alert('XMLHttp = ' + xhr.response);
};*/


/*  var response = UrlFetchApp.fetch(url);
alert(response);
  var json = JSON.parse(response.getContentText());
  saveToFile(json,'test.txt');
  saveToFile(json["content"]["data"],'scraping.txt');
  return (json["content"]["data"]);*/

}

var scrapeAll = (title,retry = 0) => {
  if (retry > 5) return true;
  var key = 'ak-nve11-shv51-c72g7-6xnnp-kr5e3';

  var url = 'https://www.allcinema.net/search?send_type=form&mypage_off=&search_exist=1&search_target=all&search_word='
  + title;

  var option = {url:url,renderType:"HTML",outputAsJson:true};
  var payload = JSON.stringify(option);
  payload = encodeURIComponent(payload);
  var urlx = "https://phantomjscloud.com/api/browser/v2/"+ key +"/?request=" + payload;

  setTimeout(function() {

    fetch(urlx, {
      method: "GET",
    }).then(response => response.text())
      .then(text => {
      if (JSON.parse(text)["content"]["statusCode"] != '200'){
       if (confirm('fetch search error\n\ncode:' + JSON.parse(text)["content"]["statusCode"])) {
       retry++; return (scrapeAll(title,retry)); }
       return(false);
     }
      var json = JSON.parse(text)["content"]["data"];

      var target = json.match(/https:\/\/www.allcinema.net\/cinema\/(\d+)/);
      if (target) {
        url = target[0];
        option = {url:url,renderType:"HTML",outputAsJson:true};
        payload = encodeURIComponent(JSON.stringify(option));
        urlx = "https://phantomjscloud.com/api/browser/v2/"+ key +"/?request=" + payload;


        setTimeout(function() {

          fetch(urlx,{// 該当cinema
            method: "GET",}).then(response => response.text()).then(text => {
            if (JSON.parse(text)["content"]["statusCode"] != '200')
            { alert('fetch search error\n\ncode:' + JSON.parse(text)["content"]["statusCode"]);
             retry++; return (scrapeAll(title,retry));}

            json = JSON.parse(text)["content"]["data"];
            saveToFile(json,title + '.txt');
            // do something
          });
        },1000);        

      }
      alert('fetch = ' + text);
      return true;
    });
  },1000);
}

var scrapeTest = (url,retry = 0) => {
  console.log(url);
//  alert('sub = ' + name);
  if (retry > 5) {aModal('retry Over : Gekiyasu','url'); 
    csrChange('auto','2304'); return(false);}
  csrChange('wait','2305');
  var key = 'ak-nve11-shv51-c72g7-6xnnp-kr5e3';

  var option = {url:url,renderType:"HTML",outputAsJson:true};
  var payload = encodeURIComponent(JSON.stringify(option));
  var urlx = "https://phantomjscloud.com/api/browser/v2/"+ key +"/?request=" + payload;

  setTimeout(function() {
    fetch(urlx,{method: "GET",}).then(response => response.text()).then(text => {
      saveToFile(text,'Test-pre-json'+ '.txt');
      if (JSON.parse(text)["content"]["statusCode"] != '200') {
        if (confirm('fetch search error\n\ncode:' + JSON.parse(text)["content"]["statusCode"])) {
          retry++; return (scrapeGekiyasu(url,retry));
        }
//      saveToFile((text),'Gekiyasu-pre'+ '.txt');
        csrChange('auto','2320');
        return(false);
      }
      var json = JSON.parse(text)["content"]["data"];
//alert('fetch end sub = ' + url + '   ' + name);
      csrChange('auto','2325');
      aModal('scraping Gekiyasu Ends','url');
      saveToFile(json,'Test-content-data.txt');
      return (true);
    })
  },2000);
};

testFetch = (url) => {
  var key = 'ak-nve11-shv51-c72g7-6xnnp-kr5e3';
  var option = {url:url,renderType:"HTML",outputAsJson:true};
  var payload = JSON.stringify(option);
  payload = encodeURIComponent(payload);
  var urlx = "https://phantomjscloud.com/api/browser/v2/"+ key +"/?request=" + payload;


  setTimeout(function() {

    fetch(urlx)
    .then(response => {
      console.log(response.json());
      console.log('読み込み成功');
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log('わかっていない');
    })
    .catch(error => {
     console.log("失敗しました");
    }); 


  },1000);
}

asDmm = (pNo) => {
  var url = '<iframe width="644" height="414" src="https://www.dmm.co.jp/litevideo/-/part/=/affi_id=char-001/cid=';
  url += pNo + '/size=644_414/" scrolling="no" frameborder="0" allowfullscreen></iframe>';

  var img = 'https://pics.dmm.co.jp/mono/movie/adult/miaa466/miaa466pl.jpg';

  var p = $('#append').val();
  if (!p.match(url)) {
    if (p.length > 1) url = p + '\n\n\n' + url;
    $('#append').val(url); 
  } 

  img = '<a href="https://al.dmm.co.jp/?lurl=https%3A%2F%2Fwww.dmm.co.jp%2Fmono%2Fdvd%2F-%2Fdetail%2F%3D%2Fcid%3D'
    + pNo + '%2F&af_id=char-001&ch=link_tool&ch_id=text" rel="nofollow"></a>';
  p = $('#img').val();
  if (!p.match(img)) $('#img').val(img + p);
}


var mainDmm = (cid,retry = 0) => {
  aModal('main cid ' + cid,'DMM');
  if (retry > 5) {
    alert('retry Over mainDmm: ' + cid);
    csrChange('auto','2384 mainDmm');
    return(false);
  }
  csrChange('wait','2417 mainDmm');
  var key = 'ak-nve11-shv51-c72g7-6xnnp-kr5e3';
  var url = 'https://www.dmm.co.jp/age_check/=/declared=yes/?rurl=https%3A%2F%2Fwww.dmm.co.jp%2Fmono%2Fdvd%2F-%2Fdetail%2F%3D%2Fcid%3D'
    + cid;

  var option = {url:url,renderType:"HTML",outputAsJson:true};
  var payload = JSON.stringify(option);
  payload = encodeURIComponent(payload);
  var urlx = "https://phantomjscloud.com/api/browser/v2/"+ key +"/?request=" + payload;

  setTimeout(function() {
    fetch(urlx,{method: "GET",}).then(response => response.text()).then(text => {
      if (JSON.parse(text)["content"]["statusCode"] != '200') {
//        alert('fetch20 search error\n\ncode:' + JSON.parse(text)["content"]["statusCode"]);
        retry++; return (mainDmm(cid,retry));}
      var json = JSON.parse(text)["content"]["data"];//.replace(/\r|\n|\t/g,'');

      var title = json.replace(/\r|\n|\t/g,'').match(/<h1.*?>(.+?)<\/h1>/);
      if (title) {
        if ($('#title').val().length < 1) 
          $('#title').val(title[1].replace('/','　')); 
      } else alert('no title !');

      var cmt = json.replace(/\r|\n|\t/g,'').match(/<p class="mg-b20">(.+?)<\/p>/);
      if (cmt) $('#cmt').val(cmt[1]); else alert('no comment !');//発売日：</td>

      var date = json.match(/発売日：.+?\s.+?(\d{4}\/\d{2}\/\d{2})/);
      if (date) $('#date').val(date[1]); else alert('no date !');

      var prof = $('#prof').val();
      if (prof.length > 0) prof = '\n\n' + prof;

      var perform = '';
//      var act = json.match(/id="performer">\s.+>(.+)<\/a/);
      var act = json.match(/出演者(.+?\s)*?<\/tr/);
      if (act) {
        var acts = act[0].match(/>[^<]+?<\/a/g);
        console.log(act[0]);
        if (acts) {
          var actless = acts[0].substr(1,acts[0].length - 4);
          perform = '出演：' + actless;
          if (title) {
            console.log('title ',title)
            console.log(' ' + actless + '$')
            var acter = title[1].match(new RegExp(' ' + actless + '$'));
            if (acter) $('#title').val(
              $('#title').val().replace(acter,'　' + actless)
            );
          }
          for (var i = 1;i < acts.length;i++) {
            if (acts[i].length < 6) continue;
            perform += '、' + acts[i].substr(1,acts[i].length - 4);
            console.log(perform);
          }
        }
      }
      var per = json.match(/<td.+?>監督：.+>\s.+>(.+)<\/a/);
      if (per) {
        if (perform.length > 0) perform += '\n';
        perform += '監督：' + per[1];
      }

      if (perform.length > 0) $('#prof').val(perform + prof);

      var el = document.getElementById('tabD');

      var delImg = document.getElementById('dmmImage');
      if (delImg) delImg.remove();
  
      var imgUrl = json.match(/(https:\/\/pics\.dmm\.co.+?\.jpg)/)
      if (imgUrl) {
        var img = document.createElement('img');
        img.src = imgUrl[1].replace('ps.jpg','pl.jpg');
        img.id = 'dmmImage';
        el.appendChild(img);

        $.cookie('dmmImage',img.src,{expires: 14 , path:'/'});

        aModal('FANZA Image を作成','p-ID');
      }
      saveToFile(json,'mainDmm2' + '.txt');
      csrChange('auto','mainDmm-2');

    })
  },1000);

};


var mainDmm2 = (cid,retry = 0) => {
  aModal('main cid ' + cid,'mainDmm2');
  if (retry > 5) {
    alert('retry Over mainDmm 2 : ' + cid);
    csrChange('auto','mainDmm2');
    return(false);
  }
  csrChange('wait','mainDmm2-1');
  var key = 'ak-nve11-shv51-c72g7-6xnnp-kr5e3';
  var url = 'https://www.dmm.com/mono/dvd/-/detail/=/cid='
    + cid;

//  $('#title').val(url); if (url != cid) {csrChange('auto'); return(false);}
  var option = {url:url,renderType:"HTML",outputAsJson:true};
  var payload = JSON.stringify(option);
  payload = encodeURIComponent(payload);
  var urlx = "https://phantomjscloud.com/api/browser/v2/"+ key +"/?request=" + payload;
//alert('test = ' + url);
  setTimeout(function() {
    fetch(urlx,{method: "GET",}).then(response => response.text()).then(text => {
      if (JSON.parse(text)["content"]["statusCode"] != '200') {
        retry++; return (mainDmm2(cid,retry));}

      var json = JSON.parse(text)["content"]["data"];//.replace(/\r|\n|\t/g,'');

//      saveToFile(json,'mainDmm2' + '.txt');
      var title = json.replace(/\r|\n|\t/g,'').match(/<h1.*?>(.+?)<\/h1>/);
      if (title) {
        if ($('#title').val().length < 1) 
          $('#title').val(title[1].replace('/','　')); 
      } else alert('no title !');

      var cmt = json.replace(/\r|\n|\t/g,'').match(/<p class="mg-b20">(.+?)<\/p>/);
      if ((cmt) && ($('#cmt').val().length < 1)) $('#cmt').val(cmt[1]); else alert('no comment !');//発売日：</td>
//<td width="100%">2021/02/25</td>

      var date = json.match(/発売日：.+?\s.+?(\d{4}\/\d{2}\/\d{2})/);
      if ((date) && ($('#date').val().length < 1) ) $('#date').val(date[1]); else alert('no date !');

      var prof = $('#prof').val();
      if (prof.length > 0) prof = '\n\n' + prof;

      var perform = '';
      var act = json.match(/出演者(.+?\s)*?<\/tr/);
      if (act) {
        var acts = act[0].match(/>[^<]+?<\/a/g);
        console.log(act[0]);
        if (acts) {
          perform = '出演：' + acts[0].substr(1,acts[0].length - 4);
          for (var i = 1;i < acts.length;i++) {
            if (acts[i].length < 6) continue;
            perform += '、' + acts[i].substr(1,acts[i].length - 4);
            console.log(perform);
          }
        }
      }
      var per = json.match(/<td.+?>監督：.+>\s.+>(.+)<\/a/);
      if (per) {
        if (perform.length > 0) perform += '\n';
        perform += '監督：' + per[1];
      }

      if (perform.length > 0) $('#prof').val(perform + prof);

/*      var act = json.match(/<td.+?>出演者：.+>\s.+>(.+)<\/a/);
      if (act) {
        var prof = $('#prof').val();
        if (prof.length > 0) prof = '\n\n' + prof;
        $('#prof').val(act[1] + prof);
      }*/

      var imgUrl = 'https://pics.dmm.com/mono/movie/adult/'
        + cid + '/' + cid + 'pl.jpg';

      var el = document.getElementById('tabD');

      var delImg = document.getElementById('dmmImage');
      if (delImg) delImg.remove();
  
      var img = document.createElement('img');
      img.src = imgUrl;
      img.id = 'dmmImage';
      $.cookie('dmmImage',img.src,{expires: 14 , path:'/'});

      el.appendChild(img);

      $('#ptabD').css('color','#f44');
      aModal('Dmm Image を作成','p-ID');

//      saveToFile(json,'mainDmm2' + '.txt');
      csrChange('auto','mainDmm2-2');

    })
  },1000);

};


var scrapeDmm2 = (pNo,retry = 0) => {
  if (retry > 5) {
    alert('retry Over DMM 2 : ' + pNo);
    csrChange('auto','scrapeDmm2');
    return(false);
  }
//  csrChange('wait','scrapeDmm2-1');
  var key = 'ak-nve11-shv51-c72g7-6xnnp-kr5e3';
  var url = 'https://www.dmm.com/search/=/searchstr=' + pNo;

  var option = {url:url,renderType:"HTML",outputAsJson:true};
  var payload = JSON.stringify(option);
  payload = encodeURIComponent(payload);
  var urlx = "https://phantomjscloud.com/api/browser/v2/"+ key +"/?request=" + payload;
//alert('test = ' + pNo);
  aModal('fetch No = ' + pNo,'DMM 2');
  setTimeout(function() {
    csrChange('wait','scrapeDmm2-1');
    fetch(urlx,{method: "GET",}).then(response => response.text()).then(text => {
//      alert('fetch = ' + pNo);
      if (JSON.parse(text)["content"]["statusCode"] != '200') {
        if (confirm('fetch search error (scrapeDmm2)\n\ncode:' + JSON.parse(text)["content"]["statusCode"]))
          {retry++; return (scrapeDmm2(pNo,retry));}
        return(false);
      }
      var json = JSON.parse(text)["content"]["data"];//.replace(/\r|\n|\t/g,'');

      var dvdUrl = json.match(/<a href="(https:\/\/www.dmm.com\/mono\/dvd\/.\/detail\/=\/cid=.+?\/)/);
      if (!dvdUrl) {//https://www.dmm.co.jp/mono/dvd/-/detail/=/cid=1ienf124/
        dvdUrl = json.match(/<a href="(https:\/\/www.dmm.com\/rental\/ppr\/.\/detail\/=\/cid=.+?\/)/);
        if (!dvdUrl) {csrChange('auto','scrapeDmm2-2'); return (false);}
      }
      var cid = dvdUrl[1].match(/cid=(.+?)\//);
      if (! cid) {
        alert('error Data Dmm 2 : \n\n' + dvdUrl[1]); csrChange('auto','scrapeDmm2-3');
        return(false);}

      mainDmm2(cid[1]);

      csrChange('auto','scrapeDmm2-4');

    })
  },1000);
//alert('after Timeout');
//  csrChange('auto');

};  


var scrapeDmm = (pNo,retry = 0) => {
  if (retry > 5) {
    alert('retry Over DMM : ' + pNo);
    csrChange('auto','scrapeDmm');
    return(false);
  }
//  csrChange('wait','scrapeDmm-1');
  var key = 'ak-nve11-shv51-c72g7-6xnnp-kr5e3';
  var url = 'https://www.dmm.co.jp/search/=/searchstr=' + pNo;

  var option = {url:url,renderType:"HTML",outputAsJson:true};
  var payload = JSON.stringify(option);
  payload = encodeURIComponent(payload);
  var urlx = "https://phantomjscloud.com/api/browser/v2/"+ key +"/?request=" + payload;
//alert('test = ' + pNo);
  aModal('fetch No = ' + pNo,'DMM');
  setTimeout(function() {
    csrChange('wait','scrapeDmm-1');
    fetch(urlx,{method: "GET",}).then(response => response.text()).then(text => {
      var status = JSON.parse(text)["content"]["statusCode"];
      if (status == '424') {
//        csrChange('auto');
        return( scrapeDmm2(pNo,retry));
      } else if (status != '200') {
        if (confirm('fetch search error (scrapeDmm)\n\ncode:' + JSON.parse(text)["content"]["statusCode"])) {
        retry++; return (scrapeDmm(pNo,retry));}
        return(false);
      }
      var json = JSON.parse(text)["content"]["data"];//.replace(/\r|\n|\t/g,'');
      var reg = '<a href="https://www.dmm.co.jp/mono/dvd/./detail/=/cid=(.*?' + pNo + ')/';
      var cid = json.match( new RegExp(reg));
      if (!cid) {//https://www.dmm.co.jp/mono/dvd/-/detail/=/cid=1ienf124/
        reg = '<a href="https://www.dmm.co.jp/rental/ppr/./detail/=/cid=(.*?' + pNo + ')/';
        cid = json.match( new RegExp(reg));
        if (!cid) {
          alert('error Data : ' + reg); csrChange('auto','scrapeDmm-2');
          return (false); }
      }
//      var cid = cid[1].match(/cid=(.+?)\//);

      asDmm(cid[1]);

      mainDmm(cid[1]);

    })
  },1000);
//alert('after Timeout');
//  csrChange('auto');

};

var scrapeMinnaSub = (name,long,retry = 0) => {
//  alert('sub = ' + name);
  if (retry > 5) {alert('retry Over : ' + name); 
    csrChange('auto','minna-sub'); return(false);}
  csrChange('wait','minna-sub-1');
  var key = 'ak-nve11-shv51-c72g7-6xnnp-kr5e3';
  var url = 'http://www.minnano-av.com/' + name;

  var option = {url:url,renderType:"HTML",outputAsJson:true};
  var payload = encodeURIComponent(JSON.stringify(option));
  var urlx = "https://phantomjscloud.com/api/browser/v2/"+ key +"/?request=" + payload;

  aModal('fetch No = ' + name,'minna-sub');
  setTimeout(function() {
    fetch(urlx,{method: "GET",}).then(response => response.text()).then(text => {
      if (JSON.parse(text)["content"]["statusCode"] != '200') {
        if (confirm('fetch search error\n\ncode:' + JSON.parse(text)["content"]["statusCode"])) {
        retry++; return (scrapeMinnaSub(name,long,retry));}
        return(false);
      }
      var json = JSON.parse(text)["content"]["data"];
      aModal('fetch end sub = ' + url , name);
      jsonToProfile(json,long);
      csrChange('auto','minna-sub-2');
      return (true);
    })
  },2000);
}


var scrapeMinna = (names,long = true,no = 0, retry = 0) => {
  if (retry > 5) {alert('retry Over : ' + names[no]); 
    csrChange('auto'); return(false);}
  csrChange('wait');
//alert(names[no] + ' retry = ' + retry + ' no = ' + no);
  var key = 'ak-nve11-shv51-c72g7-6xnnp-kr5e3';
  var url = 'http://www.minnano-av.com/search_result.php?search_scope=actress&search_word='
    + names[no];
  var option = {url:url,renderType:"HTML",outputAsJson:true};
  var payload = JSON.stringify(option);
  payload = encodeURIComponent(payload);
  var urlx = "https://phantomjscloud.com/api/browser/v2/"+ key +"/?request=" + payload;

  aModal('fetch No = ' + names[no],'minnano-av');
  setTimeout(function() {
    fetch(urlx,{method: "GET",}).then(response => response.text()).then(text => {
      if (JSON.parse(text)["content"]["statusCode"] != '200') {
        if (confirm('fetch search error\n\ncode:' + JSON.parse(text)["content"]["statusCode"])) {
        retry++; return (scrapeMinna(names,long,no,retry));}
        return(false);
      }
      var json = JSON.parse(text)["content"]["data"];
      if (!json.match(/<!-- Act-Profile/)) {
//        alert(2);
        var newUrl = json.match(/<a href="actress\d+?.html\?.+?">/g);
        if (newUrl) {
          for (var i = 0;i < newUrl.length;i++){
//            alert(newUrl[i]);
            var u = newUrl[i].match(/"(actress\d+?.html)\?(.+?)"/);
            if (u[2].match(/【登録重複】/)) continue;
            if (!newUrl[i].match(names[no])) continue;
//            alert('actress = ' + u[1]);
            scrapeMinnaSub(u[1],long);
      no++; if (names[no]) scrapeMinna(names,long,no);
      return true;
          }
        }        //if (newUrl) scrapeMinna(newUrl[1],long);
      } 
//alert('fetch end = ' + url + '   ' + names[no]);
      jsonToProfile(json,long);
      csrChange('auto');
//alert('back from profile = ' + names[no]);
      no++; if (names[no]) scrapeMinna(names,long,no);
    })
  },2000);
};


jsonToProfile = (json,long) => {
//  saveToFile(json,'birth' + '.txt');
//alert('profile 1');<span>(.+?)<\/span><p>(.+?[\s\S]?.*[\)）]?).*?<\/p
  var prof = '';
  json = json.replace(/\r|\n|\t/g,'');
  var items = json.match(/<td><.+?>.+?<\/.+?>.*?[\s\S]?.*?<\/td>/g);

  for (var i = 0;i < items.length;i++) {
    var item = items[i].match(/<h2>(.+?) (（.+?)</);
    if (item) {
      console.log('i = ' + i + prof);
      aModal('profile ' + item[1] + ' を作成しました');
      prof = '[' + item[1] + '](GW) ' + item[2] +'\n';
      continue; 
    }

    item = items[i].replace(/<a href=.+?>/g,'').replace(/<\/a>/g,'')
      .replace(/<td><span>/,'').replace(/<\/span><p>/,' ')
      .replace(/<\/p><\/td>/,'');
      console.log(item);

    if (item.match(/タグ/)) {
      console.log('find TAG!!!! ' + item);
      break;
    }

    if (item.match(/生年月日/)) {
//      console.log (strBirth( $('#date').val(),item));
//      item = item.replace(/[\(（].*?[）)]/,'');
      prof += '\n' + strBirth( $('#date').val(),item);
//      birthDay(item);
      console.log(prof);
      continue;
    }

    var sec = item.match(/(.+?) (.*)/);
    if (sec) {

      if ((sec[2] == '') && (!long)) continue;

      var a = sec[2].match(/(.+?)([\(（].+[\)）])/);
      if (a) {
        if ((sec[1].match(/愛称/)) || (sec[1].match(/別名/)))
          sec[2] = sec[2].replace(a[1],'[' + a[1] + '](G)');
      }

      if (sec[2].match(/http/)) {
        sec[2] = '[' + sec[2] + '](L)';
      }
      console.log('i = ' + i);
      if ((i > 0) &&(items[i - 1].match(sec[1]))) prof += '、' + sec[2];
      else {
//        if (prof.substring(prof.length -1) != '\n') 
        prof += '\n';
        if (long) prof += '\n';
//       var s = item[2].match(/[\(（].+[\)）](.+)/);
//        if (s) 
//        if (item[1] == '生年月日') prof += '生年月日 ' + birthDay(item[2]);
//        else 
        prof += sec[1] + ' ' + sec[2];
      }
    }

  }
  var p = $('#prof').val();
//  if (p.match(prof)) return;
  if (p.length > 1) prof = p + '\n\n\n' + prof;

  $('#prof').val(prof);

}


csrChange = (csr,line = 'unknown') => {
  console.log('cursor ',csr,'line ',line);
  $('body').css('cursor',csr);
  $('input').css('cursor',csr);
  $('textarea').css('cursor',csr);
  $('label').css('cursor',csr);
}


/*var birthDay = (item) => {
  var bd = item.match(/(\d{4})年(\d{1,2})月(\d{1,2})日(.*)/);
  if (!bd) {return ''; }

  var sd = $('#date').val();

  var toji = nToji(sd, bd[1] + '-' + bd[2] + '-' + bd[3]);
  var ima = nenreiT(bd[1] + '-' + bd[2] + '-' + bd[3]);

  var n = bd[1] + '年' + bd[2] + '月' + bd[3] + '日（';
  if (sd.length > 0) n += '当時' + toji + '歳、';
  n += '現在[nenrei '
    + bd[1] + ('0' + bd[2]).slice(-2)  + ('0' + bd[3]).slice(-2)
    + ']歳）';
  if (bd[4]) n += bd[4];
  return (n);
}*/


aModal = (txt,ele = 'codeMaker',t = 10000) => {
  $('#aTxt-1').text(ele);
  $('#aString-1').text(txt);
  $('#aString-1').css('color','#f88');

  setTimeout(function() {
    $('#aString-1').css('color','#770');
  },t);
}

$('.alert-dismissible').on('click',function(){
  $('.alert-dismissible').css('display','none'); 
})


$('.nav-pills a').on('hidden.bs.tab', function (event) {
  var pill = $(event.target).attr('href').match(/tab\D/g);
  if (!pill) return;

  if (pill[0] =='tabA') {// alert('tab A')"rep"
    $('#max').css('display','inline-block');
    $('#mainTitle').text('メインに戻るhidden');
    return;
  }
  $('#p' + pill[0]).css('color','#8c8');
 });

/*$('.nav-pills a').on('hide.bs.tab', function (event) {
})*/

$('.nav-pills a').on('shown.bs.tab', function (event) {
  console.log($(event.target).attr('href'));

  if ($(event.target).attr('href').match('tabC')) {// alert('tab D')
    $('#sale-d').val($('#date').val());
  }
/*  if ($(event.relatedTarget).attr('href').match('tabA')) {// event.relatedTarget
    $('#max').css('display','inline-block');
    $('#mainTitle').text('メインに戻る');
  }*/
  if ($(event.target).attr('href').match('tabA')) {// event.relatedTarget
    $('#version').css('display','none');
    $('#max').css('display','none');
    $('#mainTitle').css('color','#8c8');
    $('#mainTitle').text('codeMaker4(記事作成)');
  } else {
    $('#version').css('display','inline-block');
    $('#max').css('display','inline-block');
    $('#mainTitle').css('color','#fc0');
    $('#mainTitle').text('メインに戻る');
    return;

  }
});



var scrapeGekiyasu = (url,retry = 0) => {
//  alert('sub = ' + name);
  if (retry > 5) {aModal('retry Over : Gekiyasu','url'); 
    csrChange('auto'); return(false);}
  csrChange('wait');
  var key = 'ak-nve11-shv51-c72g7-6xnnp-kr5e3';
  var url = 'https://www.gekiyasu-dvdshop.jp/products/list.php?mode=search&name='
    + 'BMAY-004';

  var option = {url:url,renderType:"HTML",outputAsJson:true};
  var payload = encodeURIComponent(JSON.stringify(option));
  var urlx = "https://phantomjscloud.com/api/browser/v2/"+ key +"/?request=" + payload;

  setTimeout(function() {
    fetch(urlx,{method: "GET",}).then(response => response.text()).then(text => {
      saveToFile(text,'Gekiyasu-pre'+ '.txt');
      if (JSON.parse(text)["content"]["statusCode"] != '200') {
        if (confirm('fetch search error\n\ncode:' + JSON.parse(text)["content"]["statusCode"])) {
          retry++; return (scrapeGekiyasu(url,retry));
        }
//      saveToFile((text),'Gekiyasu-pre'+ '.txt');
        csrChange('auto');
        return(false);
      }
      var json = JSON.parse(text)["content"]["data"];
//alert('fetch end sub = ' + url + '   ' + name);
      csrChange('auto');
      aModal('scraping Gekiyasu Ends','url');
//      saveToFile(json,'Gekiyasu'+ '.txt');
      return (true);
    })
  },2000);
}



/////////////////////////////////////////
//                                     //
//                Replacer             //
//                                     //
/////////////////////////////////////////


$('#copy').click(function(){
//  e.stopPropagation();
  var copyTarget = document.getElementById("output");
  copyTarget.select();
  document.execCommand("Copy");
    aModal("コピーしました。",'output');
});


$('#back').click(function(){
  var check = $("input[name='ID']:checked").val();
  if ((check == 'min') || (check == 'wiki')) {
    var prof = $('#prof').val();
    if (prof.length > 0) prof += '\n\n\n';
    $('#prof').val(prof + $('#output').val());
  } else {
    return;
  }
  $('.nav-pills a[href="#tabA"]').tab('show');
});


$('#cmaker').click(function(){
  delCookies();
  history.back(); 
});


$('#replace').click(function(){
  if ($("#all").prop("checked")) {
    all();
  } else if ($("#wiki").prop("checked")) {
    wiki();
  } else {
    minna(true);
  }
});


$('#short').click(function(){
  if ($("#minna").prop("checked")) {
    minna(false);
  } else  {
    $('#minna').prop('checked', 'true');
    idChanged();
  }
});


$('#clear-r').click(function(){
  if(!confirm('クリアーしますか？')){
    return;
    }
  $('#input').val('');
  $('#output').val('');
});


$('#mae').click(function(){
  var copyTarget = document.getElementById("input");
  copyTarget.select();
  document.execCommand("Copy");
  aModal('コピー＆クリアーしました','input');
  $('#input').val('');
});


$('#copy').click(function(){
//  e.stopPropagation();
  var copyTarget = document.getElementById("output");
  copyTarget.select();
  document.execCommand("Copy");
    aModal("コピーしました。",'copy');
});


var idChanged = () => {
   if ($("#wiki").prop("checked")) {
    $("#short").hide();
    $("#back").show();
//    $("#again").hide();
    $(".id-minna").show();
    localStorage.setItem('id', 'minna');
  } else if ($("#minna").prop("checked")) {
    $("#short").show();
    $("#back").show();
//    $("#again").show();
    $(".id-minna").show();
    localStorage.setItem('id', 'minna');
  } else {
//    $("#again").hide();
    $("#back").hide();
    $("#short").hide();
    $(".id-minna").hide();
    localStorage.setItem('id', 'all');
  }
};


/////////////////////////////////////////
//---------------- 再置換 ----------------
/////////////////////////////////////////


$('#again').click(function(){
  var b = $("#input").val();
  var a = "";
  var i;
  var data;
  var sdate = $('#date').val();
  if (sdate.length == 0){
    aModal('発売日がありません','date');
  } else {
    var cdate = seikeiDate(sdate);
    if (cdate) {
      sdate = cdate.nen + '/' + cdate.tuki + '/' + cdate.nichi;
      $('#date').val(sdate);
    }
    $("#sale-d").val(sdate);
  }

  if (b.length === 0) {
    aModal('変換前コードがありません','input');
    return;
  }
  var s = b.split(/\r\n|\r|\n/);
  if (s.length > 1) {
    if (!s[0].match(/\[.+?\]\(.+?\)/)) {
      var kana = s[0].match(/[\(（].+[）\)]/);
      if (kana) {
        s[0] = s[0]
          .replace(/\[[Ww]iki.*\]/,'')
          .replace(kana[0],' （' + kana[0].substr(1,kana[0].length -2) + '）')
          .replace('  ',' ');
        var ss = s[0].split(' ');
        a = s[0].replace(ss[0],'[' + ss[0] + '](GW)');
      }
    }
    else a = s[0];
  }
  for (i = 1;i < s.length;i++) {
    a += '\n';
    s[i] = s[i].replace(/[:：]/,' ');
    var ss = s[i].match(/(.+)(http.+)/);
    if (ss) {
      if (s[i].indexOf('a href="') < 0) {
        var h = s[i].indexOf('http');
        a += ss[1] + '[' + ss[2] + '](L)';
        continue;
      }
    }
    ss = s[i].match(/(別名[ 　])(.+)/);
    if (ss) {
      a += ss[1]
      var names = ss[2].split(/[,、]/);
      for (var j = 0;j < names.length;j++) {
        ss = names[j].match(/(.+?)([\(（].+[\)）])/);
        if (ss) {
          a += '[' + ss[1] + '](G)' + ss[2]; 
        } else a += '[' + names[j] + '](G)';
        if (j < names.length - 1) a += '、';
      }
      continue;
    }

    if ((s[i].indexOf("誕生日") < 0) && (s[i].indexOf("生年月日") < 0)) {
      a += s[i]; continue;
    }
    ss = s[i].match(/生年月日[ 　]+?(\d{4}).(\d{1,2}).(\d{1,2})日?(.*)/);
    if (!ss) s[i].match(/誕生日[ 　]+?(\d{4}).(\d{1,2}).(\d{1,2})日?(.*)/);
    if (!ss) {
      a += s[i];
      continue;
    }
    var bd = ss[1] +'/'+ ss[2]+'/' + ss[3];
//    var toshi = nToji(sdate,bd);

    a +=  strBirth(sdate,bd); //'生年月日 ' + ss[1] + '年' + ss[2] + '月' + ss[3] + '日 （当時';
//      a += toshi + '歳、現在[nenrei ' 
//        + ss[1] + ('00' + ss[2]).slice(-2) + ('00' + ss[3]).slice(-2)
//        + ']歳）';
      genzai(bd);

//      if (ss.length > 4){
//        var delNen = ss[4].match(/.*?[\(（].+?[\)）](.+)/);
//        alert(delNen);
//        if (delNen) a += delNen[1];
//        else a += ss[4];
//      }
//      continue;
//    }
//    a += s[i];
//    alert(a)
  }
//  a = a.substr(0, a.length-1);
  $("#output").val(a);
});


var nenreiT = (bd) => {
      var today = new Date();
      var tdate = ( today.getFullYear() * 10000 + ( today.getMonth() + 1 ) * 100 + today.getDate()).toString();
      return (nToji(tdate,bd));
}
var seikeiDate = (d) => {// return　20010202
  var dd = d.match(/(\d{4})(\d{2})(\d{2})/);
  if (!dd) dd = d.match(/(\d{4})\D(\d{1,2})\D(\d{1,2})/);
  if (!dd) return(false);
  var res = new Object();
  res.nen = dd[1];
  res.tuki = ('00' + dd[2]).slice(-2);
  res.nichi = ('00' + dd[3]).slice(-2);
  return res;
}
var nToji = (sd,bd) => {
  var sdate = seikeiDate(sd); if (!sdate) return(false);
  var bdate = seikeiDate(bd); if (!bdate) return(false);
  return Math.floor((parseInt(sdate.nen + sdate.tuki + sdate.nichi)
   - parseInt(bdate.nen + bdate.tuki + bdate.nichi))/10000);
};



//////////////////////////////////////////////
//---------------- All cinema ----------------
//////////////////////////////////////////////


function searchAll(org) {
  var item = ["演出","監督","製作","共同製作","製作総指揮","プロデュース"
  ,"協力プロデュース","エグゼクティブプロデューサー","プロデューサー","ゼネラルプロデューサー"
  ,"プロダクションデザイン","ラインプロデューサー","企画・プロデュース","企画"
  ,"原案","原作","脚本","撮影","美術","編集","キャスティング","音楽","音楽スーパーバイザー"
  ,"オープニングテーマ","メインテーマ","主題歌","録音","キャラクター創造","衣装デザイン"
  ,"スタイリスト","整音","タイトルデザイン","記録","助監督","タイトルバック","チーフプロデューサー"
  ,"オリジナル脚本","製作担当","出演","ゲスト出演","声のゲスト出演","語り","衣装","ヘアメイク"
  ,"視覚効果スーパーバイザー","ＶＦＸスーパーバイザー","スペシャルサンクス","スクリプター"
  ,"視覚効果","音響効果","音楽プロデューサー","アソシエイトプロデューサー","セットデザイン","衣裳"
  ,"美術プロデューサー",'美術進行','ＶＦＸプロデューサー','ＶＦＸディレクター','選曲','監督補'
  ,'スケジュール'
  ,"照明","装飾","脚色",'解説'];
  for (var i = 0;i < item.length;i++){
    if (org == item[i]) return item[i];
  }
  return "";
}

var all = function(){//Allcinema New
  var line = $("#input").val().split(/\r\n|\r|\n/);
  var i = 1;
  var credit = "";
//  var direc;
  var director = [];
  var df = false;
  for (i = 0;i < line.length;i++) {
    if (line[i] == "生年月日") {
      $("#minna").prop('checked', 'true');
      idChanged();
      return;
    }
  }

  i = 1;
  while (line[i] == "") {
    i++;
  }
  
  var year = line[i].split(" ");
  
  var len = year.length;
  var title = "";
  for (var j = 0;j < len - 1;j ++) {
    title += year[j];
    if (j != len - 2) title += " ";
    }
    title += "　" + year[len - 1] + "日　";
  i++;

  var media = "";
  while ((line[i] != "みんなの点数") && (line[i] != "あなたの点数")) {
    console.log(i,line[i]);
    if (i > line.length) break;
    if ((line[i] == "") || (line[i] == " ")) {i++; continue;}
    media += line[i] + "\n"; i++;
  }
//  media += "\n\n";

  while (line[i] != "クレジット") {
    console.log(i,line[i]);
    if (i > line.length) break;
    if (searchAll(line[i]) == '解説') {
      var comment = $('#cmt').val();
      if (line[i + 2].match(/全文表示/)) {
        alert('解説が部分表示になっています。');
      }
      if ((comment.length > 0) && (!comment.match(line[i + 1]))) {
        $('#cmt').val(comment + '\n\n' + line[i + 1]);
      }
      i += 2;
    }
      i++;
    }


  i++;
  while (i < line.length -1) {
    var cr = searchAll(line[i]);
    if (cr == "出演") {i++; break;}
    if (cr == "") {
      credit += '[' + line[i].trim() + "](W) ";
      if (df) director.push(line[i]);
    }
    else {
      if ((cr == '監督') || (cr == '演出')) {
          df = true; director.push(line[i]);
        }
      else df = false;
      credit += "\n" + line[i].trim() + "：";
      }
    i++;
  }
  credit += "\n＜出演＞\n";
  while (i < line.length -1){
    console.log(i,line[i]);
    if (i > line.length) break;
    if (line[i] == "ゲスト出演") {
      credit += "＜ゲスト出演＞\n"; i++;
      continue;
    }
    if (line[i] == "声のゲスト出演") {
      credit += "＜声のゲスト出演＞\n"; i++;
      continue;
    }
    if (line[i + 1].indexOf("\t") == 0) {
      var cara = line[i + 1].substr(1).length;
      if (cara > 0) {
        credit += '[' + line[i] + "](W)：" + line[i + 1].trim() + "\n";      } else credit += line[i].trim() + "\n";
 i+= 2;
    } else if (line[i + 1].indexOf("（第") >= 0) {
      credit += line[i] + line[i + 1].substr(1,line[i + 1].length - 1) + "　"; i+= 2;
    } else {
      credit += line[i] + "\n"; i++;
    }
  }
  while (i < line.length) {
    credit += line[i] + "\n"; i++;
  }
  credit = credit.substr(0, credit.length -1);
  if (credit.substr(0, 1) == "\n") {
    credit = credit.substr(1);
  }

  if (director.length > 1) {
    for (var j = 1;j < director.length;j++) {
      title += director[j];
      if (j < director.length -1) title += '、';
      else title += director[0]; 
    }
  }
  $("#output").val(title + "\n\n\n\n" + media + "\n\n" + credit);

  if (confirm('タイトル、メディア、クレジット' + '\n\n' + '書き換えますか？')) {
    $('#title').val(title);
    $('#append').val(media);
    $('#prof').val(credit);
    $('#s').click();
  }
}


/*var formatDate = (date) => {
  if (date === 'S') date = $('#sale-d').val();
  var d = date.match(/(\d{4}?)\D?(\d{1,2})\D?(\d{1,2})/);
  if (!d) return '';
  d[2] = ('00' + d[2]).substr(-2);
  d[3] = ('00' + d[3]).substr(-2);
  var ret = new Object();
  ret.flat = d[1] + d[2] + d[3];
  ret.slash = d[1] + '/' + d[2] + '/' +d[3];
  ret.kanji = d[1] + '年' + d[2] + '月' + d[3] + '日';
  return ret;
};*/


///////////////////////////////////////
//---------------- Wiki ----------------
///////////////////////////////////////

var wiki = function(){
  var b = $("#input").val();
  if (b.length === 0) {
    alert('変換前コードがありません');
    return;
  }
  var s = b.split(/\r|\n|\r\n/g);
  
  var betu = false;
  var rez = '';
///// s[0] kana s[1] kanji
  rez += '[' + s[1].replace('プロフィール','').replace(' ','') + '](WG) （';
  rez += s[0] + ' / ' + kana2roma(s[0]) + '）\n\n';

  for (var i = 2;i < s.length;i++){
    if ((s[i].trim() == '') || s[i].match(/.*テンプレート/)) continue;
//    alert('<<' + s[i] + '>><<    2003年 - 現在>>活動内容 ')
    var name = s[i].match(/.+? .+/);
    if (s[i].match(/\[.+?\]\(.+?\)/)) {
      rez += name + '\n\n';
    }
    if ((name) && (i < s.length -1) && (s[i + 1].match(/.+? .+?プロフィール/))) {
      var kanji = (s[i + 1].match(/.+? .+?プロフィール/))[0]
          .substr(0, s[i + 1].length - 6)
          .replace(' ', '');
      var kana = s[i].split(/ /g);
      var roma = '';
      for (var j = 0;j < kana.length;j++) {
        if (j != 0) roma += ' ';
        var he = kana2roma(kana[j]);
        he = he.substr(0,1).toUpperCase() + he.substr(1);
        roma += he;
      }
      rez += '[' + kanji + '](GW)（' + s[i] + ' / ' + roma + '）\n\n'; //i++; 
      continue;
    }
    var ss = s[i].replace(/\[\d+?\]/g,'').split('\t');
    switch (ss[0]) {
      case '公称サイズ':
      case '[表示]':
      case '':
        break;
      case '出生名':
      case '本名':
      case '毛髪の色':
      case 'カップサイズ':
      case 'ブラのサイズ':
      case '靴のサイズ':
      case '血液型':
      case 'スリーサイズ':
      case 'サイズ':
      case '身長':
      case '体重':
      case '身長/体重':
      case '身長 / 体重':
      case 'BMI':
        if (betu) {
          rez += '\n\n';
          betu = false;
        }
        if (ss.length < 2) {
          rez += ss[0] + '\n\n';
          break;
        }
        rez += ss[0] + ' ' + ss[1] + '\n\n';
        break;
      case '出身地':
        betu = false;
        if (rez.slice(-2) != '\n\n')
          rez += '\n\n';
        var sb = ss[1].split('・');
        if (sb.length == 1)
          rez += ss[0] + ' ' + sb[0] + '\n\n';
        else
          rez += ss[0] + ' ' + sb[1] + '\n\n';
        break;
      case '生誕':
      case '誕生日':
      case '生年月日' : 
        if (betu) {
          rez += '\n\n';
          betu = false;
        }

        var sdate = $('#sale-d').val();
        if (!sdate) alert("発売日がありません。");

        var d = ss[1].match(/(\d{4}?)\D?(\d{1,2})\D?(\d{1,2})/);

        if (ss.length == 1) {
          rez += ss[0] + '\n\n';
          alert('日付がありません');
          continue;
        }

        rez += strBirth(sdate,ss[1]);
        break;
      case '共同作業者':
      case '他の活動':
      case '専属契約':
      case '出演期間': 
      case 'モデル内容': 
      case 'ジャンル': 
      case '職業':
      case '学歴':
      case 'レーベル':
      case '担当楽器':
      case '別名義': 
      case '事務所':
      case '所属グループ':
      case '別名': 
      case '愛称':
      case 'デビュー':
      case '活動期間':
      case '活動内容':
      case '受賞歴':
      case '公式サイト':
      case '主な作品':
      case '配偶者':
      case 'その他の記録':
        if (betu) rez += '\n\n';
        if (ss.length > 1)
          rez += ss[0] + ' ' + ss[1].trim();// + '\n';
        else rez += ss[0];// + '\n';
        betu = true;
        break;
      default : if (betu) rez += '、' + ss[0].trim();
        //    else rez += '\n';
        break;
    }
  }
  $('#output').val(rez);
};


    
////////////////////////////////////////////
//---------------- みんなのAV ----------------
////////////////////////////////////////////

var minna=function(long){
  var b = $("#input").val();
  var a;
  var i,j = 0;
  var data = [];
  var sdate = $('#sale-d').val();
  if (!sdate) {alert("発売日がありません。[みんなのAV]");} 

  if (b.length === 0) {
    alert('変換前コードがありません');
    return;
  }
  
  b = b.replace(/\r\r/g,'\r').replace(/\n\n/g,'\n').replace(/\r\n\r\n/g,'\r\n')
    + '\nタグ\n\n';
//  console.log(b);
  var s = b.split(/\r|\n|\r\n/g);
  /*for (i = 0;i < s.length;i++) {
    if (s[i] == "クレジット") {
      $("#all").prop('checked', 'true');
      idChanged();
      return;
    }
    if (s[i] == "") s.splice(i,1);
    if (s[i] == 'タグ') break;
  } */
  var item = ["愛称","別名","生年月日","サイズ","血液型","出身地","所属事務所"
    ,"趣味・特技","AV出演期間","デビュー作品","ブログ","公式サイト","タグ","未設定"];

  for (var i = 0;i < s.length;i++) {
    var ss = s[i].match(/(.+?)[\s ]?([\(（].+)/);
    if ((i == 0) && (ss)) {
      a = '[' + ss[1] + '](GW) '
      if (ss[2]) a += ss[2];
      a += '\n\n';
      continue;
    }
    if (s[i].match(/http.+/)) 
      s[i] = '[' + s[i] + '](L)';
    if (s[i + 1].match(/http.+/)) 
      s[i + 1] = '[' + s[i + 1] + '](L)';

    if (s[i] == 'タグ') break;
    console.log(s[i]);

    for (var j = 0;j < item.length;j++) {
      if (s[i] == item[j]) {
        if (s[i + 1] == item[j + 1]) {
          if (long) a += s[i] + '\n';
          break;
        }
        if (s[i] == '生年月日') {
          a += strBirth(sdate,s[i + 1]) + '\n';
          i++;
          break;
        }
        if (s[i] == '別名') {
          if (a.match(/別名/)) a += '、';
          else a += '別名 ';
          var sx = s[i + 1].match(/(.+?)[\s ]?([\(（].+)/);
          if (sx) a += '[' + sx[1] + '](G) ' + sx[2];
          if (!s[i + 2].match(/別名/)) a += '\n';
          i++;
          break;
        }
        a += s[i] + ' ' + s[i + 1] + '\n';
        i++;
        break;
      }

    }
    if (long) a += '\n';
  }
  while (a.substr(a.length - 1) == '\n') a = a.substr(0,a.length - 1);
  
  a = a.replace(/\n、/g,'、');

  $("#output").val(a);
};


var kana2roma = function(kana){
  var roma = ''; 
  var hebon = [
    ['あ','a'], ['い', 'i'], ['う', 'u'], ['え', 'u'], ['お', 'o'],
    ['か', 'ka'], ['き', 'ki'], ['く', 'ku'], ['け', 'ke'], ['こ', 'ko'],
    ['さ', 'sa'], ['し', 'shi'], ['す', 'su'], ['せ', 'se'], ['そ', 'so'],
    ['た', 'ta'], ['ち', 'chi'], ['つ','tsu'], ['て', 'te'], ['と', 'to'],
    ['な', 'na'], ['に', 'ni'], ['ぬ', 'nu'], ['ね', 'ne'], ['の', 'no'],
    ['は', 'ha'], ['ひ', 'hi'], ['ふ', 'fu'], ['へ', 'he'], ['ほ', 'ho'],
    ['ま', 'ma'], ['み', 'mi'], ['む', 'mu'], ['め', 'me'], ['も', 'mo'],
    ['や', 'ya'], ['ゆ', 'yu'], ['よ', 'yo'],
    ['ら', 'ra'], ['り', 'ri'], ['る', 'ru'], ['れ', 're'], ['ろ', 'ro'],
    ['わ', 'wa'], ['ゐ', 'wi'], ['ゑ', 'we'], ['を', 'wo'],
    ['ぁ', 'a'], ['ぃ', 'i'], ['ぅ', 'u'], ['ぇ', 'e'], ['ぉ', 'o'],
    ['が', 'ga'], ['ぎ', 'gi'], ['ぐ', 'gu'], ['げ', 'ge'], ['ご', 'go'],
    ['ざ', 'za'], ['じ', 'ji'], ['ず', 'zu'], ['ぜ', 'ze'], ['ぞ', 'zo'],
    ['だ', 'da'], ['ぢ', 'di'], ['づ', 'du'], ['で', 'de'], ['ど', 'do'],
    ['ば', 'ba'], ['び', 'bi'], ['ぶ', 'bu'], ['べ', 'be'], ['ぼ', 'bo'],
    ['ぱ', 'pa'], ['ぴ', 'pi'], ['ぷ', 'pu'], ['ぺ', 'pe'], ['ぽ', 'po'],['ゔ','v'],
    ['ん','n'],['ー', '-'],['　',' ']
  ];
  var hebon2 = [
     ['ゔぁ', 'va'], ['ゔぃ', 'vi'], ['ゔぅ', 'vu'], ['ゔぇ', 've'], ['ゔぉ', 'vo'],
   ['きゃ', 'kya'], ['きゅ', 'kyu'], ['きょ', 'kyo'],['きぇ','kye'],
    ['しゃ', 'sha'], ['しゅ', 'shu'], ['しょ', 'sho'],['しぇ','sye'],
    ['ちゃ', 'cha'], ['ちゅ', 'chu'], ['ちょ', 'cho'], ['ちぇ', 'che'],
    ['にゃ', 'nya'], ['にゅ', 'nyu'], ['にょ', 'nyo'],['にぇ','nye'],
    ['ひゃ', 'hya'], ['ひゅ', 'hyu'], ['ひょ', 'hyo'],['ひぇ','hye'],
    ['みゃ', 'mya'], ['みゅ', 'myu'], ['みょ', 'myo'],['みぇ','mye'],
    ['りゃ', 'rya'], ['りゅ', 'ryu'], ['りょ', 'ryo'],['りぇ','rye'],
    ['ぎゃ', 'gya'], ['ぎゅ', 'gyu'], ['ぎょ', 'gyo'],['ぎぇ','gye'],
    ['じゃ', 'ja'], ['じゅ', 'jyu'], ['じょ', 'jo'],['じぇ','je'],
    ['びゃ', 'bya'], ['びゅ', 'byu'], ['びょ', 'byo'],['びぇ','bye'],
    ['ぴゃ', 'pya'], ['ぴゅ', 'pyu'], ['ぴょ', 'pyo'],['ぴぇ','pye']
  ];
  var kasane = [
//    ['aa','a-'],['ii','i-'],['uu','u-'],['ee','e-'],
    ['oo','oh'], ['ou','o-'],
    ['nb','mb'],['nm','mm'],['np','mp'],
   ];
    kana = kana.replace(/[！-～]/g, 
    function(s) {
    return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
    });
 
  for (var i = 0;i < kana.length;i++){
    var henkan = '';
//    alert('i=' + i + ' ' + kana.substr(i,1));
    if (i < kana.length - 1) {
      for (var j = 0;j < hebon2.length;j++) {
        if (hebon2[j][0] == kana.substr(i,2)) {
          henkan = hebon2[j][1]; i++; 
          break;
        }
      }
    }

    if (henkan == '') {
      for (var j = 0;j < hebon.length;j++) {
        if (hebon[j][0] == kana.substr(i,1)) {
          henkan = hebon[j][1];
        }
      }
    }
    if (henkan == '') roma += kana.substr(i,1);
    else roma += henkan;
  }

  for (var i = 0;i< kasane.length;i++) {
    roma = roma.replace(RegExp(kasane[i][0],'g') , kasane[i][1]);
  }

  var romas = roma.split(' ');
  var res = '';
  for (var i = 0;i < romas.length;i++) {
    res += romas[i].substr(0,1).toUpperCase() + romas[i].substr(1);
    if (i < romas.length - 1) res += ' ';
  }

return res;
};


var genzai = (bd,ele = 'none') => {//　現在の年齢表示　BD生年月日　ele 表示する要素
  console.log(bd,ele);
  var res = '';
  var bds = bd.match(/nenrei \d{8}?/g);
  if (!bds) return(false);
  var toshi;

  for (var i = 0;i < bds.length;i++) {
    if (res != '') res += ',';
    toshi = nenreiT(bds[i]);
    res += toshi;
  }
  var color = '#66f';
  if ((parseInt(toshi) > 60) || (parseInt(toshi) < 5))
    color = '#f00';
  document.getElementById(ele).style.color = color;
  $('#' + ele).text(' （現在' + res + '歳）');
  return( res );
}


var stone = (mm) => {
  var ishi = ["ガーネット","アメジスト","アクアマリン","ダイヤモンド","エメラルド","真珠","ルビー",
        "ペリドット","サファイア","オパール","トパーズ","タンザナイト"];
//  console.log('stone ' + mm + ishi[mm -1]);
  return ishi[parseInt(mm) - 1];
}


var seiza = (mm,dd) => {
    var seiza = "";
    MM = parseInt(mm);
    DD = parseInt(dd);

    if (MM == 3 && DD >= 21)　ans  = "牡羊"
    if (MM == 4 && DD <=19)　ans  = "牡羊"
    if (MM == 4 && DD >= 20)　ans  = "牡牛"
    if (MM == 5 && DD <=20)　ans  = "牡牛"
    if (MM == 5 && DD >= 21)　ans  = "双子"
    if (MM == 6 && DD <=21)　ans  = "双子"
    if (MM == 6 && DD >= 22)　ans  = "蟹"
    if (MM == 7 && DD <=22)　ans  = "蟹"
    if (MM == 7 && DD >= 23)　ans  = "獅子"
    if (MM == 8 && DD <=22)　ans  = "獅子"
    if (MM == 8 && DD >= 23)　ans  = "乙女"
    if (MM == 9 && DD <=22)　ans  = "乙女"
    if (MM == 9 && DD >= 23)　ans  = "天秤"
    if (MM == 10 && DD <=23)　ans  = "天秤"
    if (MM == 10 && DD >= 24)　ans  = "蠍"
    if (MM == 11 && DD <=21)　ans  = "蠍"
    if (MM == 11 && DD >= 22)　ans  = "射手"
    if (MM == 12 && DD <=21)　ans  = "射手"
    if (MM == 12 && DD >= 22)　ans  = "山羊"
    if (MM == 1 && DD <=19)　ans  = "山羊"
    if (MM == 1 && DD >= 20)　ans  = "水瓶"
    if (MM == 2 && DD <=18)　ans  = "水瓶"
    if (MM == 2 && DD >= 19)　ans  = "魚"
    if (MM == 3 && DD <=20)　ans  = "魚"
    return ans + "座";
}

var strBirth = (sdate = '',bdate = '') => {
// sdate 発売日 bdate 生年月日を含む一行　どちらも8桁でもいい　return カッコつき
  var res = '生年月日 ';
//  console.log(bdate);
  var birthDay = seikeiDate(bdate); if (!birthDay) return false;
//  console.log(birthDay);
  res += birthDay.nen + '年' + parseInt(birthDay.tuki) + '月' + parseInt(birthDay.nichi) + '日 （';
  var toji = nToji(sdate,bdate);
  if (toji) res += '当時' + toji + '歳、';
  var genzai = nenreiT(bdate);
  if (!genzai) return false;
  res += '現在[nenrei ' + birthDay.nen + birthDay.tuki +birthDay.nichi + ']歳） ' 
    +  ('申酉戌亥子丑寅卯辰巳午未')[birthDay.nen%12] + '年生まれ、'
    + seiza(birthDay.tuki,birthDay.nichi) + '、誕生石：' + stone(birthDay.tuki);
  return res;
}


imgSizeChanged = () => {
  console.log($('#imageSize').val());
  $('#size').val($('#imageSize').val());
  $('#imgAdd').click();
};

changeWidth = (width) => {
  if (width == 'input') width = $('#previewWidth').val();
  $('#preview_result').css('width',width);
};


changeColor = (c) => {
  if (c == 'black') {
  $('#preview_result').css('background-color','black');
  $('#preview_result').css('color','white');
  }
  if (c == 'white') {
  $('#preview_result').css('background-color','white');
  $('#preview_result').css('color','black');
  }

  makeCode(false,c);
}


changeBody = (c) => {
  if (c == 'dark') {
    document.getElementById('style-light').disabled = true;
    document.getElementById('style-dark').disabled = false;
  }
  if (c == 'light') {
    document.getElementById('style-dark').disabled = true;
    document.getElementById('style-light').disabled = false;
  }
  
}


maeClear = () => {
  $('#input').val('');
}

var edit;

var setEditor = () => {
  $('#ifDark').toggleClass('trumbowyg-dark');
  $('#wEditor').trumbowyg({
    lang: 'ja',
    changeActiveDropdownIcon: true,
    autogrow: true,
//    autogrowOnEnter: true,
    imageWidthModalEdit: true,
    btnsDef: {
      moreForm: {
        dropdown: ['p', 'blockquote', 'h1', 'h2', 'h3', 'h4','h5','h6'],
        title: 'フォーマット',
        ico: 'p' 
      }
    },
    btns: 
    [
        ['viewHTML'],
        ['undo', 'redo'], // Only supported in Blink browsers
//         ['formatting'],
        ['moreForm'],
        ['strong', 'em', 'del'],
        ['superscript', 'subscript'],
        ['link'],
        ['insertImage'],
        ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
        ['unorderedList', 'orderedList'],
        ['horizontalRule'],
        ['removeformat'],
        ['fullscreen']
    ]

  })
    //　フーカスされたとき
    .on('tbwfocus',function(){
      console.log('focus=',$('#wEditor').val());
      $('.trumbowyg-box,.trumbowyg-editor').css('background-color', '#001800');

    })
    
    //　フォーカスを失ったとき
    .on('tbwblur', function(){
      wEditorToFeel();
  })
  ; 

};

var wEditorToFeel = () => {
  $('.trumbowyg-box,.trumbowyg-editor').css('background-color', '#00f000 !important');
  var txt = $('#wEditor').trumbowyg('html');
  $("#wPreview").empty();
  $(txt).appendTo($("#wPreview"));
  outFocus('wEditor');

  txt = txt
    .replace(/<p><br><\/p>/g,'matchi-0\n')
    .replace(/<p>.+?<\/p>/g,function(match){
      console.log('match-1=',match)
      var f = match.match(/<p>(.+)<br><\/p>/);
      if (f){ return f[1]}
      return match.slice(3,-4) + '\n';
        })
    .replace(/<h\d>.*?<\/h\d>/g,function(match){
      console.log('match-2=',match)
      match = match.replace('<br></h', '</h');
      var f = match.match(/<h(\d)>/);
//      if (f[1] == 5) {
//        return '-[mn]-' + match.slice(4,-5) + '\n';
//      }
//      if (f[1] == 6) {
//        return '-[ms]-' + match.slice(4,-5) + '\n';
//      }
        return match + '\n';
      })
    //    .replace(/<br>/g,'')
  console.log('Blur res=',txt)
  $('#feel').val(txt);

}

$('#feel').on('keyup',function(){
    
    ShowLength();

    setTimeout(function(){
    var txt = $('#feel').val();
    var txts = txt.split(/\r\n|\r|\n/);
    var res = '';
    for (var i = 0;i < txts.length;i++) {
//      if (i != 0) res += '\n';
      if (txts[i] == '') {
        if (i < txts.length - 1) res += '<p></p>';
        continue;}
      if (txts[i].match(/^<.*>$/)) {
        res += txts[i]; continue;}
      var h = txts[i].match(/^\-\[m(.*?)\]\-(.*)/);
      if (h) { // -[]-
        if (h[1] == '*') {
        res += '<h5>' + h[2] + '</h5>';
        continue;
        }
        if (h[1] == 's') {
        res += '<h6>' + h[2] + '</h6>';
        continue;
        }
        res += '<h' + (5 - parseInt(h[1])) + '>' 
            + h[2] + '</h' + (5 - parseInt(h[1])) + '>';
        continue;
        }
      res += '<p>' + txts[i] + '</p>';
    }
    console.log('keyup=',res);
    $('#wEditor').trumbowyg('html',res); 

  },500);
});

var titleChange = (tNo) => {
  ShowChange();

  var titles = ['title','title2','title3'];
  var title = $('#' + tNo).val();
  for (var t of titles) {
    if (t != title) $('#' + t).val(title);
  }
};


/////// End Code Here ///////