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
                                <input type='hidden' name='bm' />
                                <table className="rounded-lg" width='100%' border='15'>
                                    <tr>
                                        <td rowSpan='2'>
                                            <div className="border-bottom:solid 1px #3366cc">
                                            </div>

                                            <div>
                                                <table cellPadding='6' border='0' width='100%'>
                                                    <tr>
                                                        <td bgcolor='#3b7e20'>
                                                            <font face='Tahoma' color='#000000' size='+1'>
                                                                <b>
                                                                    <nobr>
                                                                        Búsqueda de libros
                                                                    </nobr>
                                                                </b>
                                                            </font>
                                                        </td>
                                                        <td align='right' bgcolor='#3b7e20'>
                                                            <font face='Tahoma' color='#000000' size='-3'>
                                                                <a href="https://bibliotecas.unal.edu.co/acerca-del-sistema-nacional-de-bibliotecas/el-sistema-nacional-de-bibliotecas#:~:text=El%20Sistema%20Nacional%20de%20Bibliotecas%2C%20SINAB%2C%20integra%20los%20recursos%20bibliográficos,bibliotecarios%20que%20requiere%20la%20Universidad.">
                                                                    Acerca de SINAB
                                                                </a>
                                                            </font>
                                                        </td>
                                                    </tr>
                                                </table>


                                                <table bgcolor="#cbdced" className="text-gray-700"   cellPadding="3" width="100%">
                                                    <tbody>
                                                        <tr bgcolor="#cbdced">
                                                            <td>
                                                                <table width="100%"   cellPadding="5" border="10">
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
                                                                            <td colSpan="2">
                                                                                <table width="100%"   cellPadding="2">
                                                                                    <tbody>
                                                                                        <tr>                                                                                                                                                                                        <td>
                                                                                            <input type="text" name="as_q" id="as_q" size="25" dir="ltr" className="with-auto-dir-text text-align:left border border-black" />
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
                                                <table   cellPadding='6' border='0' width='100%'>
                                                    <tr>
                                                        <td bgcolor='#3b7e20'>
                                                            <font face='Tahoma' color='#000000' size='+1'>
                                                                <b>
                                                                    <nobr>
                                                                        Búsqueda avanzada de libros
                                                                    </nobr>
                                                                </b>
                                                            </font>
                                                        </td>
                                                        <td align='right' bgcolor='#3b7e20'>
                                                            <font face='Tahoma' color='#000000' size='-3'>
                                                                <a href="https://bibliotecas.unal.edu.co/acerca-del-sistema-nacional-de-bibliotecas/el-sistema-nacional-de-bibliotecas#:~:text=El%20Sistema%20Nacional%20de%20Bibliotecas%2C%20SINAB%2C%20integra%20los%20recursos%20bibliográficos,bibliotecarios%20que%20requiere%20la%20Universidad.">
                                                                    Acerca de SINAB
                                                                </a>
                                                            </font>
                                                        </td>
                                                    </tr>
                                                </table>


                                                <table bgcolor="#cbdced" className="text-gray-700"   cellPadding="3" width="100%">
                                                    <tbody>
                                                        <tr bgcolor="#cbdced">
                                                            <td>
                                                                <table width="100%"   cellPadding="5" border="10">
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
                                                                            <td colSpan="2">
                                                                                <table width="100%"   cellPadding="2">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td>
                                                                                                <font size="-1">
                                                                                                    <label> con <b>todas</b> las palabras </label>
                                                                                                </font>
                                                                                            </td>
                                                                                            <td>
                                                                                                <input type="text" name="as_q" id="as_q" size="25" dir="ltr" className="with-auto-dir-text text-align:left border border-black" />
                                                                                                <script>
                                                                                                    _OC_autoDir('as_q');
                                                                                                    {/*<!--document.f.as_q.focus();// --> */}
                                                                                                </script>
                                                                                            </td>
                                                                                            <td valign="top" rowSpan="4">
                                                                                                <font size="-1">
                                                                                                    <select name="num">
                                                                                                        <option selected="" >
                                                                                                            10 resultados
                                                                                                        </option>
                                                                                                        <option>
                                                                                                            20 resultados
                                                                                                        </option>
                                                                                                        <option>
                                                                                                            30 resultados
                                                                                                        </option>
                                                                                                        <option>
                                                                                                            50 resultados
                                                                                                        </option>
                                                                                                        <option>
                                                                                                            100 resultados
                                                                                                        </option>
                                                                                                    </select>
                                                                                                    <input type="hidden" name="hl" />
                                                                                                </font>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>
                                                                                                <font size="-1">
                                                                                                    <label> con la <b>frase exacta</b>
                                                                                                    </label>
                                                                                                </font>
                                                                                            </td>
                                                                                            <td>
                                                                                                <input type="text" size="25" name="as_epq" id="as_epq" dir="ltr" className="with-auto-dir-text text-align:left border border-black" />
                                                                                            </td>
                                                                                            <script type="text/javascript">
                                                                                                _OC_autoDir('as_epq');
                                                                                            </script>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>
                                                                                                <font size="-1">
                                                                                                    <label>con <b>alguna</b> de las palabras
                                                                                                    </label>
                                                                                                </font>
                                                                                            </td>
                                                                                            <td>
                                                                                                <input type="text" size="25" name="as_oq" id="as_oq" dir="ltr" className="with-auto-dir-text text-align:left border border-black" />
                                                                                            </td>
                                                                                            <script type="text/javascript">
                                                                                                _OC_autoDir('as_oq');
                                                                                            </script>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>
                                                                                                <font size="-1">
                                                                                                    <label><b>sin</b> las palabras
                                                                                                    </label>
                                                                                                </font>
                                                                                            </td>
                                                                                            <td>
                                                                                                <input type="text" size="25" name="as_eq" id="as_eq" dir="ltr" className="with-auto-dir-text text-align:left border border-black" />
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
                                                                            <td colSpan="2">
                                                                                <input id="rr1" name="as_brr" type="radio" />
                                                                                <label>Todos los libros
                                                                                </label>
                                                                                <input id="rr4" name="as_brr" type="radio" />
                                                                                <label>Vista completa y vista previa limitada
                                                                                </label>
                                                                                <input id="rr2" name="as_brr" type="radio" />
                                                                                <label>Solo vista completa
                                                                                </label>
                                                                                <input id="rr6" name="as_brr" type="radio" />
                                                                                <label>
                                                                                    Solo eBooks de disponibles en SINAB
                                                                                </label>
                                                                            </td>
                                                                        </tr>
                                                                        <tr className="text-gray-700 font-size:83%">
                                                                            <td className="font-weight:bold">
                                                                                Contenido:
                                                                            </td>
                                                                            <td colSpan="2">
                                                                                <input id="all" name="as_pt" type="radio" />
                                                                                <label>
                                                                                    Todo el contenido
                                                                                </label>
                                                                                <input id="books" name="as_pt" type="radio" />
                                                                                <label>
                                                                                    Libros
                                                                                </label>
                                                                                <input id="magazines" name="as_pt" type="radio" />
                                                                                <label>
                                                                                    Revistas
                                                                                </label>
                                                                                <input id="newspapers" name="as_pt" type="radio" />
                                                                                <label>
                                                                                    Periódicos
                                                                                </label>
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
                                                                                    <option >
                                                                                        cualquier idioma
                                                                                    </option>
                                                                                    <option >
                                                                                        Afrikaans
                                                                                    </option>
                                                                                    <option >
                                                                                        Arabic
                                                                                    </option>
                                                                                    <option >Armenian</option><option >Belarusian</option><option >Bulgarian</option><option >Catalan</option><option >Chinese&nbsp;(Simplified)</option><option >Chinese&nbsp;(Traditional)</option><option >Croatian</option><option >Czech</option><option >Danish</option><option >Dutch</option><option >English</option><option >Esperanto</option><option >Estonian</option><option >Filipino</option><option >Finnish</option><option >French</option><option >German</option><option >Greek</option><option >Hebrew</option><option >Hindi</option><option>Hungarian</option><option>Icelandic</option><option >Indonesian</option><option >Italian</option><option >Japanese</option><option >Korean</option><option >Latvian</option><option >Lithuanian</option><option >Norwegian</option><option >Persian</option><option >Polish</option><option >Vietnamese</option>
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
                                                                                <input type="text" size="25" name="as_vt" id="as_vt" dir="ltr" className="with-auto-dir-text text-align: left border border-black" />
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
                                                                                <input type="text" size="25" name="as_auth" id="as_auth" dir="ltr" className="border border-black with-auto-dir-text text-align:left" />
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
                                                                                <input type="text" size="25" name="as_pub" id="as_pub" dir="ltr" className="border border-black with-auto-dir-text text-align:left" />
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
                                                                                <input id="qc_is" name="as_drrb_is" type="radio" />
                                                                                <font size="-1">
                                                                                    Mostrar contenido publicado en cualquier fecha
                                                                                </font>
                                                                                <br />
                                                                                <input id="bc_is" name="as_drrb_is" type="radio" />
                                                                                <font size="-1">
                                                                                    Mostrar contenido publicado entre
                                                                                </font>
                                                                            </td>
                                                                            <td>
                                                                                <br />
                                                                                <font size="-1">
                                                                                    <select name="as_minm_is" >
                                                                                        <option>
                                                                                        </option>
                                                                                        <option>
                                                                                            Ene
                                                                                        </option>
                                                                                        <option>
                                                                                            Feb
                                                                                        </option>
                                                                                        <option>
                                                                                            Mar
                                                                                        </option>
                                                                                        <option>
                                                                                            Abr
                                                                                        </option><option>
                                                                                            May
                                                                                        </option>
                                                                                        <option>
                                                                                            Jun
                                                                                        </option><option>
                                                                                            Jul
                                                                                        </option><option>
                                                                                            Ago
                                                                                        </option><option>
                                                                                            Sep
                                                                                        </option><option>
                                                                                            Oct
                                                                                        </option>
                                                                                        <option>
                                                                                            Nov
                                                                                        </option>
                                                                                        <option>
                                                                                            Dic
                                                                                        </option>
                                                                                    </select>
                                                                                    <input size="4" type="text" name="as_miny_is" />
                                                                                    <select name="as_maxm_is" >
                                                                                        <option>
                                                                                        </option>
                                                                                        <option>
                                                                                            Ene
                                                                                        </option>
                                                                                        <option>
                                                                                            Feb
                                                                                        </option>
                                                                                        <option>
                                                                                            Mar
                                                                                        </option>
                                                                                        <option>
                                                                                            Abr
                                                                                        </option>
                                                                                        <option>
                                                                                            May
                                                                                        </option>
                                                                                        <option>
                                                                                            Jun
                                                                                        </option>
                                                                                        <option>
                                                                                            Jul
                                                                                        </option><option>
                                                                                            Ago
                                                                                        </option><option>
                                                                                            Sep
                                                                                        </option><option>
                                                                                            Oct
                                                                                        </option><option>
                                                                                            Nov
                                                                                        </option><option>
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