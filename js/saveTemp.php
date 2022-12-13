<?php
//require_once("./phpQuery-onefile.php");
require_once "simple_html_dom.php";

ini_set('display_errors', 1);

//echo 'Current script owner: ' . get_current_user().'<br>\n';
$filename = $_POST['fileName'];
$mode = $_POST['mode'];
//$dir = $_POST["dir"];
if ($filename == ''){
	phpinfo();
	$filename = "data/";
	$mode = 'tree';
	echo $filename.$mode;
}
	echo '--'.$filename.$mode;



if (strpos($filename,"mgstage") !== false){ // set Adult Cookie
//	echo '<br>cookie before coc adc='.$_COOKIE["adc"]."<br>";
	setcookie("adc","1",time()+60*60*24*7,"/","mgstage.com");
	setcookie("coc","1",time()+60*60*24*7,"/","mgstage.com");
	setcookie("mgs_agef","1",time()+60*60*24*7,"/","mgstage.com");
	echo '<br>cookie mgs mgs_agef='.$_COOKIE["adc"]."<br>";
}

if (strpos($filename,"suruga") !== false){ // set Adult Cookie
	echo '<br>cookie before adult='.$_COOKIE["adult"]."<br>";
	setcookie("adult","1",time()+60*60*24*7,"/");
	echo '<br>cookie adult surugaya='.$_COOKIE["adult"]."<br>";
}

if (strpos($filename,"girls") !== false){ // set Adult Cookie
	echo '<br>cookie before adult='.$_COOKIE["age_gate"]."<br>";
	setcookie("age_gate:","18",time()+60*60*24*7,"/");
	echo '<br>cookie adult girl='.$_COOKIE["aage_gate"]."<br>";
}

if (strpos($filename,"gekiyasu") !== false){ // set Adult Cookie
	echo '<br>cookie before gekiyasu='.$_COOKIE["__utmt"]."<br>";
	setcookie("__utmt","1",time()+60*60*24*7,"/","gekiyasu-dvdshop.jp");
	echo '<br>cookie gekiyasu='.$_COOKIE["__utmt"]."<br>";
}
// 論理値 = setcookie(name [, value [, expire [, path [, domain [, secure [, httponly]]]]]]);

echo ("\n<br><font size='6'>PHP saveTemp ver.1.1.1 2022/07/31</font><br>\n");
echo "filename = ".$filename."<br>\n";
echo 'REQUEST mode = '.$mode.'<br>\n';


if (strpos($filename,"dmm") !== false){ // set Adult Cookie
	echo '<br>dmm cookie before adult='.$_COOKIE["adult"]."<br>";
	setcookie("age_check_done","1",time()+60*60*24*7,"/");
	setcookie("ckcy","1",time()+60*60*24*7,"/");
	setcookie("_dc_gtm_UA-48257133-2","1",time()+60*60*24*7,"/");
	echo '<br>age age_check_done='.$_COOKIE["age_check_done"]."<br>";
	echo '<br>cookie after ckcy='.$_COOKIE["ckcy"]."<br>";
	echo '<br>cookie _dc_gtm_UA-48257133-2='.$_COOKIE["_dc_gtm_UA-48257133-2"]."<br>";
}
// タイムゾーンを設定
date_default_timezone_set('Asia/Tokyo');

//////////////////
////// MAIN //////
//////////////////

if ($mode === "changeMod") {
	$dir = $_POST["dir"];
	var_dump(chmod($filename,$dir));
}

if ($mode === "imageInfo") {
	$image_size = getimagesize($filename);
	var_dump($image_size);
}


if ($mode === "filesize") {
	$filesize = filesize($filename);
	var_dump($filesize);
	$txt = file_get_contents($filename);
	echo mb_substr($txt, 0, 60);
}

if ($mode === "isfile") {//更新日時、ファイルサイズも返す
	if (file_exists($filename)) {
		echo 'filesize='.filesize($filename).'byte<br>\n<time>';
		echo date( "Y-m-d H:i:s", filemtime($filename))."<time>\n";
		echo $filename."が存在します";
	} else {
		echo $filename."は存在しません";
	}
}


if ($mode === "thumbnail") {//更新日時、ファイルサイズも返す
	if (file_exists($filename)) {
		echo "\n".$filename."が存在します\n";
		echo 'filesize='.filesize($filename).'byte<br>\n<time>';
		echo date( "Y-m-d H:i:s", filemtime($filename))."<time>\n";
		$txt = file_get_contents($filename);
		$pos = strpos($txt, "<!-- p-id -->");
		if ($pos) $txt = substr($txt, 0,$pos);
		echo $txt;
	} else {
		echo $filename."は存在しません";
	}
}


/////////////////////////////
//           Write         //
/////////////////////////////

if($mode === "overwrite"){
	$filename = normalizer_normalize( $filename, Normalizer::FORM_C );
	echo "filename=$filename"."<br><h3>mode overwrite</h3> <br>\n";
	$txt = $_POST["text"];
	//$count = $_POST["count"];
	//	$num = 1;
	
	$writeByte = file_put_contents($filename ,$txt);
	if ($writeByte > 0) {
		echo 'overwrite '.$writeByte.'byte'.'<br>\n';// , FILE_APPEND);
		var_dump(chmod($filename,0666));
	} else {
		var_dump($writeByte);
		echo 'ssss write file error. overwrite'.'<br>\n';
	}
}


if($mode === "append"){
	//$dir = $_POST["dir"];
	$filename = normalizer_normalize( $filename, Normalizer::FORM_C );
	echo "filename=$filename"."<br><h3>mode write append</h3> <br>\n";
	$txt = $_POST["text"];
	//$count = $_POST["count"]; // count is for future function
	//$num = 1;
	if (is_file($filename)) {
		$data = file_get_contents($filename);
		$txt = $txt.'\n\n'.$data;
		echo 'file exits. append'.'<br>\n';
	}

	$writeByte = file_put_contents($filename ,$txt);
	if ($writeByte > 0) {
		echo 'write append '.$writeByte.'byte'.'<br>\n';// , FILE_APPEND);
		var_dump(chmod($filename,0666));
	} else {
		var_dump($writeByte);
		echo 'write file error. append'.'<br>\n';
	}
	if (file_exists("tmp_".$filename)) {
		if (unlink("tmp_".$filename)) {
			// 移動が成功したら表示される
			echo "tmp_".$filename.' 削除しました。\n';
		} else {
			// 移動に失敗したら表示される
		echo "tmp_".$filename.' 削除できない！\n';
		}
  } else {
  echo "tmp_$filename は存在しません";
  }

}


if($mode === "write"){
	$dir = $_POST["dir"];
	echo "<br><h1>mode write</h1> <br>\n";
	$txt = $_POST["text"];
	$count = $_POST["count"]; // count is for over write times every 20 times
//	$num = 1;
	if(is_file($filename) && ($count % 20 > 0)){
		$data = file_get_contents($filename);
		$txt = $txt.'\n\n'.$data;
		echo 'file exits. append'.'<br>\n';
	}

	$writeByte = file_put_contents($filename ,$txt);
	if ($writeByte > 0) {
		echo 'write '.$writeByte.'byte'.'<br>\n';// , FILE_APPEND);
		var_dump(chmod($filename,0666));
	} else {
		echo 'write file error. write'.'<br>\n';
	}
	if (file_exists("tmp_".$filename)) {
		if (unlink("tmp_".$filename)) {
			// 移動が成功したら表示される
			echo "tmp_".$filename.' 削除しました。 '.$dir."\n";
		} else {
			// 移動に失敗したら表示される
		echo "tmp_".$filename.' 削除できない！ '.$dir."\n";
		}
  } else {
  echo "tmp".$filename." は存在しません";
  }

}


else if($mode === "list"){
	//$dir = $_POST["dir"];
	echo $filename;
	$dir = $filename;
	echo($filename . '*'."<br>\n\t dd　ファイル名<!--end of Head -->");
	$filelist = glob($dir . '*');
	//	echo $dir;
	echo 'filelist of '.$filelist.'ファイル名一覧\n';
	foreach ($filelist as $file) {
		//if (is_file($file)) {
		print($file."\n");
	//		echo nl2br("\n");

	}
}


else if ($mode === "tree") {
	echo($filename . '*'."<br>\n\t dd　ファイル名<!--end of Head -->");
	foreach (glob($filename."*") as $file) {
    echo $file."\t".filesize($file)."\t".filemtime($file)."\t".filetype($file)."\n";
	}
}


else if($mode === "move"){
	$dir = $_POST["dir"];
	echo "filename = ".$filename;
	echo "dir = ".$dir;
	if (rename($filename, $dir)) {
	  // 移動が成功したら表示される
		echo $filename.' 移動しました。 '.$dir."\n";
	} else {
	  // 移動に失敗したら表示される
		echo $filename.' 移動できない！ '.$dir."\n";
	}
}


else if($mode === "delete"){
	$dir = $_POST["dir"];
	if (unlink($filename)) {
	  // 移動が成功したら表示される
		echo $filename.' 削除しました。 '.$dir."\n";
	} else {
	  // 移動に失敗したら表示される
  echo $filename.' 削除できない！ '.$dir."\n";
	}
}


else if($mode === "zip"){
	$dir = $_POST["dir"];
	echo('dir = '.$dir.' file = '.$filename);
	$zip = new ZipArchive;
	if ($zip->open($dir, ZipArchive::CREATE)) {//|ZipArchive::OVERWRITE));
		echo 'open 成功';
		if ($zip->addFile($filename)) {
			echo 'add 成功';
		} else echo 'add 失敗';
	} else echo 'open 失敗';
	if ($zip->close()) {
		echo 'close 成功';
	} else echo 'close 失敗';
}

////////////// READ ////////////////
else if($mode === "read"){
	$txt = file_get_contents($filename);
//	echo $txt;
	$pos = strpos($txt, "<!-- data end -->");
//	if ($pos) $txt = substr($txt, 0,$pos);
	if ($txt == false) {
		echo "error try as normalize filename $filename as ".normalizer_normalize( $filename, Normalizer::FORM_C );
		$txt = file_get_contents(normalizer_normalize( $filename, Normalizer::FORM_C ));
	}
	if ($txt == false) echo 'read 読み込みに失敗しました';
	else echo 'read 読み込みに成功しました\n<br>'.$txt;
}


else if($mode === "scrape"){
	$tag = $_POST['tag'];
	if ($tag === '') $tag = 'html';
	$dom = new simple_html_dom();
	$dom->load_file($filename);
	$dom = file_get_html($filename);
	echo 'tag ',$tag,' dom ',$dom;
//	echo $dom->find($tag, 0);
//	$html = str_get_html( $htmlSrc );
echo '<br>cookie after adc='.$_COOKIE["adc"]."<br>";

//	echo ($dom->find($tag,0)->outertext);

}

else if($mode === "readUrl_1"){
	$data = file_get_contents($filename);
	$html_sourcecode_get = htmlentities($data);
	echo '<br>read url No.1=';
	echo $html_sourcecode_get;
	echo '<br><br>\n';

}


else if($mode === "readUrl_2"){
	echo '<br>read url No.2=';
	$data = file_get_contents($filename);
	echo htmlspecialchars($data);
	echo '<br><br>\n';
}


else if($mode === "readUrl_3"){
	$ch = curl_init($filename);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	//curl_setopt($ch, CURLOPT_BINARYTRANSFER, true);
	$newquery = curl_exec($ch);
	echo '<br>read url No.3=';
	echo $newquery_get = htmlentities($newquery);
	echo '<br><br>\n';
}


else if($mode === "title"){
	header("Content-Type: text/html; charset=UTF-8");
	$url = $filename;
	$data = @file_get_contents($url);
	$pat='/<title>(.*?)<\/title>/is';
	preg_match($pat,$data,$mat);
	$title = $mat[1];
	echo "<start>".$title."<end>";
}


else if($mode === "check"){
	$headers = @get_headers( $filename );
	
	if( preg_match( '/[2][0-9][0-9]|[3][0-9][0-9]/', $headers[0] ) ){
		echo 'URLは存在します';
	}else{
		echo 'URLは存在しません！';
	}
}


else if($mode === "listTest"){
	echo ("\n\t");
	$dir = "data/";
	$filelist = glob($dir . '*');
	//	echo $dir;

	foreach ($filelist as $file) {
		//if (is_file($file)) {
		echo ($file . "\n");
		//		echo nl2br("\n");

	}
}


else if($mode === "image"){
	// ファイルのパス
	//$filename = 'bigimg.jpg';
	// リネーム後のファイル名
	$localfile = 'saveFile.jpg';
	// ファイルタイプを指定
	header('Content-Type: application/force-download');
	// ファイルサイズを取得し、ダウンロードの進捗を表示
	header('Content-Length: '.filesize($filename));
	// ファイルのダウンロード、リネームを指示
	header('Content-Disposition: attachment; filename="'.$localfile.'"');
	// ファイルを読み込みダウンロードを実行
	readfile($filename);
}

else if($mode === "amazon"){
	$access_key_id = "AKIAICOYT7A635VOGWPA";
	$secret_key = "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";
	$endpoint = "webservices.amazon.co.jp";
	$uri = "/onca/xml";
	$keyword = $_POST["keyword"]; 
	$params = array(
			"Service" => "AWSECommerceService",
			"Operation" => "ItemSearch",
			"AWSAccessKeyId" => $access_key_id,
			"AssociateTag" => "charmedias-22",
			"SearchIndex" => "All", //商品カテゴリー
			"Keywords" => $keyword, //先ほど指定したキーワード
			"ResponseGroup" => "Images,ItemAttributes,Offers" //取得するデータ
	);
	
	if (!isset($params["Timestamp"])) {
			$params["Timestamp"] = gmdate('Y-m-d\TH:i:s\Z');
	}
	ksort($params);
	$pairs = array();
	foreach ($params as $key => $value) {
			array_push($pairs, rawurlencode($key)."=".rawurlencode($value));
	}
	$canonical_query_string = join("&", $pairs);
	$string_to_sign = "GET\n".$endpoint."\n".$uri."\n".$canonical_query_string;
	$signature = base64_encode(hash_hmac("sha256", $string_to_sign, $secret_key, true));
	$request_url = 'https://'.$endpoint.$uri.'?'.$canonical_query_string.'&Signature='.rawurlencode($signature);
	
	//データの取得
	$data = file_get_contents($request_url);
	if($data !== false){
			$xml = simplexml_load_string($data);
			if($xml->Items->TotalResults == 0){
			$affiliateUrl = $xml->Items->MoreSearchResultsUrl;
		}else{
			$affiliateUrl = $xml->Items->Item[0]->DetailPageURL;
		}
	}
}

?>