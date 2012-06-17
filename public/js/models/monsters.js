define([
    '../vendor/jquery.js', 
    '../vendor/underscore.js', 
    '../vendor/backbone.js', 
    './monster.js', 
    ],
    function(a,b,c,Monster){
       
      var MonsterCollection = Backbone.Collection.extend(
        {
          model : Monster,
          intialize : function(){
           
                        },
        }
      );
      return MonsterCollection; 
    });
