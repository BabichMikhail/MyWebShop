function getData(Handler) {
    var Obj;
    return $.get('http://api.worldoftanks.ru/wot/encyclopedia/vehicles/?application_id=demo&language=ru&fields=tank_id%2Cprice_credit%2Cshort_name%2Cnation%2Cprice_gold%20', function(data){
        Obj = data;
    }).fail(function(){
        alert('Не удалось получить данные от сервера');
        var metadata = '{"status":"ok","meta":{"count":20},"data":{"1":{"tank_id":1,"short_name":"Т-34","price_credit":356700,"price_gold":0,"nation":"ussr"},"289":{"tank_id":289,"short_name":"M3 Stuart","price_credit":37500,"price_gold":0,"nation":"usa"},"33":{"tank_id":33,"short_name":"T14","price_credit":null,"price_gold":null,"nation":"usa"},"321":{"tank_id":321,"short_name":"D2","price_credit":42500,"price_gold":0,"nation":"france"},"49":{"tank_id":49,"short_name":"Type 59","price_credit":null,"price_gold":null,"nation":"china"},"529":{"tank_id":529,"short_name":"Tiger I","price_credit":1390000,"price_gold":0,"nation":"germany"},"545":{"tank_id":545,"short_name":"T1","price_credit":0,"price_gold":0,"nation":"usa"},"257":{"tank_id":257,"short_name":"СУ-85","price_credit":414000,"price_gold":0,"nation":"ussr"},"305":{"tank_id":305,"short_name":"Type 62","price_credit":null,"price_gold":null,"nation":"china"},"337":{"tank_id":337,"short_name":"Medium II","price_credit":3500,"price_gold":0,"nation":"uk"},"353":{"tank_id":353,"short_name":"Chi-Ni","price_credit":3900,"price_gold":0,"nation":"japan"},"81":{"tank_id":81,"short_name":"Medium I","price_credit":0,"price_gold":0,"nation":"uk"},"577":{"tank_id":577,"short_name":"FT","price_credit":0,"price_gold":0,"nation":"france"},"513":{"tank_id":513,"short_name":"ИС","price_credit":1424000,"price_gold":0,"nation":"ussr"},"113":{"tank_id":113,"short_name":"K-housenka","price_credit":0,"price_gold":0,"nation":"czech"},"593":{"tank_id":593,"short_name":"M2","price_credit":3800,"price_gold":0,"nation":"uk"},"625":{"tank_id":625,"short_name":"LT vz. 38","price_credit":43500,"price_gold":0,"nation":"czech"},"609":{"tank_id":609,"short_name":"R. Otsu","price_credit":0,"price_gold":0,"nation":"japan"},"369":{"tank_id":369,"short_name":"LT vz. 35","price_credit":3900,"price_gold":0,"nation":"czech"},"273":{"tank_id":273,"short_name":"Hummel","price_credit":930000,"price_gold":0,"nation":"germany"}}}';
        Obj = JSON.parse(metadata);
    }).always(function(){
        Handler.setObj(Obj);
        Handler.optimizeData();
        Handler.renameNationsEn2Ru();
        $('#grid').jqGrid('setGridParam', {
            datatype: 'local', 
            data: Handler.applyCondition(function(){return true;}) 
        }).trigger('reloadGrid');
    });
};