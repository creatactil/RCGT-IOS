function registrarColegiado() {

               	
				var xnumero = $("#numero").val().toUpperCase();
				var xnombre = $("#nombre").val().toUpperCase();
    		  	var xapellidos = $("#apellidos").val().toUpperCase();
				var xcorreo = $("#correo").val();
				var xpa1 = $("#pa1").val();
			
				var xregid = localStorage.regid;
				var xuuid = localStorage.uuid;
					
					//alert (xregid);	
					//alert (xuuid);			
				
		if(document.formulario1.numero.value.length ==  ""){
		alert("Escriba su número de Socio");
		document.formulario1.numero.focus();
		return false;
		
		}else if(document.formulario1.nombre.value.length == ""){
		alert("Escriba su nombre");
		document.formulario1.nombre.focus();
		return false;
		
		}else if(document.formulario1.apellidos.value.length ==  ""){
		alert("Escriba sus apellidos ");
		document.formulario1.apellidos.focus();
		return false;	
		
		}else if(document.formulario1.correo.value.length == ""){
		alert("Escriba su correo");
		document.formulario1.correo.focus();
		return false;
		
		}else if(document.formulario1.pa1.value.length == ""){
		alert("Escriba su contraseña");
		document.formulario1.pa1.focus();
		return false;
		
		}else		
			
			
			
			
			
			
		   $.ajax({
           type: "POST",
           url: "http://rcgtapp.creatactil.com/php/registrocolegiado.php",
           data: ({numero: xnumero, nombre: xnombre, apellidos: xapellidos, correo: xcorreo, regid: xregid, pa1: xpa1, uuid: xuuid,}),
                      cache: false,
                      dataType: "text",
                      success: onSuccess
					  
					  
					  
                    });
        	
			
            function onSuccess(data)
            {
              		
			alert(data);
			
			if (data=="Datos guardados"){
			
		localStorage.numero = xnumero;
		localStorage.correo = xcorreo;
		localStorage.pass = xpa1;
		localStorage.nombre = xnombre;
		localStorage.apellidos = xapellidos;
				
		inicio();
		globo();
		}
			
            }
			
}