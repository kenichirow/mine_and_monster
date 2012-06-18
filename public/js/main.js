  require.config({
    waitSeconds:30
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
     ,'js/models/monster.js' 
     ,'js/app.js' 
    ],
    function(
      a,b,c,
      DungeonView,BoardView,TileView,EffectView,
      Gem,Gems,
      Monster,
      App
      ){
      window.App = App; 
      $(document).ready(function(){

        if($('body#game')){
          window.App.start();
        }
      });
    });

