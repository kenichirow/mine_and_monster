define([
     '../vendor/underscore.js', 
     '../vendor/backbone.js', 
     '../models/gem.js', 
    ],
    function(a,b,c,d,e,gem){

       var TileView = Backbone.View.extend(
         {

          className : 'tile',

          tagName : 'div',

          initialize : function(){
            this.model.bind('change:opend',this.onOpen,this);
            this.model.bind('change:attribute',this.setAttr,this);
          },
          onOpen : function(){
                      var atr = this.model.get('attribute')
                      var pre = window.App.damage[atr] 
                      var p  = this.model.get('point');
                      var after = pre + (p*10);
                      window.App.damage[atr] = after;
                      this.tick();
                       if(p){
                         this.$el.addClass('open');
                       }else{
                         this.$el.addClass('off');
                       }
                      if(p >= 1) this.$el.find('span').text(p*10);
                      var atr = this.model.get('attribute')
                      this.sumPoint(window.App.damage[atr]);
                      this.undelegateEvents();
                     },
                     
          events : {
                    "click" : "onClick"         
                   },
          setAttr : function(){
                      this.$el.removeClass(this.model.get('attribute'));
                      this.$el.addClass(this.model.get('attribute'));
                    },
          sumPoint : function(val){
                   var atr = this.model.get('attribute')
                     $('#'+this.model.get('attribute'),'.party').find('span').text(val);
                     },
          tick : function(){
                  this.$el.animate( { opacity : 0.4 },
                      400,function(){ $(this).css('opacity',1); }); 
                 }, 
          onClick : function(){
                   this.$el.addClass('open');
                   this.tick();
                   var innerText = ""; 
                   var atr = this.model.get('attribute')
                   var pre = window.App.damage[atr] 
                   var point  = this.model.get('point');
                   var after = pre + (point*10);
                   window.App.damage[atr] = after;

                   var isBomb = this.model.get('bomb');
                   if(point == 0 && !isBomb ){
                     this.model.openNeighbors(); 
                   }
                   if(isBomb){
                     this.onAttack();
                   }else{
                     if(point >= 1) innerText = point*10; 
                   }
                   this.$el.find('span').text(innerText);
                   this.undelegateEvents();
                   this.sumPoint(window.App.damage[atr]);
                   },
          onAttack : function(){
                       this.$el.addClass('attack');
                       App.effectView.render();
                       App.turn.m1 -=1;
                       App.turn.m2 -=1;
                       App.dungeonView.render();
                       App.makeBoard();
                       App.damage = { "fire" : 0, "water" : 0, "wind" : 0 };
                       App.monster.set('turn',App.monster.get('turn') - 1);
                       $('#wind','.party').find('span').text(0);
                       $('#fire','.party').find('span').text(0);
                       $('#water','.party').find('span').text(0);

                     }, 
          onReset : function() {
                    } ,

          onHealing : function() {
                      
                      },
          render : function(){
            this.$el.addClass(this.model.get('attribute'));
            this.$el.append($('<span>'));
            return this;
          } 

       }
      );

       return TileView;
    }
    );
