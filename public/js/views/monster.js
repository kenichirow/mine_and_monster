define([
     '../vendor/jquery.js', 
     '../vendor/underscore.js', 
     '../vendor/backbone.js',
     '../models/monster.js'
    ],
    function(a,b,c,Monster){
   
       var MonsterView = Backbone.View.extend({

          el : $('.dungeon'),

          initialize : function(){
             this.model.bind('change:turn',this.onTurnChange,this);
             this.$el.find('.turn').text(window.App.turn.m1);
          },
         onTurnChange : function(){
                        console.log(this.model.get('turn'));
                        var m = this.model.toJSON().turn;
                        this.$el.find('#m1').find('.turn').text(m);
                        },
         render : function() {

             }
       });

       return MonsterView;
    }
    );
