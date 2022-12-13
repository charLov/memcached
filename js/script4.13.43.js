// Write JavaScript here /
/*----------------------------------

3697-3SJ

*/
///////////////////////////////////////
//                                   //
//           codeMaker 4DJ           //
//                                   //
//          Bootstrap4 Jodit         //
//                                   //
///////////////////////////////////////
var test = async function () {
	var mass = new Object();
	mass.yes = 'kore?';
	mass.no = 'yameru?';
	mass.title = 'korega title';
	mass.mes = 'message';
	$('#confirm-yes').html('dadada');
	var res =  await myConfirmF('kore?', 'arere?', 'tokucha', 'wawawa', mass);
	console.log('res confirm message after await myCOnfirm',res, mass)
	
};


////////////////////////////////////////////
//                                        //
//                                        //
  const version = '4.13.43';
//                                        //
//                                        //
////////////////////////////////////////////

$(function(){

  $('#version').html('ver.' + version);
  //  $("#ofile").prop('disabled', true);
	cookieRead();

  history.pushState(null, null, null); //ブラウザバック無効化
  //ブラウザバックボタン押下時
  $(window).on("popstate", function (event) {

    if (confirm ('前のページに戻りますか'))
      history.back();
    else history.pushState(null, null, null);
  });

/*  var droparea = document.getElementById('tabD');
  droparea.addEventListener('dragover', onDragOver, false);
  droparea.addEventListener('drop', onDrop, false);
*/
  $('#date').css('color','#faa');
// File API
  if (window.File) {
    // File APIに関する処理を記述
//    aModal("File APIが実装されてます。");
  } else {
    alert("本ブラウザではFile APIが使えません");
  }
  $('#all').click(idChanged);
  $('#wiki').click(idChanged);
  $('#minna').click(idChanged);
  idChanged();
  getSelect();// change color of select ease

	setCodeEditor('code','#f88');
//	setEditor('wEditor','#f8f');
//	setEditor('wAppend','#88f');
	setTrumbowyg('feel','#ff8');
	setTrumbowyg('append','#8ff');
	setTrumbowyg('img','#888');
	setTrumbowygHalf('prof','#8f8');
	setTrumbowygHalf('cmt','#8f8');

  console.log('Title on load',$('#title').val());
  $('#autoSaveCheck').prop('checked',true);
  csrTop();

  document.getElementById('style-light').disabled = true;
  document.getElementById('style-dark').disabled = false;
//  $('#style-dark').disabled('false');

  $(window).on('beforeunload', function(event) {
    alert('close');
  });


	lightbox.option({
		'resizeDuration': 300,
		'wrapAround': true
	});

	$('.drop').attr({
		ondragover: 'onDragImage(event)',
		ondrop: 'onDropImage(event)',
		ondragleave: 'onDragEndImage(event)',
		ondragenter: 'onDragEnterImage(event)',
	})

	$('[data-toggle="tooltip"]').tooltip();

	setTimeout(function(){
    readSavedFile();
    //feelTowEdit();
    //appendTowAppend();
    $('#urlTAb a[href="#orgMinna"]').tab('show');
    $('#urlTAb a[href="#orgAmazon]').tab('show');
    $('#urlTAb a[href="##orgSurugaya]').tab('show');
    $('#urlTAb a[href="##orgGekiyasu]').tab('show');
    $('#urlTAb a[href="##orgDmm]').tab('show');
    $('#urlTAb a[href="#orgGirl]').tab('show');
		$('#changed').html('');
	//    $('#urlTab a:first-child').tab('show');
  },500);

  setTimeout(function() {
    deleteAllCookies();
    console.log('on start idChanged 800', $('#title').val());
    $('#changed').html('');

  },800);

	setTimeout(function () {
    doGTranslate('ja|ja');
		$('#page_top').click();
		$('#n').click();
		$('#size').val('500');
    console.log('on start idChanged 2000', $('#title').val());
		$('#changed').html('');

		$('.trumbowyg-h4-dropdown-button').addClass('h4');
		$('.trumbowyg-h3-dropdown-button').css('font-size','200% !important');
		$('.trumbowyg-h2-dropdown-button').addClass('h2');
		$('.trumbowyg-h1-dropdown-button').addClass('h1');
//		$('.trumbowyg-fontfamily-button').addClass('dark');

		return false;
	}, 2000);

	setTimeout(function () {
    console.log('on start idChanged 10000', $('#title').val());
		autoSave();

	}, 8000);
	

});


$('.dark').on('click', async function (event) {
	//console.log(event.target.id);

	var ele = document.querySelector("body");
	var clientRect = ele.getBoundingClientRect() ;

	// 画面内の位置
	var x = clientRect.left ;
	var y = clientRect.top ;

	// ページ内の位置
	var px = window.pageXOffset + clientRect.left ;
	var py = window.pageYOffset + clientRect.top ;
	//console.log('px,py',px,py)
	//	console.log('x,y', x, y)
	//	if (py > 0) await myAlert('py = ' + py);
})
/*function onDragOver(event) {
  //event.stopPropagation();
  event.preventDefault();
  event.dataTransfer.dropEffect = 'link';
}

function onDrop(event) {
  var url = event.dataTransfer.getData("text");
  var textBox = document.getElementById('imgDrop');
  textBox.value = url;
}
*/


function deleteAllCookies() {
  var cookies = document.cookie.split(';')
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i]
    var eqPos = cookie.indexOf('=')
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
    document.cookie = name + '=;max-age=0'
  }
}


var csrTop = () => {
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
    $('#n').text(' 現在' + nenrei + '歳');
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

  if ($.cookie("test")) console.log('test')

  if ($.cookie('dmmImage')) {
    console.log('image = ',$.cookie('dmmImage'));
    $('#orgImage').empty();
    showAllImageFromCookie();
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
    var p = $('#prof').val();
    if (p != '') p += '\n\n\n';
    for (var i = 0;i < prof;i++){
      p += $.cookie('prof' + i);
    }
    $('#prof').val(p);
    $.Cookie('prof','',{expires:-1});
    $.removeCookie('prof',"",{path:"/",expires:-1});
    $('#p').prop('checked', 'true');
    genzai(p,'n');
  } else if (minna) {
    alert('minna');
    var p = $('#prof').val();
    if (p != '') p += '\n\n\n';
    p += minna;
    $('#prof').val(p);
    $.Cookie('minna',"",{expires:-1});
    $.removeCookie('minna',"",{path:"/",expires:-1});
    $('#p').prop('cheked', 'true');
    genzai(p,'n');
  }

  var birth = $.cookie('birth');
  if (birth) {
    var a = $('#prof').val();
    if (a.length > 0) {
      var i;
      var line = a.split(/\r|\n|\r\n/g); a = "";
      for (i = 0; i < line.length;i++) {
        if (line[i].indexOf("生年月日") >= 0) {
          a += birth + '\n';
        } else a += line[i] + '\n';
      }
      $('#prof').val(a);
      genzai(a,'n');
    }
    $.cookie('birth',"",{expires:-1});
    $.removeCookie('birth',"",{path:"/",expires:-1});
    $('#p').prop('checked', 'true');
  }

  var title = $.cookie('title');
  if (title) {
    var credit = "";
    $('#title').val(title);     $.cookie('title',"",{expires:-1});
    $.removeCookie('title',"",{path:"/",expires:-1});
    var media = $.cookie('media');
    var m = $('#append').val();
    if (m != "") m += '\n\n\n';
    m += media;
    $('#append').val(m);     $.cookie('media',"",{expires:-1});
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
    $('#prof').val(credit);
    $('#s').prop('checked', 'true');
  }
};


////////////''/ reload ////////////////
window.onunload = function() {
  alert('Onload');
};


//////////////////////////////
//      CLICK functions     //
//////////////////////////////


var eleClear = (ele) => {
  $('#' + ele).val('');
}


$('#nomado').click(function(){
  var thum = 300;
  var a = $('#img').val().match(/<a href="(.+?)".*?>/);
  var img = $('#img').val().match(/src=.+?"/);
  var alt = $('#img').val().match(/alt=.+?"/);
  var wid = $('#img').val().match(/width=.+?"/);
  var hei = $('#img').val().match(/height=.+?"/);
  if (!a) return;
  var ah = prompt('\n画像のリンク先アドレス\n（未入力ならそのまま）\n\n' + a[1]
    +'\n\n',a[1]);
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
  $('#img').val( i + alt
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
  if ($('#changed').html().indexOf('*') >= 0) {
    if(!confirm('変更されています。\n読み込みますか？')) return;
  }
  change = false;
  $('#ofile').click();
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
  console.log('scripter');
  feelTowEdit();
  appendTowAppend();
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

var eleCopy = (ele,mes = 'コピーしました') => {
  var copyTarget = document.getElementById(ele);
  copyTarget.select();
  document.execCommand("Copy");
  aModal(mes,ele);
}


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

//$('#selall').click(function(){
//  var copyTarget = document.getElementById("code");
//  copyTarget.select();
//  document.execCommand("Copy");
//  aModal('コードをコピーしました。','code');
//});

codeCopy = () => {
  $('.nav-pills a[href="#tabA"]').tab('show');
	$('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ

	var copyTarget = document.getElementById("code");
  copyTarget.select();
  document.execCommand("Copy");
  aModal('コードをコピーしました。　２','code');
};


$('#replacer').click(async function(){
  var title = $('#title').val();
  if (title.length == 0) title = "no title";
  var amazlet = $('#img').val();
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
      if (! await myConfirm("発売日がありません")) return;
      res = "";
    } else $('#date').val(res);
  } //not amazon
//  document.getElementById( "changed" ).innerHTML = '';
  a = $('#prof').val();
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


$('#appcopy').click(function(){
  appendTowAppend();
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
    $('#ofile').click();
    return;
  }

});


/////// CLEAR ///////

$('.clear').click(function(){
  if ($('#changed').html().indexOf('*') < 0 ) {
    clearAll();
  } else {
    var fileName = $('#title').val().trim().substr(0,32) + '.txt';
    fileName = fileName.replace(/ |\//g,'_');
    if (fileName == '.txt') fileName = 'untitled.txt';
    var date = new Date();
    var fileDate = date.getFullYear()
    + '_' + ('0' + (date.getMonth() + 1)).slice(-2)
    + '_' + ('0' + date.getDate()).slice(-2)
    + ' ' + ('0' + date.getHours()).slice(-2)
    + ':' + ('0' + date.getMinutes()).slice(-2)
    + ':' + ('0' + date.getSeconds()).slice(-2) ;
    console.log(fileName);
    $('#dir').text('data/');

    saveTempFile('data/complete/' + fileName,'<!-- data start ' + fileDate + ' ver.999 -->\t'
      + allToText()
      + '<!-- data end -->\n\n','overwrite','clear');

      deleteFeelP('data/' + fileName,false);

//    saveToFile(allToText(),fileName);
  }
});

var clearAll = () => {
  $('#changed' ).html('');
  saveToCookie();

  $('#title').val('');
  $('#date').val('');
  $('#p-id').val('');
  $('#p-no').val('');
  $('#img').val('');
  $('#append').val('');
  $('#feel').val('');
  $('#prof').val('');
  $('#cmt').val('');
  $('#url').val('');
  $('#english').val('');
  $('#imgURL').val('');
	$('#n').text("（現在の年齢）");
	$('.category').prop('checked', false);
	$('#size').val('500');

//	$('#wEditor').trumbowyg('html', '');
//	$('#wAppend').trumbowyg('html', '');
	$('#feel').trumbowyg('html', '');
	$('#append').trumbowyg('html', '');
	$('#code').trumbowyg('html', '');

  $('#feel').focus();
}


$('.make').click(function(){
  makeCode(true);
});


var displayEnglishM = () => {
	var display = $("#engText").css("display"); if (!display || (display == "none")) display = "inline"; else display = "none";
	$("#engText").css("display", display);
	console.log("display ebglish", $("#engText").html(), display);
	var html = $('#preview_result').html();
	$('#preview_result').empty();
	$(html).appendTo($('#preview_result')); 

} 


/////////////////////////////////
//        make code
/////////////////////////////////

async function makeCode(flag, c = 'white') { // ture button push false auto make 
	$('.fa-eye').removeClass('fa-bounce'); // stop icon jump

  var RedAndOrangeRed = '<style type="text/css">a {color: orangered;} a:link {color: red;} </style>'
  var DodgerBlueAndDeepSkyBlue = '<style type="text/css">a {color: deeskyblue;} a:lpink {color: dodgerblue;} </style>'

	console.log('flag=', flag, 'c=', c);
  var pStyle;
  if (c == 'white') pStyle = DodgerBlueAndDeepSkyBlue;
  else pStyle = RedAndOrangeRed;

  var date = $('#date').val().trim();
  var img = $('#img').val().trim();
  var feel = replaceTag($('#feel').val().trim());
  var comment = $('#cmt').val().trim();
  var prof = $('#prof').val().trim();
  var hidden = $('#p-no').val().trim();
  var append = addTag($('#append').val().trim());
  var eng = '<!--english-->' + replaceTag($('#english').val().trim()) + '<!--english ends-->';
  var txt = '';
  //var amazon =  img.indexOf('://www.amazon');
  if (flag && (img.length === 0)) {
    if (!await myConfirm('画像がありません')) return;
    img = '<img src="https://medias.mine.nu/wp-content/uploads/2019/03/no_image300.jpg" style=" float: left; padding: 0.5em">';
  }
  txt += img;
  if (date.length > 0) {
    var cdates = date.match(/\d{4}.\d{1,2}.\d{1,2}日?/g);
    if (cdates) {
			for (var cdate of cdates) {
				var mdate = cdate.match(/(\d{4}).(\d{1,2}).(\d{1,2})日?/);
				console.log(mdate)
				var fdate = mdate[1] + '/' + ('00' + mdate[2]).slice(-2) + '/' + ('00' + mdate[3]).slice(-2);
				date = date.replace(cdate, fdate);
			}
			$('#date').val(date);
    }
    txt += '発売日：' + date + '\n\n<div style="clear: both;"></div>';
  }

  // 復元が必要であれば
  //feel = feel.replace(/《/g,'〈').replace(/》/g,'〉');
  // とりあえず、外しておきます。

  if (feel.length > 0)
		txt += '<!--感想-->\n' + replaceReg( feel) + '<!--感想 ends-->';
  if (eng.length > 0) {
    // 戻す
    eng = eng.replace(/《/g,'{').replace(/》/g,'}')
      .replace(/class = "/g,'class="')
      .replace(/src = "/g,'src="')
      .replace(/alt = "/g,'alt="');
    eng = replaceReg(eng);
    eng = eng.replace(/<\/ /g,'</').replace(/> </g,'><')
			.replace(/\(\^\s?_\s?\^;\)/g, '(^_^;)');
		console.log('english before',eng)
		txt += '\n\n<div style="border-top-style: double; border-bottom-style: double;"><button type="button" style="border: none;" class="btn btn-outline-primary" onclick="displayEnglish();">⟨impressions⟩ (in English)</button><div id="engText" style="display: none;"><br>' + eng + '<br></div></div>';
		txt += '<script>var displayEnglish = () => { var display = $("#engText").css("display"); if (!display || (display == "none")) display = "block"; else display = "none"; $("#engText").css("display", display); console.log("display english", display, $("#engText").text()); }</script > ';
  //  txt += '<div style="border-top-style: double; border-bottom-style: double;">&lang;impressions&rang; \n\n' + eng + '\n</div>\n\n\n';
  }
  txt += '<div style="clear: both;"></div>'
	if (prof.length > 0) {
		var staff = $('#staff').val();
		if (prof.match(/生年月日/)) staff = 'プロフィール等';
		else if ($('#title').val().indexOf('著') > 0)
			staff = '著者等';
		else if ((prof.indexOf('監督') >= 0) || (prof.indexOf('演出') >= 0)) staff = 'スタッフ・キャスト等';
    txt += '\n\n\n[' + staff + ']\n\n'+ prof;
  }
  if (comment.length > 0) {
    txt += '\n\n\n<div style="padding: 10px; margin-bottom: 10px; border: 1px     dashed;"><!--コメント-->' + comment + '</div>';
  }
  if (append.length > 0)  {
    txt += '<!--追加コード-->' + append + '<!--追加コード ends-->\n\n';
  }//alert(txt);
  txt += '<!--隠しコード--><div style="clear: both;"></div><h6 style="color: #888888;font-size: smaller;">[' + hidden + ']</h6>';// + '\n\n';

//  var dates = txt.match(/\d{4}\D\d{1,2}\D\d{1,2}/g);
//  for (var d of dates) console.log('line625',d);
  txt = txt.replace(/\d{4}\D\d{1,2}\D\d{1,2}T00:00:01Z/g, $('#date').val());
  txt = txt.replace('matchi-0','');
//  txt = replaceReg(txt); // Tag
  txt = replaceLink(txt); //Link
  txt = txt.replace(/\r|\n|\r\n/g, '<br>\n');
  txt = txt.replace(/(&lt;)/g, '<').replace(/(& lt; )/g, '<')
            .replace(/(&gt;)/g, '>').replace(/(& gt;)/g, '>')
            .replace(/(&quot;)/g,'"').replace(/(& quot;)/g,'"')
            .replace(/(&#39;)/g, "'").replace(/(& #39;)/g, "'")
            .replace(/(&amp;)/g, '&').replace(/(& amp;)/g, '&')
//            .replace(/<\/p><br>\n/g,'</p>\n')
//            .replace(/<\/p>\s?<p>/g,'<br>\n')
		;
	
	// 改行で見やすくする。
	var lineFeeds = txt.match(/<\/ ?[dpPhH]i?.?></g);
	if (lineFeeds) {
		for (var line of lineFeeds) {
			var reg = new RegExp(line,'g');
			txt = txt.replace(reg, line.slice(0,-1) + '\n<');
		}
	}
/*  txt += '<style> .m0 {text-indent: 0.8em; margin: -0.4em; line-height: 1.6em;} '
    + '.m1 {margin-bottom: -0.4em; font-weight: bolder;} '
    + '.m2 {font-size: larger; margin-bottom: -0.4em;} '
    + '.m3 {font-size: larger; margin-bottom: -0.4em; font-weight: bolder;} '
    + '.m4 {font-size: x-large; margin-bottom: -0.4em;} '
    + '.m5 {font-size: x-large; margin-bottom: -0.4em; font-weight: bolder;} '
    + '.n {color: #888888; font-size: smaller; text-indent: 0.8em; margin: -0.6em; line-height: 1.6em;}</style>';
*/

	if (c == 'white') codeLight(false);
	if (c == 'moon') {
		txt = txt.replace(/\r|\n|\r\n/g, '');
		codeDark(false);
	}
	$('#code').val(txt);
	$('#code').trumbowyg('html', txt);

  $('#preview_result').empty();
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

	txt = txt.replace('onclick="displayEnglish();', 'onclick="displayEnglishM();');
	var reg = new RegExp('style="max-width:280px;max-height:280px;"', 'g');
	txt = txt.replace(reg,'style="max-width:260px;max-height:260px;"');
  txt = pStyle + txt;
  txt = '<h2 style="background: rgba(255,36,36,0.2); border: solid 1px #ff8888;">'
		+ $('#title').val() + '</h2><br>' + txt;
	
  $(txt).appendTo($('#preview_result')); //$($('#code').val()).appendTo($('#preview_result'));

  aModal('コードを作成しました',"code");
//  $('#ptabB').css('color','#f44');

	if (flag) {
    //$('.nav-pills a[href="#tabB"]').tab('show');
    let ostTop = $('#imgAdd').offset().top;
    $('html,body').animate({scrollTop: ostTop}, 300);

	}
	
	$('.fa-eye').addClass('fa-bounce'); // set icon jump
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


$('#ease').click(async function(){
  var txt,ease;
  var urlData = $('#url').val();
	aModal(urlData, 'ease up');
	
	var dmm = $('#p-no').val();

	if ((dmm.indexOf('1Pondo') < 0) &&
			(dmm.indexOf('Carib') < 0) &&
			dmm && dmm.match(/[a-z]/) && await myConfirm('大文字にしますか'))
		$('#p-no').val(dmm.toUpperCase());

  var sp = urlData.split('/');
	ease = $('#selBox2').val();
	
	var asin = urlData.match(/\/dp\/(.+?)\/\?tag=charmedias-22/);
	if (asin) {
		var befor = urlData.match(/rel="noopener">.+?rel="noopener">(.+?)<\/a><\/div><div.+?>(.+?)<\/div>/);
		var txt = '<div class="quick-box" style="margin-bottom:0px;"><div class="quick-image" style="float:left;margin:0px 12px 1px 0px;"><a href="https://www.amazon.co.jp/dp/' + asin[1] + '/?tag=charmedias-22" target="_blank" rel="noopener"></a></div><div class="quick-info" style="line-height:120%; margin-bottom: 10px"><div class="quick-name" style="margin-bottom:10px;line-height:120%"><a href="https://www.amazon.co.jp/dp/' + asin[1] + '/?tag=charmedias-22" target="_blank" rel="noopener">';
		if (befor) txt += befor[1];
		txt += '</a></div><div class="quick-detail" style="margin-bottom:10px;line-height:120%">';
		if (befor) txt += befor[2];
		txt += '</div><div class="quick-sub-info" style="float: left;"><div class="quick-link" style="margin-top: 5px"><br><a href="https://www.amazon.co.jp/dp/' + asin[1] + '/?tag=charmedias-22" target="_blank" rel="noopener">Amazon.co.jpで詳細を見る</a></div></div></div></div><br><br><br>';
		$('#img').val(txt + $('#img').val());
		return;
	}


  //----------- Test Scrape "My PHP" ----------
  if (ease == 'scrape-r') {
    aModal('Start Scraping',urlData);
    testScrapePHP(urlData,'save'); return;
  }

  //----------- Test Scrape "phantom" ----------
  if (ease == 'phantom-r') {
    aModal('Scrape by Phantom',urlData);
    scrapeTest(urlData); return;
  }

  //----------- Test Scrape "title" ----------
  if (ease == 'title-r') {
    aModal('Scrape title',urlData);
    scrapeTitle(urlData,'save'); return;
  }


  if (urlData.match('//b10f.jp')) {//地下10階・ビーテンエフ
    okashiK(urlData,true); return; }

  if (urlData.match('//okashik.atype.jp')) {//お菓子系
    okashiK(urlData,true); return; }

  if (urlData.match('//lemonup.jp')) {//LemonUP
    okashiK(urlData,false); return; }

  if (urlData.match("//www.gekiyasu-dvdshop.jp") ) {//激安
    easeGekiyasu(urlData); return; }

  if (urlData.match("//www.suruga-ya.jp") ) {//駿河屋
    easeSurugaya(urlData); return; }

  if (urlData.match('www.caribbeancompr')) { // Carribeancompr
    scrapeCaribComp(urlData); return; }

  if (urlData.match('www.caribbeancom')) { // Carribeancompr
    scrapeCarib(urlData); return; }
//https://duga.jp/ppv/orustaksoft-0095/
  if (urlData.match('duga.jp')) { // Duga
    scrapeDuga(urlData); return; }

  if (urlData.match('15-candy')) { // 15-candy
    scrapeIchigo(urlData); return;
  }
    //------------ Tokyo Hot ------------
  if (urlData.match('.tokyo-hot.com')) { // Tokyo Hot
    hotPHP(urlData); return;
  }
		//------------ Neowing ---------------
  if (urlData.match('www.neowing.co.jp')) {  // NeoWing 
    console.log('neo=',urlData);
    var spd = urlData.split('product/');
    var img = $('#img').val();
    var url = img + '<a href="https://www.neowing.co.jp/aff/click.cgi/PytJTGW7Lok/5651/A221250/product%2F'
      + spd[1] + '" target="_blank">Neowingで詳細を見る<br><br></a>';
    $('#img').val(url);
    return;
	}
	

	if (urlData.match('www.dmm.')) {  // DMM movie
		var dmm = $('#p-no')
    var cid = urlData.match(/\/cid=(.+?)\//);
    console.log(urlData);
    if (cid) {
      console.log('DMM cid = ' + cid[1]);
			if (urlData.indexOf('www.dmm.com') >= 0) {
				aModal('Go mainDmm2', urlData)
				mainDmm2(urlData);
			} else if (urlData.indexOf('www.dmm.co.jp') >= 0) {
				aModal('be going mainDmm',urlData)
				mainDmm(urlData);
			} else console.log('no cid');

    }

    var append = $('#append').val();
    if (urlData.indexOf('www.dmm.com') > 0) {
      var sp = urlData.match(/cid=(.+?)\//);
      if (sp) {
        var url = '[sample Movie]\n<video width="100%" controls poster="'
          + 'https://pics.dmm.com/digital/video/' + sp[1] + '/' + sp[1] + 'pl.jpg" src="http://cc3001.dmm.com/litevideo/freepv/'
          + sp[1].substr(0,1) + '/' + sp[1].substr(0,3) + '/' + sp[1] + '/' + sp[1] + '_dmb_w.mp4"><p>ご使用のブラウザでは動画再生に対応していません</p></video>';

        if ($('#append').val().match(sp[1])) {
          alert("すでにSample動画があります"); return;}
        else $('#append').val(append + url);

        aModal('サンプル動画を追加しました','easeUp');
        return;
      }
      alert('サンプル動画が見つかりません');
      return;
    }
    if (urlData.indexOf("www.dmm.co.jp") < 0) {alert("ＤＭＭのURLではありません。"); return; }

    var pNo = urlData.match(/cid=(.+?)\//);
    if (pNo) {
      var url = '<iframe width="100%" height="480" src="https://www.dmm.co.jp/litevideo/-/part/=/affi_id=char-001/cid='
        + pNo[1] + '/size=720_480/" scrolling="no" frameborder="0" allowfullscreen></iframe>';
      if (!append.match(url)) { //動画がないときー追加
        if (append.length > 0) append += '\n\n';
        append += url
          + '<!--video width="100%" controls poster="https://pics.dmm.co.jp/mono/movie/adult/'
          + pNo[1] + '/' + pNo[1] + 'pl.jpg"  src="https://cc3001.dmm.co.jp/litevideo/freepv/'
          + pNo[1].substr(0,1) + '/' + pNo[1].substr(0,3) + '/' + pNo[1] + '/' + pNo[1] + '_dmb_w.mp4">'
          + '<p>ご使用のブラウザでは動画再生に対応していません</p></video-->';
        $('#append').val(append);
        aModal('サンプル動画を追加しました','easeUp');
      } else { aModal('サンプルはすでにあります','easeUp'); }
      url = '<a href="https://al.dmm.co.jp/?lurl=' + urlData
        + '/&af_id=char-001&ch=link_tool&ch_id=text" rel="nofollow" target="_blank">Dmmで詳細を見る<br><br></a>'
      var img = $('#img').val();
      if (!img.match('al.dmm.co.jp')) {
        $('#img').val(img + url);
        aModal('アフィアドを追加しました','easeUp');
      } else {aModal('アフィアドはすでにあります','easeUp');}
    }

		return;
	}
	
	console.log('befor heydouga')
/*	if (urlData.indexOf('heydouga.com') >= 0) {
		heydouga(urlData);
		return;
	}
*/

	
	//----------- nyoshin ----------------------
	if (urlData.indexOf('nyoshin.com') >= 0) {
		nyoshin(urlData);
		return;
	}


	 //------------ FC2 ------------
	if (urlData.indexOf('fc2.com/') >= 0) {
		fc2PHP(urlData);
		return;
  }


	//------------ MGS ------------mgstage
  if (urlData.indexOf("www.mgstage.com") >= 0) {
    var sp = urlData.split('/');
		var txt = $('#img').val();
		if (txt.indexOf('mgstage.com') < 0) {
			txt += '<a href="' + urlData + '?aff=8IMROFDGQICYG35O5PYD6L72F3" target="_blank">MGSで詳細を見る<br><br></a>';
			$('#img').val(txt);
		}
		txt = $('#append').val();
		if (txt.indexOf('mgstage.com') < 0) {
			txt = '<script type="text/javascript" charset="utf-8" src="https://www.mgstage.com/js/mgs_sample_movie.js?p=' + sp[5] + '&r=1&c=8IMROFDGQICYG35O5PYD6L72F3"></script>' + txt;
			$('#append').val(txt);
		}
    return;
  }


  //----------- Delta ----------
  if (urlData.indexOf('girlsdelta.com') >= 0) {
		txt = $('#img').val() + '<a href="http://refer.ccbill.com/cgi-bin/clicks.cgi?CA=933350-0000&PA=2611967&HTML=http://www.girlsdelta.com/product/';
    txt += sp[4] + '" target="_blank">GirlsDeltaで詳細を見る</a>';
		$('#img').val(txt);
		return;
  }


	//------------ DTI ------------
	//  if (ease == 'dti-r') {
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
      "8881889-6-184037",
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
				var shosai = org[i].split('.');
        var res = urlData.indexOf("/movie");
        if (res == -1) break;
        var img = $('#img').val();
        var url = '<a href="https://click.dtiserv2.com/Direct/' + des[i] + urlData.substring(res) + '" target="_blank">';
				if (!img.match(url)) {
					$('#img').val(img + url + shosai[0] + 'で詳細を見る<br><br></a>');
				}
        var str = urlData.split('/');

        var append = $('#append').val();
        if (append.length > 0) {
          append += '\n\n\n';
        }
        var a = url + '[Original Site (Sample Movie)]</a>';
				if (urlData.match('heyzo')) {
          testScrapePHP(urlData,'Heyzo');
        } else if (mov[i].indexOf('/') < 0) {
          a = url + '[Sample Movie (Original Site)]</a>';
        } else {
          a += '<script name="setAffplayer' + str[4] + '" id="setAffplayer'
            + str[4] + '" type="text/javascript" src="https://affiliate.dtiserv.com/js/setAffplayerVideo.js?affid=184037&siteid='
            + site[i] + '&video=https://smovie.' + org[i] + '/sample/movies/' + str[4] + mov[i] + '&img=https://www.' + org[i]
            + '/moviepages/' + str[4] + '/images/l_t.jpg&w=700&h=394&url=https://www.' + org[i] + '&id=' + str[4]
            + '&m_flag=1&page=moviepages/' + str[4] +'/index.html"></script>';
        }
        if (!append.match(url)) $('#append').val(append + a);
        break;
      }
    }
	//    return;
	//  }


});

//////////////////////////////////////
//////////// Ease up END /////////////
//////////////////////////////////////


var saveToCookie = function(num = 500){
  if (num) return(false);
//  var date=new Date();
//  date.setTime(date.getTime() + (60*60*1000));
  var txt = allToText();//encodeURIComponent(allToText());
  for (var i = 0;i < txt.length / num;i++) {
    $.cookie('codeMaker' + i,txt.substr(i * num, num),{expires: 14 , path:'/'});
  }
  $.cookie('codeMaker',txt.length / num,{expires: 14 , path:'/'});

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
  var fileName = $('#title').val().substr(0,32);
  fileName = fileName.replace(/ |\//g,'_');
  var date = new Date();

  var fileDate = date.getFullYear()
  + '_' + ('0' + (date.getMonth() + 1)).slice(-2)
  + '_' + ('0' + date.getDate()).slice(-2)/*
  + ' ' + ('0' + date.getHours()).slice(-2)
  + ':' + ('0' + date.getMinutes()).slice(-2)
  + ':' + ('0' + date.getSeconds()).slice(-2)*/ + '.txt';
  fileName += fileDate;

  saveToFile(allToText(),fileName);
});


var saveToFile = function(txt,fileName){
  let blob = new Blob([txt],{type:"text/plan"});
  let link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
  $( '#changed' ).html('');
};


var load = () => {
  aModal('tests')
  var file = document.getElementById('ofile').files[0];
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
    modalSaved(reader.result);
    
    var txt = reader.result.split('\t');
    for (var line of txt) {
      var ele = line.match(/<!-- (.+?) -->([\S\s]*)/);
      if (ele) {
        if (ele[1] == 'wEditor')
          $('#wEditor').trumbowyg('html',ele[2]);
				else $('#' + ele[1]).val(ele[2]);
				//console.log('load',file.name,'ele',ele[1],'text',ele[2])
      }
//      console.log(line);
    }
    document.getElementById( "changed" ).innerHTML = '';
    
  };

};

/*
function snap(img) {
  var im = search(img, 'src=');
//  var li = search(img, 'href=');
  return('<a href="' + im + '" data-lightbox="example-1"><img src="' + im + '" alt="snap shot" width="300" style="max-width:100%;height:auto;margin:5px;"></a>');
};
*/

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
  res = img.substring(0, f) + 'width="' + width + '" height="' + height + '" target="_blank' + img.substring(rr);
  return res;
};


function ShowChange(ele) {
	console.log('ShowChange', ele);
	makeCode(false);

  switch (ele) {
		case "feel":
			$('#mojisuu').html('' + $('#feel').val().length);
			break;
    case "title" :
      document.title = $('#title').val();
      break;
		case 'append':
			$('#mojisuuA').html('' + $('#append').val().length);
			break;
		case 'prof':
			genzai($('#prof').val(), 'n');
			break;
		case 'wAppend':
		case 'wEditor':
			return;
		default:
			break;
  }

	genzai($('#prof').val(), 'n');
	$('#changed').css('color', '#8dd');
	var chg = '**';
	if (ele) chg = '*' +  ele//.slice(0, 1);
  $('#changed').html(chg);
  setTimeout(function(){
    makeCode(false);
  },1000);
};


function imageFocus() {
  var img = $('#img').val();
  if (img.indexOf('://www.amazon') > 0) {
    $('#date').css('color','#faa');
    var date = $('#date').val();
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


async function dateClick(){
	$('#date').css('color', '#fff');

	formatDate();
	var con = $('#confirm-yes').html();
	var dateDelete = await myConfirmF('発売日を削除しますか？','削除する','削除しない','発売日')
	if (dateDelete) {
		$('#date').val('');
	}
};


var formatDate = () => {
	var date = $('#date').val();
	if (date.length > 0) {
		var cdates = date.match(/\d{4}.\d{1,2}.\d{1,2}日?/g);
		if (cdates) {
			for (var cdate of cdates) {
				var mdate = cdate.match(/(\d{4}).(\d{1,2}).(\d{1,2})日?/);
				var fdate = mdate[1] + '/' + ('00' + mdate[2]).slice(-2) + '/' + ('00' + mdate[3]).slice(-2);
				date = date.replace(cdate, fdate);
			}
			$('#date').val(date);
		}
	}
}



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
  var ease = $('#selBox2').val();
  $('#selBox2').removeClass('text-danger');
  $('#selBox2').removeClass('text-warning');

  switch (ease) {
    case 'scrape-r':
      $('#selBox2').addClass('text-danger');
      break;
    case 'title-r':
      $('#selBox2').addClass('text-warning');
      break;
    case 'phantom-r':
      $('#selBox2').addClass('text-danger');
      break;
    default:
      $('#date').css('color','#fff');
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
  var start = area.value.substring(0,area.selectionStart);
  var selected = area.value.substring(area.selectionStart,area.selectionEnd);
  var end = area.value.substring(area.selectionEnd);
  var cursor = area.selectionStart;
  var txt = $('#partsTxt').val();
  var sub = $('#partsSubTxt').val();
  console.log('start',start);
  console.log('end',end);

  switch(item) {
    case 'scrape' :
      selected = selected.toLowerCase().replace('-','');
      if (id == 'p-no') {
        scrapeDmm($('#p-no').val().toLowerCase().replace('-',''));}
      if (id == 'prof') {
        if (selected.length > 0) addWiki(selected,true);
        else addWiki($('#prof').val(),true);
      }
      if (id = 'feel') {
        scrapeTest($('#feel').val());
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
      var dmm = txt.match(/<video.+?src="(.+?)">/);
      if (dmm) txt = dmm[1];
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
//      area.value = start + txt + end;
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
      $('#append').val(app);
      break;

    default : //デフォルト
      alert('"' + item +'"\nメニューにない項目です');
  };
  area.focus();
  area.setSelectionRange(start.length,area.value.length - end.length);
};


var dblClick = (ele = 'none') => {
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
      if (img) {
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
  if (item == 'p-no') csrChange('auto','outFocus');
  if (item == 'prof') {
    genzai($('#prof').val(),'n');
    setTimeout(function(){
      feelTowEdit();
    },500);
  }
  imageFocus();
  //csrChange('auto','outFocus');
};


function noteNum(){
  var txt = $('#append').val();
  var res = txt.match(/\[\*{0,1}\d+?\]/g);
  if (res) return (res.length);
  else return (0);
};


$('#partsClear').click(function(){
  $('#partsSubTxt').val('');
  $('#partsTxt').val('');
});


function replaceReg(txt){
  var regs =
      [ ['~~~','~~~','wavy'],
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
          makeL = item[1] + '<a href="https://en.wikipedia.org/wiki/'
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
      rez += line + '\n';
//      if (line == '') rez += '\n';
//      else rez += '<p>' + line + '</p>\n';
    }

  }
  return rez;
};

var addTag = (txt) => {
  console.log('addTag');
  var texts = txt.match(/<p>[\s\S]*?<\/p>/g);
  if (!texts) return(txt);
  for (var line of texts) {
    var scr = line.match(/^<p>[\s\S]*?[\(（「]/);
    if (!scr) continue;
    console.log(line.slice(3,-4));
    var quote = line.slice(3,-4).split(/__|＿＿/g);
    if (quote[0]) {
      txt = txt.replace(quote[0],'<span class="quote">' + quote[0] + '</span>');
    }
    if (quote[1]) {
      txt = txt.replace(quote[1],'<span class="note">' + quote[1] + '</span>');
    }
//    if (quotline += '\n';
  }
  return txt;
}


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



var addWiki = function(txt,long = null) {
	txt = txt.trim().replace(/[（\(].+?[）\)]/g, '')
		.replace(/ 出演.?[：:]/,'');//ここで引っかかるかもしれない
  var strs = txt.split('\t');
  var str;
  if (strs.length > 1) str = strs[1];
  else str = strs[0];
  str = str.replace(/[ ／]/g,'、');
	var names = str.split(/ |・|／|、|,/);
	console.log('actor names', names, 'length', names.length);
	var l = names.length;
	if (l > 1) {
		long = false;
	}
	console.log('long' , l,long,typeof(long))

	for (var i = 0; i < l; i++) {
    var kakko = names[i].match(/(.+?)([（\(].+?[）\)])/);// カッコ役名
    if (kakko) names[i] = kakko[1];
    if ((names[i].match(/人目/)) || (names[i] == '') || (names[i].match(/[\[()].*?[\])]/))) continue;
    names[i] = names[i].replace('?','');
    var m = names[i].match(/\[.+?\]\((.+?)\)/);

    (function(pram) {
        setTimeout(function() {
          console.log('pram',pram);
          if (m) {//alert(m)
            minnaPHP(m[1],long);
            console.log('m[1] = ',m[1]);
      //      nDim.push(m[1]); //scrapeMinna(m[1],long);
          }
          else {// alert(names[i])
            minnaPHP(names[pram],long);
            console.log('names[i]',i,pram,'pram',names[pram]);
      //      nDim.push(names[i]); //scrapeMinna(names[i],long);
          }
        }, pram * 2000);
    }) (i);

  }
//alert(nDim);
//  scrapeMinna(nDim,long);

//  $('#title').val('出演：' + str);
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


$('#imgAdd').click(async function(){
  //test data
  if ($('#imgURL').val() == '')
    $('#imgURL').val(
  '<img src="https://girls.galleria.mine.nu/wp-content/uploads/2021/05/81fopuIpC2L._AC_SL1500_.jpg" alt="マジメで無口な幼馴染がモジモジ誘惑パンチラで全力アピール チラ見する僕に興奮しちゃって濡れ染みびっちょり！ 八木奈々" height="1500" class="alignnone size-full wp-image-29176" /><img src="https://girls.galleria.mine.nu/wp-content/uploads/2021/05/9mide822pl.jpg" alt="マジメで無口な幼馴染がモジモジ誘惑パンチラで全力アピール チラ見する僕に興奮しちゃって濡れ染みびっちょり！ 八木奈々" width="800" height="439" class="alignnone size-full wp-image-29177">\n<img src="https://girls.galleria.mine.nu/wp-content/uploads/2021/05/51Kom8naX1L._AC_.jpg" alt="その爽やかさ、反則 成宮りか SOD専属AVデビュー" width="352" height="500" class="alignnone size-full wp-image-29158" /><img src="https://girls.galleria.mine.nu/wp-content/uploads/2021/05/81MYsbx1quL._AC_SL1500_-1.jpg" alt="姉の挑発を真に受けた童貞弟がイッてるのに気づかず爆走ピストン　深田えいみ" width="1054" class="alignnone size-full wp-image-29168" />\n<img src="https://girls.galleria.mine.nu/wp-content/uploads/2021/05/f6191719fff91f4f7382ef5a89ccbacd.jpg" alt="「頭の中がおち○ちんの事でいっぱいなんです…」 竹内乃愛 思春期の少女がハマるおち○ぽ研究" width="800" height="537" class="alignnone size-full wp-image-29151" />\n<img src="https://girls.galleria.mine.nu/wp-content/uploads/2021/05/DHgLx2wV0AAUwBm.jpg" alt="「頭の中がおち○ちんの事でいっぱいなんです…」 竹内乃愛 思春期の少女がハマるおち○ぽ研究" class="alignnone size-full wp-image-29153" />'
  );

	var img = $('#imgURL').val();
	var ap = img.match(/https?:.+?\.[jpn]{2}g/g);
	//var ap = img.match(/http.+?jpg/g);
	var jpg = img.match(/\.jpg$/);
	var png;
	if (!ap && !jpg) {
		png = img.match(/\.png$/);
		if (png) {
			if (!await myConfirm('pngファイルです。読み込みますか'))
				return;
		} else {
			await myAlert('画像ファイルがありません。');
			return;
		}
  }
	//  console.log('ap length',ap.length);
  var is = $('#size').val();
  if (parseInt(is) < 1) {

  }
  $('#imageSize').val($('#size').val());
  $('#imageThumb').val(300);
  var ele =
      document.getElementById('imageList');
  var clone = ele.cloneNode( false ); //ガワだけ複製して…
	ele.parentNode.replaceChild(clone, ele); //すげ替え。

	if (jpg || png) {
		var max = parseInt($('#maxImage').val());
		console.log('max',max)
		addNode('src="' + img + '"', false, max + 1, max);
		$('#maxImage').val(max + 1);
	} else {
		$('#maxImage').val(ap.length);

		for (var i = 0; i < ap.length; i++) {

			addNode(ap[i], true, ap.length, i);
		}
	}
  $('#imageModal').modal();
});


//////////////////////////
//------- ADD Node -------
//////////////////////////



var addNode = function(ap,b,max,num) {//ap=<img src=... b=check true 
	//ver.2 ap = 'http.....png or jpg
	if (ap == '') return;
	var title = $('#title').val();

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
  var att = "numChange(" + num + ',' + max + ")";
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

	var image = ap.match(/(https?:.+?\.[jpn]{2}g)/);
	var alt = title;
  var altMatch = ap.match(/alt=\"(.*?)\"/);
	if (altMatch) alt = altMatch[1];
		// ver.1.0 ap = ap.substring(0, ap.lastIndexOf('"')) + '" alt="" />';
  var width = ap.match(/width=\"(.*?)\"/);
  var height = ap.match(/height=\"(.*?)\"/);

  if (image) {
    var img = document.createElement('a');
    img.href = image[1];
    img.target = '_blank';
    img.setAttribute('data-lightbox','example-1');
		img.setAttribute('data-title',alt);

    var src = document.createElement('img');
    src.src = image[1];
    src.className = 'img-rounded img-thumnail mx-1';
    src.height = 100;
    src.alt = alt;
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
	al.value = alt;
	console.log('alt =',title)
  al.style = 'width: 100%;'
  al.className = 'alt dark';
  altNum = 'altChange("' + num + '")';
  al.setAttribute('onchange',altNum);
  el.appendChild(al);
  if (!alt)
    el.style = 'background-color: #fcc;';

};


var numChange = function(item,max){
//  var items = item.split(',');
  var num = String($('#imgSelect' + item ).val());
  var old = String($('#numOld' + item ).text());
  console.log('n,item,max,num,old',n,item,max,num,old);
  for (var i = 0;i < max;i++) {
    var n = $('#imgSelect' + i).val();
    if ((String(i) != String(item)) && (String(n) == String(num))) {
      console.log('n,i,item,num,old',n,i,item,num,old);
      $('#numOld' + item).text(num);
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
      wid.style = 'color: #226622;';
    else
      wid.style = 'color: #aa2222;';
    var hei = document.getElementById('height' + num);
    hei.textContent = ' height="' + element.naturalHeight + '"';
    if (parseInt(size.h) / parseInt(s) > 1.4)
      hei.style = 'color: #226622;';
    else
      hei.style = 'color: #aa2222;';

  return size;
  }

  element.src = url ;
};


var altChange = (num) => {
  var img = document.getElementById('imgNo' + num);
  if ($('#alt' + num).val().length > 0) {
    img.setAttribute('style','background-color: #fff;');
  } else {
    img.setAttribute('style','background-color: #fcc;');
  }
};


var mainImage = () => {
	var alt = $('#title').val();
	if (!alt || (alt.length) < 2) alt = 'snap shot';
		
  for (var i = 0;;i++) {
    var num = $('#imgSelect' + i).val();
		if (!num) break;
    if (num == '0') {
			//      var alt = ' alt="' + $('#alt' + i).val() + '"';
      var width = $('#width' + i).text().match(/.?width=\"(\d+?)\"/);
      var height = $('#height' + i).text().match(/.?height=\"(\d+?)\"/);
      var rate;
      var size = parseInt($('#imageSize').val());

      if ((isNaN(size)) || (parseInt(size) == 0)) {
        size = 500;
        $('#size').val("500");
      }

			//      var style = ' style="max-width: ' + size + 'px; max-height: ' + size
			//        + 'px; border: none; float: left; padding: 0.5em" class="align-top"';
      var style = ' style="max-width: ' + size + 'px; max-height: ' + size
        + 'px; border: none; text-align: left; padding: 0.5em" class="align-top"';

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
			var src = item.match(/(https?:.+?\.[jpn]{2}g)/);
			console.log('src of item',item,src)
      var img = $('#img').val();
      img = img.replace(/<img src=".+?>/g, '');

      var link = img.match(/\[\]\((.+?)\)/);
      if (link) {
				//        img = img.replace(link.[0],'[' + )
      }
      var orgImage = img.match(/(https?:.+?\.[jpn]{2}g)/);

      var altImage = '<div style="float:left;"><img src="' + src[1] + '" ' + alt + style;
      if (width) altImage += ' width="' + width[1] + '"';
      if (height) altImage += ' height="' + height[1] + '"';
      altImage += '></div>';

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


var subImage = () => {
	var alt = $('#title').val();
	if (!alt || (alt.length) < 2) alt = 'snap shot';
	var app = $('#append').val().trim();
	if (($("#imageClearCheck").prop("checked") == true)
		&& (app.length > 0)) {
    app += '<div style="clear: both;"></div>';
  } 
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

        var src = item.match(/(https?:.+?\.[jpn]{2}g)/);

        if (app.match(src[1])) break;

        var width = $('#width' + i).text().match(/width=\"(\d+?)\"/);
        var height = $('#height' + i).text().match(/height=\"(\d+?)\"/);
        var alt = $('#alt' + i).val();

        var rate;
        if ((width) && (height)) {
          if (parseInt(width[1]) > parseInt(height[1])) {
            rate = (size -20) / width[1];
            height[1] = Math.round(height[1] * rate);
            width[1] = (size -20);
          } else {
            rate = (size -20) / height[1];
            width[1] = Math.round(width[1] * rate);
            height[1] = (size -20);
          }
        }

				sub += snapImage(src[1]);
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
  if (retry > 5) {aModal('retry Over','url');
    csrChange('auto','2304'); return(false);}
  csrChange('wait','2305');
  var key = 'ak-nve11-shv51-c72g7-6xnnp-kr5e3';

  var option = {url:url,renderType:"HTML",outputAsJson:true};
  var payload = encodeURIComponent(JSON.stringify(option));
  var urlx = "https://phantomjscloud.com/api/browser/v2/"+ key +"/?request=" + payload;

  setTimeout(function() {
    fetch(urlx,{method: "GET",}).then(response => response.text()).then(text => {
			//      saveToFile(text,'Test-pre-json'+ '.txt');
      if (JSON.parse(text)["content"]["statusCode"] != '200') {
        if (confirm('fetch search error\n\ncode:' + JSON.parse(text)["content"]["statusCode"])) {
          retry++; return (scrapeTest(url,retry));
        }
      saveToFile((text),'Gekiyasu-pre'+ '.txt');
        csrChange('auto','2320');
        return(false);
      }
      var json = JSON.parse(text)["content"]["data"];
      csrChange('auto','2325');
      aModal('test scraping Ends','url');
      saveToFile(json,'Test-content-data.txt');
      return (true);
    })
  },2000);
};

/*testFetch = (url) => {
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
*/
var asDmm = (pNo) => {  //　商品IDだけで、情報を作成
  var no = pNo.match(/(\d*?)(\D+?)(\d+)/);
  var url = '<iframe width="100%" height="480" src="https://www.dmm.co.jp/litevideo/-/part/=/affi_id=char-001/cid=';
  url += pNo + '/size=720_480/" scrolling="no" frameborder="0" allowfullscreen></iframe>';

  if (no) {
//    var no1,no2;
//    if (no[1].length > 0) {no1 = no[1]; no2 = no[2]}
//    else {no1 = no[2]; no2 = no[3]}
    url += '\n<!--video width="100%" controls poster="https://pics.dmm.co.jp/mono/movie/adult/'
      + pNo + '/' + pNo + 'pl.jpg"  src="https://cc3001.dmm.co.jp/litevideo/freepv/'
      + pNo.substr(0,1) + '/' + pNo.substr(0,3) + '/' + pNo + '/' + pNo + '_dmb_w.mp4"><p>ご使用のブラウザでは動画再生に対応していません</p></video-->';
  }

  var img = 'https://pics.dmm.co.jp/mono/movie/adult/miaa466/miaa466pl.jpg';

  var p = $('#append').val();
  if (!p.match(url)) {
    if (p.length > 1) url = p + '\n\n\n' + url;
    $('#append').val(url);
  }

  img = '<a href="https://al.dmm.co.jp/?lurl=https%3A%2F%2Fwww.dmm.co.jp%2Fmono%2Fdvd%2F-%2Fdetail%2F%3D%2Fcid%3D'
    + pNo + '%2F&af_id=char-001&ch=link_tool&ch_id=text" rel="nofollow" target="_blank">Dmmで詳細を見る<br><br></a>';
  p = $('#img').val();
	if (p.indexOf('al.dmm.co.jp') < 0) $('#img').val(p + img);
	else aModal('affi ad already exists', pNo);
}


var mainDmm = async (url,retry = 0) => { // （一覧表示後に）FANZAの商品IDで検索。
  aModal('mainDmm ' + url,'DMM');

	var cids = url.match(/\/cid=(.+?)\//);
	if (!cids) {
		await myAlert('商品番号が見つかりません:mainDmm\n\n' + url);
		csrChange('auto','dmmMain')
		return;
	}
  var cid = cids[1];
  asDmm(cid);

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
        retry++; return (mainDmm(url,retry));}
      var json = JSON.parse(text)["content"]["data"];//.replace(/\r|\n|\t/g,'');
      //      saveToFile(json,'testDMMatOnce.html');

      $('#orgDmmInput').val(url);
      //        $('#orgPage').attr('src',url);

      var title = json.replace(/\r|\n|\t/g,'').match(/<h1.*?>(.+?)<\/h1>/);
      if (title) {
        if ($('#title').val().length < 1)
					$('#title').val(title[1].replace(/[ 　]?（ブルーレイディスク）|[　 ]?【数量限定】|[　 ]?【ベストヒッツ】|[ 　]?【特選アウトレット】|[ 　]?Blu-ray版|[　]?【アウトレット】|[ 　]?（DOD）/g, ''));
      } else alert('no title !');

      var cmt = json.replace(/\r|\n|\t/g,'').match(/<p class="mg-b20">(.+?)<\/p>/);
      if (cmt) $('#cmt').val(cmt[1]); else alert('no comment !');//発売日：</td>

			var date = json.match(/発売日：.+?\s.+?(\d{4}\/\d{2}\/\d{2})/);
			if ($('#date').val() == '') {
				if (date) $('#date').val(date[1]); else alert('no date !');
			}
      var prof = $('#prof').val();
      if (prof.length > 0) prof = '\n\n' + prof;

      var perform = '';
      //      var act = json.match(/id="performer">\s.+>(.+)<\/a/);
      var act = json.match(/出演者(.+?\s)*?<\/tr/);
      if ((act) && (prof.indexOf('出演：') == -1)) {
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
      if ((per) && (prof.indexOf('監督：') == -1)) {
        if (perform.length > 0) perform += '\n';
        perform += '監督：' + per[1];
      }

      var time = json.match(/収録時間：.+?>\s.+?>(.+?)<\/td/);
      if ((time && time[1].match(/\d+/)) && (prof.indexOf('収録時間：') == -1)) {
        console.log(time);
        if (perform.length > 0) perform += '\n';
        perform += '収録時間：' + time[1];
      }


      var tag = json.match(/<td.+?>ジャンル：[\s\S]+?>[\s\S]+?<\/td/);
      if ((tag) && (prof.indexOf('ジャンル：') == -1)){
        var tags = tag[0].match(/\/">(.+?)<\/a/g);
        if (perform.length > 0) perform += '\n';
        perform += '（ジャンル：';
        if (tags) {
          for (var tag of tags) {
            perform += tag.slice(3,-3) + '、';
          }
          perform = perform.slice(0,-1) + '）';
        }
      }
			if (perform.length > 0) {
				$('#prof').val(perform + prof);
				scrapeThis('prof', true)
			}
      var imgUrl = json.match(/(https:\/\/pics\.dmm\.co.+?\.jpg)/)
      if (imgUrl) {
        displayImage(imgUrl[1].replace('ps.jpg','pl.jpg'));
      }
      //      saveToFile(json,'mainDmm2' + '.txt');
      csrChange('auto','mainDmm-2');

      var append = $('#append').val();
      if (append.length > 0) append += '\n\n';

			var images = json.match(/https:\/\/pics.dmm.co.jp\/digital\/video.+?jpg/g);
      if (images) {
        for (var image of images) {
          image = image.replace('-','jp-');
					if (append.indexOf(image) >= 0) continue;
					append += snapImage(image);
				}
//				append += '<br style="clear: both;">';

				$('#append').val(append);
      }
    })
  },500);

};


var snapImage = (urlData) => {
	var alt = $('#title').val();
	var size = 300;
	if (!alt || (alt.length) < 2) alt = 'snap shot';
	return ('<div style="width: ' + size + 'px; height: ' + size + 'px; float: left; display: flex; justify-content: center; align-items: center; margin: 10px; " class="snapShot"><a href="' + urlData + '" data-lightbox="example-1"><img src="' + urlData + '" class="snapImage" alt="' + alt + '" style="max-width:' + (size - 20) + 'px;max-height:' + (size - 20) + 'px;"></a></div>');
}


function myPHP(urlData) {
  return new Promise (function(resolve,reject) {
    setTimeout(function(){

    },3000)
  })
}

var mainDmm2 = async (urlData,retry = 0) => { // DMM 一般　詳細検索

	var imgUrl = '';
	let cid = urlData.match(/cid=(.+?)\//);
	if (cid) {
		imgUrl = 'https://pics.dmm.com/mono/movie/adult/'
			+ cid[1] + '/' + cid[1] + 'pl.jpg';
		displayImage(imgUrl);

		var imgUrl2 = '<a href="https://al.dmm.com/?lurl=https%3A%2F%2Fwww.dmm.com%2Fmono%2Fdvd%2F-%2Fdetail%2F%3D%2Fcid%3D'
			+ cid[1]
			+ '&af_id=char-001&ch=link_tool&ch_id=text" rel="nofollow">DMMで詳細を見る<br><br></a>';
		var img = $('#img').val();
		if (img.indexOf('<a href ="https://al.dmm.com') < 0) {
			$('#img').val(img + imgUrl2);
		}
	}

	var append = $('#append').val();
	var sp = urlData.match(/cid=(.+?)\//);
	if (sp) {
		var url = '[sample Movie]\n<video width="100%" controls poster="'
			+ imgUrl + '" src="http://cc3001.dmm.com/litevideo/freepv/'
			+ sp[1].substr(0,1) + '/' + sp[1].substr(0,3) + '/' + sp[1] + '/' + sp[1] + '_dmb_w.mp4"><p>ご使用のブラウザでは動画再生に対応していません</p></video>';

		if (!append.match(sp[1])) {
			append += url;
			aModal('サンプル動画を追加しました', 'scrapeDmm');
		}
	} else alert('サンプル動画が見つかりません');

	var txt = await promisePHP(urlData);
	if (!txt) {
		aModal('promisePHP error', urlData);
		return false;
	}

	var title = txt.match(/<h1[\s\S]*?>(.+?)<\/h1>/);
	if (title) {
		if ($('#title').val().length < 1)
			$('#title').val(title[1].replace('/', '　').replace(/[ 　]?（ブルーレイディスク）|[　 ]?【数量限定】|[　 ]?【ベストヒッツ】|[ 　]?【特選アウトレット】|[ 　]?Blu-ray版|[　]?【アウトレット】|[ 　]?（DOD）/g, ''));
	} else alert('no title !');

	var cmt = txt.match(/<p class="mg-b20">([\s\S]+?)<div/);
	if ((cmt) && ($('#cmt').val().length < 1)) $('#cmt').val(cmt[1]); else await myAlert('no comment !');//発売日：</td>
//<td width="100%">2021/02/25</td>

	var date = txt.match(/発売日：[\s\S]+?(\d{4}\/\d{2}\/\d{2})/);
	if ((date) && ($('#date').val() == '')) $('#date').val(date[1]);

	var prof = $('#prof').val();
	if (prof.length > 0) prof = '\n\n' + prof;

	var perform = '';
	var act = txt.match(/出演者：<[\s\S]*?<\/tr/);
	if ((act) && (prof.indexOf('出演：') == -1)) {
		var acts = act[0].match(/>[^<]+?<\/a/g);
		console.log(act[0].length);
		if (acts) {
			var actless = acts[0].substr(1,acts[0].length - 4);
			perform = '出演：' + actless;
			if (title) {
				console.log('title ',title)
				console.log(' ' + actless + '$')
				var acter = title[1].match(new RegExp(' ' + actless + '$'));
				if (acter) $('#title').val(
					$('#title').val().replace(acter,'　' + actless).replace(/[ 　]?（ブルーレイディスク）|[　 ]?【数量限定】|[　 ]?【ベストヒッツ】|[ 　]?【特選アウトレット】|[ 　]?Blu-ray版|[　]?【アウトレット】|[ 　]?（DOD）/g, '')
				);
			}
			for (var i = 1;i < acts.length;i++) {
				if (acts[i].length < 6) continue;
				perform += '、' + acts[i].substr(1,acts[i].length - 4);
				console.log(perform);
			}
		}
	}
	var per = txt.match(/<td.+?>監督：[\s\S]+>[\s\S]+>(.+)<\/a/);
	if ((per) && (prof.indexOf('監督：') == -1)) {
		if (perform.length > 0) perform += '\n';
		perform += '監督：' + per[1];
	}

	var time = txt.match(/収録時間：[\s\S]+?>[\s\S]+?>(.+?)<\/td/);
	if ((time && time[1].match(/\d+/)) && (prof.indexOf('収録時間：') == -1)) {
		console.log(time);
		if (perform.length > 0) perform += '\n';
		perform += '収録時間：' + time[1];
	}

	var tag = txt.match(/<td.+?>ジャンル：[\s\S]+?>[\s\S]+?<\/td/);
	if ((tag) && (prof.indexOf('ジャンル：') == -1)){
		var tags = tag[0].match(/\/">(.+?)<\/a/g);
		if (perform.length > 0) perform += '\n';
		perform += '（ジャンル：';
		if (tags) {
			for (var tag of tags) {
				perform += tag.slice(3,-3) + '、';
			}
			perform = perform.slice(0,-1) + '）';
		}
	}

//	var append = $('#append').val();
//	var poster = append.match(/(poster=".+?")/);
//	console.log('poster = ',poster,imgUrl);
//	if (poster && (imgUrl.length > 0)) {
//		append.replace(poster[1], 'poster="' + imgUrl + '"');
//	}	

	if (append.length > 0) append += '\n\n\n';

	var images = txt.match(/https:\/\/pics.dmm.com\/digital\/video.+?jpg/g);
//	console.log('images',images)
	if (images) {
		for (var image of images) {
			image = image.replace('-','jp-');
			if (append.indexOf(image) >= 0) continue;
			append += snapImage(image);
		}
//		append += '<br style="clear: both;">';

	}

	$('#append').val(append);

	$('#prof').val(perform + prof);
	scrapeThis('prof', true);

};


var scrapeDmm2 = async (pNo,retry = 0) => { // 商品番号からdmm一般を検索
  if (retry > 5) {
    alert('retry Over DMM 2 : ' + pNo);
    csrChange('auto','scrapeDmm2');
    return(false);
  }

  var urlData = 'https://www.dmm.com/search/=/searchstr=' + pNo;
	var txt = await promisePHP(urlData);
	if (txt) { // LIST get
		if (txt.indexOf('に一致する商品は見つかりませんでした。') >= 0) {
			aModal(pNo + 'に一致する商品は見つかりません','scrape DMM')
			return;
		}
		var parts = txt.match(/class="tmb"[\s\S]+?"value"/g);
		if (parts) {
			var cates = ['通販','レンタル','>動画<','見放題'];
			console.log(cates)
			for (var i = 0;i < cates.length;i++) {
				var items = parts.filter(item => {return item.match(cates[i])});
				console.log(cates[i],'  items = ',items);
				if (items.length > 0) {
					dvdUrl = items[0].match(/href="(http.+?)"/);
					if (dvdUrl) {
						console.log('to DMM2 main = ',dvdUrl[1])
						mainDmm2(dvdUrl[1]);
						csrChange('auto','dmm2 end');
						return;
					}
				}
				aModal('該当商品なし',pNo);
			}
		}

	} else { //scrapeing error
		aModal('scraping Error','Title');
	}
};


var scrapeDmm = (pNo,retry = 0) => { // 商品型番から一覧表示
  if (retry > 5) {
    alert('retry Over DMM : ' + pNo);
    csrChange('auto','scrapeDmm');
    return(false);
  }
//  csrChange('wait','scrapeDmm-1');
  var key = 'ak-nve11-shv51-c72g7-6xnnp-kr5e3';
  var url = 'https://www.dmm.co.jp/search/=/searchstr=' + pNo;
// FANZAを検索

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
      // https://www.dmm.com/mono/dvd/-/detail/=/cid=n_701tsbs81025/
      var reg = 'https://www.dmm.co.jp/mono/dvd/-/detail/=/cid=.+?"';
      var cid = json.match(/https:\/\/www.dmm.co.jp\/mono\/dvd\/.\/detail\/=\/cid=.+?"/g);
      if (!cid) {//https://www.dmm.co.jp/mono/dvd/-/detail/=/cid=1ienf124/
        reg = 'https://www.dmm.co.jp/mono/dvd/-/detail/=/cid=.+?"';
        cid = json.match( new RegExp(reg));
        if (!cid) {
          console.log('Go scrapeDmm2 ....');
          scrapeDmm2(pNo);
          //alert('error Data : ' + reg);
          //saveToFile(json,'scrapeDmm2872.html');
          csrChange('auto','scrapeDmm-2');
          return (false); }
      }
      cid[0] = cid[0].slice(0,-1);
      console.log('scrapeDMM cid = ',cid);

      mainDmm(cid[0]);

//      asDmm(pNo); //　商品IDだけで、情報を作成

    })
  },500);

};


jsonToProfile = (json, long) => {
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
      prof += '\n生年月日 ' + strBirth( $('#date').val(),item);
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
  console.log('p',p,);
  console.log('prof',prof);
//  if (p.match(prof)) return;
  if (p.length > 1) prof = p + '\n\n\n' + prof;

  $('#prof').val(prof);

}


var csrChange = (csr,line = 'unknown') => {
	console.log('cursor ', csr, 'line ', line);
	var eles = ['body', 'input', 'textarea', 'a'];
	//csr = csr + ' !important';
	for (var ele of eles) {
		$(ele).css('cursor', csr);
		$(ele + ':hover', csr);
	}

	var eles2 = ['label', 'div', 'button', 'span'];
	for (var ele of eles2) {
		$(ele).css('cursor', csr);
		$(ele + ':hover', csr);
	}

	var ele3 = ['i'];
	for (var ele of ele3) {
		if (csr == 'auto') csr = 'pointer';
		setTimeout(() => {
			var style = $(ele).attr('style');
			style = style.replace(/cursor:.+?;/, '');
			$(ele).css('cssText', 'cursor: ' + csr + ' !important; ' + style);

			style = $(ele + ':hover').attr('style');
			$(ele + ':hover').css('cssText', 'cursor: ' + csr + ' !important; ' + style);
		}, 200);
	}
}


var aModal = (txt,ele = 'codeMaker',t = 10000) => {
	var date = new Date();
	var fileDate = 
		('0' + date.getDate()).slice(-2)
		+ ' ' + ('0' + date.getHours()).slice(-2)
		+ ':' + ('0' + date.getMinutes()).slice(-2);

	var alerts = $('#alertHistory').val();
	if (alerts.length > 5000) alerts = alerts.slice(-1000);

	alerts += fileDate + ' ' + txt + ' : ' + ele + '\n';
	$('#alertHistory').val(alerts).focus().get(0).setSelectionRange(alerts.length, alerts.length);;
	//	var e = document.getElementById('alertHistory');
		
	ele = ele.slice(-24);
  txt = txt.slice(-24);

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

//////////////////////////////////////////////////////
//////////// Change Tabs タブクリック //////////////////

///// HIDDEN //////
$('.nav-pills a').on('hidden.bs.tab', function (event) {
  var pill = $(event.target).attr('href').match(/tab\D/g);
  if (!pill) return;

  if (pill[0] =='tabA') {// alert('tab A')"rep"
    $('#max').css('display','inline-block');
    return;
  }
  $('#p' + pill[0]).css('color','#8c8');
});

/*$('.nav-pills a').on('hide.bs.tab', function (event) {
})*/


///// SHOW //////
$('.nav-pills a').on('shown.bs.tab', function (event) {
  titleChange('title');
	setTimeout(function () {
		$('.fa-eye').removeClass('fa-bounce');
	},500)

  if ($(event.target).attr('href').match('tabC')) {// alert('tab D')
    var ddd = $('#date').val();
    if (!ddd || (ddd == '')) $('#sale-d').val('XXXX/XX/XX').css('background','#844');
    else  $('#sale-d').val(ddd).css('background','');
	}
	
  if ($(event.target).attr('href').match('tabA')) {// event.relatedTarget
//    $('#version').css('display','none');
    $('#max').css('display','none');
    $('#mainTitle').css('color','#8c8');
    $('#mainTitle').text('codeMaker');
    $('#mainTitle').addClass('h3');
    $('#mainTitle').removeClass('h4 text-info');
//    $('#version').text('ver.' + version);
  } else {
//    $('#version').css('display','inline-block');
    $('#max').css('display','inline-block');
    $('#mainTitle').removeClass('h3');
		$('#mainTitle').addClass('h4');
		$('#mainTitle').css('color','#8ef')
		$('#mainTitle').text('メインへ');
		
    return;
//http://localhost/codeMaker/#tabA
	} 
	
});



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


$('#back').click( async function(){
	var check = $('input[name="ID"]:checked').val();
	console.log('check',check)
  if ((check == 'min') || (check == 'wiki')) {
    var prof = $('#prof').val();
    var out = $('#output').val();
//    console.log(prof,out);
    if (prof.length > 0) {
      if (prof.indexOf(out) >= 0) {
				aModal('すでにあります', 'copy to Main');
				await myAlert('すでにあります');
        return;
      }
      prof += '\n\n\n';
    }
    $('#prof').val(prof + out);
    aModal('転記しました','Replacer');
		genzai($('#prof').val(), 'n');
	  $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
    $('.nav-pills a[href="#tabA"]').tab('show');
  } else {
    return;
  }
//  $('.nav-pills a[href="#tabA"]').tab('show');
});


/*$('#cmaker').click(function(){
  delCookies();
  history.back();
});*/


$('#replace').click(function(){
  if ($('#all').prop("checked")) {
    all();
  } else if ($('#wiki').prop("checked")) {
    wiki();
  } else {
    minna(true);
  }
});


$('#short').click(function(){
  if ($('#minna').prop("checked")) {
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
  if ($('#wiki').prop("checked")) {
    $('#short').hide();
    $('#back').show();
//    $("#again").hide();
    $('.id-minna').show();
    localStorage.setItem('id', 'minna');
  } else if ($('#minna').prop("checked")) {
    $('#short').show();
    $('#back').show();
//    $("#again").show();
    $('.id-minna').show();
    localStorage.setItem('id', 'minna');
  } else {
//    $("#again").hide();
    $('#back').hide();
    $('#short').hide();
    $('.id-minna').hide();
    localStorage.setItem('id', 'all');
  }
};


/////////////////////////////////////////
//---------------- 再置換 ----------------
/////////////////////////////////////////


$('#again').click(function(){
  var b = $('#input').val();
  var a = "";
  var i;
  var data;
  var sdate = $('#date').val();
  if (sdate.length == 0){
    aModal('発売日がありません','date');
    $('#sale-d').val('XXXX/XX/XX').css('background','#844');
  } else {
    var cdate = seikeiDate(sdate);
    if (cdate) {
      sdate = cdate.nen + '/' + cdate.tuki + '/' + cdate.nichi;
      //$('#date').val(sdate);
    }
    $('#sale-d').val(sdate).css('background','');
  }

  if (b.length === 0) {
    aModal('変換前コードがありません','input');
    return;
  }
  var s = b.split(/\r\n|\r|\n/);
  if (s.length > 1) {
    var reg = s[0].match(/^\[(.+?)\]\([GWL]+?\)(.+)/);
    if (reg) s[0] = reg[1] + reg[2];
    var name = s[0].replace(/\[.+?\]/, ''); // delete [Wiki]
    var kana = name.match(/(.+)[\s　]?[\(（](.+)[）\)]/);
    if (kana && (kana.length > 2)) { //（かな）がある。 kana[1] 漢字 kana[2]kana
      var ro = kana[2].match(/(.+)\s?\/\s?(.+)/);
      if (!ro) { // romaji ga naitoki
        kana[2] = kana[2] + ' / ' + kana2roma1(kana[2]);
      }
//      console.log(kana[2]);
      a = '[' + kana[1].trim() + '](GW) （' + kana[2] + '）';
    } else {
      a = '[' + name + '](GW)';
    }

/*    if (!s[0].match(/\[.+?\]\(.+?\)/)) { // [](**)がないとき
      var kana = s[0].match(/[\(（].+[）\)]/);
      if (kana) { //（かな）がある。
        s[0] = s[0]
          .replace(/\[[Ww]iki.*\]/,'') //Wikiを取る。
          .replace(kana[0],' （' + kana[0].substr(1,kana[0].length -2) + '）')//カッコを付け直し
          .replace('  ',' '); //スペースを置き換え
        var ss = s[0].split(' '); //漢字かな分離 ss[0] 漢字　ss[1]かな
        var alfa = kana2roma1(ss[1]);
        a = s[0].replace(ss[0],'[' + ss[0] + '](GW)');
      }
    }
    else a = s[0];*/
  }
  for (i = 1;i < s.length;i++) {
    a += '\n';
    var ss = s[i].match(/(.+)(http.+)/);
    if (ss) {
      if (s[i].indexOf('a href="') < 0) {
        var h = s[i].indexOf('http');
        a += ss[1] + '[' + ss[2] + '](L)';
        continue;
      }
		}
		
		s[i] = s[i].replace(/^[ :：\t　]*?/g,'')
    s[i] = s[i].replace(/[:：\t　]/,' ');

    ss = s[i].match(/サイズ[\s\S]*?T\D?(\d{1,3}).*?B\D?(\d{1,3})\D*?W\D?(\d{1,3})\D*?H\D?(\d{1,3})/);
    if (ss) {
      a += 'サイズ T' + ss[1] + ' / B' + ss[2] + ' / W' + ss[3] + ' / H' + ss[4];
      continue; 
    }

    ss = s[i].match(/(別名[ 　])(.+)/);
    if (ss) {
      a += ss[1]
      var names = ss[2].split(/[,、]/);
      for (var j = 0;j < names.length;j++) {
        ss = names[j].match(/(.+?)([\(（].+[\)）])/);
        if (names[j].match(/^\[.+?\]\(/)) a += names[j];
        else if (ss) {
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

    a +=  '生年月日 ' + strBirth(sdate,bd); //'生年月日 ' + ss[1] + '年' + ss[2] + '月' + ss[3] + '日 （当時';
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
	genzai(a, 'nenrei-rep');
  $('#output').val(a);
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
		- parseInt(bdate.nen + bdate.tuki + bdate.nichi)) / 10000);
};
var gakunen = (sd, bd) => {
	var sdate = seikeiDate(sd); if (!sdate) return (false);
	var bdate = seikeiDate(bd); if (!bdate) return (false);
	var gakunen = Math.floor((parseInt(sdate.nen + '0401')
		- parseInt(bdate.nen + bdate.tuki + bdate.nichi)) / 10000) - 5;
	var toji = nToji(sd, bd);
	if ((!gakunen) || (!toji)) return false;
	if (parseInt(sdate.tuki) < 4) gakunen -= 1;
	console.log('gakunen',gakunen,sdate.nen,sdate.tuki,sdate.nichi)
	if ((gakunen > 0) && (gakunen < 7)) return ('当時' + toji + '歳、小学' + String(gakunen) + '年生、');
	else if ((gakunen > 6) && (gakunen < 10)) return ('当時' + toji + '歳、中学' + String(gakunen - 6) + '年生、');
	else if ((gakunen > 9) && (gakunen < 13)) return ('当時' + toji + '歳、高校' + String(gakunen - 9) + '年生、');
	else return ('当時' + toji + '歳、');
	
}


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
  var line = $('#input').val().split(/\r\n|\r|\n/);
  var i = 1;
  var credit = "";
//  var direc;
  var director = [];
  var df = false;
  for (i = 0;i < line.length;i++) {
    if (line[i] == "生年月日") {
      $('#minna').prop('checked', 'true');
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
				credit += '[' + line[i] + "](W)：" + line[i + 1].trim() + "\n";
			}
			else credit += line[i].trim() + "\n";
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
  $('#output').val(title + "\n\n\n\n" + media + "\n\n" + credit);

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
  var b = $('#input').val();
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

        rez += '生年月日 '+ strBirth(sdate,ss[1]);
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
	genzai(rez, 'nenrei-rep');
  $('#output').val(rez);
};



////////////////////////////////////////////
//---------------- みんなのAV ----------------
////////////////////////////////////////////

var minna = function(long){
  var b = $('#input').val();
  var a;
  var i,j = 0;
  var data = [];
  var sdate = $('#sale-d').val();
  if (!sdate) {alert("発売日がありません。[みんなのAV]");}

  if (b.length === 0) {
    alert('変換前コードがありません');
    return;
  }
  b = b.replace('趣味・特技','趣味／特技');
  b = b.replace(/\r\r/g,'\r').replace(/\n\n/g,'\n').replace(/\r\n\r\n/g,'\r\n')
    + '\nタグ\n\n';
//  console.log(b);
  var s = b.split(/\r|\n|\r\n/g);
  /*for (i = 0;i < s.length;i++) {
    if (s[i] == "クレジット") {
      $('#all').prop('checked', 'true');
      idChanged();
      return;
    }
    if (s[i] == "") s.splice(i,1);
    if (s[i] == 'タグ') break;
  } */
  var item = ["愛称","別名","生年月日","サイズ","血液型","出身地","所属事務所"
    ,"趣味・特技",'趣味／特技',"AV出演期間","デビュー作品","ブログ","公式サイト","タグ","未設定"];

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

    if (s[i] == 'タグ') {
//      if (long) a += '\n';
      a += 'タグ ';
      while(s[++i]) {
        if (s[i].match(/ユーザー登録/)) break;
        a += s[i] + '、';
      }
      break;
    }
    console.log(s[i]);

    for (var j = 0;j < item.length;j++) {
      if (s[i] == item[j]) {
        if (s[i + 1] == item[j + 1]) {
          if (long) a += s[i] + '\n';
          break;
        }
        if (s[i] == '生年月日') {
          a += '生年月日 ' + strBirth(sdate,s[i + 1]) + '\n';
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

	genzai(a, 'nenrei-rep');
  $('#output').val(a);
};

var kana2roma1 = (kana) => { // multiple first letter to upper
  var kanas = kana.split(/\s|　/g);
  var res = '';
  for (var i = 0;i < kanas.length;i++){
    if (res != '') res += ' ';
    var r = kana2roma(kanas[i]);
    res += r.substr(0,1).toUpperCase() + r.substr(1);
  }
  return res;
}

var kana2roma = function(kana){
  var roma = '';
  var hebon = [
    ['あ','a'], ['い', 'i'], ['う', 'u'], ['え', 'e'], ['お', 'o'],
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
/*
  var romas = roma.split(/\s/g);
  var res = '';
  console.log(romas)
  for (var i = 0;i < romas.length;i++) {
    res += romas[i].substr(0,1).toUpperCase() + romas[i].substr(1);
    if (i < romas.length - 1) res += ' ';
  }

return res;*/
  return roma;
};


var genzai = (bd,ele = 'none') => {//　現在の年齢表示　BD生年月日　ele 表示する要素
//  console.log(bd,ele);
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

    if (MM == 3 && DD >= 21) ans  = "牡羊"
    if (MM == 4 && DD <=19) ans  = "牡羊"
    if (MM == 4 && DD >= 20) ans  = "牡牛"
    if (MM == 5 && DD <=20) ans  = "牡牛"
    if (MM == 5 && DD >= 21) ans  = "双子"
    if (MM == 6 && DD <=21) ans  = "双子"
    if (MM == 6 && DD >= 22) ans  = "蟹"
    if (MM == 7 && DD <=22) ans  = "蟹"
    if (MM == 7 && DD >= 23) ans  = "獅子"
    if (MM == 8 && DD <=22) ans  = "獅子"
    if (MM == 8 && DD >= 23) ans  = "乙女"
    if (MM == 9 && DD <=22) ans  = "乙女"
    if (MM == 9 && DD >= 23) ans  = "天秤"
    if (MM == 10 && DD <=23) ans  = "天秤"
    if (MM == 10 && DD >= 24) ans  = "蠍"
    if (MM == 11 && DD <=21) ans  = "蠍"
    if (MM == 11 && DD >= 22) ans  = "射手"
    if (MM == 12 && DD <=21) ans  = "射手"
    if (MM == 12 && DD >= 22) ans  = "山羊"
    if (MM == 1 && DD <=19) ans  = "山羊"
    if (MM == 1 && DD >= 20) ans  = "水瓶"
    if (MM == 2 && DD <=18) ans  = "水瓶"
    if (MM == 2 && DD >= 19) ans  = "魚"
    if (MM == 3 && DD <=20) ans  = "魚"
    return ans + "座";
}

var strBirth = (sdate = '',bdate = '') => {
// sdate 発売日 bdate 生年月日を含む一行　どちらも8桁でもいい　return カッコつき
  var res = '';
//  console.log(bdate);
  var birthDay = seikeiDate(bdate); if (!birthDay) return false;
//  console.log(birthDay);
  res += birthDay.nen + '年' + parseInt(birthDay.tuki) + '月' + parseInt(birthDay.nichi) + '日 （';
	var toji = nToji(sdate, bdate);
	var gaku = gakunen(sdate, bdate);
  if (toji) res += gaku;
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
  $('#preview_result').css('background-color','#202820');
  $('#preview_result').css('color','#eee');
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

var edit;//必要？

var setTrumbowyg = (area, color = '#cc6', target = null) => {
	$('#' + area).toggleClass('trumbowyg-dark');
	var para = ' style="margin: 0px !important; padding: 0px !important"';

	var txt = $('#' + area).val();
	setTimeout(() => {
		$('#' + area).val(txt);
	}, 500);

	$('#' + area).trumbowyg({
		lang: 'ja',
		changeActiveDropdownIcon: true,
		//autogrow: true,
		//autogrowOnEnter: true,
		//disabled: true,
		imageWidthModalEdit: true,
		removeformatPasted: true,
		minimalLinks: true,
		defaultLinkTarget: '_blank',
		btnsDef: {
			moreForm: {
				dropdown: ['p', 'blockquote', 'h5', 'h4', 'h3', 'h2', 'h1', 'h6'],
				title: 'フォーマット',
				ico: 'p'
			},
			h5: { text: '<h5' + para + '>注釈<h5>' },
			h4: { text: '<h4' + para + '>節 見出し</h4>' },
			h3: { text: '<h3' + para + '>章 見出し</h3>' },
			h2: { text: '<h2' + para + '>編 見出し</h2>' },
			h1: { text: '<h1' + para + '>タイトル<h1>' }
		},
		//		semantic: {
		//			'note': 'note',
		//			'div': 'p'
		//    },
		tagClasses: {
			h1: 'h1',
		},
		/*    btnsDef: {
				h5: {
						fn: 'functionName',
						tag: 'tagName',
						title: 'Button tooltip',
						text: 'Displayed button name',
						isSupported: function () { return true; },
						key: 'K',
						param: '' ,
						forceCSS: false,
						class: '',
						hasIcon: true
				}
		},
		*/

		btns:
			[
				['viewHTML'],
				['undo', 'redo'], // Only supported in Blink browsers
				//         ['formatting'],
				['moreForm'],
				['strong', 'em', 'underline', 'del'],
				['fontfamily'], ['fontsize'],
				['superscript', 'subscript'],
				['link'],
				['insertImage'],
				['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
				['unorderedList', 'orderedList'],
				['historyUndo', 'historyRedo'],
				//        ['horizontalRule'],
				//				[
				['foreColor', 'backColor'],
				//    ],
				['removeformat'],
				['fullscreen']
			],
		plugins: {
			color: {
				init: function (trumbowyg) {
					trumbowyg.o.plugins.colors = trumbowyg.o.plugins.colors || defaultOptions;
					var dropdownClass = trumbowyg.o.plugins.colors.displayAsList ? trumbowyg.o.prefix + 'dropdown--color-list' : '';

					var foreColorBtnDef = {
						dropdown: buildDropdown('foreColor', trumbowyg),
						dropdownClass: dropdownClass,
					},
						backColorBtnDef = {
							dropdown: buildDropdown('backColor', trumbowyg),
							dropdownClass: dropdownClass,
						};

					trumbowyg.addBtnDef('foreColor', foreColorBtnDef);
					trumbowyg.addBtnDef('backColor', backColorBtnDef);
				},
				//tagHandler: colorTagHandler
			},
			/*colors: {
				colorList: [
						'ffffff', '000000', 'eeece1', '1f497d', '4f81bd', 'c0504d', '9bbb59', '8064a2', '4bacc6', 'f79646', 'ffff00',
						'f2f2f2', '7f7f7f', 'ddd9c3', 'c6d9f0', 'dbe5f1', 'f2dcdb', 'ebf1dd', 'e5e0ec', 'dbeef3', 'fdeada', 'fff2ca',
						'd8d8d8', '595959', 'c4bd97', '8db3e2', 'b8cce4', 'e5b9b7', 'd7e3bc', 'ccc1d9', 'b7dde8', 'fbd5b5', 'ffe694',
						'bfbfbf', '3f3f3f', '938953', '548dd4', '95b3d7', 'd99694', 'c3d69b', 'b2a2c7', 'b7dde8', 'fac08f', 'f2c314',
						'a5a5a5', '262626', '494429', '17365d', '366092', '953734', '76923c', '5f497a', '92cddc', 'e36c09', 'c09100',
						'7f7f7f', '0c0c0c', '1d1b10', '0f243e', '244061', '632423', '4f6128', '3f3151', '31859b', '974806', '7f6000'
				],
			foreColorList: null, // fallbacks on colorList
			backColorList: null, // fallbacks on colorList
			allowCustomForeColor: true,
			allowCustomBackColor: true,
			displayAsList: false,
			}*/
		}

	})
		
	//　フーカスされたとき
	.on('tbwfocus',function(){
		focusEditor(area);
		$('.trumbowyg-box,.trumbowyg-editor').css('background-color', '#001800');
	})

	//　フォーカスを失ったとき
	.on('tbwblur', function(){
		console.log('tbwblur wEditor !!!');
		if (target) {
			var targetTxt = $('#' + target).val();
			var trumbowygTxt = $('#' + area).trumbowyg('html');
			if (targetTxt != trumbowygTxt) {
				$('#' + target).val(trumbowygTxt);
			}
		}
	})

  //　変更されたとき
	.on('tbwchange', function () {
		if (area == 'code') return;
		$('#changed').css('color', color);
		var change = 't';
		if (area) change = area//.substr(0, 1);
		$('#changed').html('*' + change);
		
		/*if (target) {
			var targetTxt = $('#' + target).val();
			var trumbowygTxt = $('#' + area).trumbowyg('html');
			if (targetTxt != trumbowygTxt) {
				$('#' + target).val(trumbowygTxt);
			}
		}*/
		//      console.log('tbwchange');
		//      wEditorToFeel();
	})
			
	.on('tbwopenfullscreen', function () {
		editorFull(area);
	})

		.on('tbwclosefullscreen', function () {
			editorFullEnds(area);
	})

		;
	
	$('#' + area).trumbowyg('toggle');
}


var setTrumbowygHalf = (area, color = '#cc6', target = null) => {
	$('#' + area).toggleClass('trumbowyg-dark');
	var para = ' style="margin: 0px !important; padding: 0px !important"';

	var txt = $('#' + area).val();
	setTimeout(() => {
		$('#' + area).val(txt);
	}, 500);

	$('#' + area).trumbowyg({
		lang: 'ja',
		changeActiveDropdownIcon: true,
		imageWidthModalEdit: true,
		removeformatPasted: true,
		minimalLinks: true,
		defaultLinkTarget: '_blank',
		btns:
			[
				['viewHTML'],
				['historyUndo', 'historyRedo'],
				['foreColor', 'backColor'],
				['fullscreen']
			],
		plugins: {
			color: {
				init: function (trumbowyg) {
					trumbowyg.o.plugins.colors = trumbowyg.o.plugins.colors || defaultOptions;
					var dropdownClass = trumbowyg.o.plugins.colors.displayAsList ? trumbowyg.o.prefix + 'dropdown--color-list' : '';

					var foreColorBtnDef = {
						dropdown: buildDropdown('foreColor', trumbowyg),
						dropdownClass: dropdownClass,
					},
						backColorBtnDef = {
							dropdown: buildDropdown('backColor', trumbowyg),
							dropdownClass: dropdownClass,
						};

					trumbowyg.addBtnDef('foreColor', foreColorBtnDef);
					trumbowyg.addBtnDef('backColor', backColorBtnDef);
				},
			},
		}

	})
		
	//　フーカスされたとき
	.on('tbwfocus',function(){
		focusEditor(area);
		$('.trumbowyg-box,.trumbowyg-editor').css('background-color', '#001800');
	})

	//　フォーカスを失ったとき
	.on('tbwblur', function(){
		console.log('tbwblur wEditor !!!');
		if (target) {
			var targetTxt = $('#' + target).val();
			var trumbowygTxt = $('#' + area).trumbowyg('html');
			if (targetTxt != trumbowygTxt) {
				$('#' + target).val(trumbowygTxt);
			}
		}
	})

  //　変更されたとき
	.on('tbwchange', function () {
		if (area == 'code') return;
		$('#changed').css('color', color);
		var change = 't';
		if (area) change = area//.substr(0, 1);
		$('#changed').html('*' + change);
	})
			
	.on('tbwopenfullscreen', function () {
		editorFull(area);
	})

		.on('tbwclosefullscreen', function () {
			editorFullEnds(area);
	})

		;
	
	$('#' + area).trumbowyg('toggle');
}


var setEditor = (area, color = '#cc6', target = null) => {
	$('.trEditor').toggleClass('trumbowyg-dark');
		var para = ' style="margin: 0px !important; padding: 0px !important"';

	var txt = $('#' + area).val();
	setTimeout(() => {
		$('#' + area).val(txt);
	}, 500);


	$('#' + area).trumbowyg({
    lang: 'ja',
    changeActiveDropdownIcon: true,
    autogrow: true,
    autogrowOnEnter: true,
		imageWidthModalEdit: true,
		removeformatPasted: true,
		minimalLinks: true,
		defaultLinkTarget: '_blank',
    btnsDef: {
      moreForm: {
        dropdown: ['p', 'blockquote', 'h5', 'h4', 'h3', 'h2','h1','h6'],
        title: 'フォーマット',
        ico: 'p'
			},
			h5: { text: '<h5' + para + '>注釈<h5>' },
			h4: { text: '<h4' + para + '>節 見出し</h4>'},
			h3: { text: '<h3' + para + '>章 見出し</h3>'},
			h2: { text: '<h2' + para + '>編 見出し</h2>' },
			h1: { text: '<h1' + para + '>タイトル<h1>'}
		},
    btns:
    [
        ['viewHTML'],
        ['undo', 'redo'], // Only supported in Blink browsers
			//         ['formatting'],
        ['moreForm'],
				['strong', 'em', 'underline', 'del'],
				['fontfamily'],['fontsize'],
        ['superscript', 'subscript'],
        ['link'],
        ['insertImage'],
        ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
				['unorderedList', 'orderedList'],
				['historyUndo', 'historyRedo'],
			//        ['horizontalRule'],
			//				[
        ['foreColor', 'backColor'],
			//    ],
        ['removeformat'],
        ['fullscreen']
			],
				plugins: {
            color: {
                init: function (trumbowyg) {
                    trumbowyg.o.plugins.colors = trumbowyg.o.plugins.colors || defaultOptions;
                    var dropdownClass = trumbowyg.o.plugins.colors.displayAsList ? trumbowyg.o.prefix + 'dropdown--color-list' : '';

                    var foreColorBtnDef = {
                        dropdown: buildDropdown('foreColor', trumbowyg),
                        dropdownClass: dropdownClass,
                    },
                    backColorBtnDef = {
                        dropdown: buildDropdown('backColor', trumbowyg),
                        dropdownClass: dropdownClass,
                    };

                    trumbowyg.addBtnDef('foreColor', foreColorBtnDef);
                    trumbowyg.addBtnDef('backColor', backColorBtnDef);
                },
                //tagHandler: colorTagHandler
            },
        /*colors: {
					colorList: [
							'ffffff', '000000', 'eeece1', '1f497d', '4f81bd', 'c0504d', '9bbb59', '8064a2', '4bacc6', 'f79646', 'ffff00',
							'f2f2f2', '7f7f7f', 'ddd9c3', 'c6d9f0', 'dbe5f1', 'f2dcdb', 'ebf1dd', 'e5e0ec', 'dbeef3', 'fdeada', 'fff2ca',
							'd8d8d8', '595959', 'c4bd97', '8db3e2', 'b8cce4', 'e5b9b7', 'd7e3bc', 'ccc1d9', 'b7dde8', 'fbd5b5', 'ffe694',
							'bfbfbf', '3f3f3f', '938953', '548dd4', '95b3d7', 'd99694', 'c3d69b', 'b2a2c7', 'b7dde8', 'fac08f', 'f2c314',
							'a5a5a5', '262626', '494429', '17365d', '366092', '953734', '76923c', '5f497a', '92cddc', 'e36c09', 'c09100',
							'7f7f7f', '0c0c0c', '1d1b10', '0f243e', '244061', '632423', '4f6128', '3f3151', '31859b', '974806', '7f6000'
					],
        foreColorList: null, // fallbacks on colorList
        backColorList: null, // fallbacks on colorList
        allowCustomForeColor: true,
        allowCustomBackColor: true,
        displayAsList: false,
        }*/
    }
	
	})
	//　フーカスされたとき
	.on('tbwfocus',function(){
		console.log('focus to ','#' + area);
		$('.trumbowyg-box,.trumbowyg-editor').css('background-color', '#001800');
	})

	//　フォーカスを失ったとき
	.on('tbwblur', function(){
		console.log('tbwblur wEditor !!!');
		if (target) {
			var targetTxt = $('#' + target).val();
			var trumbowygTxt = $('#' + area).trumbowyg('html');
			if (targetTxt != trumbowygTxt) {
				$('#' + target).val(trumbowygTxt);
			}
		}
	})

  //　変更されたとき
	.on('tbwchange', function () {
		if (area == 'code') return;
		$('#changed').css('color', color);
		var change = 't';
		if (area) change = area//.substr(0, 1);
		$('#changed').html('*' + change);
		
		/*if (target) {
			var targetTxt = $('#' + target).val();
			var trumbowygTxt = $('#' + area).trumbowyg('html');
			if (targetTxt != trumbowygTxt) {
				$('#' + target).val(trumbowygTxt);
			}
		}*/
		//      console.log('tbwchange');
		//      wEditorToFeel();
	})
	
	.on('tbwopenfullscreen', function () {
		editorFull(area);
	})

		.on('tbwclosefullscreen', function () {
			editorFullEnds(area);
	})

};


var setCodeEditor = (area, color = '#cc6', target = null) => {
	$('.trEditor').toggleClass('trumbowyg-dark');
		
	var txt = $('#' + area).val();
	setTimeout(() => {
		$('#' + area).val(txt);
	}, 500);

	$('#' + area).trumbowyg({
    lang: 'ja',
    changeActiveDropdownIcon: true,
    autogrow: true,
    //autogrowOnEnter: true,
		imageWidthModalEdit: true,
		removeformatPasted: true,
		minimalLinks: true,
		defaultLinkTarget: '_blank',
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
        ['strong', 'em', 'underline', 'del'],
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
		console.log('focus to ','#' + area);
		$('.trumbowyg-box,.trumbowyg-editor').css('background-color', '#001800');
	})

	//　フォーカスを失ったとき
	.on('tbwblur', function(){
		console.log('tbwblur wEditor !!!');
		if (target) {
			var targetTxt = $('#' + target).val();
			var trumbowygTxt = $('#' + area).trumbowyg('html');
			if (targetTxt != trumbowygTxt) {
				$('#' + target).val(trumbowygTxt);
			}
		}
	})

  //　変更されたとき
	.on('tbwchange', function () {
//		$('#changed').css('color', color);
//		var change = 't';
//		if (area) change = area//.substr(0, 1);
//		$('#changed').html('+' + change);
	})
			
	.on('tbwopenfullscreen', function () {
		editorFull(area);
	})

		.on('tbwclosefullscreen', function () {
			editorFullEnds(area);
	})

		;

};



var wEditorToFeel = () => {
  $('.trumbowyg-box,.trumbowyg-editor').css('background-color', '#00f000 !important');
  var txt = $('#wEditor').trumbowyg('html');
  if (txt != '') $('#feel').val(txt);
//  alert(txt);

  var append = $('#wAppend').trumbowyg('html');
  if (append != '') $('#append').val(append);

  txt += '<hr><div>befor Append</div>' + append;
  $('#wPreview').empty();
  $(txt).appendTo($('#wPreview'));
//  outFocus('wEditor');
  aModal('転記しました','wEditor to Main');
  if ($('#changed').html().indexOf('*') >= 0) {
    $('#changed').html('*Tenki');
  }
/*  txt = txt
    .replace(/<\/p>/g,'<\/p>' + '\n')
    .replace(/<\/h\d>/g,function(match){
      return match + '\n';
    });*/
/*    .replace(/<p><br><\/p>/g,'matchi-0\n')
    .replace(/<p>.+?<\/p>/g,function(match){
//      console.log('match-1=',match)
      var f = match.match(/<p>(.+)<br><\/p>/);
      if (f){ return f[1]}
      return match.slice(3,-4) + '\n';
        })
    .replace(/<h\d>.*?<\/h\d>/g,function(match){
//      console.log('match-2=',match)
      match = match.replace('<br></h', '</h');
      var f = match.match(/<h(\d)>/);
//      if (f[1] == 5) {
//        return '-[mn]-' + match.slice(4,-5) + '\n';
//      }
//      if (f[1] == 6) {
//        return '-[ms]-' + match.slice(4,-5) + '\n';
//      }
        return match + '\n';
      })*/
    //    .replace(/<br>/g,'')
  console.log('Blur res=','wEditorToFeel');
}

/*
$('#feel').on('keyup',function(){
  setTimeout(function(){
    feelTowEdit();
  },500);
});*/

var feelTowEdit = () => {

  ShowLength();

//  setTimeout(function(){
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
  if (txt.length > 10) $('#wEditor').trumbowyg('html',res);
  console.log('keyup=feelTowEdit',res.length);
	//    appendTowAppend();
	//  },500);
  //setTimeout(function(){
  //  $('#changed').html('*F2E');
  //},100);
};


var appendTowAppend = () => {
//  setTimeout(function(){
    var txt = $('#append').val();
    console.log('appendTowAppend',txt.length);
    if (txt.length > 10) {
      $('#wAppend').trumbowyg('html',txt);
      console.log('appendTowAppend do copy',txt.length);
    }
//  },500);
}


var titleChange = (tNo) => {
  var titles = ['title','title2','title3'];
  var title = $('#' + tNo).val()
		.replace(/[ 　]?（ブルーレイディスク）|[　 ]?【数量限定】|[　 ]?【ベストヒッツ】|[ 　]?【特選アウトレット】|[ 　]?Blu-ray版|[　]?【アウトレット】|[ 　]?（DOD）/g, '');
  for (var t of titles) {
    if (t != title) $('#' + t).val(title);
  }
	$('#orgTitle').val($('#title').val()
		.replace(/●|○|♥|☆|★|※|…/g, ' ')
	);
};

// promise化したfunction
const loadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = (e) => reject(e);
    img.src = src;
  });
};


var deleteImg = function(imgUrl,cName){
  console.log('delete image item',imgUrl,cName);
  $('#' + cName).remove(); //empty();
  deleteImageFromCookie(imgUrl);
}

var displayImage = (imgUrl,e = '#orgImage') => {
  //  alert($('e').html());
//  var path  = imgUrl;

  if (isImageInCookie(imgUrl)) {
    aModal('同じ画像があります',imgUrl);
    console.log('同じ画像があります',imgUrl);
    return (false);
  }

  var image = new Image();
  image.src = imgUrl;
  
  var imgName = imgUrl.replace(/\.|:|\//g,'_'); 
  if (!imgName) {
    aModal('no imgName',imgUrl);
    return;
  }
  var exist = $(e).html();
  console.log('get content of',e,exist.length,imgUrl,imgName)
  if (exist.indexOf(imgUrl) != -1) {
    console.log('Same file exists',imgUrl)
    aModal('同じ画像があります',imgUrl);
    return;
  }

  return new Promise((resolve,reject) => {

    image.onload = function(){
      console.log('displayImage',imgUrl,imgName);

      var wid = image.width;
      var hei = image.height;
      console.log('displayImage wid,hei = ',wid,hei)
      $(e).append(
        $('<div>',{
  //        style: 'border: 5px;',
          class: 'form-group form-inline border border-primary rounded',
          id: imgName  
        })
          .append($('<a>',{
            href: imgUrl,
            class: "col-sm-4 mx-0 px-0",
            id: 'lightbox' + imgName,
            attr: 'data-lightbox="example-1"'
  //          target: '_blank'
          })
          .append($('<img>',{
            src : imgUrl ,
            style: 'border: none; max-width: 300px; height: auto; max-height: 300px; width: auto;',
            alt: imgName,
          })))
          .append($('<div>',{
            class: "form-inline col-sm-4 mx-0 px-0"
          })
          .append($('<button>',{
            class: 'btn btn-outline-danger',
            onclick: 'deleteImg("' + imgUrl + '","' + imgName + '")',
          }).append($('<i class="fas fa-eraser">')))
          .append($('<button>',{
            class: 'btn btn-outline-warning',
            onclick: 'deleteImg("' + imgUrl + '","' + imgName + '")',
          }).append($('<i class="fa-solid fa-calendar-plus"></i>')))
          .append($('<span>',{
            class: 'px-2 mx-2',
            id: 'wid' + imgName,
            text: ' width=' + wid,
          }))
          .append($('<span>',{
            id: 'hei' + imgName,
            text: ' height=' + hei,
          })))
          .append($('<textarea>',{
            class: "form-control txtUrl dark col-sm-4 mx-0 px-0",
            id: 'txt' + imgName,
  //          style: 'width: 100%; border-radius: 5px; border: 1px solid #ccc; ',
            text: imgUrl,
          }))
      );

      if (wid > parseInt($('#size').val()) * 1.4) $('#wid' + imgName).css('color','#2a2');
      if (hei > parseInt($('#size').val()) * 1.4) $('#hei' + imgName).css('color','#2a2');

      $('#lightbox' + imgName).attr('data-lightbox','codemakerImage');
      $('#lightbox' + imgName).attr('data-title','Width=' + wid + ' × Height=' + hei);
      
      addImageToCookie(imgUrl);
      resolve(true);
    };

    aModal('画像を作成' + e,'imgUrl');
  });
};

var isImageInCookie = (imgUrl) => {
  var c = $.cookie('dmmImage');
  var cArray = new Array();
  if (c) {
    cArray = JSON.parse(c);
    console.log('Image cookies = ',cArray.length)
    return(cArray.includes(imgUrl));
  }
  return false;
}

var addImageToCookie = (imgUrl) => {
  var c = $.cookie('dmmImage');
  var cArray = new Array();
  if (c) {
    cArray = JSON.parse(c);
  }
  cArray = cArray.filter(item => 
    (item.match(imgUrl) == null));
  cArray.push(imgUrl);
  $.cookie('dmmImage',JSON.stringify(cArray),{expires: 14 , path:'/'});
}

var showAllImageFromCookie = async () => {
  var cArray = new Array();
  var c = $.cookie('dmmImage');
  $.cookie('dmmImage','',{expires: -1 , path:'/'});
  console.log('show all dmmImage=',c);
  if (c) {
    cArray = JSON.parse(c);
    for (var data of cArray) {
      await displayImage(data);
    }
  }
}

var deleteImageFromCookie = (imgUrl) => {
  var cArray = JSON.parse($.cookie('dmmImage'));
  if (cArray) {
    cArray = cArray.filter(item => 
      (item.match(imgUrl) == null));
    $.cookie('dmmImage',JSON.stringify(cArray),{expires: 14 , path:'/'});
  }
}

var clearImage = () => {
  $('#orgImage').empty();
  $.cookie('dmmImage','',{expires: -1, path: '/'});
}


$('#n').on('click',function(){
	genzai($('#prof').val(), 'n');
	var prof = $('#prof').val();
	var names = prof.match(/\[.+?\]\(GW\)/g);
	var act = $('#dropdownMinna').html();
	if (!names) return;
	clearDrop();
	for (var name of names) {
		var one = name.match(/\[(.+?)\]\(GW\)/);
		if (one && (act.indexOf(one[1]) < 0)) {
			$('#dropdownMinna').prepend('<div type="button" class="dropdown-item drop-minna">' + one[1] + '</div>');
		}
	}
});

$('#orgFull').on('click',function(){
  console.log('orgFull')
  $('#orgPage').css('height: 100%; color: red;');
})


//　オリジナルサイトで使用する予定
$('#button-addon1').on('click', function () {
  var urlData = $('#input-addon1').val();
  $('#orgPage').attr('src',urlData);
})


var getFiles = (event) => {
  console.log('fef');
  //    $('#listModal').modal();
  var files = event.target.files;
  console.log(files);
  var no = 0;
  for (var i = 0;i < files.length;i++) {
    var t = 'areaList' + i;
    var file = files[ i];
    if (file.name.indexOf('.') == 0) continue;
    if (file.name.indexOf('.txt') < 0) continue;
    console.log(file.name);
    $('#fileList').append('<hr>');
    $('#fileList').append(
      $('<div>',{class: 'clearfix'})
        .append($('<input>',{
          class: 'col-sm-9 nowrap p-0 m-0 dark',
          style: 'border: none;',
//                  onclick: 'readFeel("' + file + ',' + no + '")',
          value: file.name,
        }))
        .append($('<button>',{
          class: 'col-sm-1 btn btn-sm float-right btn-outline-danger',
//          text: '<i class="fas fa-pen-nib"></i>',
          id :'deleteFileButton' + i,
          onclick: 'deleteFeel("' + i + '")',
        }).append($('<i class="fas fa-trash-alt">')))
        .append($('<button>',{
          class: 'col-sm-1 btn btn-sm float-right btn-outline-warning',
//          text: '<i class="fas fa-pen-nib"></i>',
          id :'completeFileButton' + i,
          onclick: 'moveFeel("' + i + '")',
        }).append($('<i class="fas fa-clipboard-check">')))
        .append($('<button>',{
          class: 'col-sm-1 btn btn-sm float-right btn-outline-success',
//          text: '<i class="fas fa-pen-nib"></i>',
          id :'editFileButton' + i,
          onclick: 'editFeel("' + i + '")',
        }).append($('<i class="fas fa-pen-nib">')))
        .append($('<br>'))
        .append($('<textarea>',{
          class: 'dark',
          text: i,
          style: 'width: 100%; background-color: gray;',
          onclick: 'readFeel("' + i + '")',
          id: 'areaList' + i,
        }))

      )

  no++;
  }
};


var readFeel = (no) => {
  console.log(no)
  var n = $('#areaList' + 8).val();
  var file = document.getElementById('inputList').files[no];
  console.log(file);
  var reader = new FileReader();
  reader.readAsText(file,'UTF-8');

  reader.onload = function(){
    var txt = reader.result;
    if (!txt) return;
    $('#areaList' + no).css('background-color','');

  var ele = txt.match(/<!-- feel -->([\s\S]*?)\t/);
  if (ele) $('#areaList' + no).val(ele[1]);
  }

}


var editFeel = (no) => {
  $('#modal1').modal('hide');
  var file = document.getElementById('inputList').files[no];
  console.log(file);
  var reader = new FileReader();
  reader.readAsText(file,'UTF-8');

  reader.onload = function(){
    var txt = reader.result;
    if (!txt) return;
    $('#areaList' + no).css('background-color','');

    var txts = reader.result.split('\t');
    for (var line of txts) {
      var ele = line.match(/<!-- (.+?) -->([\S\s]*)/);
      if (ele) {
        $('#' + ele[1]).val(ele[2]);
        if (ele[1] == 'feel') feelTowEdit();
        if (ele[1] == 'append') appendTowAppend();
      }
      console.log(line);
    }
  }

}


$('#loadList').on('click',function(){
  var ele =
      document.getElementById('fileList');
  var clone = ele.cloneNode( false ); //ガワだけ複製して…
  ele.parentNode.replaceChild( clone , ele ); //すげ替え。
  $('#inputList').click();
})


var sItem = (txt,str) => {
  var reg = new RegExp(str + '.+?<dd>(.+?)<\/dd>');
  var item = txt.match(reg);
  if (item) return(str + '：' + item[1]);
  else return(false);
}

var hotPHP = async (filename) => {
  csrChange('auto','hotPHP');
  if (!filename.match('lang=ja')) filename = filename + '?lang=ja';
  var pid = filename.match(/tokyo-hot.com\/product\/(.+?)\//);
  if (pid) {
    var append = $('#append').val();
    if (append.length > 0) append +='\n\n\n';
    append += '[sample Movie]\n<video width="100%" controls poster=""><source src="https://my.cdn.tokyo-hot.com/media/samples/'
    + pid[1] + '.mp4"><p>ご使用のブラウザでは動画再生に対応していません</p></video>';
    $('#append').val(append);
  } else {aModal('Tokyo-HotのURLではありません','hotPHP'); return;}

  var prof = '';
  var res = await promisePHP(filename);
  var img = '<a href="http://www2.jp.jskypro.com/affiliate/'
    + 'click.php?uid=23606&url=https%3A%2F%2Fmy.tokyo-hot.com%2Fproduct%2F'
    + pid[1] + '%2F">';
  var sample = res.match(/media\/.+?list_image\/.+?\/.+?default.jpg/g);
  if (sample) {//media/.+?list_image/.+?default.jpg
    console.log('sample = ',sample)
    img += '<img src="https://my.cdn.tokyo-hot.com/' + sample[0] + '" alt="東熱激情 感激！パイパン美少女特集" style="border: none; float: left; padding: 0.5em" class="align-top">';
    displayImage('https://my.cdn.tokyo-hot.com/' + sample[0]);
  }
  $('#img').val(img + '東京熱で詳細を見る<br><br></a>');
  var cmt = res.match(/<div class="sentence">(.+?)<\/div>/);
  if (cmt) $('#cmt').val(cmt[1].trim());
  var act = '';
  var actless = res.match(/出演者<.+?<dd>(.+?)<\/dd>/);
  if (actless) {
    act = actless[1].replace(/<a.+?>|<\/a>/g,'');
    prof += '出演：' + act;
  }
  var date = res.match(/配信開始日.+?<dd>(.+?)<\/dd>/);
  if (date && ($('#date').val() == '')) {
    $('#date').val(date[1]); prof += '\n配信開始日：' + date[1];
  }
  var time = res.match(/収録時間.+?<dd>(.+?)<\/dd>/);
  if (time) { prof += '\n収録時間：' + time[1]; }
  $('#prof').val(prof);
  var title = res.match(/pagetitle"> <h2>(.+?)<\/h2>/);
  if (title) $('#title').val(title[1]);
  if ((actless) && (!act.match('不明'))) {
    $('#title').val($('#title').val() + '　' + act);
    var str = actless[1].replace(/<a.+?>|<\/a>/g,'').replace(/[ ／]/g,'、');
    var names = str.split(/[ ・／、]/);
    addWiki(str,(names.length < 2));
  }
  saveToFile(res,'tokyo-hot.html');
}


var exc = (txt) => {
  txt = txt.replace(/<.+?>/g,'');
  return(txt.replace(/!/g,'！').replace(/\?/g,'？'));
}


//------------ gekiyasu ------------
easeGekiyasu = (urlData) => {
  if (urlData == '') {
    gekiyasuPHP($('#p-no').val()); return;
  }
  gekiMainPHP(urlData);
  var spd = urlData.split('detail');
  $('#p-id').val(spd[1]);
  return;
}


var gekiyasuPHP = async (pNo) => {
  var filename = 'https://www.gekiyasu-dvdshop.jp/products/list.php?mode=search&name=' + pNo;
  var res = await promisePHP(filename);
  if (!res) {
    aModal('error Scrape', 'gekiyasuPHP');
    return;
  }
  var res = xmlhttp.responseText;
  var mainUrl = res.match(new RegExp('(\\/products\\/detail\\d+?)" title=.+?\\['
    + pNo + '\\]'));
  if (mainUrl) {
    console.log(mainUrl);
    gekiMainPHP('https://www.gekiyasu-dvdshop.jp' + mainUrl[1]);
  } else {
    alert('no products\n\n' + pNo);
  }
}


var gekiMainPHP = async (filename) => {
  console.log("before promise Gekiyasu");
  var res = await promisePHP(filename);
//  var filename = 'https://www.gekiyasu-dvdshop.jp/products/list.php?mode=search&name=' + pNo;
  if (!res) {
    aModal('no Gekiyasu Item', filename);
    return;
  }

  $('#orgGekiyasuInput').val(filename);

  var date = res.match(/発売日：[\s\S]+?(\d{4}\/\d{1,2}\/\d{1,2})/);
  if ((date) && ($('#date').val() == '')) $('#date').val(date[1]);
  var cmt = res.match(/class="well"><span>([\s\S]*?)<\/span>/);
  if ((cmt) && ($('#cmt').val() == '')) $('#cmt').val(exc(cmt[1]));
  var title = res.match(/タイトル：([\s\S]+?)<\/div>/);
  if ((title) && ($('#title').val() == '')) {
    var txt = exc(title[1].trim());
    var last = txt.lastIndexOf(' ');
    if (last != -1) txt = txt.slice(0,last) + '　' + txt.slice(last + 1);
		$('#title').val(txt.replace(/[ 　]?（ブルーレイディスク）|[　 ]?【数量限定】|[　 ]?【ベストヒッツ】|[ 　]?【特選アウトレット】|[ 　]?Blu-ray版|[　]?【アウトレット】|[ 　]?（DOD）/g, ''));
  }
  var pNo = res.match(/商品コード：([\s\S]+?)<\/div>/);
	if ((pNo) && ($('#p-no').val() == '')) $('#p-no').val(exc(pNo[1]));
	var imgVal = $('#img').val();
  if (!imgVal.match('<a href="http://www.gekiyasu-dvdshop.jp'))
    $('#img').val(imgVal + '<a href="http://www.gekiyasu-dvdshop.jp/affiliate/link.php?'
      + 'id=N0000044&adwares=A0000014&url='
      + filename + '" target="_blank">激安DVDショップで詳細を見る<br><br></a>');
  var mNo = filename.match(/detail(\d+)/);
  var img = res.match(/class="image-area"><img src="(\/upload\/save_image\/.+?\.jpg)/);
  if (mNo && img) {
    if (img) {
      displayImage('https://www.gekiyasu-dvdshop.jp' + img[1]);
    }
    var isV = res.match(/<video[\s\S]+?(<source src=[\s\S]+?<\/video>)/)
    if(isV) {
      var movie = $('#append').val(); if (movie != '') movie += '\n\n';
      movie += '[sample Movie]\n<video width="100%" controls poster="';
      if (img) movie += 'http://www.gekiyasu-dvdshop.jp' + img[1];
      movie += '">' + isV[1].replace('https:','http:');
      $('#append').val(movie);
    }

  }
  //  csrChange('auto ok','gekiMainPHP');
  //        saveToFile(res,'scrapeMainGekiyasu.html')
}


var testScrapePHP = async (filename,save = 'none') => {
  csrChange('wait','testScrapePHP');
  var xmlhttp = new XMLHttpRequest();
  var url = "saveTemp.php"//?mode=write?filename=" + fileName;
	var ret = '';
	var res;
	var cource = filename.match(/^(.)-(.+)$/);
	if (cource) {
		switch (cource[1]) {
			case '1':
			case '2':
			case '3':
				res = await promisePHP(cource[2], 'readUrl_' + cource[1]);
				break;
			case 'c':
				res = await promisePHP(cource[2], 'check');
				break;
			default:
				res = await promisePHP(filename, 'scrape');
		}
	} else {
		res = await promisePHP(filename, 'scrape');
	}

	if (!res) {
		aModal('scraping Error', 'testScrapePHP'); return;
	}

	if (filename.indexOf('suruga-ya') > 0) {
		var d = new Date();
		d.setTime(d.getTime()+(24*60*60*1000));
		var expires = "; expires="+d.toGMTString();
		document.cookie = "adult=1"+expires+"; path=/";
		save = 'surugaya';
	}

	switch (save) {
		case 'save':
			var title = 'testScrapePHP.html'
			var u = filename.match(/https?:\/\/(.+?)\//);
			if (u) title = 'testScrape[' + u[1] + '].html';
			saveToFile('scape result of "' + filename + '"\n' + res,title);
			ret = res;
			break;
		case 'Heyzo': scrapeHeyzo(res); break;
//          case 'surugaya': scrapeSurugaya(res); break;
		case 'nyoshin' : nyoshin(res); break;
		default:
			aModal('Test Scraping',save);
			ret = res;
			break;
	}
}
  

var dmmMainPHP = (mainUrl,count = 0) => {
  count++;
  if (count > 10) return false;
  var filename = 'scrapePHP.html';
  var xmlhttp = new XMLHttpRequest();
  var cForm = ['DVDレンタル','通販'];

  var url = "saveTemp.php"//?mode=write?filename=" + fileName;
  xmlhttp.onreadystatechange = function() {
    console.log(xmlhttp.readyState);
    console.log(xmlhttp.status);
    if (xmlhttp.readyState == 4) {
      if (xmlhttp.status == 200) {
        var res = xmlhttp.responseText;
        saveToFile(res,'scrapeMainDmm.html')
        console.log('respons main = ',res);
        var  next = res.match(/<a href="(https:\/\/www.dmm.co.jp\/age_check\/=\/declared=yes.*?)"/);
        if (next) if (dmmMainPHP(next[1],count) == false) return false;
      }
    }
    return;
  }
  var sendData = new FormData();
  sendData.append('fileName',mainUrl);
  sendData.append('mode','scrape');
//  sendData.append('tag',$('#date').val());

  xmlhttp.open('post',encodeURIComponent(url),true);
  xmlhttp.send(sendData);
}


var dmmPHP = (pNo) => {
  var sUrl = 'https://www.dmm.co.jp/search/=/searchstr=' + pNo;

  var filename = 'scrapePHP.html';
  var xmlhttp = new XMLHttpRequest();
  var cForm = ['DVDレンタル','通販'];

  var url = "saveTemp.php"//?mode=write?filename=" + fileName;
  xmlhttp.onreadystatechange = function() {
    console.log(xmlhttp.readyState);
    console.log(xmlhttp.status);
    if (xmlhttp.readyState == 4) {
      if (xmlhttp.status == 200) {
        var res = xmlhttp.responseText;
        saveToFile(res,'scrapeDmm.html');
        var lines = res.match(/https:\/\/www\.dmm\.co\.jp\/[\s\S]{0,10}?\/-\/detail\/=\/cid=[\s\S]+?\/[\s\S]+?<span><a href[\s\S]+?<\/a/g);
        var mainUrl = '';
        var max = -1;
        for (var line of lines) {
          for (var i = 0;i < cForm.length;i++) {
            if ((i > max) && (line.match(cForm[i]))) {
              max = i; mainUrl = line.split('/?')[0];
              console.log('max ',i,'URL = ',mainUrl, 'line = ',line);
            }
          }
        }
        if (max >= 0) {
          dmmMainPHP(mainUrl);
        }
//        console.log('respons = ',res);
      }
    }
    return;
  }
  var sendData = new FormData();
  sendData.append('fileName',sUrl);
  sendData.append('mode','scrape');
//  sendData.append('tag',$('#date').val());

  xmlhttp.open('post',encodeURIComponent(url),true);
  xmlhttp.send(sendData);
}


var minnaPHP = async (name, flag = true) => {
	console.log('minnaPhP',name,flag)
  csrChange('wait','minnaPHP');
  var sUrl = 'http://www.minnano-av.com/'
    + 'search_result.php?search_scope=actress&search_word=' + name;
  var res = await promisePHP(sUrl);
  if (!res) return;
  //  console.log('respons = ',res);
  var ninzu = res.match(/AV女優の検索結果.+?<span>(\d+?) 件/);
  if (ninzu) {// actless list
    var no = parseInt(ninzu[1]);
    if (no == 0) {await myAlert('Scrape error:no actless:' + name); return;}
    var actless = res.match(/<h2 class="ttl"><a href="(.+?html).+?<td>(\d*?)<\/td>/g);
    if (!actless) {await myAlert('error No actless'); return;}
    console.log('macht actless',name,actless.length);
    var max = 0;
    var actUrl;
    for (var act of actless) {
      var num = act.match(/<h2 class="ttl"><a href="(.+?html).+?<td>(\d+?)<\/td>/);
      if (max > parseInt(num[2])) continue;
      max = parseInt(num[2]);
      actUrl = num[1];
    }
    aModal('scrape ' + name, 'minnnaPHP multiple');

    $('#dropdownMinna').prepend('<div type="button" class="dropdown-item drop-minna">' + name + '：' + actUrl + '</div>');
    var detail = await promisePHP('http://www.minnano-av.com/' + actUrl);
    if (!detail) return;
    scrapeToProf(detail,flag);

  } else {// only one actless
    console.log('ninzu = ', ninzu)

		$('#dropdownMinna').prepend('<div type="button" class="dropdown-item drop-minna">' + name + '</div>');
      
    aModal('scrape ' + name,'minnnaPHP single');
    scrapeToProf(res,flag);
	}

	genzai($('#prof').val(), 'n');

}


var scrapeToProf = (txt, flag) => {
	var res = minnaProfile(txt, flag);
  /*var actorProf = txt.match(/<!-- Act-Profile  -->([\s\S]+?)<!-- Act-Profile End  -->/);
  if (actorProf) txt = actorProf[1];
  console.log('actorProf=',txt.length);
  var res = '';
  var name = txt.match(/<h2>(.+?)<\/h2>/);//name
  if (name) {
    var s = name[1].split(/ [\(（]/);// name (hhh / ooo)
    var ss = s[0].split(/[\(（]/);// name(ab)
    s[0] = '[' + ss[0] + '](GW)';//[name](GW)
    if (ss[1]) s[0] = s[0] + '（' + ss[1];//[nam,e](GW)(ab)
    if (s[1]) name[1] = s[0] + ' （' + s[1];

    res = name[1]/*.slice(4,-5)*//* + '\n\n';
  }
  var nick = txt.match(/愛称<\/span><p>([\s\S]*?)<\/p>/);
  //if (nick) res += '愛称 ' + nick[1].replace(/<\/?a[\s\S]*?>/g,'') + '\n'; if (flag) res += '\n';
	if (nick) {
		for (var name of nick) {
			var names = name.match(/<p>([\s\S]+?)</);
			if (names) {
				if (res.indexOf('愛称') >= 0) res += '、' + names[1];
				else res += '愛称 ' + names[1];
			}
			console.log('愛称 ', name)
		}
		res += '\n'; if (flag) res += '\n';
	}

  var other = txt.match(/別名<\/span><p>[\s\S]*?<\/p>/g);
  if (other) {
		for (var name of other) {
			var names = name.match(/<p>([\s\S]+?)</);
			if (names) {
				if (res.indexOf('別名') >= 0) res += '、' + names[1];
				else res += '別名 ' + names[1];
			}
			console.log('別名 ',name)
    }
    res += '\n'; if (flag) res += '\n';
  }

  var birth = txt.match(/生年月日<\/span><p>([\s\S]*?)<\/p>/);
  if (birth) {
    var b = strBirth($('#date').val(),birth[1]);
    if (b) res += b + '\n'; else res += '生年月日\n';
    if (flag) res += '\n';
  }
  var size = txt.match(/サイズ<\/span><p>([\s\S]*?)<\/p>/);
  if (size) res += 'サイズ ' + size[1].replace(/<\/?a[\s\S]*?>/g,'') + '\n'; if (flag) res += '\n';
  var blood = txt.match(/血液型<\/span><p>([\s\S]*?)<\/p>/);
  if (blood) res += '血液型 ' + blood[1].replace(/<\/?a[\s\S]*?>/g,'') + '\n'; if (flag) res += '\n';
  var place = txt.match(/出身地<\/span><p>([\s\S]*?)<\/p>/);
  if (place) res += '出身地 ' + place[1].replace(/<\/?a[\s\S]*?>/g,'') + '\n'; if (flag) res += '\n';
  var production = txt.match(/所属事務所<\/span><p>([\s\S]*?)<\/p>/);
  if (production) res += '所属事務所 ' + production[1].replace(/<\/?a[\s\S]*?>/g,'') + '\n'; if (flag) res += '\n';
  var hobby = txt.match(/趣味・特技<\/span><p>([\s\S]*?)<\/p>/);
  if (hobby) res += '趣味／特技 ' + hobby[1].replace(/<\/?a[\s\S]*?>/g,'') + '\n'; if (flag) res += '\n';
  var appear = txt.match(/AV出演期間<\/span><p>([\s\S]*?)<\/p>/);
  if (appear) res += 'AV出演期間 ' + appear[1].replace(/<\/?a[\s\S]*?>/g,'') + '\n'; if (flag) res += '\n';
  var debut = txt.match(/デビュー作品<\/span><p>([\s\S]*?)<\/p>/);
  if (debut) res += 'デビュー作品 ' + debut[1].replace(/<\/?a[\s\S]*?>/g,'') + '\n'; if (flag) res += '\n';
  var blog = txt.match(/ブログ<\/span><p>([\s\S]*?)<\/p>/);
  if (blog) res += 'ブログ ' + blog[1]/*.replace(/<\/?a[\s\S]*?>/g,'')*//* + '\n'; if (flag) res += '\n';
  var site = txt.match(/公式サイト<\/span><p>([\s\S]*?)<\/p>/);
  if (site) res += '公式サイト ' + site[1]/*.replace(/<\/?a[\s\S]*?>/g,'')*//* + '\n'; if (flag) res += '\n';

  if (res.slice(-1) == '\n') res = res.slice(0,-1);

  var tags = txt.match(/actress_list.php\?tag.+?>.*?</g);
  if (tags) {
    res += '\n';
		//    if (flag) res += '\n';
    for(var i = 0;i < tags.length;i++) {
      //console.log(tags[i]);
      var tag = tags[i].match(/actress_list.php\?tag.+?>(.*?)</);
      if (tag) {
        if (i == 0) res += '（タグ：';
        else res += '、';
        res += tag[1];
      }
    }
    res += '）';
  }*/

	var prof = $('#prof').val();
	if (prof.indexOf(res) >= 0) return;
	if (prof != '') prof += '\n\n\n';
  if (res.slice(-1) == '\n') res = res.slice(0,-1);
  $('#prof').val(prof + res);

}


$('.savePHP').on('click',function(){
  saveOnClick('overwrite');
})
$('.appendPHP').on('click',function(){
  saveOnClick('write');
})

var saveOnClick = (mode = 'write',num = 20) => {

  var fileName = $('#title').val().substr(0,32) + '.txt';
  fileName = fileName.replace(/ |\//g,'_');
  if (fileName == '.txt') fileName = 'untitled.txt';
  var date = new Date();
  var fileDate = date.getFullYear()
  + '_' + ('0' + (date.getMonth() + 1)).slice(-2)
  + '_' + ('0' + date.getDate()).slice(-2)
  + ' ' + ('0' + date.getHours()).slice(-2)
  + ':' + ('0' + date.getMinutes()).slice(-2)
  + ':' + ('0' + date.getSeconds()).slice(-2) ;

  console.log(fileName);
  var ver = ('000' + num).slice(-3);
  saveTempFile('data/' + fileName.trim(),'<!-- data start ' + fileDate + ' ver.' + ver + ' -->\t'
    + allToText()
    + '<!-- data end -->\n\n',mode,num);
//  var sa = 'savePHP';
//  if (num) sa += num;
//  aModal('保存しました',sa);
//  $('#changed').html('');

}


$('#listPHP').on('click',function(){
  var list = getTempList('data/');
  $('#dir').text('data/');
})

var fetchTempFile = async (fileName,mode = 'none') => {

	console.log('fetchTEmpFile = ', fileName, mode);
	var rText = await promisePHP(fileName,'read');
	if (rText) {
		var time = 'no date and time';
		var date = rText.match(/<!-- data start (.+?) -->/);
		if (date) time = date[1];
		var txt = rText.split('\t');
//        console.log(txt.length);
		if (mode == 'check') {
			checkSave(rText);
		}
		if (mode == 'clear') {
			checkSave(rText);
			clearAll();
		}
		if (mode == 'modal') {
			modalSaved(rText);
			return;
		}
		if (mode == 'none') {
			console.log('modal', 'filename', fileName)
			console.log('modal', mode)
			console.log('modal', 'read text', rText)
			let c = await myConfirm('読み込みますか？！！！！(List)\n\n\n' + rText);
			if (!c) return;
			for (var line of txt) {
				console.log('line of txt',line)
				var el = line.match(/<!-- (.+?) -->([\S\s]*)/);
				if (el) {
					$('#' + el[1]).val(el[2]);
				}
			}
			$('#modal1').modal('hide');
			csrChange('auto','fetchTempFile');
			return(rText);
		}
		for (var line of txt) {
//          console.log(line);
			var feel = line.match(/<!-- feel -->([\s\S]*)/);
			if (feel) {
				$('#areaList' + mode).val('<' + time + '>\n' + feel[1]);
				$('#areaList' + mode).css('display','block');
			}
		}
	} else {
		alert("status = rText" + rText);
		if (mode == 'clear') { clearAll(); }
	}

}


var getTempList = async (fileName) => {
	var res = await promisePHP(fileName, 'list');
	if (res) {
		console.log('post success = ', 'list');
		var pos = res.indexOf('<!---->');
		res = res.substr(pos + 7);
		$('#dir').text(fileName);
		listToModal(res);
	} else {
		console.log('post failture = ',res);
		alert('Post failture');
	}
}


var saveTempFile = async (fileName,txt,mode = 'write',num = 1) => {
  console.log('saveTempFile',fileName,'txt',txt,'mode',mode,'num',num);
	var res = await promisePHP(fileName, mode, txt, num);
	if (res) {
		var date = new Date();
		var time = ('0' + date.getHours()).slice(-2)
			+ ':' + ('0' + date.getMinutes()).slice(-2)
			+ ':' + ('0' + date.getSeconds()).slice(-2);
		console.log('post success', res);
		fetchTempFile(fileName,num);
		if (mode == 'overwrite') aModal('上書き保存しました',time);
		else if (mode = 'append') aModal('追加保存しました',time);
		else aModal('保存しました:' + mode,time);
		$('#changed').html('');
	} else {
		console.log('post failture',xmlhttp.responseText);
		alert('Post failture');
	}
}


var listToModal = (txt) => {
	var txts = txt.split(/\r|\n|\r\n/g);
	
	txts.sort(); // sort LIST
//  console.log(txts);
  var ele =
      document.getElementById('fileList');
  var clone = ele.cloneNode( false ); //ガワだけ複製して…
  ele.parentNode.replaceChild( clone , ele ); //すげ替え。

  for (var i = 0;i < txts.length;i++) {
    if ((txts[i] == '') || (txts[i].match('REQUEST mode = list'))) continue;
    var vs = txts[i].split(/\//g);
    var filename;
    if (vs[2]) filename = vs[2];
    else if (vs[1]) filename = vs[1];
    else continue;
    var dir = $('#dir').text();

    $('#fileList').append('<hr>');

    if (filename.indexOf('.txt') < 0) {// directory
      $('#fileList').append(
        $('<div>',{class: 'clearfix'})
          .append($('<input>',{
            class: 'col-sm-11 nowrap p-0 m-0 dark',
            style: 'border: none;',
//                  onclick: 'readFeel("' + file + ',' + no + '")',
            value: filename,
          }))
          .append($('<button>',{
            class: 'col-sm-1 btn btn-sm float-right btn-outline-primary',
//          text: '<i class="fas fa-pen-nib"></i>',
            id :'openDirButton' + i,
            onclick: 'openDirFeel("' + filename + '","' + dir + '")',
          }).append($('<i class="fas fa-list-ul"></i>')))
        );
      continue;
    }

    $('#fileList').append(
      $('<div>',{class: 'clearfix'})
        .append($('<input>',{
          class: 'col-sm-9 nowrap p-0 m-0 dark',
          style: 'border: none;',
//                  onclick: 'readFeel("' + file + ',' + no + '")',
          value: filename,
          onblur: 'closeFeelP("areaList' + i + '")',
          onclick: 'fetchTempFile("' + dir + filename + '","' + i + '")',
        }))
        .append($('<button>',{
          class: 'col-sm-1 btn btn-sm float-right btn-outline-danger',
//          text: '<i class="fas fa-pen-nib"></i>',
          id :'deleteFileButton' + i,
          onclick: 'deleteFeelP("' + dir + filename + '","' + i + '")',
        }).append($('<i class="fas fa-trash-alt"></i>')))
        .append($('<button>',{
          class: 'col-sm-1 btn btn-sm float-right btn-outline-warning',
//          text: '<i class="fas fa-pen-nib"></i>',
          id :'completeFileButton' + i,
          onclick: 'moveFeelP("' + filename + '")',
        }).append($('<i class="fas fa-clipboard-check"></i>')))
        .append($('<button>',{
          class: 'col-sm-1 btn btn-sm float-right btn-outline-success',
//          text: '<i class="fas fa-pen-nib"></i>',
          id :'editFileButton' + i,
          onclick: 'fetchTempFile("' + dir + filename + '","none")',
        }).append($('<i class="fas fa-pen-nib"></i>')))
        .append($('<br>'))
        .append($('<textarea>',{
          class: 'dark',
          row: '4',
          text: i,
          onblur: 'closeFeelP("areaList' + i + '")',
          style: 'width: 100%; display: none; height: 10em;',
//          onclick: 'closeFeelP("areaList' + i + '")',
          id: 'areaList' + i,
        }))

      )
  }
  $('#modal1').modal();
}


/*var editFeelP = (filename,i) => {
  fetchTempFile(filename,'none');
//  console.log(this.name());
}*/


var moveFeelP = async (fileName,flag = true) => {
  var xmlhttp = new XMLHttpRequest();
  var dir = $('#dir').text();
  var txt = dir + 'complete/' + fileName;
  fileName = dir + fileName;
  aModal(fileName + ' を移動しました','/complete');

			var res = await promisePHP(fileName, 'move',txt);
	if (res) {
		console.log('post success moveFeelP txt.length = ', res.length);
		if (flag) $('#listPHP').click();
	} else {
		console.log('post failture moveFeelP');
		alert('Post failture moveFeelP');
	}
}


var openDirFeel = (fileName,dir) => {
  list = dir + fileName + '/';
  getTempList(list);
}

var upperDir = () => {
  var dir = $('#dir').text();
  dir = dir.slice(0,-1);
  var slash = dir.lastIndexOf('/');
  if (slash >= 0) {
    dir = dir.substr(0,slash) + '/';
    getTempList(dir);
  }
}


var deleteFeelP = async (fullName,flag = true) => {
  var xmlhttp = new XMLHttpRequest();
  var dir = $('#dir').text();
  var url = "saveTemp.php"//?mode=write?filename=" + fileName;
	var txt = await promisePHP(fullName, 'delete');
	if (txt) {
		console.log('post success deleteFeelP txt.length=',txt.length);
		if (flag) getTempList(dir);
	} else {
		console.log('post failture deleteFeelP');
		alert('Post failture');
	}
}

var closeFeelP = (ele) => {
  $('#' + ele).css('display','none');
}


var autoSave = (minute = 10,char = 500,stop = false) => {
  var count = 1;
  var old = allToText().length;

  if (stop) {
    clearInterval($('#autoSaveTime').val());
    clearInterval($('#autoSaveNumber').val());
    console.log('autoSave Stopped');
    return;
  }

  var autoS = () => {
    var nChar = allToText().length;
    if (nChar - old > char) {
      console.log('autosave count = ' + count,nChar,old,char);
      saveOnClick('append',count++);
      old = nChar;
    }
  }

  $('#autoSaveNumber').val(setInterval(autoS, 1000));

  console.log('autoSave Started charSpan ',char);


  var countUp = () => {
    var isChange = $('#changed').html();
    if (isChange.indexOf('*') >= 0) {
      console.log('autosave time = ' + count);
      if ((isChange == '*f') || (isChange == '*a'))
        wEditorToFeel();
      saveOnClick('append',count++);
    }
  }

  $('#autoSaveTime').val(setInterval(countUp, 60000 * parseInt(minute)))
//  console.log('time',setInterval(countUp, 60000 * parseInt(minute)));

  $('#changed').html('');
  console.log('autoSave Started timeSpan ',minute);
}


var checkSave = (saved) => {
  var saves = saved.split(/<!-- data end -->/)[0].split(/\t/g);
  for (var ele of saves) {
    var el = ele.match(/<!-- ([\s\S]+?) -->([\s\S]*)/);
    if (el) {
      if ((el) && (el[1].match('data '))) continue;
      var dataNow = $('#' + el[1]).val();
      if (el[1] == 'wEditor') dataNow = $('#wEditor').trumbowyg('html');
      var now = dataNow.replace(/\s/g,'');
      var sav = el[2].replace(/\s/g,'');
      if (now == sav) continue;
      console.log('checkSave = ',now,sav);
      for (var i = 0;i < now.length;i++) {
        if (now[i] != sav[i])
        {console.log(now[i],sav[i]);}
      }
      alert('check Saved File failture\n\nelement:' + el[1]
        + '\n\nsaved:' + el[2]
        + '\n\nnow : ' + dataNow);
    }
  }
  console.log('checkSave','complete');
}


scrapeHeyzo = (res) => {
  var video = res.match(/emvideo = "(\/\/.+?sample.+?mp4)"/);
  if (video) {
    var poster = res.match(/emimg = "(\/\/.+?thumbnail.+?jpg)"/);
    var sample = '[sample Movie]\n<video src="https:' + video[1] + '" width="100%" controls ';
    if (poster) sample += 'poster="https:' + poster[1] + '" ';
    sample += '></video>';
    if (!$('#append').val().match(sample))
      $('#append').val(sample + $('#append').val());
  }
  var item = res.match(/"video":[\s\S]*?"description": ?"(.*?)"[\s\S]+?"name": ?"(.*?)"[\s\S]*?"thumbnail": ?"(.*?)"[\s\S]*?Date": ?"(.*?)"[\s\S]*?"actor": ?"(.*?)"/);
  if (!item) {
    aModal('no Item','scrapeHeyzo'); return;
  }
  if ($('#cmt').val() == '') $('#cmt').val(item[1]);
  if ($('#title').val() == '') $('#title').val(item[2] + '　' + item[5]);
  if ($('#date').val() == '') $('#date').val(item[4].replace('-','/'));
  $('#prof').val('出演：' + item[5] + $('#prof').val());

}


var readOkashiLemon = (res,osnap,pid,urlData) => {
  console.log('length',res.length,'osnap',osnap,'pid',pid);
  var append = $('#append').val();
  var arr = res.split(/\r\n|\r|\n/);
  var txt;
  for (var i in arr) {//arr.length;i++){
    if (!arr[i].startsWith(pid)) continue;
    exist = true;
		var ar = arr[i].split(',');
		var see = 'お菓子系で詳細を見る<br><br></a';
		if (urlData.indexOf('//b10f.jp/') > 0) see = '地下10階・ビーテンエフで詳細を見る<br><br></a'
    if (osnap) {//okashi
			txt = imgShaping(ar[15], size).replace(/<\/a/g,see) + '\n' + imgShaping(ar[16], size);
    } else {//lemonUp
			txt = ar[13].replace(' style="border : 1px solid #000000;"', ' ')
				.replace(/<\/a/g, 'LemonUpで詳細を見る<br><br></a');
    }
    var mUrl = txt.match(/src="(.+?)"/);
    if (mUrl) displayImage(mUrl[1]);
    $('#img').val($('#img').val() + txt);
    if ($('#date').val().length == 0) {
      $('#date').val(ar[1]);
    }
    if ($('#title').val().length == 0) {
      $('#title').val(ar[2].replace('/','　'));
    }
    if (ar[7].length > 0) {
      if ($('#cmt').val().length == 0) $('#cmt').val(ar[7]);
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
      append += ar[17]  + '\n';
    } else {
      var smp = ar[14].match(/width:.+?height.+?;/);
      if (smp) ar[14] = ar[14].replace(smp,'width:700px;height:394px;max-width:100%;');
      append += ar[14]  + '\n';
    } // movie
    append += "[Snap Shots]" + '\n\n';
    for(var j = 0;j < parseInt(ar[3],10);j++) {
			if (osnap) {
				var snap = ar[24 + j].match(/img src="(https:.+jpg)"/); 
        append += snapImage(snap[1]);
      } else {
				var snap = ar[21 + j].match(/img src="(https:.+jpg)"/); 
        append += snapImage(snap[1]);
      }
		}
		append += '<br style="clear: both;">';
    
		if (osnap) {
      append += '\n\n出演作品（お菓子系）：' + ar[19]  + '\n';
    } else {
      append += '\n\n出演作品（LemmonUp）：' + ar[16]  + '\n';
    }
    $('#append').val(append);
    return true;
  }
  alert("商品が見つかりませんでした。");
  return false;

}


var autoSaveClick = () => {
  var c = $('#autoSaveCheck').prop("checked");
  console.log(c);
  autoSave(parseInt($('#timeSpan').val()),parseInt($('#charSpan').val()),!c);
}

var readSavedFile = () => {
  var fileName = $('#title').val().trim().substr(0,32) + '.txt';
  fileName = fileName.replace(/ |\//g,'_');
  console.log('readSavedFile',fileName);
  if (fileName == '.txt') return;
  $('#savedFileName').val(fileName);
  fetchTempFile('data/' + fileName,'modal');
}

$('#loadPHP').on('click',function(){
  readSavedFile();
});


var modalSaved = (rText) => {
  if (rText.match('failed to open stream')) {
    console.log('failed to open stream !!!');
    return;
  }

	//var txtBlock = rText.split('<!-- data end -->');
	//var historyNum = txtBlock.length;
	//console.log('historyNum', historyNum);
	$('#txtSaved').val(rText);

	showSavedData(0);
  $('#modal2').modal();
  return false;
}

var preArticle = () => {
	var num = parseInt($('#saveHistory').val());
	showSavedData(num - 1);
}

var postArticle = () => {
	var num = parseInt($('#saveHistory').val());
	showSavedData(num + 1);
}

var showSavedData = async (num) => {
	var rText = 	$('#txtSaved').val();
	var txtBlock = rText.split('<!-- data end -->');
	if ((num < 0) || (num >= txtBlock.length)) {
		aModal('no Page' + num, 'showSavedData');
		console.log('page',num,'max')
		return;
	}

	$('#textSaved').empty();
	var txt = txtBlock[num].split('\t');
  var same = true;
	var startDate = txtBlock[num].match(/<!-- data start (\d{4}_\d{2}_\d{2} \d{1,2}:\d{1,2}:\d{1,2})/);
	if (startDate) {
		$('#savedDate').val(startDate[1]);
	} else {
		await myAlert('データがありません');
		return;
	}
	
	$('#saveHistory').val(num.toString());

  for (var line of txt) {
		var el = line.match(/<!-- (.+?) -->([\S\s]*)/);
		if (!el) continue;
		if (el[1] == 'title') {
			$('#savedFileName').val(el[2]);
		} else if ($('#' + el[1]).val()) {
      var now = $('#' + el[1]).val().replace(/\r\n/g,'\n').trim();
      if (now) {
        var holder = $('#' + el[1]).attr('placeholder');
        var nowColor = 'color: #faa;';
        var savedColor = 'color: #084;';
        var saved = el[2].replace(/\r\n/g,'\n').trim();
        if (saved == now) continue;
        same = false;
        if (now.length > saved.length) {
          nowColor = 'color: #084;';
          savedColor = 'color: #faa;';
        }

				var randomId1 = 's' + Math.random().toString(36).slice(-8);
				var randomId2 = 'n' + Math.random().toString(36).slice(-8);

        $('#textSaved')
        .append($('<div>',{
          class: 'text-warning font-italic font-bold',
          text: holder}))
        .append($('<div>',{class: "form-inline mb-3"})
          .append($('<div>',{class: "col-sm-6"})
            .append($('<div>',{class: "row"})
              .append($('<label>',{for: 'comt',text: '現在のテキスト'})
              .append($('<span>',{
                text: ' : ' + now.length + '文字',
                style: nowColor})))
            .append($('<textarea>',{
							class: 'form-control dark m-0 p-0 wEditor',
							id: randomId1,
              placeholder: el[1],
              style: 'resize: vertical; width:100%;',
              text: now})
              
            )))
          .append($('<div>',{class: "col-sm-offset-0 col-sm-6"})
            .append($('<div>',{class: "row"})
              .append($('<label>',{for: 'comt',text: '保存されたテキスト'})
              .append($('<span>',{
                text: ' : ' + saved.length + '文字',
								style: savedColor
							})))
							.append($('<textarea>',{
								class: 'form-control dark m-0 p-0 wEditor',
								id: randomId2,
								placeholder: el[1],
								style: 'resize: vertical; width:100%;',
								text: saved,
							}))
						)
          )
				)

				$('#' + randomId1).trumbowyg({
					lang: 'ja',btns: [['viewHTML'],['fullscreen']]
				});

				$('#' + randomId2).trumbowyg({
					lang: 'ja',btns: [['viewHTML'],['fullscreen']]
				});
				
					$('#' + randomId1).toggleClass('trumbowyg-dark');
					$('#' + randomId2).toggleClass('trumbowyg-dark');	
					$('#' + randomId1).trumbowyg('toggle')
					$('#' + randomId2).trumbowyg('toggle')
				setTimeout(function () {
				}, 500);

			}
    }
  }

  if (same) {
    aModal('最終保存と同じ','modalSaved');
		$('#same').text('現在のページと同じ');
		$('#same').css('color', '#4a4');
    return true;
  }
  $('#same').text('現在のページと異なります');
	$('#same').css('color', '#a44');

}


var loadFile = (event) => {
	var num = parseInt($('#saveHistory').val());
	var txtBlock = $('#txtSaved').val().split('<!-- data end -->');
  var txt = txtBlock[num].split('\t');
  for (var line of txt) {
    var el = line.match(/<!-- (.+?) -->([\S\s]*)/);
    if (el) {
      $('#' + el[1]).val(el[2]);
    }
  }
	$('#wEditor').trumbowyg('html', txtBlock[num]);
	$('#wAppend').val(txtBlock[num]);
	console.log('load', txtBlock[num]);
	//feelTowEdit();
  //appendTowAppend();
  $( '#changed' ).html('');
}


//------------ Okashi or Lemon ------------
var okashiK = async (urlData,osnap = false) => {
	//  if (ease == "okashi-r") {
	var append = $('#append').val();
	var pid = urlData.match(/\/p\/(\d+?)\.html/);
	if (!pid) {alert('商品IDが見つかりません。確認してください。\n\n' + urlData);
		return;}
	$('#p-id').val(pid[1]);
	var csvFile = 'OkashiK.csv';
	if (urlData.indexOf('b10f.jp') > 0) csvFile = 'B10F.csv';
	else if (urlData.indexOf('lemonup.jp') > 0) csvFile = 'LemonUP.csv'

	var res = await promisePHP(csvFile, 'read');

	if (res) console.log('okashi 5927 okashiK res length', res.length);
	if (res) readOkashiLemon(res, osnap, pid[1],urlData);
	else { //scrapeing errot
		aModal('scraping Error','okashiK');
		var file = document.getElementById('ofile').files[0];
		//  alert(typeof(file));
		if ((typeof(file) == "undefined") || ($('#ofile').val().length === 0)) {
			alert('ファイルが選択されていません'); return;
		}
		if (window.File && window.FileReader && window.FileList && window.Blob) {
		} else {
			alert('The File APIs are not fully supported in this browser.');
		}

		var reader = new FileReader();
		reader.readAsText(file, 'UTF-8');
		reader.onloadend = function() {
			readOkashiLemon(reader.result,osnap,pid[1],urlData);
		}
	}
}


var goToMain = () => {//Page top へ
  $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
  $('.nav-pills a[href="#tabA"]').tab('show');
	return false;
};


$('#previewTop a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
	var elmHash = $(this).attr('href');
	var pos = $(elmHash).offset().top;	//idの上部の距離を取得
  console.log('Tab bottom',pos);
	$('body,html').animate({scrollTop: pos}, 500);
	return false;
});

$('#previewBottom a[href*="#"]').click(function () {
  var fontSize = getComputedStyle(document.documentElement).fontSize;
	var elmHash = $(this).attr('href');
	var pos = $(elmHash).offset().top - parseFloat(fontSize) * 4;	//idの上部の距離を取得
  console.log('Tab bottom',pos);
	$('body,html').animate({scrollTop: pos}, 500);
	return false;
});

$('.editTop a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
  var fontSize = getComputedStyle(document.documentElement).fontSize;
  console.log(parseFloat(fontSize));
	var elmHash = $(this).attr('href');
  console.log('href ',elmHash);
  var t = 0;
//  if (elmHash == '#tabE')
    t = parseFloat(fontSize) * 4;
    console.log(t);
	var pos = $(elmHash).offset().top - t;	//idの上部の距離を取得
	$('body,html').animate({scrollTop: pos}, 300);
	return false;
});

////////////////////////////////////
//------------ surugaya ------------
////////////////////////////////////
easeSurugaya = async (urlData) => {
  if (urlData.indexOf("www.suruga-ya.jp") < 0) {alert("駿河屋のURLではありません。"); return; }
  //    var spd = urlData.split('product/detail/');
	var spd = urlData.match(/detail\/(\d+)/);
	if (!spd) {
		await myAlert('商品詳細ページではありません');
		return;
	}
  var img = $('#img').val();
  var url = '<a href="https://affiliate.suruga-ya.jp/modules/af/af_jump.php?user_id=1861&amp;goods_url=https%3A%2F%2Fwww.suruga-ya.jp%2Fproduct%2Fdetail%2F' + spd[1] + '" rel="nofollow" target="_blank">';
  if (img.indexOf(url) < 0) {
    url += '<img src="https://www.suruga-ya.jp/database/pics/game/' + spd[1] + '.jpg" alt="' + $('#title').val() + '" style="border: none;" />駿河屋で詳細を見る<br><br></a>';
      $('#img').val(img + url);
  }
  console.log('Is Surugaya? = ',img.indexOf(url));

  $('#p-id').val(spd[1]);

  $('orgSurugayaInput')

  var res = await promisePHP(urlData);
  if (!res) {
    aModal('No Surugaya data', urlData);
    return;
  }
  var item = res.match(/"product"[\s\S]+?"name": ?"(.+?)"[\s\S]+?description": ?"(.+?)"[\s\S]+?releaseDate": ?"(.*?)"[\s\S]+?"image": ?"(.*?)"/);
  //  saveToFile(res,'scrapeSurugaya.htm');
  if (item) {
		if ($('#title').val() == '') $('#title').val(item[1].replace(' / ', '　')
			.replace(/[ 　]?（ブルーレイディスク）|[　 ]?【数量限定】|[　 ]?【ベストヒッツ】|[ 　]?【特選アウトレット】|[ 　]?Blu-ray版|[　]?【アウトレット】|[ 　]?（DOD）/g, ''));
    if ($('#cmt').val() == '') $('#cmt').val(item[2]);
    if ($('#date').val() == '') $('#date').val(item[3].replace(/\-/g,'/'));
  }

  var acts = res.match(/出演<\/th>[\s\S]+?<a[\s\S]+?>.+?</g);
  if (acts) {
    var actress = '出演：';
    for (var i = 0;i < acts.length;i++) {
      var a = acts[i].match(/出演<\/th>[\s\S]+?<a[\s\S]+?>(.+?)</);
      if (a) {
        if (i > 0) actress += '、';
        actress += a[1];
      }
    }
    $('#porf').val(actress + '\n' + $('#prof').val());
  }
  
  var url = '"url": "(.+?)"';
  if (url) {
    var pno = url[1].substr(url[1].lastIndexOf('/'));
    if ($('#p-id').val() == '') $('#p-id').val(pno);
  }

  var pno = res.match(/ 型番.*?<\/th>.*?<td>(.+?)</);
  if (pno) if ($('#p-no') == '') $('#p-no').val(pno[1]);

  var img1 = res.match(/https:\/\/www.suruga.ya.jp\/pics_light\/boxart_a\/.+?\.jpg/g);//big front&back
  if (img1) { for (var img of img1) await displayImage(img); }
  var img2 = res.match(/https:\/\/www.suruga-ya.jp\/database\/pics_light\/game\/.+?jpg/g);//front
  if (img2) { for (var img of img2) await displayImage(img); }
  //  var img3 = res.match(/https:\/\/www.suruga-ya.jp\/database\/pics_light\/game\/.+?jpg/g);//small front&back
  //  if (img3) { for (var img of img3) displayImage(img); }
  aModal('画像を作成','scrapeSurugaya');
}


var nyoshin = async (urlData) => {
		var pId = urlData.match(/moviepages\/n(\d+?)\//);
		console.log('nyoshin',urlData.indexOf('nyoshin.com'))
		if (pId) {
			var imgUrl = 'https://www.nyoshin.com/contents/' + pId[1] + '/thum2.jpg';
			var a = '[sample Movie]\n<video width="100%" controls poster="'
				+ imgUrl + '"><source src="https://www.nyoshin.com/d2p/movie/'
				+ pId[1] + '/sample.mp4"><p>ご使用のブラウザでは動画再生に対応していません</p></video>';
			var append = $('#append').val();
			if (append.length > 0) {
				append += '\n\n\n';
			}
			if (append.indexOf(imgUrl) < 0) $('#append').val(append + a);
			var res = urlData.indexOf("/movie");
			var url = '<a href="https://click.dtiserv2.com/Direct/9361999-361-184037' + urlData.substring(res) + '" target="_blank"><img src="' + imgUrl + '" style="max-width: 500px;">「女体のしんぴ」で詳細を見る<br><br></a>';
			var img = $('#img').val();
			if (img.indexOf(imgUrl) < 0) $('#img').val(img + url);

			displayImage(imgUrl);
		}
	console.log('before promose',urlData)
	var txt = await promisePHP(urlData);
	console.log('nyoshin',txt)
	if (!txt) return;
  var title = txt.match(/alt="HD" \/>[\s\S]?(.+?)<\/p>/);
  var doc = txt.match(/<div id="info_comment.+?>(.+?)</);
	var date = txt.match(/更新日：[\s\S]+?>[\s\S]+?>(.+?)</);
	var time = txt.match(/再生時間：[\s\S]+?(\d+?[\s\S]*?)</);
	var act = txt.match(/出演者：[\s\S]+?>[\s\S]+?html">(.+?)</);
  
  if (title) if ($('#title').val() == '') $('#title').val(title[1]);
  if (doc) if ($('#cmt').val() == '') $('#cmt').val(doc[1]);
  if (date) if ($('#date').val() == '') {
    $('#date').val(date[1]);
    $('#prof').val('更新日：' + date[1] + '\n' + $('#prof').val());
  }
  if (time) $('#prof').val('再生時間：' + time[1] + '\n' + $('#prof').val());
	if (act) $('#prof').val('出演：' + act[1] + '\n' + $('#prof').val());

}


var fc2PHP = async (urlData) => {
	var sp = urlData.match(/\/(\d{4,10})/);
	if (!sp) sp = urlData.match(/id=(\d{1,10})/);
	$('#append').val('<iframe width="100%" height="394" style="max-width:100%;" src="https://adult.contents.fc2.com/embed/' + sp[1] + '?i=TVRjM05UUTFORFE9&info=0&logo=0" frameborder="0" allowfullscreen></iframe>');
	var pno = $('#p-no').val();
	if (pno.length > 2) pno += '、';
	if (pno.indexOf(sp[1]) < 0)
		$('#p-no').val(pno + 'FC2 PPV ' + sp[1]);
	var img = '<div class="sample_block"><a href="https://adult.contents.fc2.com/aff.php?aid=' + sp[1] + '&affuid=TVRjM05UUTFORFE9" target="_blank">' + $('#title').val() + '<br><br>FC2で詳細を見る</a></div><br>';
	if ($('#img').val().indexOf('adult.contents.fc2.com') < 0)
		$('#img').val($('#img').val() + img);
	console.log('fc2 sp', sp)
	
	var txt = await promisePHP(urlData);
	if (!txt) return;
	var title = txt.match(/<title>(.+?)</);
	if (title && ($('#title').val().length < 5)) {
		var fc = title[1].match(/(.+)FC2-PPV-\d+?$/);
		if (fc) title[1] = fc[1];
		$('#title').val(title[1]);
	}
	var date = txt.match(/<p>販売日 : (\d{4}\/\d{1,2}\/\d{1,2})</);
	if (date) {
		if ($('#date').val() == '')
			$('#date').val(date[1])
	}
	var imgURL = '';
	var images = txt.match(/https:\/\/storage.+?\/.+?.jpg/g);
	if (images) {
		for (var image of images) {
			console.log(image)
			imgURL += snapImage(image);
		}
		$('#imgURL').val($('#imgURL').val() + '\n\n' + imgURL);
	}
	/*var cmt = txt.match(/<h3>商品の説明<\/.+?<iframe src="(.+?)"/);
	if (cmt) {
		var comment = '<button class="btn btn-outline-link" onclick="$(\'#fc2Iframe\').css(\'display\',\'block\');">商品の説明</button><div id="fc2Iframe" style="display: none;"><iframe src="https://adult.contents.fc2.com' + cmt[1] + '" frameborder="0" style="width:100%;" scrolling="no" data-iframe-watching="0" data-iframe="description"></iframe></div>';
		comment += '<div><iframe src="https://adult.contents.fc2.com/article/2258231/"></iframe></div>'
		$('#cmt').val($('#cmt').val() + comment);
	}*/
}


var scrapeThis = async (ele,long = null) => {
	if (ele == 'p-no') {
		console.log(ele);
		console.log($('#p-no').val());
		var pno = $('#p-no').val();
		if (!pno || (pno.length == 0)) return;
		
		if ((pno.indexOf('1Pondo') < 0) && (pno.indexOf('1pondo') < 0) &&
			(pno.indexOf('Carib') < 0) && (pno.indexOf('carib') < 0) &&
			pno.match(/[a-z]/) && await myConfirm('大文字にしますか'))
			$('#p-no').val(pno.toUpperCase());

		var multi = pno.split(/,|、/g);
		if (multi) pno = multi[0];
		if (pno.length > 0) {
			pno = pno.toLowerCase();
			var fc2 = pno.match(/fc2.ppv.(\d{4,})/);
			var car = pno.match(/carib.+?(\d+)[ -_](\d+)/);
			if (fc2) {
				fc2PHP('https://adult.contents.fc2.com/article/' + fc2[1] + '/');
				return;
			} else if (car) {
				scrapeCarib('https://www.caribbeancom.com/moviepages/' + car[1] + '-' + car[2] + '/index.html'); 
			} else 
				scrapeDmm(pno.replace('-', ''));
			return;
		}
	}
	if (ele == 'prof') {
		formatProf();
    var area = document.getElementById(ele);
    area.focus();
		var selected = area.value.substring(area.selectionStart, area.selectionEnd);
		console.log('selected length', selected.length);
    if (selected.length > 0) addWiki(selected,long);
		else {
			var prof = $('#prof').val();
			var acts = prof.match(/主|出演.*?：(.+)/);
			if (acts) addWiki(acts[1], long);
			else console.log('no actlesses in prof. long=',long)
			}
    return;
  }
}


onDragImage = (event) => { // DragOver ImageFile
//  event.preventDefault();
	$(event.target).addClass('drag');
//  $('#imgDrop').addClass('drag');
//  var e = event.dataTransfar;
//  e.setData("text", 'event.target.id');
}

onDragEnterImage = (event) => { // DragOver ImageFile
//  event.preventDefault();
//  $('#imgDrop').addClass('drag');
//  var e = event.dataTransfar;
//  e.setData("text", 'event.target.id');
}

onDragEndImage = (event) => {
//  event.preventDefault();
  $(event.target).removeClass('drag');
//  event.dataTransfer.setData("text", event.target.id);

}

onDropImage = (event) => { // Drop ImageFile
	//  event.preventDefault();
	var txt = $(event.target).val();
  $(event.target).val('');
	$(event.target).removeClass('drag');
	setTimeout(function () {
		//var txt = $(event.target).val();
		console.log('drop Item = ',txt);
		console.log(event.target.id, event.target.className)
		if (event.target.id == 'imgURL') {
			var ap = txt.match(/<img .+?>/);
			if (!ap) {
				var img = txt.match(/(http.+?jpg)/);
				if (img) {
					txt = '<img src="' + img[1] + '">';
					console.log('imggg',txt)
					$('#imgURL').val(txt);
				}
			}
			//return;
			/*$('#imageModal').modal('hide');
			var images = $('#imgURL').val();
			$('#imgURL').val('<img src="' + images + '">');*/
			setTimeout(function () { $('#imgAdd').click(); }, 500);
			//$('#imgAdd').click();
		} else if (event.target.id == 'dropImageInput') {
			$('#imageModal').modal('hide');
			var images = $('#imgURL').val();
			var img = $('#dropImageInput').val();
			$('#imgURL').val(images + '<img src="' + img + '">');

			setTimeout(function () {$('#imgAdd').click(); }, 500);
			
		} else if (txt.indexOf('.jpg') > 0) {
			$('#append').val($('#append').val() + snapImage(txt));
		}
	}, 300);
	//alert(txt);
}


var showImage = () => {
  var img = $('#imgDrop').val();
  console.log('#button-addon5 click',img);
  displayImage(img);
}


var addImage = () => {
  var img = $('#imgDrop').val();
  console.log('#addImage click',img);
	displayImage(img);
	$('#append').val($('#append').val() + snapImage(img));
	$('#imgDrop').val('');
}


$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  Lightbox($(this));
});


var scrapeTitle = async (urlData,ele = 'none') => {

	var res = await promisePHP(urlData, 'title');
	if (!res) { aModal('scraping Error', 'Title'); return;}
	if (ele == 'add-url') {
		var url = res.match(/<start>(.+?)<end>/);
		if (url) urlData = url[1] + '(' + urlData + ')';
		$('#select-url').append($('<option>').html(urlData).val("追加"));
	}
};

var addUrl = () => {
  var url = $('#add-url').val();
  if (url == '') {
    aModal('加えるURLがありません','addUrl'); 
    return;
  }
  $('#add-url').val('');
  scrapeTitle(url,'add-url');
//  $('#select-url').append($('<option>').html(url).val("追加される値"));
}

var displayUrl = () => {
  var url = $('#select-url > option:selected').text();
  var title = url.substr(0,10);
  var name = url.match(/(.+)\((.+?)\)$/);
  if (name) {
    title = name[1].substr(0,10);
    url = name[2];
  }
  
  ////// add pil //////
  $('#urlTab').append('<li>',{class: 'nav-item'})
  .append('<a>',{
    class: 'nav-link',
    attr: ' data-toggle="tab" role="tab" aria-controls="' + 'home' + '"',
  //    aria-selected="false"',
    href: "#girl",// must be unique
    id: "home-tab", 
    text: title
  });

  ////// add TabContent //////
  $('#urlTabContent').append('<div>',{
    class: 'tab-pane',
    id: 'girl', // must be unique
    attr: 'role="tabpanel" aria-labelledby="' + 'home-tab' + '"'
  })
    .append('<div>',{class: 'form-group form-inline'})
      .append('<div>',{class: "input-group col-sm-10"})
        .append('<div>',{class: "input-group-prepend"})
          .append('<button>',{})
}


var deleteUrl = () => {
  $('#select-url > option:selected').remove();
}

var rndStr = (num = 8) => {
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var rand_str = '';
  for ( var i = 0; i < num; i++ ) {
    rand_str += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  console.log('rand=',num,'  =>  ',rand_str);
  return(rand_str);
}


async function scrapeCarib(urlData) {
  console.log("before promise");
  var txt = await promisePHP(urlData);
  console.log("after promise = ",txt.length);
  var profile = '';
  var title = txt.match(/<title>(.+?)<\/title>/);
  if (title && ($('#title').val().length == 0)) {
    $('#title').val(title[1].replace(' - 無修正動画 カリビアンコム ',''));
  }
  var cmt = txt.match(/<p itemprop="description">([\s\S]*?)</);
  if (cmt && ($('#cmt').val().length == 0)) {
    $('#cmt').val(cmt[1]);
  }
  var date = txt.match(/配信日[\s\S]+?content">([\s\S]*?)</);
  if (date) {
    profile += '配信日：' + date[1] +'\n';
    if ($('#date').val().length == 0)
      $('#date').val(date[1]);
  }
  var time = txt.match(/再生時間[\s\S]+?(\d{2}:\d{2}:\d{2})/);
  if (time) {
    profile += '再生時間：' + time[1] +'\n';
  }
//  var studio = txt.match(/シリーズ[\s\S]+?content">([\s\S]*?)</);
//  if (studio) {
//    profile += 'シリーズ：' + studio[1] +'\n';
//  }

  $('#prof').val(profile + $('#prof').val());
  //https://www.caribbeancom.com/moviepages/072315-927/index.html
  var pID = txt.match(/https:\/\/www.caribbeancom.com\/moviepages\/(.+?)\//);
  if (pID) {
    console.log('pID',pID)
    if ($('#p-no').val() == '') $('#p-no').val('Caribbeancom ' + pID[1]);
    //<a href="http://click.dtiserv2.com/Direct/8881889-6-184037/moviepages/072315-927/index.html" target="_blank"><img src="https://www.caribbeancom.com/moviepages/072315-927/images/l_t.jpg" border="0" hight="394" width="100%"></a>
    var img = '<a href="http://click.dtiserv2.com/Direct/8881889-6-184037/moviepages/' + pID[1] + '/index.html" target="_blank"><img src="https://www.caribbeancom.com/moviepages/' + pID[1] + '/images/l_t.jpg" border="0" height="394" width="100%">CaribbeanComで詳細を見る<br><br></a>';
    if (!$('#img').val().match(img)) $('#img').val($('#img').val() + img);
    //</moviepages/121818-812/images/l/002.jpg
    var video = '<script name="setAffplayer' 
    + pID[1] + '" id="setAffplayer' 
    + pID[1] + '" type="text/javascript" src="https://affiliate.dtiserv.com/js/setAffplayerVideo2.js?affid=184037&siteid=6&video=https://smovie.caribbeancom.com/sample/movies/' 
    + pID[1] + '/sample_m.mp4&img=https://www.caribbeancom.com/moviepages/'
    + pID[1] + '/images/l_t.jpg&w=700&h=394&url=www.caribbeancom.com&id='
    + pID[1] + '&m_flag=1&page=moviepages/' + pID[1] + '/index.html"></script>';
    if (!$('#append').val().match(video)) $('#append').val(video + $('#append').val());
    //https://www.caribbeancom.com/moviepages/072315-927/images/l_l.jp
    await displayImage('https://www.caribbeancom.com/moviepages/' + pID[1] + '/images/l_l.jpg');
    var reg = new RegExp('"/moviepages/' + pID[1] + '/images/l/\\d+.jpg','g');
    console.log(reg);
    var append = $('#append').val() + '\n\n\n';
    var images = txt.match(reg);
    if (images) {
      for (var image of images) {
        await displayImage('https://www.caribbeancom.com' + image.substr(1));
        console.log(image);
				if (append.indexOf(image) < 0)
					append += snapImage('https://www.caribbeancom.com' + image.substr(1));
			};
			append += '<br style="clear: both;">';
    }
		append += snapImage('https://www.caribbeancom.com/moviepages/' + pID[1] + '/images/l_l.jpg');

    $('#append').val(append);

  }

}


async function scrapeCaribComp(urlData) {
  console.log("before promise");
  var txt = await promisePHP(urlData);
  console.log("after promise = ",txt)
  var profile = '';
  var title = txt.match(/<h1[\s\S]*?>([\s\S]+?)<\/h1>/);
  if (title && ($('#title').val().length == 0)) {
    $('#title').val(title[1]);
  }
  var cmt = txt.match(/name="description" content="([\s\S]*?)">/);
  if (cmt && ($('#cmt').val().length == 0)) {
    $('#cmt').val(cmt[1]);
  }
  var date = txt.match(/販売日[\s\S]+?content">([\s\S]*?)</);
  if (date) {
    profile += '販売日：' + date[1] +'\n';
    if ($('#date').val().length == 0)
      $('#date').val(date[1]);
  }
  var time = txt.match(/再生時間[\s\S]+?content">([\s\S]*?)</);
  if (time) {
    profile += '再生時間：' + time[1] +'\n';
  }
  var studio = txt.match(/スタジオ[\s\S]+?content">([\s\S]*?)</);
  if (studio) {
    profile += 'スタジオ：' + studio[1] +'\n';
  }

  $('#prof').val(profile + $('Prof').val());
  var pID = txt.match(/https:\/\/www.caribbeancompr.com\/moviepages\/(.+?)\//);
  if (pID) {
    if ($('#p-no').val() == '') $('#p-no').val('Caribbeancompr ' + pID[1]);
    var img = '<a href="http://click.dtiserv2.com/Direct/8881888-290-184037/moviepages/' 
      + pID[1] + '/index.html" target="_blank"><img src="https://www.caribbeancompr.com/moviepages/' + pID[1] + '/images/l_l.jpg" border="0" height="394" width="100%">Caribcompで詳細を見る<br><br></a>';
    if (!$('#img').val().match(img)) $('#img').val($('#img').val() + img);
    var video = '<script name="setAffplayer'
      + pID[1] + '" id="setAffplayer'
      + pID[1] + '" type="text/javascript" src="https://affiliate.dtiserv.com/js/setAffplayerVideo2.js?affid=184037&siteid=290&video=https://smovie.caribbeancompr.com/sample/movies/' 
      + pID[1] + '/480p.mp4&img=https://www.caribbeancompr.com/moviepages/'
      + pID[1] + '/images/l_l.jpg&w=700&h=394&url=www.caribbeancompr.com&id='
      + pID[1] + '&m_flag=0&page=moviepages/' + pID[1] + '/index.html"></script>';
    if (!$('#append').val().match(video)) $('#append').val(video + $('#append').val());
    //https://www.caribbeancompr.com/moviepages/102718_001/images/l_l.jpg

    //https://www.caribbeancompr.com/member/moviepages/
    await displayImage('https://www.caribbeancompr.com/moviepages/' + pID[1] + '/images/l_l.jpg');
    var reg = new RegExp('https://www.caribbeancompr.com/moviepages/' + pID[1] + '/images/l/\\d+.jpg','g');
    console.log(reg);
    var append = $('#append').val() + '\n\n\n';
    var images = txt.match(reg);
    if (images) {
      for (var image of images) {
        await displayImage(image);
				if (append.indexOf(image) < 0)
          append += snapImage(image);
      };
			append += '<br style="clear: both;">';
    }
		append += snapImage('https://www.caribbeancompr.com/moviepages/' + pID[1] + '/images/l_l.jpg');

    $('#append').val(append);
    //    reg = new RegExp('https://www.caribbeancompr.com/member/moviepages/' + pID[1] + '/images/l/\\d+.jpg','g');
		//    console.log(reg);
		//    var images = txt.match(reg);
		//    if (images) {
		//      for (var image of images) {
		//        await displayImage(image);
		//        console.log(image);
		//      };
		//    }
  }

}

var promiseTest = async () => {
	var txt = await promisePHP('dir', 'listTest');
	alert('listTest', txt);
}

var promisePHP = (filename, mode = 'scrape', dir = '', count = 20) => {
	console.log('fileneme mode dir count',filename,mode,dir,count)
  return new Promise((resolve,reject) => {
    csrChange('wait','promisePHP');
    var res = '';
    var xmlhttp = new XMLHttpRequest();
    var url = "saveTemp.php"
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4) {
        if (xmlhttp.status == 200) {
					console.log('readyState satatus',
						xmlhttp.readyState, xmlhttp.status);
          res = xmlhttp.responseText;
          csrChange('auto','success! promisePHP');
					//console.log('return text of promisePhP',res)
          resolve(res);
        }
      }
    }
    xmlhttp.onerror = function() {
      csrChange('auto','error! promisePHP');
      aModal('error Scrape','promisePHP');
      reject(false);
    }
    var sendData = new FormData();
    sendData.append('fileName',filename);
		sendData.append('mode', mode);
		if (dir != '') {
			if (mode == 'move')
				sendData.append('dir', dir);
			else 
				sendData.append('text',dir);
		}
		sendData.append('count', count);
		console.log('sendData', sendData);

    xmlhttp.open('post',encodeURIComponent(url),true);
    xmlhttp.send(sendData);
  })
}


var scrapeDuga = async (urlData) => {
	//------------ APEX -----------
	var pId = urlData.match(/ppv\/(.+?)\//);
	if (!pId) return;
	var img = $('#img').val();
	if (img.indexOf(pId[1]) < 0) {// image
		img += '<a href="https://click.duga.jp/ppv/' + pId[1] + '/40739-01" rel="nofollow">Dugaで詳細を見る<br><br></a>';
		$('#img').val(img);
	}
	console.log('Duga imgd ', img)

	var smpl = $('#append').val();
	if (smpl.indexOf(pId[1]) < 0) {// Sample Movie
		smpl += '<div style="max-width:100%;" id="dugaflvplayer-' + pId[1]
			+ '" data-w="756" data-h="420" data-o="dugaflvplayer-' + pId[1]
			+ '" data-l="ppv" data-p="' + pId[1]
			+ '" data-a="40739" data-b="01"><a href="https://click.duga.jp/ppv/' + pId[1]
			+ '/40739-01" target="_blank">'
			+ $('#title').val()
			+ '</a></div><script type="text/javascript" src="https://ad.duga.jp/flash/dugaflvplayer.js" defer></script>';
		$('#append').val(smpl);
	}

	var items = pId[1].split('-');
	if (items.length > 1) {// Sample Image
		displayImage('https://pic.duga.jp/unsecure/' + items[0] + '/' + items[1]
			+ '/noauth/jacket.jpg');
	}
  
	var txt = await promisePHP(urlData);
	var title = txt.match(/"name": "(.+?)"[\r\n\s\S]*?"description": "(.+?)"/);
	if (title) {
		if ($('#title').val().length <= 0) {
			$('#title').val(title[1]);
		}
		if ($('#cmt').val().length <= 0) {
			$('#cmt').val(title[2]);
		}
	}
	var date = txt.match(/"uploadDate": "(.+?)"/);
	if (date) {
		if ($('#date').val().length <= 0) {
			$('#date').val(date[1]);
		}
	}
	var pID = txt.match(/メーカー品番<\/th><td><.+?>(.+?)</);
	if (pID) {
		if ($('#p-no').val().length <= 0) {
			$('#p-no').val(pID[1]);
		}
	}

	var prof = '';
	var actArea = txt.match(/>出演者<(.+?)<\/tr>/);
	if (actArea) {
		prof = '出演：';
		var acts = actArea[1].match(/a href.+?>.+?<\/a/g);
		for (var act of acts) {
			var actor = act.match(/a href.+?>(.+?)<\/a/);
			prof += actor[1] + '、';
		}
		prof = prof.slice(0, -1);
	}

	//  if (prof.length > 0) 
	$('#prof').val(prof + '\n' + $('#prof').val());

	var images = txt.match(/<a href="https:\/\/pic.duga.jp\/unsecure\/.+?\/cap\/\d+?.jpg/g);
	var append = $('#append').val();
	if (append.length > 0) append += '\n\n\n';
	console.log('Duga append ', append)
	if (images) {
		console.log(images)
		for (var image of images) {
			append += snapImage(image.substr(9));
		}
//		append += '<br style="clear: both;">';
		$('#append').val(append);
	}
};


var scrapeIchigo = async (urlData) => {
  //------------ Ichigo Daifuku -----------
	var url = urlData.match(/www.15-candy.com(.+)/);
	if (!url) { await myAlert('いちごキャンディーのurlではありません'); return;}
	var afi = '<a href="https://wlink.golden-gateway.com/stlink/9901-1-002-87af' + url[1] + '" target="_blank" rel="noopener">いちごキャンディーで詳細を見る<br><br></a>';
	$('#img').val($('#img').val() + afi);


  var txt = await promisePHP(urlData);
  var res = txt.match(/<body[\r\n\s\S]+?ムービーダウンロード/g);
  if (res) txt = res[0];

  //[\r\n\s\S]
	var title = txt.match(/<dt>作品タイトル<\/dt><dd><h4>([\s\S]+?)<\/h4>/);
	var act = txt.match(/<dt>女優名[s\S]+?<a.+?>(.+?)<\/a>/);
	if (title) {
		if ($('#title').val().length < title[1].length) {
			if (act) title[1] += '　' + act[1];
			$('#title').val(title[1]);
		}
	}
  var cmt = txt.match(/作品レビュー.*?<p.+?>(.+?)</);
  if (cmt) {
    if ($('#cmt').val().length < cmt[1].length) {
      $('#cmt').val(cmt[1]);
    }
  }
  var prof = $('#prof').val();
//  var act = txt.match(/<dt>女優名.+?">(.+?)</);
  if (act) {
    prof += '出演：' + act[1] + '\n';
  }
  var time = txt.match(/<dt>再生時間.+?>(.+?)</);
  if (time) {
    prof += '再生時間:' + time[1] + '\n';
  }
  var tags = '（タグ：';
  var cates = txt.match(/category\/.+?>.+?</g);
  if (cates) {
    for (var cate of cates) {
      var item = cate.match(/category\/.+?>(.+?)</);
      if (item) {
        if (item[1].match(/[ \r\n\s\t]/)) continue;
        if (tags.indexOf(item[1]) < 0) tags += item[1] + '、';
      }
    }
    prof += tags.slice(0,-1) + '）';
  }
  $('#prof').val(prof);

  var date = txt.match(/<dt>公開日.+?>(.+?)</);
  if (date) {
    if ($('#date').val().length <= 0) {
      $('#date').val(date[1]);
    }
  }


}
/*var ichigo = async (urlData) => {
	var txt = await promisePHP(urlData);
	if (!txt) return;
	var main = txt.match(/<dl>[\s\S]*?<dt>作品タイトル<\/dt><dd><h4>[\s\S]+?<p class="p_attention">[\s\S]+?<\/p>/);
	if (!main) return;
	var cmt = main.match(/<p class="p_attention">([\s\S]+?)<\/p>/);
	if (cmt) {
		if ($('#cmt').val().length < cmt[1].length) {
			$('#cmt').val(cmt[1]);
		}
	}
}*/

var clearDrop = () => {
  $('#dropdownMinna').empty();
  $('#dropdownMinna').append('<div type="button" class="dropdown-item" style="color: red;" onclick="clearDrop()">Clear<i class="far fa-trash-alt mx-2"></i></div>');
}


$('#dropdownMinna').on('click', function (event) {
  console.log(event.target.innerText)
  var act = event.target.innerText;
	var url = 'http://www.minnano-av.com/search_result.php?search_scope=actress&search_word=' + act;
	var urlS = 'http://sougouwiki.com/search?search_type=2&search_target=page_name&keywords=' + act;
	var urlW = 'https://ja.wikipedia.org/wiki/';
	var name = act;
  var acts = act.match(/(.+?)：(.+)/);
	//	console.log('actor', acts, acts[1]);
  if (acts) {
		url = 'http://www.minnano-av.com/' + acts[2];
		console.log('actor', acts, acts[1]);
		name = acts[1];
  }
  $('#orgMinnaInput').val(url);
	$('#orgMinna2Input').val(name);
	$('#orgShiroWiki2Input').val(urlS + name);
	$('#orgShiroWiki22Input').val(name);
	$('#orgWikipedia2Input').val(urlW + name);
	$('#orgWikipediaInput').val(name);
})

$('.orgButton').on('click', function (event) {
  console.log(event.target.id)
  var ids = event.target.id;
  var id = ids.match(/(.+)Button/);
  if (id) {
    console.log(id)
    var url = $('#' + id[1] + 'Input').val();
    console.log('Add iframe =',url)
    if (url.length > 5) {
			$('#' + 'orgMinna').append('<div class="orgChild" style="background-color: white;"><iframe src = "' + url + '" style = "width: 100%; height: 800px;"  allowfullscreen = "true" ></iframe ></div>');
    }
  }
})


$('.org-label').on('click', function (event) { 
	console.log($(event.target).text());
	let url = $(event.target).next().children('.drop').val();
	if ( (url.match(/http.*?:\/\//))) {
			$('#' + 'orgGirl').append('<div class="orgChild" style="background-color: white;"><iframe src = "' + url + '" style = "width: 100%; height: 800px;"  allowfullscreen = "true" ></iframe ></div>');
	}
	console.log($(event.target).parent().children('input'));
})


$('.orgClear').on('click', function (event) {
  var ele = $(event.target).parent().parent().html();
  console.log(ele)
  var input = ele.match(/id="(org.+?)Input/)
	if (input) {
    $('#' + input[1] + 'Input').val('');
		console.log('input', input)
		var frm = 'orgGirl';
    $('#' + frm + ' > .orgChild').remove();
  }
})


$('.orgMinnaClear').on('click', function (event) {
	var ele = $(this).parent().parent().html();
	console.log(ele)
	var input = ele.match(/id="(org.+?)Input/)
	if (input) {
		$('#' + input[1] + 'Input').val('');
		console.log('input', input)
		var frm = 'orgMinna';
		$('#' + frm + ' > .orgChild').remove();
	}
})


//var clearMinnnaIframe = () => {
//	$('#orgMinna > .orgChild').remove();
//}


$('.orgPage').on('click', function (event) { // 3 buttons function
	var id = event.target.id;
	console.log('event.target.class = ',event.target.class);
  var pNo = $('#orgNo').val();
  var title = $('#orgTitle').val();
  var tab = id.match(/org(.+)(No$|Title$|Url$|Key$)/);
  console.log("clicked = ",tab)
	//  var tabT = id .match(/org())
	var url;
	var key = $('#org' + tab[1] + 'Input').val();
  console.log('tab  -= ',tab)
  if (tab) {
    var show = pNo;
    if (tab[2] == 'Title') show = title;
		if (tab[2] == 'Key') {
			show = key;
		}
		console.log(show)
    if (tab[2] == 'Url') {
			url = $('#org' + tab[1] + 'Input').val();
			console.log('5894 tab ',show,tab[1],tab[2],url)
      if (url.length < 1) return;
    } else {
      switch (tab[1]) { // with sitename
        case 'Dmm':
          url = 'https://www.dmm.co.jp/search/=/searchstr=' + show;
          break;
        case 'Gekiyasu':
          url = 'https://www.gekiyasu-dvdshop.jp/products/list.php?mode=search&name=' + show;
          break;
        case 'Surugaya':
          url = 'https://www.suruga-ya.jp/search?category=3&search_word=' + show;//'MDS-884&searchbox=1&is_marketplace=0' + show;
          break;
        case 'Moon':
          url = 'https://medias.mine.nu/?s=' + show;
          break;
        case 'Amazon':
          url = 'https://www.amazon.co.jp/s?k=' + show;
          break;
        case 'Nomado':
          url = 'https://nomado.mine.nu/?s=' + show;
          break;
        case 'Girl':
				case 'MyGirl':
          url = 'https://girls.galleria.mine.nu/?s=' + show;
          break;
				case 'Lemon':
					url = 'https://lemonup.jp/advanced_search_result.php?search_in_description=1&atype=11236&keywords=' + show;
					break;
				case 'OkashiK':
					url = 'https://okashik.atype.jp/advanced_search_result.php?search_in_description=1&atype=11236&keywords=' + show;
					break;
				case 'ShiroWiki':
				case 'ShiroWiki2':
					url = 'http://sougouwiki.com/search?keywords=' + show;
					if (tab[2] == 'Key') url = 'sougouwiki.com/search?search_type=2&search_target=page_name&keywords=' + show;
					break;
				case 'Mgs':
					url = 'https://www.mgstage.com/search/cSearch.php?search_word=' + show;
					break;
				case 'Duga':
					url = 'https://duga.jp/search/=/q=' + show;
					break;
				case 'Fc2':
					if (tab[2] == 'No') {
						var no = show.toUpperCase().match(/FC2.*?PPV\D*?(\d+)/);
						if (no)
							url = 'https://adult.contents.fc2.com/article/' + no[1] + '/';
					}
					else url = 'https://adult.contents.fc2.com/search/?q=' + show;
					break;
				case 'Ichigo':
					url = 'https://www.15-candy.com/category/list.html?flag=s&keyword=' + show;
					break;
				case 'Sukebei':
					url = 'https://sukebei.nyaa.si/?f=0&c=0_0&q=' + show;
					break;
				case 'Minna':
				case 'Minna2':
					url = 'http://www.minnano-av.com/search_result.php?search_scope=actress&search_word=' + show;
					if ((tab[2] == 'Title') || (tab[2] == 'No'))
						url = 'http://www.minnano-av.com/search_result.php?search_scope=av&search_word=' + show;
					break;
				case 'Wikipedia':
					url = 'https://ja.wikipedia.org/wiki/' + show;
					if ((tab[2] == 'Key'))
						url = 'https://ja.wikipedia.org/wiki/' + $('#orgWikipedia2Input').val();
					break;
				case 'Nyoshin':
					url = 'https://www.nyoshin.com/search/?q=' + key + '&x=0&y=0&category_search_type=and&flag_match_type=0';
					if (tab[2] == 'Title')
						url = 'https://www.nyoshin.com/search/?actor_name=' + key + '&x=14&y=11&category_search_type=and&flag_match_type=0';
					if (tab[2] == 'No') {
						var iNo = pNo.toLowerCase().match(/n\d+/g);
						if (iNo) {
							url = 'https://www.nyoshin.com/moviepages/' + iNo[iNo.length - 1] + '/index.html';
							$('#p-no').val('Nyoshin ' + iNo[iNo.length - 1]);
						}
					}
					break;
				case 'Google'://ｇSearch
					url = 'https://www.google.com/search?q=' + show;
					console.log('Google search = ',url)
					if ((wObj) && (!wObj.closed)) wObj.close();
					wObj = window.open(url, '_blank','menubar=1,toolbar=1,location=1,status=1,width=1000,height=800');
					return;
        default:
          url = ''; show = '';
          break;
      }
      if (show == '') return;
    }
    
		if ((wObj) && (!wObj.closed)) {
			wObj.close();
		}

		$('#org' + tab[1] + 'Input').val(url);
		
		// encode　してみる
		url = encodeURI(url);
		console.log('open URIconponent', url)
		var wWidth = window.innerWidth;
		wObj = window.open(url, '_blank', 'width=' + wWidth + ',height=800,');
		//else console.log('dont Open window',wObj,wObj.closed)
    //setTimeout(function () {
      //console.log('New Window : ', w.document.title);
    //}, 1000);
    //return;
  }
  
})
var wObj;


$('.custom-file-input').on('change',function(){
  $(this).next('.custom-file-label').html($(this)[0].files[0].name);
})


$('.lang-select').click(function () {
  var lang = $(this).attr('data-lang');
  window.location = $(this).attr('href');
  location.reload();
});

function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'ja',
    layout: google.translate.TranslateElement.FloatPosition.TOP_LEFT
  }, 'google_translate_element');
}


var translate = () => { //  translate
  $('#Japanese').val($('#feel').val());
  $('#translated').html($('#feel').val().replace(/\n/g, '<br>'));
  console.log('feel = ', $('#feel').val())
	doGTranslate('ja|en');
	csrChange('wait', 'translate');
	tenki();
	$('#translateModal').modal();
  setTimeout(function () {
		//    $('#btn-inner').text('メインに転記する');
		$('body').css('top', '0px');
		csrChange('auto', 'translate');
		tenki();
	}, 2000);
  return false;
}


$('#Japanese').on('keyup', function () {
//  console.log('Japanese Changed');
	tenki();
  $('#translated').html($('#Japanese').val().replace(/\n/g, '<br>'));
  setTimeout(function () {
    tenki();
  }, 500);
})

var tenki = () => {
  $('#translatedText').val(
    $('#translated').html()
      .replace(/<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/g, '')
      .replace(/<\/font><\/font>/g, '')
      .replace(/<\/font><font style="vertical-align: inherit;">/g,'')
      .replace(/<br>/g, '\n'));
}

var tenkiOld = () => {
	$('#Japanese').val($('#japaneseOld').val());
}

$('#translateOK').on('click', function () {
	doGTranslate('ja|ja');
	$('#japaneseOld').val($('#Japanese').val());
  $('#english').val($('#translatedText').val());
  $('#translateModal').modal('hide');
  return false;
})
/*var copyTranslated = () => {
  $('#english').val($('#translatedText').val());
  doGTranslate('ja|ja');
  return false;
}*/

var closeTranslated = () => {
  doGTranslate('ja|ja');
  return false;
}

$('#translateModal').on('hidden.bs.modal', function (e) {
  doGTranslate('ja|ja');
  return false;
})


function googleTranslateElementInit2() { new google.translate.TranslateElement({ pageLanguage: 'ja', autoDisplay: false }, 'google_translate_element2'); } if (!window.gt_translate_script) { window.gt_translate_script = document.createElement('script'); gt_translate_script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit2'; document.body.appendChild(gt_translate_script); }

function GTranslateGetCurrentLang() { var keyValue = document['cookie'].match('(^|;) ?googtrans=([^;]*)(;|$)'); return keyValue ? keyValue[2].split('/')[2] : null; }

function GTranslateFireEvent(element, event) { try { if (document.createEventObject) { var evt = document.createEventObject(); element.fireEvent('on' + event, evt) } else { var evt = document.createEvent('HTMLEvents'); evt.initEvent(event, true, true); element.dispatchEvent(evt) } } catch (e) { } }

function doGTranslate(lang_pair) { if (lang_pair.value) lang_pair = lang_pair.value; if (lang_pair == '') return; var lang = lang_pair.split('|')[1]; if (GTranslateGetCurrentLang() == null && lang == lang_pair.split('|')[0]) return; if (typeof ga == 'function') { ga('send', 'event', 'GTranslate', lang, location.hostname + location.pathname + location.search); } var teCombo; var sel = document.getElementsByTagName('select'); for (var i = 0; i < sel.length; i++)if (sel[i].className.indexOf('goog-te-combo') != -1) { teCombo = sel[i]; break; } if (document.getElementById('google_translate_element2') == null || document.getElementById('google_translate_element2').innerHTML.length == 0 || teCombo.length == 0 || teCombo.innerHTML.length == 0) { setTimeout(function () { doGTranslate(lang_pair) }, 500) } else { teCombo.value = lang; GTranslateFireEvent(teCombo, 'change'); GTranslateFireEvent(teCombo, 'change') } }

let orgEaseUp = (ele) => {
	let txt = $('#' + ele).val();
	$('#url').val(txt);
	goToMain();
	$('#ease').click();
}

var heydouga = async (urlData) => {
	var txt = await promisePHP(urlData);
	if (!txt) return false;
	
}


const myConfirm = (() => {
	console.log('fdfa')

	let alt = null, p = null, btn_yes = null, btn_no = null;
	window.addEventListener("DOMContentLoaded", () => {
		if (alt !== null) return;

		alt = document.getElementById("confirm");
		p = alt.querySelector("textarea");
		btn_yes = alt.querySelector("#confirm-yes");
		btn_no = alt.querySelector("#confirm-no");
	});

	return (text) => {
		p.textContent = text;
		$('#cText').val(text);
		alt.style.display = "block";

		return new Promise((resolve) => {
			const yesEvent = () => { resolve(true); removeEvent(); }
			const noEvent = () => { resolve(false); removeEvent(); }
			const removeEvent = () => {
				btn_yes.removeEventListener("click", yesEvent);
				btn_no.removeEventListener("click", noEvent);
				alt.style.display = "none";
			};
			btn_yes.addEventListener("click", yesEvent);
			btn_no.addEventListener("click", noEvent);
		});
	};
})();

var myConfirmF = async ( mes = '続けていいですか',yes = 'OK', no = 'いいえ',title,mass) => {
	if (mass) {
		if (mass.yes) yes = mass.yes;
		if (mass.no) 	no = mass.no;
		if (mass.title) title = mass.title;
		if (mass.mes) mes = mass.mes;
	}
	$('#confirm-yes').html(yes);
	$('#confirm-no').html(no);
	$('#confirmTextA').html(title);

	return (await myConfirm(mes));
}
	

var myAlert = (() => {
	console.log('fdfa')

	let alt = null, p = null, btn_yes = null, btn_no = null;
	window.addEventListener("DOMContentLoaded", () => {
		if (alt !== null) return;

		alt = document.getElementById("alert");
		p = alt.querySelector("textarea");
		btn_ok = alt.querySelector("#alert-ok");
	});

	return (text) => {
		$('#aText').val(text);
		p.textContent = text;
		alt.style.display = "block";

		return new Promise((resolve) => {
			const okEvent = () => { resolve(true); removeEvent(); }
			const removeEvent = () => {
				btn_ok.removeEventListener("click", okEvent);
				alt.style.display = "none";
			};
			btn_ok.addEventListener("click", okEvent);
		});
	};
})();

var myAlertF = async (mes) => {
	console.log(mes)
	const result = await myAlert(mes);
	alert(result); // ①
}


var confirmD = async (txt,mes = '') => {
	$('#confirmTextA').html(mes);
	return (await myConfirm(txt));
};


const myPrompt = (() => {

	let alt = null, p = null, btn_yes = null, btn_no = null, input = null;

	window.addEventListener("DOMContentLoaded", () => {
		if (alt !== null) return;

		alt = document.getElementById("prompt");
		p = alt.querySelector("p");
		btn_yes = alt.querySelector("#prompt-yes");
		btn_no = alt.querySelector("#prompt-no");
		input = alt.querySelector("#prompt-input");
	});

	return (text, intialValue = "") => {
		p.textContent = text;
		alt.style.display = "block";
		input.value = intialValue;

		return new Promise((resolve) => {
			const yesEvent = () => { resolve(input.value); removeEvent(); }
			const noEvent = () => { resolve(null); removeEvent(); }
			const removeEvent = () => {
				btn_yes.removeEventListener("click", yesEvent);
				btn_no.removeEventListener("click", noEvent);
				alt.style.display = "none";
			};
			btn_yes.addEventListener("click", yesEvent);
			btn_no.addEventListener("click", noEvent);
		});
	};
})();

const myFunc = async () => {
	const result = await myPrompt("入力してください");
	alert(result);
};

var bodyPosition = (x = 0, y = 0) => {
	$('body').css('position', 'absolute');
	$('body').css('top', y + 'px');
	$('body').css('left', x + 'px');
}

var displayEnglish = () => {
	var elem = document.getElementById("engText");
	var display = elem.style.display;
	if (display == 'block') display = 'none';
	else display = 'block';
	elem.style.display = display;
}


var neowingPHP = async (urlData) => {	
	var txt = await promisePHP(urlData);
	
}

var replaceParagraph = (ele) => {
	var txt = $('#' + ele).val();
	if (!txt || (txt.length == 0)) return;
	var p = txt.match(/<p .+?>[\s\S]+?<\/p>/g);
	if (!p) return;
	for (var para of p) {
		var pa = para.match(/<p (.+?>[\s\S]+?)<\/p>/);
		if (pa) txt = txt.replace(para, '<div ' + pa[1] + '</div>');
	}
	$('#' + ele).val(txt);
}

var removeParagraph = (ele) => {
	var txt = $('#' + ele).val();
	if (!txt || (txt.length == 0)) return;
	var p = txt.match(/<p>[\s\S]+?<\/p>/g);
	if (!p) return;
	for (var para of p) {
		var pa = para.match(/<p>([\s\S]+?)<\/p>/);
		if (pa) txt = txt.replace(para, pa[1]);
	}
	$('#' + ele).val(txt);
}


var codeWidth = (ele) => {
	var width = parseInt($('#' + ele).val());
	var txt = width.toString() + 'px';
	if (!width || (width == 0)) txt = '100%';
	$('#codeDiv').css('width', txt);

}


var codeDark = (flag = true) => {
	console.log("code color dark")
	$('#codeDiv').removeClass('white');
	//if (flag)
	//	$('#codeDiv').toggleClass('black');
	//else
		$('#codeDiv').addClass('black');
}

var codeLight = (flag = true) => {
	console.log("code color light")
	$('#codeDiv').removeClass('black');
//	if (flag)
//		$('#codeDiv').toggleClass('white');
//	else 
		$('#codeDiv').addClass('white');
}

var addClear = (ele = 'img') => {
	var clear = '<br style="clear: both;">';
	var img = $('#' + ele).val();
	if (img.indexOf('style="clear: both;"') >= 0) return;
	if (img.indexOf(clear) < 0)
		$('#' + ele).val(img + clear);
}

var preFormatProf = () => {

}

var formatProf = () => {
	var prof = $('#prof').val().split(/\r|\n|\r\n/g);
	var res = '';
	for (var i = 0; i < prof.length; i++) {
		var item = prof[i].match(/([\s\t]*)(\S+?)[:：](.+)/);
		//console.log('formatProf',prof[i],item)
		if ((item) && (item.length == 4) && (prof[i].indexOf('生年月日') < 0)) {
			switch (item[2]) {
				case '配信日':
					if ($('#date').val() == '') $('#date').val(item[3]);
					break;
				case 'タグ':
					var tags = ['オリジナル動画','AV女優','ベスト・オムニバス','淫語', '微乳', '美脚','モデル系','熟女/人妻', 'パイパン','痴女', '口内発射','水着', 'ロリ', '美尻', 'スレンダー', '巨乳','放尿', '美乳','ハード系','レズ','パイズリ','ごっくん','アナル', '手コキ', 'イラマチオ', 'マングリ返し','コスプレ','ぶっかけ','69','乱交','顔射','オナニー','潮吹き','初裏', '中出し', '生ハメ・生姦', 'バイブ', 'クンニ','ブルマー','制服', 'フェラ','チオ','3P', 'ストリーミング対応', '1080p', 'xxfps'];
					for (var tag of tags) {
						//console.log('tag', tag);
						if (item[3].indexOf(tag + '、') < 0)
							item[3] = item[3].replace(tag,tag + '、')
					}
					
					item[3] = item[3].replace(/\s/g, '');
					item[3] = item[3].replace('フェラ、チオ', 'フェラチオ');
					break;
				case '出演':
					var names = item[3].split(/[ \s\t,　\/／]/g);
					var allName = ''
					console.log('shutuen配信日', names)
					for (var name of names) {
						if (name != '')
							allName += name + '、';
					}
					item[3] = allName.slice(0, -1);
					break;
				default:
					break;
			}
			res += item[2] + '：' + item[3] + '\n';
		} else res += prof[i] + '\n';
	}
	$('#prof').val(res.slice(0, -1));
}


var divideCopy = async (ele) => {
	$('#divideCopy').empty();
	var num = $('#divideLength').val();
	var txts = $('#' + ele).val().split('<');
	console.log($('#' + ele).val().split('<'))
	var txt = txts[0];// + '>';
	for (var i = 1; i < txts.length; i++) {
		var txtLength = txt.length;
		var thislength = txts[i].length;
		console.log('txts[i]', i, txts[i], txt, txts)
		if (txt.length + txts[i].length < num) {
			if (txts[i] != '')
				txt += '<' + txts[i];
		} else {
			$('#divideCopy').append(
				'<div class="row form-group dividedText1"><button type="button" class="btn btn-outline-warning col-sm-1 m-0 p-0 divideButton" onclick="divideCopyButton(event)">コピー<i class="fa-solid fa-clone"></i></button><textarea class="col-sm-11 dark">' + txt + '</textarea></div>'
			);
			if (txts[i] != '')
				txt = '<' + txts[i];
		}
		console.log('txts[i]-2-=[', i, '],[', txts[i], '],[', txt, '],txts=', txts)
	}
	
	$('#divideCopy').append(
		'<div class="row form-group dividedText1"><button type="button" class="btn btn-outline-warning col-sm-1 m-0 p-0 divideButton" onclick="divideCopyButton(event)">コピー<i class="fa-solid fa-clone"></i></button><textarea class="col-sm-11 dark">' + txt + '</textarea></div>'
	);
	console.log(txt, txts)

	$('#divideCopyDialog').modal();

};


$('.divideButton').on('click', function (event) {
	console.log('wew',event)
	console.log($(event.target).next().val());
	let url = $(event.target).next().val();
})


var divideCopyButton = (event) => {
	console.log('wew2',event)
	console.log($(event.target).next().val());
  //var copyTarget = document.getElementById(ele);
  $(event.target).next().select();
  document.execCommand("Copy");
  aModal('コピーしました','分割コピー');
	let url = $(event.target).next().val();
}

var editorFull = (area) => {
	var txt = $('#' + area).val();
	console.log('txt=',txt)
	$('#' + area).addClass('mb-4 p-1');
	setTimeout(() => {
		$('#' + area).val(txt);
	}, 300);
};

var editorFullEnds = (area) => {
	var txt = $('#' + area).val();
	console.log('txt=',txt)
	$('#' + area).removeClass('mb-4 p-1');
	setTimeout(() => {
		$('#' + area).val(txt);
	}, 300);
}

var minnaProfile = (res, long) => {
	var txt = res.match(/<!-- Act-Profile([\s\S]+?)<!-- Act-Profile/);
	if (!txt) return (false);
	var tags = txt[1].match(/a href="actress_list.php\?tag.+?>.+?</g);
	var txt1 = txt[1].replace(/<a .*?>/g, '').replace(/<\/a>/g, '');
	
	var name = txt1.match(/<h2>([\s\S]+?)<\/h2>/);
	if (name) {
		var s = name[1].split(/ [\(（]/);// name (hhh / ooo)
		var ss = s[0].split(/[\(（]/);// name(ab)
		s[0] = '[' + ss[0] + '](GW)';//[name](GW)
		if (ss[1]) s[0] = s[0] + '（' + ss[1];//[nam,e](GW)(ab)
		if (s[1]) name[1] = s[0] + ' （' + s[1];
		res = name[1]/*.slice(4,-5)*/ + '\n\n';
	}

	var items = ['愛称','別名','生年月日', 'サイズ', '血液型', '出身地', '所属事務所', '趣味・特技', 'AV出演期間', 'デビュー作品', 'ブログ', '公式サイト'];
	for (var item of items) {
		console.log('minnnaProfile',item,long)
		res += multiName(txt1, item, long);
	}

	if (!tags) return (res);
	res += '（タグ ';
	for (var tag of tags) {
		var item = tag.match(/a href="actress_list.php\?tag.+?>(.+?)</);
		if (item) res += item[1] + '、';
	}
	res = res.slice(0, -1) + '）';
	return (res);
};

var multiName = (txt1, name, long) => {
	//	console.log(txt1,name,long)
	var reg = new RegExp('<span>' + name + '<\\/span><p>[\\s\\S]*?<\\/p>', 'g');
	var multis = txt1.match(reg);
	var ret = '';
	//console.log(reg,multis)
	if (multis) {
		//console.log(multis)
		for (var multi of multis) {
			var reg = new RegExp('<span>' + name + '<\\/span><p>([\\s\\S]*?)<\\/p>');
			var item = multi.match(reg);
			if (item) {
				if (name == '生年月日') {
					var b = strBirth($('#date').val(),item[1]);
					if (b) ret += b;
				} else if (item[1].match(/https?:\/\//))
					ret += '[' + item[1] + '](L)、';
				else if (item[1].length > 0) ret += item[1] + '、';
			}
			
		}
		if (ret.slice(-1) == '、')
			ret = ret.slice(0, -1)
		if ((ret.length > 0) || (long)) ret = name + ' ' + ret + '\n';
		if (long) { ret += '\n'; console.log('long!!!!',long,typeof(long))}
		else console.log('short !!!!!!!!!!!',long,typeof(long))
	} else console.log('error', long, typeof(long));
	console.log(name, ret, long,typeof(long))
	return (ret);
}


$('.trumbowyg-viewHTML-button').on('click', function (event) {
	alert(event.target)
	console.log('wew',event)
	console.log($(event.target).next().val());
	let url = $(event.target).next().val();
})


var focusEditor = (area) => {
	var txt = $('#' + area).val();
	console.log('txt=',txt)
	$('#' + area).addClass('p-1');
	setTimeout(() => {
		$('#' + area).val(txt);
	}, 300);
}
