define([
     '../vendor/jquery.js', 
     '../vendor/underscore.js', 
     '../vendor/backbone.js',
     '../models/monsters.js'
    ],
    function(a,b,c,Monster){
   
       var DungeonView = Backbone.View.extend({

          el : $('#dungeon'),
          initialize : function(){
             console.log(this.model);
             this.$el.find('#m1').find('.turn').text(window.App.turn.m1);
             this.$el.find('#m2').find('.turn').text(window.App.turn.m2);
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
