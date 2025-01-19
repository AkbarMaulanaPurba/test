<?php
$id = $_GET['id'];
echo"
<script>

fetch('http://localhost:2050/users/".$id."',{
method: 'DELETE',
headers : {'Content-Type' : 'application/json'}
})
.then(res =>{
if(!res.ok){
alert('eror');
} else{
alert('berhasil dihapus');
window.location.href='index.html';
}
});
</script>";

?>