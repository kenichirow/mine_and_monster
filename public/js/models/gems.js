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
                      var result = [], self = this;
                      _(8).times(function(d){
                        result.push(self.at(Math.floor(Math.random()*self.length)).set({bomb : true}))
                      });
                       return result;
                      },
            setDistance : function(){
                           this.at(6).set({attribute : "heal"});
                           var bombs = this.getBombs(); 
                           this.each(function(model){
                              var l1,l2;
                              _.each(bombs,function(bomb){
                                l1 = model.distance(bomb) 
                                if(l2 >= l1){ l2 = l1;}
                              });
                             model.setPoint(l2);
                            }); 

                          },
            intialize : function(){
                       this.model.bind('change:opend',this.onChange,this);
                        },
            onChange : function(){
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
