// title      : Pata Cuadrada
// author     : Eloy López
// license    : MIT License
// description: Crea una pata de silla personalizada
// date       : 2016/10/18
// file       : PataCuadrada.jscad

function getParameterDefinitions() {
   return [
      { name: 'ancho', initial: 15, type: 'float', caption: 'Ancho' },
      { name: 'largo', initial: 25, type: 'float', caption: 'Largo' },
      { name: 'h1', initial: 5, type: 'float', caption: 'H1' },
      { name: 'a2', initial: 7, type: 'float', caption: 'Ancho2' },
      { name: 'l2', initial: 4, type: 'float', caption: 'Largo2' },
      { name: 'h2', initial: 13, type: 'float', caption: 'H2' }
   ];
}

function main(param) {
   var o = [];    // our stack of objects
   var l = [];    // our stack of line segments (when rendering vector text)
   var p = [];    // our stack of extruded line segments

   return union(
       difference(
   cube({size: [param.ancho,param.largo,param.h1*2], round: true, center: [true,true,false]}),
   cube({size: [param.ancho,param.largo,param.h1], center: [true,true,false]}).translate([0,0,param.h1])
   ),
   difference(
    cube({size: [param.ancho-param.a2,param.largo-param.a2,param.h2], center: [true,true,false]}).translate([0,0,param.h1]),
    cube({size: [param.ancho-param.a2-param.l2,param.largo-param.a2-param.l2,param.h2], center: [true,true,false]}).translate([0,0,param.h1])
    ),
    torus({ ri: 2.8,ro:5.6,fni:4,fno:4,roti:90 }).rotateZ(45).translate([0,5,8]),
    torus({ ri: 2.8,ro:5.6,fni:4,fno:4,roti:90 }).rotateZ(45).translate([0,-5,8]),
    torus({ ri: 2.8,ro:5.6,fni:4,fno:4,roti:90 }).rotateZ(45).translate([0,5,14]),
    torus({ ri: 2.8,ro:5.6,fni:4,fno:4,roti:90 }).rotateZ(45).translate([0,-5,14])
   );
}
