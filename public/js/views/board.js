define([
     '../vendor/jquery.js', 
     '../vendor/underscore.js', 
     '../vendor/backbone.js', 
    ],
    function(a,b,c){

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
