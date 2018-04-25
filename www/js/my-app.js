// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

/*-----------------------------------------------*/


document.addEventListener("deviceready", captureAPI, false);
 
function captureAPI() {

        function captureSuccess(mediaFiles) {

          
            $$('#CaptureOutput').html( JSON.stringify( mediaFiles, null, '<br/>' ) );  

            var i;

            for (i = 0; i < mediaFiles.length; i++ ) {

                var mediaFile = mediaFiles[i];
                
/*--------------------------------------------------------*/
                mediaFile.getFormatData(

                    function(data){ 

                        $$('#CaptureOutput').append( '<hr/>'+ JSON.stringify( data, null, '<br/>' ) );

                    },

                    function(err){ alert( err.code ); }

                );
                
            }
        }
    
    /*--------------------------------------------------------*/
    
    
/*------------------------Error function-----------------------*/
        function captureError(error){

            navigator.notification.alert('Error code: '+ error.code);

        }
/*-----------------------------------------------*/
        var capture = navigator.device.capture;
        var captureOptions = { limit: 3, duration: 10 };
/*-----------------------------------------------*/
    

$$('#captureAudio').on('touchend',function(){
capture.captureAudio( captureSuccess, captureError,  captureOptions );
});
    
        
$$('#captureImage').on('touchend',function(){
capture.captureImage( captureSuccess, captureError,  captureOptions );
});
    

$$('#captureVideo').on('touchend',function(){
capture.captureVideo( captureSuccess, captureError,  captureOptions );
});
}  /*-------------------End of capture API function---------------------*/
    
  

// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})
