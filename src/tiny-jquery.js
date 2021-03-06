/**
 * @param element
 * @param context
 */
var $$ = function(element, context){
    if(this instanceof $$){
        if(!context){
            context = document;
        }

        var elements = context.querySelectorAll(element);

        this.length = elements.length;

        for(var i =0; i< this.length; i++){
            this[i] = elements[i];
        }
    }else{
        return new $$(element, context);
    }
};

$$.prototype = {
    length: this.length,

    forEach: function(fn){
        for(var i=0; i<this.length; i++){
            fn.call(this[i],this[i],i);
        }
    }
};

var tQuery = $$;