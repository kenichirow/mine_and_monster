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
      window.App.start();
    });

