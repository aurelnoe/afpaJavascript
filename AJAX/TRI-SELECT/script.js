$("marque").click(function(e){
    
    $.ajax(
        'test.php',
        {
            success:function(data){
                
            },
            error:function(){
                alert("ERREUR");
            }
        }
       
    );

})
