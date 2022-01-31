import React from 'react';

const index = () => {
    return (
        <section id="buscadorBibliotecas">
            <div class="imagenSede"></div>
            <h1 class="elementoOculto">Sistema Nacional de Bibliotecas</h1>
            <div class="contenedorElementos">
                <a class="tituloSitio" href="">
                    <div class="titulo">
                        <p className="titulo text-right">Sistema nacional</p>
                        <p className="titulo text-right">de bibliotecas</p>
                    </div>
                    <img title="Bibliotecas Universidad Nacional de Colombia" alt="Sistema Nacional de Bibliotecas Universidad Nacional de Colombia" src="https://bibliotecas.unal.edu.co/typo3conf/ext/bibliotecas_unal/Resources/Public/Bibliotecas/images/iconos/unNegativo.png" width="400" height="400" />
                </a>
                <ul class="nav nav-pills">
                    <li role="presentation" class="active"><a href="#descubridor" data-toggle="tab">Descubridor</a></li>
                    <li role="presentation"><a href="#catalogo" data-toggle="tab">Catálogo</a></li>
                    <li role="presentation"><a href="#recursos" data-toggle="tab">Recursos electrónicos</a></li>
                    <li role="presentation"><a href="#revistas" data-toggle="tab">Portal de revistas</a></li>
                    <li role="presentation"><a href="#repositorio" data-toggle="tab">Repositorio institucional</a></li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane" id="catalogo">
                        <form class="campoBusqueda" method="get" action="http://168.176.5.96/F/" target="_blank">
                            <input type="hidden" name="func" value="find-b" />
                            <input type="text" name="request" placeholder="Busque en los recursos físicos disponibles" />
                            <input type="hidden" name="find_code" value="WRD" />
                            <input type="hidden" name="adjacent" value="N" />
                            <button type="submit">Buscar</button>
                        </form>
                    </div>
                    <div class="tab-pane" id="recursos">
                        <form class="campoBusqueda" method="post" action="http://bases.unal.edu.co/subjects/databases.php" target="_blank">
                            <input type="text" name="searchterm" placeholder="Busque en los recursos electrónicos suscritos, diccionarios, enciclopedias y herramientas bibliográficas disponibles" />
                            <button type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="imagenSede"></div>
        </ section>
    );
};

export default index;
