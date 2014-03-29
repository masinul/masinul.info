<!--
var tl = new Array(
" ========================================================================================================", 
"__________________________________________________________________________________________________________",
"                                           JOGJA ORA DI DOL HAR !!!",
"__________________________________________________________________________________________________________",
"==========================================================================================================", 
"JANGAN LAKUKAN PEMBANGUNAN HOTEL, MARKET, DLL DI JOGJA,",
"KARENA BERDIRINYA MARKET MEMBUNUH PASAR TRADISIONAL,",
"                  JOGJA SUDAH TIDAK SEPERTI DULU,",
"                  KU INGIN JOGJA YANG SEPERTI DULU,",
"YANG TETAP NYAMAN DAN SELALU ISTIMEWA,",
"AKU SEDIH SEKARANG JOGJA SUDAH DI JAJAH BANGSA ASING,",
"                  YANG SENAKNYA MEMBAGUN HOTEL, MARKET, DLL DI JOGJA :'( ,",
"                  AKU INGIN JOGJA SEPERTI DULU LAGI NYAMAN, ADA RUANG TERBUKA HIJAU ,",
"APAKAH ADA YANG MENDENGAR RENUNGAN KU INI,",
"                                    AKU HARUS BERTANYA PADA SIAPA :'( !!! ",
"==========================================================================================================", 
"__________________________________________________________________________________________________________",
"                                           JOGJA ORA DI DOL HAR !!!",
"__________________________________________________________________________________________________________",
"==========================================================================================================", 
"");

var speed = 70;
var index = 0; text_pos = 0;
var str_length = tl[0].length;
var contents, row;

function type_text()
{
    contents = '';
    row = Math.max(0, index-25);
    while (row<index) contents += tl[row++] + '\r\n';
    document.forms[0].elements[0].value = contents + tl[index].substring(0,text_pos) + "_";
    if (text_pos ++== str_length)
    {
        text_pos = 0;
        index++;
        if (index != tl.length)
        {
            str_length = tl[index].length;
            setTimeout("type_text()", 50);
        }  
    } else
    setTimeout("type_text()", speed);
}
//-->
