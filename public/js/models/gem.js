define([
    '../vendor/jquery.js', 
    '../vendor/underscore.js', 
    '../vendor/backbone.js', 
    ],
    function(a,b,c){
     
      var Gem = Backbone.Model.extend(
        {

          defaults : function(){
                       return {
                         x : 0,
                         y : 0,
                         attribute :  "",
                         dist : 0,
                         point : 0,
                         opend : false,
                         bomb : false,
                         neighbors : []  
                       }
                     
                     },

          initialize : function () {
                         this.set({
                           attribute : (function(){
                                         var atrs = ["fire","water","wind"]; 
                                         return atrs[Math.floor(Math.random()*atrs.length)];
                                      })(),
                           neighbors : []
                         }); 
                       },
          setPoint : function(dist){
                  var self = this;
                  if(!this.get('bomb')){
                    console.log(this.get('neighbors'));
                    var n = this.get('neighbors');
                    this.collection.each(function(model){
                      if(self.distance(model) == 1 ){
                        n.push(model);
                      }
                    });
                    this.set({neighbors : n});
                    var nCount = 0;
                    _.each(this.get('neighbors'),function(model){
                      if(model.get('bomb')){
                        self.set({dist: 1});
                        nCount +=1; 
                      }
                    });
                    self.set({point : nCount/6}); 

                  }else{
                        this.set({dist:0}); 
                        this.set({point:0}); 
                  }
          },
                         
          distance : function(p) {
                       var nx = this.get('x') - p.get('x'); 
                       var ny = this.get('y') - p.get('y'); 
                       return Math.floor(Math.sqrt(nx*nx + ny*ny));
                     } ,

          open : function(){
                  this.set({'opend': true});
                 } ,

          openNeighbors : function(){
                            this.set({'opend': true});
                            var col = this.collection;                      
                            _.each(this.get('neighbors'),function(n){
                               
                              if(n.get('bomb')){
                               }

                              if(!n.get('opend')){
                                  n.open();
                                if(n.get('dist') < 1){
                                  n.openNeighbors();
                                }
                              } 
                            });
                          }
        }
        );
    return Gem;
    });
