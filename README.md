# Tipos de pagina
###Página Completa, arriba###
La sección abarcará todo el tamaño del navegador (Siempre y cuando el contenido sea menor a la pantalla)

    <section id="page1" class="domAlto clearfix " >
        Esta es una sección completa
    </section>

##Página completa, centrado###
La sección abarcará todo el tamaño del navegador, y mostarará un texto centrado (horizontal y vertical)

    <section id="page1" class="domAlto clearfix " >
        <div class="row-fluid content vcenter container">
            Es un texto centrado
        </div>
    </section>

##Página completa, abajo###
La sección abarcará todo el tamaño del navegador, y mostarará un texto centrado (horizontal y vertical), así como un contenedor en la parte de abajo.

    <section id="page1" class="domAlto clearfix " >
        <div class="vcenter container">
            Es un texto centrado
        </div>
        <div class="homeAbajo">
            Este div esta abajo
        </div>
    </section>

##Página de acuerdo a contenido##
La sección solo abarcará el contenido.

    <section id="page2" class="clearfix" >
        <div>
            <h1>Esta es d sd ds dsa una sección con el contenido exacto 2</h1>
            <div>
                <p>Lorem ipsum ad his scripta blandit partiendo, eum fastidii accumsan euripidis in, eum liber hendrerit an. Qui ut wisi vocibus suscipiantur, quo dicit ridens inciderint id. Quo mundi lobortis reformidans eu, legimus senserit definiebas an eos. Eu sit tincidunt incorrupte definitionem, vis mutat affert percipit cu, eirmod consectetuer signiferumque eu per. In usu latine equidem dolores. Quo no falli viris intellegam, ut fugit veritus placerat per.</p>
            </div>
	</div>
    </section>

# Meter un elemento flotante
    <header id="headerWayPoint" class="headerWayPoint">
        <div class="headerWayPoint-perspective">
            <div class="headerWayPoint-front headerWayPoint-small">
               <a href="#" class="hwpMenu" data-scroll-id="page3">Page3</a>
                <a href="#" class="hwpMenu" data-scroll-class="parallax-bg5">Page5</a>
            </div>
        </div>
    </header>
