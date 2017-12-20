$(document).ready(function(){

    /*para poner todas las propiedades en una sola pagina y ahorrar tiempos de carga, una sola pagina de venta y una sola de alquiler*/
    //al cargar las paginas de alquiler o venta primero aparecen las casas con show y lo demas en hide

    /* en fase de prueba, hay que crear decisiones segun la variable, de que si esta en casa y se selecciona un municipio solo filtre las casas 
    y no lo demas (aptos.terrenos.etc)
    
    var terra=1;
    $(".casa").show();
    $(".terreno").hide();
    $(".finca").hide();
    $(".apto").hide();
    $(".bodega").hide();

    $("#casa").click(function(){
        var terra=1;
        $(".casa").show();
        $(".terreno").hide();
        $(".finca").hide();
        $(".apto").hide();
        $(".bodega").hide();
    });
    $("#apto").click(function(){
        var terra=4;
        $(".casa").hide();
        $(".terreno").hide();
        $(".finca").hide();
        $(".apto").show();
        $(".bodega").hide();
    });

    en el filtro de municipios iria algo como: if terra es igual a x entonces solo filtra x... ej

    filtro para coban:
    $("#coban").click(function(){
        if (terra=1) {
            //tipo
            $(".casa").show();
            $(".apto").hide()
            //municipio
            $(".chamelco").hide();
            $(".coban").show();
        }else if (terra=4) {
            //tipo
            $(".casa").hide();
            $(".apto").show()
            //municipio
            $(".chamelco").hide();
            $(".coban").show();
        }else if (true) {}......
    });   asi filtraria si son casas en coban o apartamentos en coban

*/

//FILTRA LAS PROPIEDADES POR MUNICIPIOS
	  //filtrar todos con listas
    $("#todos").click(function(){
        $(".capital").show();
        $(".carcha").show();
        $(".chamelco").show();
        $(".coban").show();
        $(".escuintla").show();
        $(".lanquin").show();
        $(".panzos").show();
        $(".peten").show();
        $(".purulha").show();
        $(".salama").show();
        $(".sancristobal").show();
        $(".santacruz").show();
        $(".tactic").show();
    });
    //filtrar capital con listas
    $("#capital").click(function(){
        $(".capital").show();
        $(".carcha").hide();
        $(".chamelco").hide();
        $(".coban").hide();
        $(".escuintla").hide();
        $(".lanquin").hide();
        $(".panzos").hide();
        $(".peten").hide();
        $(".purulha").hide();
        $(".salama").hide();
        $(".sancristobal").hide();
        $(".santacruz").hide();
        $(".tactic").hide();
    });
   	//filtrar carcha con listas
   	$("#carcha").click(function(){
        $(".capital").hide();
        $(".carcha").show();
        $(".chamelco").hide();
        $(".coban").hide();
        $(".escuintla").hide();
        $(".lanquin").hide();
        $(".panzos").hide();
        $(".peten").hide();
        $(".purulha").hide();
        $(".salama").hide();
        $(".sancristobal").hide();
        $(".santacruz").hide();
        $(".tactic").hide();
   	});
   	//filtrar chamelco con listas
   	$("#chamelco").click(function(){
        $(".capital").hide();
        $(".carcha").hide();
        $(".chamelco").show();
        $(".coban").hide();
        $(".escuintla").hide();
        $(".lanquin").hide();
        $(".panzos").hide();
        $(".peten").hide();
        $(".purulha").hide();
        $(".salama").hide();
        $(".sancristobal").hide();
        $(".santacruz").hide();
        $(".tactic").hide();
   	});
    //filtrar coban con listas
    $("#coban").click(function(){
        $(".capital").hide();
        $(".carcha").hide();
        $(".chamelco").hide();
        $(".coban").show();
        $(".escuintla").hide();
        $(".lanquin").hide();
        $(".panzos").hide();
        $(".peten").hide();
        $(".purulha").hide();
        $(".salama").hide();
        $(".sancristobal").hide();
        $(".santacruz").hide();
        $(".tactic").hide();
    });
    //filtrar escuintla con listas
    $("#escuintla").click(function(){
        $(".capital").hide();
        $(".carcha").hide();
        $(".chamelco").hide();
        $(".coban").hide();
        $(".escuintla").show();
        $(".lanquin").hide();
        $(".panzos").hide();
        $(".peten").hide();
        $(".purulha").hide();
        $(".salama").hide();
        $(".sancristobal").hide();
        $(".santacruz").hide();
        $(".tactic").hide();
    });
    //filtrar lanquin con listas
    $("#lanquin").click(function(){
        $(".capital").hide();
        $(".carcha").hide();
        $(".chamelco").hide();
        $(".coban").hide();
        $(".escuintla").hide();
        $(".lanquin").show();
        $(".panzos").hide();
        $(".peten").hide();
        $(".purulha").hide();
        $(".salama").hide();
        $(".sancristobal").hide();
        $(".santacruz").show();
        $(".tactic").hide();
    });
    //filtrar panzos con listas
    $("#panzos").click(function(){
        $(".capital").hide();
        $(".carcha").hide();
        $(".chamelco").hide();
        $(".coban").hide();
        $(".escuintla").hide();
        $(".lanquin").hide();
        $(".panzos").show();
        $(".peten").hide();
        $(".purulha").hide();
        $(".salama").hide();
        $(".sancristobal").hide();
        $(".santacruz").hide();
        $(".tactic").hide();
    });
    //filtrar peten con listas
    $("#peten").click(function(){
        $(".capital").hide();
        $(".carcha").hide();
        $(".chamelco").hide();
        $(".coban").hide();
        $(".escuintla").hide();
        $(".lanquin").hide();
        $(".panzos").hide();
        $(".peten").show();
        $(".purulha").hide();
        $(".salama").hide();
        $(".sancristobal").hide();
        $(".santacruz").hide();
        $(".tactic").hide();
    });
    //filtrar purulha con listas
    $("#purulha").click(function(){
        $(".capital").hide();
        $(".carcha").hide();
        $(".chamelco").hide();
        $(".coban").hide();
        $(".escuintla").hide();
        $(".lanquin").hide();
        $(".panzos").hide();
        $(".peten").hide();
        $(".purulha").show();
        $(".salama").hide();
        $(".sancristobal").hide();
        $(".santacruz").hide();
        $(".tactic").hide();
    });
    //filtrar salama con listas
    $("#salama").click(function(){
        $(".capital").hide();
        $(".carcha").hide();
        $(".chamelco").hide();
        $(".coban").hide();
        $(".escuintla").hide();
        $(".lanquin").hide();
        $(".panzos").hide();
        $(".peten").hide();
        $(".purulha").hide();
        $(".salama").show();
        $(".sancristobal").hide();
        $(".santacruz").hide();
        $(".tactic").hide();
    });
    //filtrar sancristobal con listas
    $("#sancristobal").click(function(){
        $(".capital").hide();
        $(".carcha").hide();
        $(".chamelco").hide();
        $(".coban").hide();
        $(".escuintla").hide();
        $(".lanquin").hide();
        $(".panzos").hide();
        $(".peten").hide();
        $(".purulha").hide();
        $(".salama").hide();
        $(".sancristobal").show();
        $(".santacruz").hide();
        $(".tactic").hide();
    });
    //filtrar santacruz con listas
    $("#santacruz").click(function(){
        $(".capital").hide();
        $(".carcha").hide();
        $(".chamelco").hide();
        $(".coban").hide();
        $(".escuintla").hide();
        $(".lanquin").hide();
        $(".panzos").hide();
        $(".peten").hide();
        $(".purulha").hide();
        $(".salama").hide();
        $(".sancristobal").hide();
        $(".santacruz").show();
        $(".tactic").hide();
    });
    //filtrar tactic con listas
    $("#tactic").click(function(){
        $(".capital").hide();
        $(".carcha").hide();
        $(".chamelco").hide();
        $(".coban").hide();
        $(".escuintla").hide();
        $(".lanquin").hide();
        $(".panzos").hide();
        $(".peten").hide();
        $(".purulha").hide();
        $(".salama").hide();
        $(".sancristobal").hide();
        $(".santacruz").hide();
        $(".tactic").show();
    });
  
});