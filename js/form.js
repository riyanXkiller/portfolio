let form = document.getElementById('myForm');

form.addEventListener('submit',function(event){
event.preventDefault();

let errors=[];
    let from_name = document.getElementById('name').value;
    let email_id = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if(from_name.length<3){
        errors.push('Name must be at least 3 character');    
    }
    
    let email_pattern = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

    if(!email_pattern.test(email_id)){
        errors.push('Plese enter a valid email address');
    }
    if(message.length < 5){
        errors.push('message must containe atleast 5 character');
    }

    if(errors.length > 0){
        document.querySelector('.loading').classList.remove('d-block');
        document.querySelector('.error-message').innerHTML = errors.join('');
        document.querySelector('.error-message').classList.add('d-block');
    }else{
        
        var params ={
            from_name : document.getElementById('name').value,
            email_id : document.getElementById('email').value,
            message : document.getElementById('message').value
        }
            emailjs.send("service_atsdp8j","template_1ib603i",params).then(function(){
            }).then(function(){
                document.querySelector('.sent-message').classList.add('d-block');
                form.reset();
            })

            
    }


})