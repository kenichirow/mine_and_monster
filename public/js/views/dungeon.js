define([
     '../vendor/jquery.js', 
     '../vendor/underscore.js', 
     '../vendor/backbone.js',
     '../models/monster.js',
     '../models/monsters.js'
    ],
    function(a,b,c,Monster,MonsterCollection){
   
       var DungeonView = Backbone.View.extend({

          el : $('#dungeon'),
          monsters : null,
          initialize : function(){
             this.model.bind('change:turn',this.onTurnChange,this);
             this.monsters = new MonsterCollection({count:2});
             var m = this.model.toJSON().turn;
             this.$el.find('#m1').find('.turn').text(m);
             this.$el.find('#m2').find('.turn').text(window.App.turn.m2);
          },
         onTurnChange : function(){
                        console.log(this.model.get('turn'));
                        var m = this.model.toJSON().turn;
                        this.$el.find('#m1').find('.turn').text(m);
                        },
         turnCount : function(){
                       var m = this.model.toJSON().turn;
                       this.$el.find('#m1').find('.turn').text(m);
                       this.$el.find('#m2').find('.turn').text(window.App.turn.m2);
                     },
         render : function() {
                    var m = this.model.toJSON().turn;
                    this.$el.find('#m1').find('.turn').text(m);
                    this.$el.find('#m2').find('.turn').text(window.App.turn.m2);
             }
       });

       return DungeonView;
    }
    );
