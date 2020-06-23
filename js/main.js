function unitChange(){
  if(document.getElementById('scholarship-unit').value!=''){
    document.getElementById('award-search').disabled=false;
    console.log("Unit changed");}
  else{
    document.getElementById('award-search').disabled=true;
    console.log("Unit unchanged");}
}
function searchChange(){
    var search = document.getElementById('award-search').value;
    if (search != '' && (search == 'award-schol' || search == 'award-donor')){
    document.getElementById('award-type').disabled=false;
    console.log(search);}
    else{
        document.getElementById('award-type').disabled=true;}
}