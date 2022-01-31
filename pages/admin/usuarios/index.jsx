import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const index = () => {
    return (
        <div>
            <section bgcolor='#203b7e'>
                <Head>
                    <title>SINAB</title>
                </Head>

                <body bgcolor='#203b7e' className="padding:3px 8px">
                    <div className="fondo shadow-md rounded-lg px-8 pt-7 pb-8 mb-4 flex flex-col">
                        <a className="tituloLogin mb-5" href="">
                            <div>
                                <p className="titulo text-right py-3">Sistema nacional de bibliotecas</p>
                            </div>
                            <img title="Bibliotecas Universidad Nacional de Colombia" alt="Sistema Nacional de Bibliotecas Universidad Nacional de Colombia" src="https://bibliotecas.unal.edu.co/typo3conf/ext/bibliotecas_unal/Resources/Public/Bibliotecas/images/iconos/unNegativo.png" width="100" height="100" />
                        </a>


                        <div className="shadow-md rounded-lg" bgcolor='#3b7e20'>
                            <form method='GET' action='/books' name='f'>
                                <input type='hidden' name='bm' value='1' />
                                <table className="rounded-lg" width='100%' border='15'>
                                    <tr>
                                        <td>
                                            &nbsp;
                                        </td>
                                        <td rowspan='2'>
                                            <div className="border-bottom:solid 1px #3366cc">
                                            </div>

                                            <div>
                                                <table cellpadding='6' border='0' width='100%'>
                                                    <tr>
                                                        <td nowrap bgcolor='#3b7e20'>
                                                            <font face='Tahoma' color='#000000' size='+1'>
                                                                &nbsp;
                                                                <b>
                                                                    <nobr>
                                                                        Búsqueda de libros
                                                                    </nobr>
                                                                </b>
                                                            </font>
                                                        </td>
                                                        <td align='right' nowrap bgcolor='#3b7e20'>
                                                            <font face='Tahoma' color='#000000' size='-3'>
                                                                <a href="https://bibliotecas.unal.edu.co/acerca-del-sistema-nacional-de-bibliotecas/el-sistema-nacional-de-bibliotecas#:~:text=El%20Sistema%20Nacional%20de%20Bibliotecas%2C%20SINAB%2C%20integra%20los%20recursos%20bibliográficos,bibliotecarios%20que%20requiere%20la%20Universidad.">
                                                                    Acerca de SINAB
                                                                </a>
                                                                &nbsp;
                                                            </font>
                                                        </td>
                                                    </tr>
                                                </table>


                                                <table bgcolor="#cbdced" className="text-gray-700" cellpadding="3" width="100%">
                                                    <tbody>
                                                        <tr bgcolor="#cbdced">
                                                            <td>
                                                                <table width="100%" cellpadding="5" border="10">
                                                                    <tbody>
                                                                        <tr bgcolor="#cbdced">
                                                                            <td valign="top" width="15%">
                                                                                <font size="-1">
                                                                                    <br />
                                                                                    <b>
                                                                                        Escriba una palabra o frase
                                                                                    </b>
                                                                                </font>
                                                                            </td>
                                                                            <td colspan="2">
                                                                                <table width="100%" cellpadding="2">
                                                                                    <tbody>
                                                                                        <tr>                                                                                                                                                                                        <td>
                                                                                            <input type="text" value="" name="as_q" id="as_q" size="25" dir="ltr" className="with-auto-dir-text text-align:left border border-black" />
                                                                                            <script>
                                                                                                _OC_autoDir('as_q');
                                                                                                {/*<!--document.f.as_q.focus();// --> */}
                                                                                            </script>
                                                                                        </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    <Link href="">
                                                        <button className="my-8 mx-3 campo-button bg-un-green hover:bg-white text-black hover:text-un-green border-un-green hover:border-transparent">
                                                            <span>Buscar</span>
                                                        </button>
                                                    </Link>
                                                </table>
                                            </div>

                                            <div>
                                                <table cellpadding='6' border='0' width='100%'>
                                                    <tr>
                                                        <td nowrap bgcolor='#3b7e20'>
                                                            <font face='Tahoma' color='#000000' size='+1'>
                                                                &nbsp;
                                                                <b>
                                                                    <nobr>
                                                                        Búsqueda avanzada de libros
                                                                    </nobr>
                                                                </b>
                                                            </font>
                                                        </td>
                                                        <td align='right' nowrap bgcolor='#3b7e20'>
                                                            <font face='Tahoma' color='#000000' size='-3'>
                                                                <a href="https://bibliotecas.unal.edu.co/acerca-del-sistema-nacional-de-bibliotecas/el-sistema-nacional-de-bibliotecas#:~:text=El%20Sistema%20Nacional%20de%20Bibliotecas%2C%20SINAB%2C%20integra%20los%20recursos%20bibliográficos,bibliotecarios%20que%20requiere%20la%20Universidad.">
                                                                    Acerca de SINAB
                                                                </a>
                                                                &nbsp;
                                                            </font>
                                                        </td>
                                                    </tr>
                                                </table>


                                                <table bgcolor="#cbdced" className="text-gray-700" cellpadding="3" width="100%">
                                                    <tbody>
                                                        <tr bgcolor="#cbdced">
                                                            <td>
                                                                <table width="100%" cellpadding="5" border="10">
                                                                    <tbody>
                                                                        <tr bgcolor="#cbdced">
                                                                            <td valign="top" width="15%">
                                                                                <font size="-1">
                                                                                    <br />
                                                                                    <b>
                                                                                        Mostrar resultados
                                                                                    </b>
                                                                                </font>
                                                                            </td>
                                                                            <td colspan="2">
                                                                                <table width="100%" cellpadding="2">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td>
                                                                                                <font size="-1">
                                                                                                    <label> con <b>todas</b> las palabras </label>
                                                                                                </font>
                                                                                            </td>
                                                                                            <td>
                                                                                                <input type="text" value="" name="as_q" id="as_q" size="25" dir="ltr" className="with-auto-dir-text text-align:left border border-black" />
                                                                                                <script>
                                                                                                    _OC_autoDir('as_q');
                                                                                                    {/*<!--document.f.as_q.focus();// --> */}
                                                                                                </script>
                                                                                            </td>
                                                                                            <td valign="top" rowspan="4">
                                                                                                <font size="-1">
                                                                                                    <select name="num">
                                                                                                        <option selected="" value="10">
                                                                                                            10 resultados
                                                                                                        </option>
                                                                                                        <option value="20">
                                                                                                            20 resultados
                                                                                                        </option>
                                                                                                        <option value="30">
                                                                                                            30 resultados
                                                                                                        </option>
                                                                                                        <option value="50">
                                                                                                            50 resultados
                                                                                                        </option>
                                                                                                        <option value="100">
                                                                                                            100 resultados
                                                                                                        </option>
                                                                                                    </select>
                                                                                                    <input type="hidden" name="hl" value="es" />
                                                                                                </font>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td nowrap="">
                                                                                                <font size="-1">
                                                                                                    <label> con la <b>frase exacta</b>
                                                                                                    </label>
                                                                                                </font>
                                                                                            </td>
                                                                                            <td>
                                                                                                <input type="text" size="25" value="" name="as_epq" id="as_epq" dir="ltr" className="with-auto-dir-text text-align:left border border-black" />
                                                                                            </td>
                                                                                            <script type="text/javascript">
                                                                                                _OC_autoDir('as_epq');
                                                                                            </script>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td nowrap="">
                                                                                                <font size="-1">
                                                                                                    <label>con <b>alguna</b> de las palabras
                                                                                                    </label>
                                                                                                </font>
                                                                                            </td>
                                                                                            <td>
                                                                                                <input type="text" size="25" value="" name="as_oq" id="as_oq" dir="ltr" className="with-auto-dir-text text-align:left border border-black" />
                                                                                            </td>
                                                                                            <script type="text/javascript">
                                                                                                _OC_autoDir('as_oq');
                                                                                            </script>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td nowrap="">
                                                                                                <font size="-1">
                                                                                                    <label><b>sin</b> las palabras
                                                                                                    </label>
                                                                                                </font>
                                                                                            </td>
                                                                                            <td>
                                                                                                <input type="text" size="25" value="" name="as_eq" id="as_eq" dir="ltr" className="with-auto-dir-text text-align:left border border-black" />
                                                                                            </td>
                                                                                            <script type="text/javascript">
                                                                                                _OC_autoDir('as_eq');
                                                                                            </script>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                        <tr className="background-color:#fff;font-size:83%">
                                                                            <td className="font-weight:bold text-gray-700">
                                                                                Buscar en:
                                                                            </td>
                                                                            <td colspan="2">
                                                                                <input id="rr1" name="as_brr" type="radio" value="0" />
                                                                                <label>Todos los libros
                                                                                </label>
                                                                                &nbsp;&nbsp;
                                                                                <input id="rr4" name="as_brr" type="radio" value="3" />
                                                                                <label>Vista completa y vista previa limitada
                                                                                </label>
                                                                                &nbsp;
                                                                                &nbsp;
                                                                                <input id="rr2" name="as_brr" type="radio" value="1" />
                                                                                <label>Solo vista completa
                                                                                </label>
                                                                                &nbsp;
                                                                                &nbsp;
                                                                                <input id="rr6" name="as_brr" type="radio" value="5" />
                                                                                <label>
                                                                                    Solo eBooks de disponibles en SINAB
                                                                                </label>
                                                                                &nbsp;
                                                                                &nbsp;
                                                                            </td>
                                                                        </tr>
                                                                        <tr className="text-gray-700 font-size:83%">
                                                                            <td className="font-weight:bold">
                                                                                Contenido:
                                                                            </td>
                                                                            <td colspan="2">
                                                                                <input id="all" name="as_pt" type="radio" value="ALLTYPES" />
                                                                                <label>
                                                                                    Todo el contenido
                                                                                </label>
                                                                                &nbsp;
                                                                                &nbsp;
                                                                                <input id="books" name="as_pt" type="radio" value="BOOKS" />
                                                                                <label>
                                                                                    Libros
                                                                                </label>
                                                                                &nbsp;
                                                                                &nbsp;
                                                                                <input id="magazines" name="as_pt" type="radio" value="MAGAZINES" />
                                                                                <label>
                                                                                    Revistas
                                                                                </label>
                                                                                &nbsp;
                                                                                &nbsp;
                                                                                <input id="newspapers" name="as_pt" type="radio" value="NEWSPAPERS_SANTORINI" />
                                                                                <label>
                                                                                    Periódicos
                                                                                </label>
                                                                                &nbsp;
                                                                                &nbsp;
                                                                            </td>
                                                                        </tr>
                                                                        <tr bgcolor="#ffffff">
                                                                            <td>
                                                                                <font size="-1">
                                                                                    <b>
                                                                                        Idioma
                                                                                    </b>
                                                                                </font>
                                                                            </td>
                                                                            <td width="40%">
                                                                                <font size="-1">
                                                                                    <label>
                                                                                        Mostrar páginas escritas en
                                                                                    </label>
                                                                                </font>
                                                                            </td>
                                                                            <td>
                                                                                <select name="lr" id="lr">
                                                                                    <option value="">
                                                                                        cualquier idioma
                                                                                    </option>
                                                                                    <option value="lang_af">
                                                                                        Afrikaans
                                                                                    </option>
                                                                                    <option value="lang_ar">
                                                                                        Arabic
                                                                                    </option>
                                                                                    <option value="lang_hy">Armenian</option><option value="lang_be">Belarusian</option><option value="lang_bg">Bulgarian</option><option value="lang_ca">Catalan</option><option value="lang_zh-CN">Chinese&nbsp;(Simplified)</option><option value="lang_zh-TW">Chinese&nbsp;(Traditional)</option><option value="lang_hr">Croatian</option><option value="lang_cs">Czech</option><option value="lang_da">Danish</option><option value="lang_nl">Dutch</option><option value="lang_en">English</option><option value="lang_eo">Esperanto</option><option value="lang_et">Estonian</option><option value="lang_tl">Filipino</option><option value="lang_fi">Finnish</option><option value="lang_fr">French</option><option value="lang_de">German</option><option value="lang_el">Greek</option><option value="lang_iw">Hebrew</option><option value="lang_hi">Hindi</option><option value="lang_hu">Hungarian</option><option value="lang_is">Icelandic</option><option value="lang_id">Indonesian</option><option value="lang_it">Italian</option><option value="lang_ja">Japanese</option><option value="lang_ko">Korean</option><option value="lang_lv">Latvian</option><option value="lang_lt">Lithuanian</option><option value="lang_no">Norwegian</option><option value="lang_fa">Persian</option><option value="lang_pl">Polish</option><option value="lang_pt">Portuguese</option><option value="lang_ro">Romanian</option><option value="lang_ru">Russian</option><option value="lang_sr">Serbian</option><option value="lang_sk">Slovak</option><option value="lang_sl">Slovenian</option><option value="lang_es">Spanish</option><option value="lang_sw">Swahili</option><option value="lang_sv">Swedish</option><option value="lang_th">Thai</option><option value="lang_tr">Turkish</option><option value="lang_uk">Ukrainian</option><option value="lang_vi">Vietnamese</option>
                                                                                </select>
                                                                            </td>
                                                                        </tr>
                                                                        <tr bgcolor="#ffffff">
                                                                            <td>
                                                                                <font size="-1">
                                                                                    <b>
                                                                                        Título
                                                                                    </b>
                                                                                </font>
                                                                            </td>
                                                                            <td width="40%">
                                                                                <font size="-1">
                                                                                    <label>
                                                                                        Mostrar los libros con el título
                                                                                    </label>
                                                                                </font>
                                                                            </td>
                                                                            <td>
                                                                                <input type="text" size="25" name="as_vt" id="as_vt" value="" dir="ltr" className="with-auto-dir-text text-align: left border border-black" />
                                                                                <script type="text/javascript">
                                                                                    _OC_autoDir('as_vt');
                                                                                </script>
                                                                                <br />
                                                                                <font size="-1">
                                                                                    <span className="eg">
                                                                                        por ejemplo, Books and Culture
                                                                                    </span>
                                                                                </font>
                                                                            </td>
                                                                        </tr>
                                                                        <tr bgcolor="#ffffff">
                                                                            <td>
                                                                                <font size="-1">
                                                                                    <b>
                                                                                        Autor
                                                                                    </b>
                                                                                </font>
                                                                            </td>
                                                                            <td width="40%">
                                                                                <font size="-1">
                                                                                    <label>
                                                                                        Mostrar los libros escritos por
                                                                                    </label>
                                                                                </font>
                                                                            </td>
                                                                            <td>
                                                                                <input type="text" size="25" name="as_auth" id="as_auth" value="" dir="ltr" className="border border-black with-auto-dir-text text-align:left" />
                                                                                <script type="text/javascript">
                                                                                    _OC_autoDir('as_auth');
                                                                                </script>
                                                                                <br />
                                                                                <font size="-1">
                                                                                    <span className="eg">
                                                                                        por ejemplo, Hamilton Mabie o "Hamilton Wright Mabie"
                                                                                    </span>
                                                                                </font>
                                                                            </td>
                                                                        </tr>
                                                                        <tr bgcolor="#ffffff">
                                                                            <td>
                                                                                <font size="-1">
                                                                                    <b>
                                                                                        Editor
                                                                                    </b>
                                                                                </font>
                                                                            </td>
                                                                            <td width="40%">
                                                                                <font size="-1">
                                                                                    <label>
                                                                                        Mostrar los libros publicados por
                                                                                    </label>
                                                                                </font>
                                                                            </td>
                                                                            <td>
                                                                                <input type="text" size="25" name="as_pub" id="as_pub" value="" dir="ltr" className="border border-black with-auto-dir-text text-align:left" />
                                                                                <script type="text/javascript">
                                                                                    _OC_autoDir('as_pub');
                                                                                </script>
                                                                                <br />
                                                                                <font size="-1">
                                                                                    <span className="eg">
                                                                                        por ejemplo, O'Reilly
                                                                                    </span>
                                                                                </font>
                                                                            </td>
                                                                        </tr>
                                                                        <tr bgcolor="#ffffff">
                                                                            <td>
                                                                                <font size="-1">
                                                                                    <b>
                                                                                        Fecha de publicación
                                                                                    </b>
                                                                                </font>
                                                                            </td>
                                                                            <td>
                                                                                <input id="qc_is" name="as_drrb_is" type="radio" value="q" />
                                                                                <font size="-1">
                                                                                    Mostrar contenido publicado en cualquier fecha
                                                                                </font>
                                                                                <br />
                                                                                <input id="bc_is" name="as_drrb_is" type="radio" value="b" />
                                                                                <font size="-1">
                                                                                    Mostrar contenido publicado entre
                                                                                </font>
                                                                            </td>
                                                                            <td>
                                                                                &nbsp;
                                                                                <br />
                                                                                <font size="-1">
                                                                                    <select name="as_minm_is" >
                                                                                        <option value="0">
                                                                                        </option>
                                                                                        <option value="1">
                                                                                            Ene
                                                                                        </option>
                                                                                        <option value="2">
                                                                                            Feb
                                                                                        </option>
                                                                                        <option value="3">
                                                                                            Mar
                                                                                        </option>
                                                                                        <option value="4">
                                                                                            Abr
                                                                                        </option><option value="5">
                                                                                            May
                                                                                        </option>
                                                                                        <option value="6">
                                                                                            Jun
                                                                                        </option><option value="7">
                                                                                            Jul
                                                                                        </option><option value="8">
                                                                                            Ago
                                                                                        </option><option value="9">
                                                                                            Sep
                                                                                        </option><option value="10">
                                                                                            Oct
                                                                                        </option>
                                                                                        <option value="11">
                                                                                            Nov
                                                                                        </option>
                                                                                        <option value="12">
                                                                                            Dic
                                                                                        </option>
                                                                                    </select>
                                                                                    <input size="4" type="text" name="as_miny_is" />
                                                                                    <select name="as_maxm_is" >
                                                                                        <option value="0">
                                                                                        </option>
                                                                                        <option value="1">
                                                                                            Ene
                                                                                        </option>
                                                                                        <option value="2">
                                                                                            Feb
                                                                                        </option>
                                                                                        <option value="3">
                                                                                            Mar
                                                                                        </option>
                                                                                        <option value="4">
                                                                                            Abr
                                                                                        </option>
                                                                                        <option value="5">
                                                                                            May
                                                                                        </option>
                                                                                        <option value="6">
                                                                                            Jun
                                                                                        </option>
                                                                                        <option value="7">
                                                                                            Jul
                                                                                        </option><option value="8">
                                                                                            Ago
                                                                                        </option><option value="9">
                                                                                            Sep
                                                                                        </option><option value="10">
                                                                                            Oct
                                                                                        </option><option value="11">
                                                                                            Nov
                                                                                        </option><option value="12">
                                                                                            Dic
                                                                                        </option>
                                                                                    </select>
                                                                                    <input size="4" type="text" name="as_maxy_is" />
                                                                                </font>
                                                                                <br />
                                                                                <font size="-1">
                                                                                    <span className="eg">
                                                                                        Por ejemplo, 1999 y 2000 o ene. 1999 y dic. 2000
                                                                                    </span>
                                                                                </font>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    <Link href="">
                                                        <button className="my-8 mx-3 campo-button bg-un-green hover:bg-white text-black hover:text-un-green border-un-green hover:border-transparent">
                                                            <span>Buscar</span>
                                                        </button>
                                                    </Link>
                                                </table>
                                            </div>

                                        </td>
                                    </tr>
                                </table>
                            </form>

                        </div>
                    </div>
                </body>
            </section>
        </div>
    );
};

export default index;