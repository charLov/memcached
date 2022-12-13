$(async function () {
	$.trumbowyg.svgPath = 'images/org.svg';

	setAllEditors();
	$('body').css('cursor', 'wait');
	var test = await createJSTree();
//	setTimeout(() => {
		//$('#saveButton').attr('disabled', true);
		$('body').css('cursor', 'auto');

	//}, 5000);

	$('body, html').animate({ scrollTop: 0 }, 500);
})


$('.menu-toggle').click(function(e) {
  e.preventDefault();
	$("#wrapper").toggleClass("toggled");
	$(".search-item").toggleClass("toggled");
	$('.fa-arrow-right-from-bracket').toggleClass('hideIcon');
	$('.fa-arrow-right-to-bracket').toggleClass('hideIcon');
});

var setAllEditors = () => {
	setMyTrumbowyg('tree-feel', '#ff8');
	setMyTrumbowyg('tree-append','#f8f');
	setMyTrumbowyg('notice', '#8ff');
	
	setMyTrumbowyg('tree-img','#844');
	setMyTrumbowyg('tree-english', '#448');
	//setMyTrumbowyg('tree-append','#484');
	setMyTrumbowyg('tree-prof','#884');
	setMyTrumbowyg('tree-cmt', '#848');
	
	setMyTrumbowyg('notice','#ff8');

}


var setMyTrumbowyg = (area, color = '#cc6', target = null) => {
	//$('#' + area).toggleClass('trumbowyg-dark');
	var para = ' style="margin: 0px !important; padding: 0px !important;font-size:normal !important;"';

	/*var txt = $('#' + area).val();
	setTimeout(() => {
		$('#' + area).val(txt);
	}, 500);*/
	alert(area)
	
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
			emphasis: {
				fn: function () {
					var range = $('#' + area).trumbowyg('getRange');
					console.log(range);
				},
				title: '傍点',
				ico: 'p'
			},
			moreForm: {
				dropdown: ['blockquote','p',  'h5', 'h4', 'h3', 'h2', 'h1', 'h6'],
				title: 'フォーマット',
				ico: 'p'
			},
			myList: {
				dropdown: ['unorderedList', 'orderedList'],
				ico: 'my-list',
				title: 'リスト'
			},
			myFont: {
				dropdown: ['superscript','subscript'],
				title: 'フォント',
				ico: 'fonts',
			},
			para: {
				dropdown: ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
				title: '文字揃え',
				ico: 'text-paragraph',
			},
			personal: {
				dropdown: ['clear','myNote','myAdjust'],
				title: '独自関数',
				ico: 'person'
			},
			blockquote: {text: '<blockquote' + para + '>引用</blockquote', key: 'Q'},
			h5: { text: '<h5' + para + '>注釈<h5>',key: '5' },
			h4: { text: '<h4' + para + '>節 見出し</h4>',key: '4' },
			h3: { text: '<h3' + para + '>章 見出し</h3>' ,key: '3'},
			h2: { text: '<h2' + para + '>編 見出し</h2>' ,key: '2'},
			h1: { text: '<h1' + para + '>タイトル<h1>' ,key: '1'},
			underline: {
        key: 'U',
      },
			del: {
        key: 'S',
      },
			clear: {
					fn: function() {
							$('#' + area).val('');
							$('#' + area).trumbowyg('html','');
							
					},
					text: '内容を消去',
					title: '内容を消去',
					ico: 'clear'
			},
			myNote: {
				fn: function() {
					var txt = $('#' + area).trumbowyg('html');
					txt = txt.replace(/[\(（][fF][fF][\)）]/g,'<span style="color:red;"> (FF) </span>')
					txt = txt.replace(/[\(（][lL][fF][\)）]/g,'<span style="color:blue;"> (LF) </span>')
					$('#' + area).trumbowyg('html',addTag(txt));
				},
				text: 'ノートを着色',
				title: 'ノートを着色',
				ico: 'my-paint'
			},
			myAdjust: {
				fn: function() {
					var txt = $('#' + area).trumbowyg('html');
					txt = txt.replace(/[\(（][fF][fF][\)）]/g,'<span style="color:red;"> (FF) </span>')
					txt = txt.replace(/[\(（][lL][fF][\)）]/g, '<span style="color:blue;"> (LF) </span>')
					var quote = txt.match(/<blockquote>([^<]+?)<\/blockquote>/);
					while (quote) {
						txt = txt.replace(quote[0], '<blockquote><p>' + quote[1] + '</p></blockquote>');
						quote = txt.match(/<blockquote>([^<]+?)<\/blockquote>/);
					}
					txt = txt.replace(/<\/blockquote><blockquote>/g,'')
					$('#' + area).trumbowyg('html',addTag(txt));
					},
				text: '改ページ等整形',
				title: '改ページ等',
				ico: 'my-adjust'
			},
		},
		tagClasses: {
			h1: 'h1',
		},
		btns:
			[
				['viewHTML'],
				//['undo', 'redo'], // Only supported in Blink browsers
				['historyUndo', 'historyRedo'],
				['moreForm'],
				['strong', 'em', 'underline', 'del'],// 'emphasis'],
				['myFont'],
				['fontfamily'], ['fontsize'],
				//['superscript', 'subscript'],
				['link'],
				['insertImage'],
				['para','myList'],
				['foreColor', 'backColor'],['personal'],['note'],
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
		}
		
		/*btnsDef: {
			emphasis: {
				fn: function () {
					var range = $('#' + area).trumbowyg('getRange');
					console.log(range);
				},
				title: '傍点',
				ico: 'p'
			},
			moreForm: {
				dropdown: ['p', 'blockquote', 'h5', 'h4', 'h3', 'h2', 'h1', 'h6'],
				title: 'フォーマット',
				ico: 'p'
			},
			myList: {
				dropdown: ['unorderedList', 'orderedList'],
				ico: 'my-list',
				title: 'リスト'
			},
			myFont: {
				dropdown: ['fontfamily', 'fontsize','superscript','subscript'],
				title: 'フォント',
				ico: 'font',
			},
			para: {
				dropdown: ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
				title: '文字揃え',
				ico: 'text-paragraph',
			},
			personal: {
				dropdown: ['clear','myNote'],
				title: '独自関数',
				ico: 'person'
			},
			blockquote: {text: '<blockquote' + para + '>引用</blockquote', key: 'Q'},
			h5: { text: '<h5' + para + '>注釈<h5>',key: '5' },
			h4: { text: '<h4' + para + '>節 見出し</h4>',key: '4' },
			h3: { text: '<h3' + para + '>章 見出し</h3>' ,key: '3'},
			h2: { text: '<h2' + para + '>編 見出し</h2>' ,key: '2'},
			h1: { text: '<h1' + para + '>タイトル<h1>' ,key: '1'},
			underline: {
        key: 'U',
      },
			del: {
        key: 'S',
      },
			clear: {
					fn: function() {
							$('#' + area).val('');
							$('#' + area).trumbowyg('html','');
							
					},
					text: '内容を消去',
					title: '内容を消去',
					ico: 'clear'
			},
			myNote: {
					fn: function() {
							var txt = $('#' + area).trumbowyg('html');
							$('#' + area).trumbowyg('html',addMyTag(txt));
					},
					text: 'ノートを着色',
					title: 'ノートを着色',
					ico: 'my-note'
			},
		},
		tagClasses: {
			h1: 'h1',
		},
		btns:
			[
				['viewHTML'],
				//['undo', 'redo'], // Only supported in Blink browsers
				['historyUndo', 'historyRedo'],
				['moreForm'],
				['strong', 'em', 'underline', 'del'],// 'emphasis'],
				['myFont'],
				//['fontfamily'], ['fontsize'],
				//['superscript', 'subscript'],
				['link'],
				['insertImage'],
				['para','myList'],
				['foreColor', 'backColor'],['personal'],['note'],
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
		}
	})
		
	//　フーカスされたとき
	.on('tbwfocus',function(){
		//focusEditor(area);
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
		//if (area == 'code') return;
		//$('#changed').css('color', color);
		//var change = 't';
		//if (area) change = area//.substr(0, 1);
		//$('#changed').html('*' + area);
		//if (area.indexOf('tree-') == 0) {
		//	$('#saveButton').prop('disabled',false);
		//	$('#saveButton').removeAttr('aria-disabled',false);
		//}

	})
	//////// fullscreen //////////		
	.on('tbwopenfullscreen', function () {
	})

	.on('tbwclosefullscreen', function () {
	})

	.on('tbwclose', function () {
			//aModal('tbwclose', ele);
	*/})
		;
	
	//console.log('Trumbowyg init ',area)
	//$('#' + area).trumbowyg('toggle');
	
}


var csrWait = () => {
	//console.log('cursor ');
	var eles = ['i','body', 'input', 'textarea', 'a','label', 'div', 'button', 'span'];
	//csr = csr + ' !important';
	for (var ele of eles) {
		$(ele).addClass('wait');
		$(ele + ':hover').addClass('wait');
	}

	var ele3 = ['.wEditor','.btn'];
	for (var ele of ele3) {
	//	console.log('ele = ',ele)
		$(ele).addClass('wait');
		$(ele + ':hover').addClass('wait');
	}
}


var csrAuto = () => {
	console.log('cursor ');
	var eles = ['i','body', 'input', 'textarea', 'a','label', 'div', 'button', 'span'];
	//csr = csr + ' !important';
	for (var ele of eles) {
		$(ele).removeClass('wait');
		$(ele + ':hover').removeClass('wait');
	}

	var ele3 = ['.wEditor','.btn'];
	for (var ele of ele3) {
		console.log('ele = ',ele)
		$(ele).removeClass('wait');
		$(ele + ':hover').removeClass('wait');
	}
}


var setTreeTrumbowyg = (area, color = '#cc6', target = null) => {
	console.log('start dfaf ',area, color)
	$('.trEditor').addClass('trumbowyg-dark');

	$('#' + area).addClass('trumbowyg-dark');
	var para = ' style="margin: 0px !important; padding: 0px !important"';

	$('#' + area).trumbowyg({
		lang: 'ja',
		changeActiveDropdownIcon: true,
		imageWidthModalEdit: true,
		removeformatPasted: true,
		minimalLinks: true,
		defaultLinkTarget: '_blank',
		btnsDef: {
			moreForm: {
				dropdown: ['p', 'blockquote', 'h5', 'h4', 'h3', 'h2', 'h1', 'h6'],
				title: 'フォーマット',
				icon: 'p'
			},
			h5: { text: '<h5' + para + '>注釈<h5>' },
			h4: { text: '<h4' + para + '>節 見出し</h4>' },
			h3: { text: '<h3' + para + '>章 見出し</h3>' },
			h2: { text: '<h2' + para + '>編 見出し</h2>' },
			h1: { text: '<h1' + para + '>タイトル<h1>' },
        alert: {
            fn: function() {
                alert('some text')
            },
            ico: 'blockquote'
        },
		},

		tagClasses: {
			h1: 'h1',
		},

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
			},
		}

	})
		
	//　フーカスされたとき
	.on('tbwfocus',function(){
		$('.trumbowyg-box,.trumbowyg-editor').css('background-color', '#001800');
	})

	//　フォーカスを失ったとき
	.on('tbwblur', function(){
		$('.trumbowyg-box,.trumbowyg-editor').css('background-color', '#030');
	})

  //　変更されたとき
		.on('tbwchange', function () {
			console.log('changed')
			$('#saveButton').removeAttr('disabled');
	})
			
	.on('tbwopenfullscreen', function () {
	})

	.on('tbwclosefullscreen', function () {
	})
		
	.on('keyup', function () {
	//	$('#saveButton').toggleClass('disabled');
	//		alert('changed')
	})
		;
	
	$('#' + area).trumbowyg('toggle');

	console.log('end',area,color)

}

/////////////////////////////////////////////
//        CREATE TREE                      //
/////////////////////////////////////////////

var refreshTree = () => {
	$('#jstree1').jstree('destroy');
	createJSTree();
	$('.menu-toggle').click();
}

var createJSTree = async (jsondata) => {
	csrWait();
	if (!jsondata || (jsondata == ''))
		jsondata = await getFileList('data/');
	console.log(jsondata)
	if (!jsondata || (jsondata == '')) {
		var root = 'root node name';
		jsondata = [
			{'text':root, 'id':'root','type':'root','icon':'fa-solid fa-house-chimney', "children": [
					{"id": "ajson1", "icon": "jstree-folder", "text": "Simple root node", "children": []},
					{"id": "ajson2", "icon": "jstree-folder", "text": "Root node 2", "children": [
							{"id": "ajson3", "icon": "jstree-file", "text": "Child 1", "children": []},
							{"id": "ajson4", "icon": "jstree-file", "text": "Child 2", "children": []}
					]}
			]}
		];
	};

	$('#jstree1').jstree({
		callback : {
			onsearch : function (n,t) {
				t.container.find('.search').removeClass('search');
				n.addClass('search');
			}
		},

		'core': {
		
		//			"animation" : 0,
		'check_callback' : function(o, n, p, i, m) {
			if(m && m.dnd && m.pos !== 'i') { return false; }
			if(o === "move_node" || o === "copy_node") {
				if(this.get_node(n).parent === this.get_node(p).id) { return false; }
			}
			return true;
		},
		'themes' : {
			'responsive' : true,
			//'variant' : 'large',
			'stripes' : true
		},
			'data': jsondata
		//				{
		//				'file' : jsondata,
		//				'dataType' : 'json',
		//				'data' : function(node) {
		//						return {'id': node.id };
		//				}
		//{
		//	'text': 'ルート', 'id': 'root', 'parent': '#', 'type': 'root', 'icon': 'fa-solid fa-house-chimney',
		//'data' : function (node) {
		//	return { 'id' : node.id };
		//}
		//			}
		},
		

	//'sort' : function(a, b) {
	//	return this.get_type(a) === this.get_type(b) ? (this.get_text(a) > this.get_text(b) ? 1 : -1) : (this.get_type(a) >= this.get_type(b) ? 1 : -1);
	//},

	'types' : {
		'default' : { 'icon' : 'folder' },
		'file' : { 'valid_children' : [], 'icon' : 'file' }
	},
	'unique' : {
		'duplicate' : function (name, counter) {
			return name + ' ' + counter;
		}
	},
	"checkbox" : {
		"keep_selected_style" : false
	},
	"plugins" : [
		"contextmenu", "dnd", "search",
		"state", "types", "wholerow"
	],
	"contextmenu":{
		"items":function($node){
			return {
				"createFolder":{
					"separator_before": false,
					"separator_after": false,
					"label": "新規フォルダ作成",
					"_disabled": function(data){
							return $.jstree.reference(data.reference)
							.get_node(data.reference).icon == "jstree-file";
					},
					"action": function(data){
						var inst = $.jstree.reference(data.reference),
						obj = inst.get_node(data.reference);
						inst.create_node(obj, { text:'New Folder', 'icon':'jstree-folder' }
						, "last", function(new_node){
							try{
								inst.edit(new_node);
							}catch(ex){
								setTimeout(function(){ inst.edit(new_node); },0);
							}
						});
					}
				},
				"createFile":{
					"separator_before": false,
					"separator_after": false,
					"label": "新規ファイル作成",
					"_disabled": function(data){
						return $.jstree.reference(data.reference)
							.get_node(data.reference).icon == "jstree-file";
					},
					"action": function(data){
						var inst = $.jstree.reference(data.reference), 
									obj = inst.get_node(data.reference);
						inst.create_node(obj, { text:'New File', 'icon':'jstree-file' }
														, "last", function(new_node){
							try{
									inst.edit(new_node);
							}catch(ex){
									setTimeout(function(){ inst.edit(new_node); },0);
							}
						});
					}
				},
				"rename":{
					"separator_before": true,
					"separator_after": false,
					"label": "名称の変更",
					"_disabled": false,
					"_disabled": function (data) {
						return $.jstree.reference(data.reference)
							.get_node(data.reference).icon == "fa-solid fa-house-chimney";
					},

					"action": function(data){
							var inst = $.jstree.reference(data.reference),
										obj = inst.get_node(data.reference);
						inst.edit(obj);
						confirm('sss ', data);
						console.log(data,data.reference,data.reference[0].id)
					}
				},
				"remove":{
					"separator_before": false,
					"separator_after": false,
					"label": "削除",
					"_disabled": function(data){
							return $.jstree.reference(data.reference)
							.get_node(data.reference).parent == "#";
					},
					"action": function(data){
							var inst = $.jstree.reference(data.reference),
													obj = inst.get_node(data.reference);
							if (inst.is_selected(obj)){
								inst.delete_node(inst.get_selected());
							}else{
								inst.delete_node(obj);
							}
					}
				},
				"zip":{
					"separator_before": false,
					"separator_after": false,
					"label": "圧縮",
					"_disabled": function(data){
							return $.jstree.reference(data.reference)
							.get_node(data.reference).parent == "#";
					},
					"action": async function(data){
							var inst = $.jstree.reference(data.reference),obj = inst.get_node(data.reference);
							if (inst.is_selected(obj)){
								var fileName = obj.id
								var dir = fileName.replace(fileName.match(/.*\/([^\/]+)/)[1], 'itemFiles.zip');
								console.log('dir,fileName  ===> ', dir, fileName);
								var res = await myPromisePHP(fileName, 'zip', dir);
								await myAlert(res);
							}else{
								console.log(obj);
							}
						}
					},
				};
			}
		},

	})
	.on('changed.jstree', function (e, data) {
		var i, j, r = [];
		//console.log('e===>',e,'data===>',data,data.instance.get_node(data.selected[0]).text)
		for(i = 0, j = data.selected.length; i < j; i++) {
			r.push(data.instance.get_node(data.selected[i]).text);
			r.push(data.instance.get_node(data.selected[i]).id);
			r.push(data.instance.get_node(data.selected[i]).icon);
		}
		//$('#event_result').html('rename_node.jstree: ' + r.join(', '));
		$('#notice').val($('#notice').val() + '\nChange tree: ' + r.join(', '));
		$('#notice')[0].focus();

	})
	
	.on('select_node.jstree', function (e, data) {
		//console.log('hhhhh',data.instance.get_node(data.selected[0]).text)
		var i, j, r = [];
		for(i = 0, j = data.selected.length; i < j; i++) {
			r.push(data.instance.get_node(data.selected[i]).text);
			r.push(data.instance.get_node(data.selected[i]).id);
			r.push(data.instance.get_node(data.selected[i]).icon);
			console.log(i,'=','selected icon =>',data.instance.get_node(data.selected[i]).icon)
		}
		$('#notice').val($('#notice').val() + '\nSelected: ' + r.join(', '));
		//$('#notice')[0].focus();
			console.log('selected icon =>',data.instance.get_node(data.selected[0]).icon)
		if (data.instance.get_node(data.selected[0]).icon == 'jstree-file') {
			var fileName = data.instance.get_node(data.selected[0]).id;
			$('#treeFileName').val(fileName);
			treeReadFile(fileName);
		}
	})
	
	.on('rename_node.jstree', function (e, data) {
		console.log('rrrrrr','id====>',data.node.id,'data=======>',data.node.text,data.node.icon,'  eee===>',e)
		$('#notice').val($('#notice').val() + '\nRename: ' + '    id====>' + data.node.id + '    data===>' + data.node.text + ' rename icon ===>', data.node.icon);
		$('#notice')[0].focus();
		if (data.node.id == 'root') {
			//$('#jstree1').jstree().rename_node(data.node, 'Wahaha');
			return;
		}
		if (data.node.icon == 'file')
			$('#tree-title').val(data.node.text)
	//$('#event_result3').html('Rename: ' + '    id====>'+data.node.id+'    data=======>'+data.node.text);
	})
	
	.on('show_contextmenu.jstree', function (e, data) {
		return;
	})
	
	.on('delete_node.jstree', function (e, data) {
		console.log('Delete node', data.node);
		if (confirm(data.node.id + 'を削除しますか')) {
			//myPromisePHP(data.node.id, 'delete');
		} else createJSTree();
	})

	.on('move_node.jstree', function (e, data) {
		console.log('move_node.jstree', data.node);
		console.log('parent',data.parent)
	
	})
	
	.on('create_node.jstree', function (e, data) {
		console.log('Create node','id====>',data.node.id,'data===>',data.node.text,data.node.icon)
		$('#notice').val($('#notice').val() + '\nCreate node: ' + '    id====>' + data.node.id + '    data===>' + data.node.text + ' create icon ===>', data.node.icon);
		$('#notice')[0].focus();
		if (data.node.icon == 'file')
			$('#tree-title').val(data.node.text)
	//$('#event_result3').html('Rename: ' + '    id====>'+data.node.id+'    data=======>'+data.node.text);
	})
		;
	
	$('body, html').animate({ scrollTop: 0 }, 500);
	$('#saveButton').attr('disabled', true);

	csrAuto();
}


var getFileList = async (root) => {
	var jsonChildArray = [];
	//var jsonChild = [{id: "ajson1", icon: "jstree-folder", text: "Simple root node", children:[]}]
	var jsonRoot = { text: root, id: 'root', type: 'root', icon: 'fa-solid fa-house-chimney' };
	jsonRoot.children = await getFileListPHP(root);
	return ([jsonRoot]);
}

var getFileListPHP = async (root) => {
	var jsonChildArray = [];

	var res = await myPromisePHP(root, 'tree');
	var files = res.split('<!--end of Head -->')[1];

	for (var file of files.split('\n')) {
		var items = file.split('\t');
		if (items.length < 3) continue;
		//console.log('type of node date =>',typeof(items[2]),items[2])
		
		var name = items[0].split(root)[1].split('.txt')[0] + ' (Dir)';
		var fileJson = {};
		if (items[3] == 'file') {
			name = items[0].split(root)[1].split('.txt')[0] + ' ' + (new Date(parseInt(items[2] + "000")).toLocaleString('ja')) + ' ' + new Intl.NumberFormat('ja-JP').format(items[1]) + 'byte';
			fileJson = { text: name,"a_attr": {href:'http://example1.com', title:name}, icon:'jstree-file', id: items[0], type: items[3], children: [] };
			fileJson.children = [];
		} else {
			var children = await getFileListPHP(items[0] + '/');
			fileJson = { text: name,"a_attr": {href:'http://example1.com', title:name}, icon: 'jstree-folder', id: items[0], type: items[3], children: children };
		}
		jsonChildArray.push(fileJson);

	}

	return (jsonChildArray);
}

////// delete this function if merge to codeMaker
var myPromisePHP = (filename, mode = 'list', dir = 'data/', count = 20) => {
	console.log('fileneme mode dir count',filename,mode,dir,count)
  return new Promise((resolve,reject) => {
    var res = '';
    var xmlhttp = new XMLHttpRequest();
		var url = "saveTemp.php"
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4) {
        if (xmlhttp.status == 200) {
					console.log('readyState satatus',
						xmlhttp.readyState, xmlhttp.status);
          res = xmlhttp.responseText;
          resolve(res);
        }
      }
    }
    xmlhttp.onerror = function() {
      alert('error Scrape','myPromisePHP');
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
		console.log('test sendData', sendData,'post',encodeURIComponent(url));

    xmlhttp.open('post',encodeURIComponent(url),true);
    xmlhttp.send(sendData);
  })
}


var treeReadFile = async (fileName,page = 0) => {
	treeClearAll();
	var res = await myPromisePHP(fileName, 'read');
	var txts = res.split('<!-- data end -->');
	console.log('texts.length => ', txts.length);
	if (page == 0) {
		$('#treeAfter').attr('disabled', true);
	} else $('#treeAfter').removeAttr('disabled');
	if (txts[page + 1] && (txts[page + 1].indexOf('!-- title -->') > 0)) {
		$('#treeBefore').removeAttr('disabled');
	} else $('#treeBefore').attr('disabled', true);
	var txt = txts[page].split('\t');
	for (var line of txt) {
		//console.log('line of txt',line.length)
		var el = line.match(/<!-- (.+?) -->([\S\s]*)/);
		if (el) {
			var tree = el[1].match(/data start ([\s\S]+?) ver.+?/);
			if (tree) $('#tree-fileDate').val(tree[1]);
			//console.log('contents ', el[1]);
			$('#tree-' + el[1]).trumbowyg('html',el[2]);
			$('#tree-' + el[1]).val(el[2]);
			// read txt and put to condeMaker
			//$('#' + el[1]).trumbowyg('html',el[2]);
			//$('#' + el[1]).val(el[2]);
		}
	}
	$('#treePage').val(page + 1);
	//const scrollTarget = $('#tabE')[0].attributes[1].nodeValue;
	//const offsetTop = $('#tabE').offset().top - 100;
	//$('html,body').animate({ scrollTop: offsetTop }, 400);
}

var treeClearAll = () => {
  $('#tree-title').val('');
  $('#tree-date').val('');
  $('#tree-p-id').val('');
  $('#tree-p-no').val('');
  $('#tree-img').val('');
  $('#tree-append').val('');
  $('#tree-feel').val('');
  $('#tree-prof').val('');
  $('#tree-cmt').val('');
  $('#tree-url').val('');
  $('#tree-english').val('');
  $('#tree-imgURL').val('');

	$('#tree-feel').trumbowyg('html', '');
	$('#tree-append').trumbowyg('html', '');

	$('#selectProcess').val('');
}

$('#editOnMakeCode').on('click', () => {
	$('#title').val($('#tree-title').val());
	$('#date').val($('#tree-date').val());
	$('#p-id').val($('#tree-p-id').val());
  $('#p-no').val($('#tree-p-no').val());
  $('#img').val($('#tree-img').val());
	$('#append').val($('#tree-append').val());
	$('#feel').val($('#tree-feel').val());
	$('#prof').val($('#tree-prof').val());
	$('#cmt').val($('#tree-cmt').val());
	$('#url').val($('#tree-url').val());
  $('#english').val($('#tree-english').val());
	$('#imgURL').val($('#tree-imgURL').val());

	$('#feel').trumbowyg('html', $('#tree-feel').trumbowyg('html'));
	$('#append').trumbowyg('html', $('#tree-append').trumbowyg('html'));
	
	//goToMain();
})

$('#saveButton').on('click', function () {
	console.log('click save button')
	saveOnClickTree('append');
	$('#saveButton').attr('disabled',true);
})

$('.tree .dropdown-item').click(function(){
	var item = $(this).html();
	console.log(item)
	$('#selectProcess').val(item);
	$('#saveButton').removeAttr('disabled');
});

$('#treeAfter').on('click', () => {
	var page = parseInt($('#treePage').val()) - 1;
	console.log('page => ', page);
	if (page <= 0) return;
	var fileName = $('#treeFileName').val();
	treeReadFile(fileName, page - 1);
})

$('#treeBefore').on('click', () => {
	var page = parseInt($('#treePage').val()) - 1;
	var fileName = $('#treeFileName').val();
	console.log('page => ', page);
	treeReadFile(fileName, page + 1);
})

var saveOnClickTree = async (mode = 'append',numStr = '20') => {
  var fileName = $('#tree-title').val().substr(0,32) + '.txt';
  fileName = fileName.replace(/ |\//g,'_');
  if (fileName == '.txt') fileName = 'untitled.txt';

	var num = parseInt(numStr);
	if (isNaN(num)) {
		fileName = 'tmp_' + fileName;
		num = 999;
		if (numStr != 'temp') await myAlert('readWriteFileTree not temp num=' + numStr + '\n\nfilename =' + fileName);
	}

  console.log(fileName);
  var ver = ('000' + num).slice(-3);
  readWriteFileTree('data/' + fileName.trim(),allToTextTree(ver),mode,num);
}

var readWriteFileTree = async (fileName, txt, mode = 'write', num = 1) => {
	if (mode == 'append') {
		var byte = await myPromisePHP(fileName, 'filesize');
		var myByte = byte.match(/int\((\d*)/);
		if (myByte) {
			var filesize = parseInt(myByte[1]);
			if (filesize > 7 * 1024 * 1024) {
				if (await myConfirm('ファイルサイズが7MByteを越えました。\n\nfilesiza=' + filesize + 'bytes','上書き保存しますか？','上書き保存','追加保存'))
					mode = 'overwrite';
			}
		}
		var ver = byte.match(/ver.(\d\d\d)/);
		if (ver) num = parseInt(ver[1]);
		if (isNaN(num)) num = 1;
		else num = num + 1;
	}
	var res = await myPromisePHP(fileName, mode, txt, num);
	if (res) {
		var date = new Date();
		var time = ('0' + date.getHours()).slice(-2)
			+ ':' + ('0' + date.getMinutes()).slice(-2)
			+ ':' + ('0' + date.getSeconds()).slice(-2);
		console.log('post success', res);
		var resByteStr = res.match(/write append (\d+?)byte/);
		if (resByteStr) {
			var resBytes = parseInt(resByteStr[1]);
			if (resBytes && resBytes > 0) time = time + ' ' + resBytes + 'byte'; 
		} else if (resByteStr = res.match(/overwrite (\d+?)byte/)) {
			time += ' ' + parseInt(resByteStr[1]) + 'byte';
		} else alert('write file errore !!');

		//fetchTempFile(fileName,num);
		if (num == 999) aModal('仮保存しました',time);
		else if (mode == 'overwrite') aModal('上書き保存しました',time);
		else if (mode == 'append') aModal('追加保存しました', time);
		else if (mode == 'move') aModal('移動', res.match(/(移動.+?)\n/)[1]);
		else if (mode == 'delete') aModal('削除', res.match(/(削除.+?)\n/)[1]);
		else aModal('保存しました:' + mode,time);
		$('#changed').html('');
	} else {
		console.log('post failture',xmlhttp.responseText);
		alert('Post failture');
	}
}


var allToTextTree = (ver = 999) => {
    var date = new Date();
    var fileDate = date.getFullYear()
    + '_' + ('0' + (date.getMonth() + 1)).slice(-2)
    + '_' + ('0' + date.getDate()).slice(-2)
    + ' ' + ('0' + date.getHours()).slice(-2)
    + ':' + ('0' + date.getMinutes()).slice(-2)
    + ':' + ('0' + date.getSeconds()).slice(-2) ;

	var txt ='<!-- data start ' + fileDate + ' ver.' + ver+ ' -->\t'
	txt += '<!-- title -->' + $('#tree-title').val() + '\t';
  txt += '<!-- date -->' + $('#tree-date').val() + '\t';
  txt += '<!-- p-no -->' + $('#tree-p-no').val() + '\t';
  txt += '<!-- p-id -->' + $('#tree-p-id').val() + '\t';
  txt += '<!-- img -->' + $('#tree-img').val() + '\t';
  txt += '<!-- feel -->' + $('#tree-feel').val() + '\t';
  txt += '<!-- english -->' + $('#tree-english').val() + '\t';
  txt += '<!-- prof -->' + $('#tree-prof').val() + '\t';
  txt += '<!-- cmt -->' + $('#tree-cmt').val() + '\t';
  txt += '<!-- append -->' + $('#tree-append').val() + '\t';
  txt += '<!-- url -->' + $('#tree-url').val() + '\t';
  txt += '<!-- imgURL -->' + $('#tree-imgURL').val() + '\t';
  txt += '<!-- ofile -->' + $('#tree-ofile').val() + '\t';
	txt += '<!-- n -->' + $('#tree-n').val() + '\t';

	txt += '<!-- selectProcess -->' + $('#selectProcess').val() + '\t';	
	txt += '<!-- data end -->\n\n';

  return (txt);
}


var myAlert = (() => {
	let alt = null, p = null;
	window.addEventListener("DOMContentLoaded", () => {
		if (alt !== null) return;

		alt = document.getElementById("alert");
		p = alt.querySelector("textarea");
		btn_ok = alt.querySelector("#alert-ok");
	});

	return (text,title = '',ok = '確認') => {
		$('#alertTextA').html(title);
		$('#alert-ok').html(ok);
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

var addMyTag = (txt) => {
  console.log('addMyTag');
  var texts = txt.match(/<[pP]>[\s\S]*?<\/[pP]>/g);
  //var texts = txt.split(/<\/[pPhH]\d*?>/g);
	if (!texts) return(txt);
	console.log('texts => ',texts)
  for (var line of texts) {
    //var scr = line.match(/^<p>[\s\S]*?[\(（「]/);
    //if (!scr) continue;
    console.log(line.slice(3,-4));
    var quote = line.slice(3,-4).split(/__|＿＿/g);
		console.log('quote => ',quote)
		if (quote[0]) {
			var q = quote[0].match(/<span class="quote">([\s\S]*?)<\/span>/);
			if (q) console.log('q = ',q) 
			 //quote[0] = quote[0].replace(q[0], q[1]); 
			console.log('quote[0]',quote[0]);
      if (!q) txt = txt.replace(quote[0],'<span class="quote">' + quote[0] + '</span>');
    }
    if (quote[1]) {
			var q = quote[1].match(/<span class="note">([\s\S]*?)<\/span>/);
			if (q) console.log('q = ',q) 
			 //quote[1] = quote[1].replace(q[0], q[1]);
			console.log('quote[1]',quote[1]);
      if (!q) txt = txt.replace(quote[1],'<span class="note">' + quote[1] + '</span>');
    }
  }
  return txt;
}

