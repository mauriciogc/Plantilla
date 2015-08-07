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

##Página completa, abajo##
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

# Menú (div) flotante
Cuando queremos un elemento flotante en la parte de arriba

    <header id="headerWayPoint" class="headerWayPoint">
        <div class="headerWayPoint-perspective">
            <div class="headerWayPoint-xxx">
               Este es un elemento flotante
            </div>
        </div>
    </header>
    
##Poner links en el menú
Se puede poner media uno de los dos atributos ( y al darle click, hará la animación hacia la sección)
    
    data-scroll-id="idXXX"
    
    data-scroll-class="clasXXX"
    
    
Ejemplo

    <header id="headerWayPoint" class="headerWayPoint">
        <div class="headerWayPoint-perspective">
            <div class="headerWayPoint-front">
                <a href="#" class="hwpMenu" data-scroll-id="page3">Page3</a>
                <a href="#" class="hwpMenu" data-scroll-class="parallax-bg5">Page5</a>
            </div>
        </div>
    </header>

##Animando el menú de acuerdo a las secciones
Podemos afectarlo cual el scroll este bajando o cuando este subiendo, con los siguientes atributos  

    data-animate-down="headerWayPoint-XXX" data-animate-up="headerWayPoint-YYY"

con esto le indicamos que cuando baje haga la animación (clase)  *headerWayPoint-XXX*, y que cuando suba el scroll haga *headerWayPoint-YYY*

**Ejemplo**

Cuando se baje el scroll y llegue a la sección, lo que hará es aplicar la clase *headerWayPoint-hidden*, y cuando suba el scroll aplicará la clase *headerWayPoint-small*

    <section id="page2" class="waypoint clearfix" data-animate-down="headerWayPoint-hidden" data-animate-up="headerWayPoint-small">
        <h1>Este es un titulo</h1>
        <div>
            <p>Lorem ipsum ad his scripta blandit partiendo, eum fastidii accumsan euripidis in, eum liber hendrerit an.</p>
        </div>
    </section>
    
Entonces podemos generar diversas acciones (animaciones) dependiendo la orientación del scroll
        

#Animando un elemento cualquiera
Cuando se requiere darle animación a un elemento al momento de mostrarse, se puede agregar con el siguiente atributo y clase
    
    class="animar" data-animation="animacionXX"


**Ejemplo**
Cuando la imagen se muestre hará el efecto **bounceIn**

    <img class="animar" data-animation="bounceIn" src="css/img/imgxx.png" alt="">
