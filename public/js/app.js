
define([
     'js/vendor/jquery.js' 
     ,'js/vendor/easeljs.min.js' 
     ,'js/vendor/tween.js'
     ,'js/views/dungeon.js' 
     ,'js/views/board.js'  
     ,'js/views/tile.js'  
     ,'js/views/effect-view.js' 
     ,'js/models/gem.js'  
     ,'js/models/gems.js'  
     ,'js/models/monsters.js' 
    ],
    function(
      a,b,c,
      DungeonView,BoardView,TileView,EffectView,
      Gem,Gems,
      Monster
      ){
      
      //set game components
      var App = {};
      App.turn = { "m1" : 3, "m2" : 2 }
        App.damage = {
           "fire" : 0,
           "water" : 0,
           "wind" : 0
        };

      //init game board
      var gems = new Gems();
      App.makeBoard = function(){

        if(App.boardView){
          $('#game-board').animate(
              { opacity: 0 },1000,
              function(){
                gems.reset();
                $('#game-board').html('');
                for(var ix = 1; ix <= 6; ix++){
                  for (var iy = 1; iy <= 9; iy++) {
                    var gem = new Gem({x:ix,y:iy})
                    gems.add(gem) 
                    var tile = new TileView({model:gem}); 
                    $('#game-board').append(tile.render().$el);
                  }
                }
                gems.setDistance();
                $('#game-board').animate( { opacity: 1 },1000) }
          );
        }else{
          $('#game-board').css( 'opacity', 0 );
          for(var ix = 1; ix <= 6; ix++){
            for (var iy = 1; iy <= 9; iy++) {
              var gem = new Gem({x:ix,y:iy})
              gems.add(gem) 
              var tile = new TileView({model:gem}); 
              $('#game-board').append(tile.render().$el);
            }
          }
         $('#game-board').show().delay(500).animate( { opacity: 1 },1000) 
          gems.setDistance();
        }
         
      }
      App.start = function(){
        setTimeout(function() {
          scrollTo(0, 1);
        }, 100);
        App.makeBoard();        
        App.dungeonView = new DungeonView(); 
        App.effectView = new EffectView();
        App.boardView = new BoardView(); 
        App.gems = gems;
        App.monster =  new Monster()
      }
      return App;
    });

