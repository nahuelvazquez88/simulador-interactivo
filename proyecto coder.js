let cantidad,precio,desc,compra,pagar;
let descAplicado=0;
let subtotal=0;
const iva  =(valor)=>{
    return valor *1.21;s
}


precio= parseFloat(prompt('ingrese precio'));
cantidad=parseFloat(prompt('ingrese cantidad'));
descAplicado =parseFloat(prompt('ingrese un valor' ));

subtotal=precio*cantidad;
compra=iva(subtotal)
desc = compra *0.15;
pagar = compra-descAplicado;

document.write("el descuento es: " + descAplicado);
document.write("<br> el total a pagar es: " + pagar );