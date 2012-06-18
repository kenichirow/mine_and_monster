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
                      var result = [];
                      for(var i = 0; i<8; i++){
                        var b = this.at(Math.floor(Math.random()*this.length));
                        b.set({bomb : true});
                        result.push(b);
                      }
                        return result;
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
                                }else{
                                  l = model.distance(bomb) 
                                }
                                model.setPoint(l);
                              });
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
