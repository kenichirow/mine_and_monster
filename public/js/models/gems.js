define([
    '../vendor/jquery.js', 
    '../vendor/underscore.js', 
    '../vendor/backbone.js', 
    './gem.js', 
    ],
    function(a,b,c,Gem){
       
      var Gems = Backbone.Collection.extend(
        {
           model : Gem,
           getBombs : function(){
                        var half = Math.floor(this.length/2);
                        var b1 = this.at(Math.floor(Math.random()*half));
                        var b2 = this.at(half + Math.floor(Math.random()*half));
                        b1.set({bomb : true});
                        b2.set({bomb : true});
                        return [b1,b2];
                      },
            setDistance : function(){
                           this.at(6).set({attribute : "heal"});
                           var bombs = this.getBombs(); 
                            this.each(function(model){
                              var l1,l2;
                              var l;
                              _.each(bombs,function(bomb){
                                if(l1){
                                  l2 = model.distance(bomb) 
                                if(l2 >=l1){
                                  l = l1; 
                                }else{
                                  l = l2; 
                                } 
                                }{
                                  l1 = model.distance(bomb) 
                                }
                                model.setPoint(l);
                              });
                            }); 

                          },
            intialize : function(){
                       this.model.bind('change:opend',this.onChange,this);
                        },
            onChange : function(){
                         console.log('bomb!!!');
                       this.trigger('bomb');  
            },
             
            
            getAttributes : function(atr){
                           return this.filter(function(m){
                             return m.get('attribute') == atr;
                           }); 
                           }     
        }
      );
      return Gems; 
    });
