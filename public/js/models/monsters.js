define([
    '../vendor/jquery.js', 
    '../vendor/underscore.js', 
    '../vendor/backbone.js', 
    './gem.js', 
    ],
    function(a,b,c,Gem){
       
      var Monster = Backbone.Collection.extend(
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
