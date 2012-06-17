define([
    '../vendor/jquery.js', 
    '../vendor/underscore.js', 
    '../vendor/backbone.js', 
    './gem.js', 
    ],
    function(a,b,c,Gem){
       
      var Monster = Backbone.Model.extend(
        {
          defaults : function(){
                       return {
                         name : "",
                         life : 1000,
                         attribute : "fire",
                         dead : false,
                         src : "img/monster.jpg",
                         animation : null,
                         turn : 5
                       }
                     },
           intialize : function(){
                      this.set({name: "monster_1"});
                       },
           damage : function(dam){
                   this.life -= dam; 
                   if( life <= 0 ) this.dead = true;
                    },
           isDead : function(){
                   return dead; 
                  }
        }
      );
      return Monster; 
    });
