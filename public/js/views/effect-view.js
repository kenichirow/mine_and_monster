define([
     '../vendor/jquery.js', 
     '../vendor/underscore.js', 
     '../vendor/backbone.js', 
     '../vendor/easeljs.min.js', 
     '../vendor/tween.js', 
    ],
    function(a,b,c,d,e){
       var EffectView = Backbone.View.extend({

          el : $('#canvasContainer'),
          stage : null,
          skillBitmap : new Bitmap('img/skill.png'),
          damageSprite : {"images": ["img/effect.png"], "frames": {"count": 20, "regX": 0, "width": 258, "regY": 0, "height": 113}, "animations": {"all": [0, 19,null]}},
          initialize : function(){
            this.damageEffect = new BitmapAnimation(new SpriteSheet(this.damageSprite));
            this.stage = new Stage(document.getElementById("stg"));
            this.stage.addChild(this.skillBitmap);
            this.skillBitmap.y = 200;
            this.stage.addChild(this.damageEffect);
            this.stage.update();
            Ticker.setFPS(22);
            Ticker.addListener(this);
          },

           partyParam : [
             { x : 50, y : 130, color:Graphics.getRGB(175, 212, 156)},
             { x : 100, y : 130 ,color:Graphics.getRGB(26, 161, 246)},
             { x : 150, y : 130 ,color:Graphics.getRGB(246, 26, 104)}
           ],

          render : function(){
              this.$el.show();
              var elm = this.$el;
              var stage = this.stage;
              var effect = this.damageEffect;
              var skill = this.skillBitmap;
              var tween = Tween.get(this.skillBitmap).to({alpha:0},1000,Ease.cubicIn);
              var length = this.partyParam.length;
              for(var i=0; i<length; i++){
                var myShape = new Shape();
                myGraphics = myShape.graphics;
                myShape.x = this.partyParam[i].x;
                myShape.y = (this.partyParam[i].y);
                myShape.alpha = 0.8;
                myGraphics.beginFill(this.partyParam[i].color);
                myGraphics.drawPolyStar(0, 0, 40, 20, 0.6, -90);
                this.stage.addChild(myShape);
                var tween = Tween.get(myShape).wait(i*200).to({y:0,scaleX:0,scaleY:0},1500,Ease.elasticIn).to({alpha:0},50,Ease.cubicIn).call(function(){
                  stage.addChild(effect);
                  effect.gotoAndPlay(0);
                  effect.onAnimationEnd = function(){
                    effect.stop();
                    skill.alpha = 1;
                    $(elm).css('z-index',0).hide()
                    window.App.resetTimer();
                  }
                });
              };
                   } ,
          tick : function(){
                this.stage.update(); 
                 }
           
       });
       return EffectView
    });
