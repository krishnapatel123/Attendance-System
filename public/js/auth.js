$(document).ready(function(){

    $('#login').click(function(){
        var email=$("#email").val();
        var password=$("#password").val();
        console.log(email);
        console.log(password);
        $.ajax({
            method: 'post',
            datatype: 'json',
             url: 'http://localhost:3000/api/auth/login',                      
             data:{
                 'email':email,
                 'password':password
             },
             success: function(response) {
                 console.log(response);
                 if(response.message){
                     window.location='/home';
                 }
                 else{
                 }
              },
              error:function(response){
                console.log(response);
              }
        });
    });
    // $('#signup').click(function(){
    //     var firstName=$("#firstName").val();
    //     var lastName=$("#lastName").val();
    //     var email=$("#email").val();
    //     var password=$("#password").val();
    //     var role=$("#role").val();
    //     $.ajax({
    //         method: 'post',
    //         datatype: 'json',
    //          url: 'http://localhost:3000/api/auth/signup',                      
    //          data:{
    //              'firstName':firstName,
    //              'lastName':lastName,
    //              'email':email,
    //              'password':password,
    //              'role':role
    //          },
    //          success: function(response) {
    //              console.log(response);
    //              if(response.message){
    //                  window.location='/login';
    //              }
    //              else{
    //              }
    //           },
    //           error:function(response){
    //             console.log(response);
    //           }
    //     });
    // });
});