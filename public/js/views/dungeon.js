define([
     '../vendor/jquery.js', 
     '../vendor/underscore.js', 
     '../vendor/backbone.js', 
     '../vendor/easeljs.min.js' 
    ],
    function(a,b,c){
   
       var DungeonView = Backbone.View.extend({

          el : $('#dungeon'),
          initialize : function(){
          },
         turnCount : function(){
             this.$el.find('#m1').find('.turn').text(window.App.turn.m1);
             this.$el.find('#m2').find('.turn').text(window.App.turn.m2);
                     },
         render : function() {
             this.$el.find('#m1').find('.turn').text(window.App.turn.m1);
             this.$el.find('#m2').find('.turn').text(window.App.turn.m2);
             }
       });

       return DungeonView;
    }
    );
