<?php

function urlize($url) {
  $search = array('/[^a-z0-9]/', '/--+/', '/^-+/', '/-+$/' );
  $replace = array( '-', '-', '', '');
  $unwanted_array = array(    'Š'=>'S', 'š'=>'s', 'Ž'=>'Z', 'ž'=>'z', 'À'=>'A', 'Á'=>'A', 'Â'=>'A', 'Ã'=>'A', 'Ä'=>'A', 'Å'=>'A', 'Æ'=>'A', 'Ç'=>'C', 'È'=>'E', 'É'=>'E',
    'Ê'=>'E', 'Ë'=>'E', 'Ì'=>'I', 'Í'=>'I', 'Î'=>'I', 'Ï'=>'I', 'Ñ'=>'N', 'Ò'=>'O', 'Ó'=>'O', 'Ô'=>'O', 'Õ'=>'O', 'Ö'=>'O', 'Ø'=>'O', 'Ù'=>'U',
    'Ú'=>'U', 'Û'=>'U', 'Ü'=>'U', 'Ý'=>'Y', 'Þ'=>'B', 'ß'=>'Ss', 'à'=>'a', 'á'=>'a', 'â'=>'a', 'ã'=>'a', 'ä'=>'a', 'å'=>'a', 'æ'=>'a', 'ç'=>'c',
    'è'=>'e', 'é'=>'e', 'ê'=>'e', 'ë'=>'e', 'ì'=>'i', 'í'=>'i', 'î'=>'i', 'ï'=>'i', 'ð'=>'o', 'ñ'=>'n', 'ò'=>'o', 'ó'=>'o', 'ô'=>'o', 'õ'=>'o',
    'ö'=>'o', 'ø'=>'o', 'ù'=>'u', 'ú'=>'u', 'û'=>'u', 'ý'=>'y', 'ý'=>'y', 'þ'=>'b', 'ÿ'=>'y' );
  $url = strtr( $url, $unwanted_array );
  $url = strtolower(iconv("UTF-8", "ISO-8859-1//TRANSLIT", $url));
  return preg_replace($search, $replace, $url);
}

function createNewPage($name) {
  $clean_name = urlize($name);

  $fp = fopen('www/templates/pages/'.$clean_name.'.php','w');
  fwrite($fp, "<!-- ".$name." -->\n");
  fclose($fp);

  $fplesspage = fopen('src/less/pages/'.$clean_name.'.less','w');
  fwrite($fplesspage, "/* ---- ".$name." ---- */ \n");
  fclose($fplesspage);

  $fplesstheme = fopen('src/less/theme.less','a');
  fwrite($fplesstheme, "\n@import \"pages/".$clean_name."\";");
  fclose($fplesstheme);
}

function grindXML($file, $array = false) {
  $data = simplexml_load_file($file);
  if($array) {
    $data_array = json_decode(json_encode((array)$data),1);
    if(isset($data_array['comment']) && $data_array['comment'] == reset($data_array)) unset($data_array['comment']);
  }
  foreach($data as $k => $d) {
    global $$k;
    $$k = $d;
  }
  return isset($data_array) ? $data_array : $data;
}
