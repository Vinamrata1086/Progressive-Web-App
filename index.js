if('serviceWorker' in navigator){
   navigator.serviceWorker.register('sw.js').then(registration =>{
     console.log("SW Registered");
     console.log(registeration);
   }).catch(error =>{
     console.log("SW Registration failed");
     console.log(error);
   });
}
else{

}



if (window.location.protocol === 'http:') {
  const requireHTTPS = document.getElementById('requireHTTPS');
  const link = requireHTTPS.querySelector('a');
  link.href = window.location.href.replace('http://', 'https://');
  requireHTTPS.classList.remove('hidden');
}