define([
     '../vendor/easeljs.min.js' ,
     '../vendor/tween.js',
     '../vendor/jquery.js', 
     '../vendor/underscore.js', 
     '../vendor/backbone.js', 
    ],
    function(a,b,c,d,e){

       var BoardView = Backbone.View.extend({

          el : $('#game-board'),
                  
          initialize : function(){
          },

          makeBoard : function(){
          }

       });

       return BoardView;
    }
    );
