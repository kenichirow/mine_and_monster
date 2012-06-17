  require.config({
    waitSeconds:5 
  });

require([
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
      var gems = new Gems();
        App.damage = {
           "fire" : 0,
           "water" : 0,
           "wind" : 0
        };

      //init game board
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
          for(var ix = 1; ix <= 6; ix++){
            for (var iy = 1; iy <= 9; iy++) {
              var gem = new Gem({x:ix,y:iy})
              gems.add(gem) 
              var tile = new TileView({model:gem}); 
              $('#game-board').append(tile.render().$el);
            }
          }
          gems.setDistance();
        }
         
      }
      App.start = function(){
         
      }

        App.makeBoard();        
        App.dungeonView = new DungeonView(); 
        App.effectView = new EffectView();
        App.boardView = new BoardView(); 
        App.gems = gems;
        App.monster =  new Monster()
        window.App = App;
        App.start();
    });

