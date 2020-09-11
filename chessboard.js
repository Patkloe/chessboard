function chessboard(){
 var valline = "";
 var nbrecol = Number(prompt("chessboard width :"));
 if(!Number.isNaN(nbrecol)){
  for(var i = 0; i < nbrecol; i++)
   valline = valline + "#"+ " ";
 }
 else
   alert("given width is not numeric");
 var decal = " ";
 var nbrelig = Number(prompt("chessboard height :"));
 if(!Number.isNaN(nbrelig)){
   for(var j = 0; j < nbrelig; j++){
      if(j % 2 === 0)
       console.log(" " + valline);
      else
       console.log(valline);
   }
 }
 else
   alert("given height is not numeric");
}
chessboard();
