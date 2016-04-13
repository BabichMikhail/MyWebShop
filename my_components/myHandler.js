function myHandler(){
    var Obj = {};
    this.setObj = function(NewObj){
        Obj = NewObj;
    }
    this.applyCondition = function(cond){
        var Ans = [];
        for (var i = 0; i < Obj.data.length; ++i){
            if (cond(Obj.data[i])){
                Ans.push({
                    id: Obj.data[i].tank_id,
                    TankName: Obj.data[i].short_name,
                    Purchase: Obj.data[i].price_credit + Obj.data[i].price_gold*400,
                    Nation: Obj.data[i].nation
                })
            }
        }
        return Ans;
    }
    
    this.renameNationsEn2Ru = function(){
        var NationTable = {
            'ussr': 'СССР',
            'uk': 'Великобритания',
            'usa': 'США',
            'germany': 'Германия',
            'france': 'Франция',
            'china': 'Китай',
            'czech': 'Чехословакия',
            'japan': 'Япония'
        };
        for (var i = 0; i < Obj.data.length; ++i){
            Obj.data[i].nation = NationTable[Obj.data[i].nation];
        }
    }
    
    this.optimizeData = function(){
        var data = [];
        for (Key in Obj.data){
            data.push(Obj.data[Key]);
        };
        delete Obj.data;
        Obj.data = data;
    }
}
