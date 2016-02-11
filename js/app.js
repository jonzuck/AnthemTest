document.getElementById('submit').addEventListener('click',function overlay() {
	var regex = /^\d{1,5}$/;
    var modal = document.getElementById('modal');
    var pcpname = document.getElementById('pcp-name').value;
    var zip = document.getElementById('zip').value;
    var message = document.getElementById('message');
    var pcperror = document.getElementById('pcp-error');
    var ziperror = document.getElementById('zip-error');
    var ok = document.getElementById('ok');
    var reset = document.getElementById('reset');
    
    if (pcpname !== '' && regex.test(zip)) {
     modal.style.visibility =  'visible';
     pcperror.style.display = 'none';
     ziperror.style.display = 'none';
     message.innerHTML = 'Your preferred PCP is: ' + pcpname + '.<br>' + 'And your zip code is: ' + zip + '.';
    } 
    if (pcpname === '') {
        pcperror.innerHTML = 'Please name your preferred PCP.';
        pcperror.style.display = 'block';
    }
    if (!regex.test(zip)) {
        ziperror.innerHTML = 'Please enter your 5-digit zip code.';
        ziperror.style.display = 'block';
    }
    ok.addEventListener('click', function hideOverlay(){
        modal.style.visibility =  'hidden';
    });
     function hideOverlay() {
        modal.style.visibility =  'hidden';
    }
    ok.addEventListener('click', hideOverlay);
    reset.addEventListener('click', hideOverlay);  
});

