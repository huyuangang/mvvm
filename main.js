
function VM(option) {
    var me = this;
    me.data = option.data || {};
    me.el = getEl(option.el);
    me.renderString = me.el.innerHTML || '';

    function getEl (el) {
        if(typeof el === 'string') {
            return document.querySelector(el);
        } else if(!!el && el.nodeType === Node.ELEMENT_NODE){
            return el;
        } else{
            return null;
        }
    }
    render();
    function render () {
        var renderArr = me.renderString.match(/\{\{.+?\}\}/g);
        renderArr.forEach(function(item) {
            var props = item.slice(2,-2).trim();
            me.renderString = me.renderString.replace(item, me.data[props]);
        })
        me.el.innerHTML = me.renderString;
    }
}


new VM({
    el: '#app',
    data: {
        name: 'Hello World'
    }
})