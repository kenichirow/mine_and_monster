
define([
     'js/vendor/easeljs.min.js' 
     ,'js/vendor/tween.js'
     ,'js/vendor/jquery.js'
     ,'js/vendor/jquery.timers.js'
     ,'js/views/dungeon.js' 
     ,'js/views/board.js'  
     ,'js/views/tile.js'  
     ,'js/models/gem.js'  
     ,'js/models/gems.js'  
     ,'js/models/monster.js' 
     ,'js/views/effect-view.js' 
    ],
    function(
      a,b,c,d,
      DungeonView,BoardView,TileView,
      Gem,Gems,
      Monster,EffectView
      ){
      
      var App = {};

      App.turn = { "m1" : 3, "m2" : 2 }

      App.damage = { "fire" : 0, "water" : 0, "wind" : 0 };

      App.makeBoard = function(){
        if(App.boardView){
          $('#game-board').animate(
              { 
                "opacity": 0,
                "margin-top" : "50px"
              },200,
              function(){
                App.gems.reset();
                $('#game-board').html('');
                for(var ix = 1; ix <= 6; ix++){
                  for (var iy = 1; iy <= 9; iy++) {
                    var gem = new Gem({x:ix,y:iy})
                    App.gems.add(gem) 
                    var tile = new TileView({model:gem}); 
                    $('#game-board').append(tile.render().$el);
                  }
                }
                App.gems.setDistance();

                $('#game-board').css( "margin-top" , "0px" ).animate( { opacity: 1 },300) }
          );
        }else{
         $('#game-board').css( 'opacity', 0 );
          App.gems = new Gems();
          for(var ix = 1; ix <= 6; ix++){
            for (var iy = 1; iy <= 9; iy++) {
              var gem = new Gem({x:ix,y:iy})
              App.gems.add(gem) 
              var tile = new TileView({model:gem}); 
              $('#game-board').append(tile.render().$el);
            }
          }
          App.gems.setDistance();
          $('#loading').delay(300).animate({opacity:0},200).hide();
          $('#game-board').show().delay(400).animate( { opacity: 1 },200);
        }
         
      }

      App.time = 20;
      App.currentTime = 0;

      App.startTimer = function(){
        $(window).everyTime(1000,'timer',function(){
          App.currentTime+=1;
          var elm = $('#timer').find('.time');
          var t = App.time-App.currentTime
          if(t < 5){ $(elm).css('color','red'); } 
          if(t <10){ t =  "0" + t}
          if(t == 0){ App.resetTimer(); }
          $(elm).text(t);
        });
      }

      App.resetTimer = function(){
          $(window).stopTime('timer');
          var elm = $('#timer').find('.time');
          var t = 20; 
          $(elm).text(t);
          $("#timer").find('.time').css('color','white');
          App.currentTime = 0;
          App.startTimer();
          App.makeBoard();
          App.damage = { "fire" : 0, "water" : 0, "wind" : 0 };
          $('.party').find('#fire').find('span').text(0);
          $('.party').find('#wind').find('span').text(0);
          $('.party').find('#water').find('span').text(0);
       }

      App.start = function(){
        setTimeout(function() {
          scrollTo(0, 1);
        }, 100);
        App.makeBoard();        
        App.monster =  new Monster()
        App.dungeonView = new DungeonView({model:App.monster}); 
        App.boardView = new BoardView(); 
        App.startTimer();
        App.effectView = new EffectView();
      }
      return App;
    });

