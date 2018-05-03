/**
 * Created by acer on 2018/3/26.
 * 基础方法工具类
 */
/**
 * 基础方法Demo
 */
var App = App || {};
(function(){
    /**
     * 判断是否是数组
     * @param val
     * @returns {boolean}
     */
    var toString = Object.prototype.toString;
    App.isArray = function(val){
        return ('isArray' in Array) ? Array.isArray(val) : toString.call(val) === '[object Array]';
    };
     /**
     * 判断是否是对象
     * IE6 使用toString判断是Object
     * @param val
     * @returns {boolean}
     */
    App.isObject = function(val){
        return toString.call(null) === '[object Object]'
            ? val !== null && val !== undefined && toString.call(val) === '[object Object]' && val.ownerDocument === undefined//排除dom
            : toString.call(val) === '[object Object]';
    };
    /**
     *
     * @param val
     * @returns {boolean}
     */
    App.isString = function(val){
        return typeof val === 'string';
    };
    /**
     * Safari 3.x 4.x type判断dom返回的是function
     * @param val
     * @returns {boolean}
     */
    App.isFunction = function(val){
        return (typeof document !== 'undefined' && typeof document.getElementsByTagName('body') === 'function')
        ? !!val && toString.call(val) === "[object Function]"
        : !!val && typeof value === 'function';
    };
    /**
     * 判断是否为布尔值
     * @param val
     * @returns {boolean}
     */
    App.isBoolean = function(val){
        return typeof val === 'boolean';
    };
    /**
     * 判断数字
     * @param val
     * @returns {boolean}
     */
    App.isNumber = function(val){
        return typeof val === 'number' && isFinite(val);
    };
    /**
     * 判断dom  nodeType 属性可返回节点的类型。
     * @param val
     * @returns {boolean}
     元素类型	   节点类型
     元素element  	  1
     属性attr	      2
     文本text	      3
     注释comments	  8
     文档document	  9
     */
    App.isElement = function(val){
        return val ? val.nodeType === 1 : false;
    };
    /**
     * 字符串为“”，数组为空数组
     * @param val
     */
    App.isEmpty = function(val){
        return val === null || val === '' || App.isArray(val) && val.length == 0;
    };
    /**
     * 判断是不是空对象
     * @param val
     * @returns {boolean}
     */
    App.isEmptyObject = function(val){
        return JSON.stringify(val) === "{}";
    };
    /**
     * 深层属性拷贝
     * @param object
     * @param config
     * @param defaults
     */
    App.apply = function(object, config, defaults){
        if(defaults){
            app.apply(object,defaults);
        }
        if(object && config && App.isObject(config)){
            var i, j,k;
            for(i in config){
                object[i] = config[i];
            }
            /**
             * 处理可枚举属性的copy
             */
            if (enumerables) {
                for (j = enumerables.length; j--; ) {
                    k = enumerables[j];
                    if (config.hasOwnProperty(k)) {
                        object[k] = config[k];
                    }
                }
            }
        }
    };
    /**
     * 浅层属性拷贝
     * @param object
     * @param config
     * @returns {*}
     */
    App.applyIf = function(object, config){
        var property;
        if (object) {
            for (property in config) {
                if (object[property] === undefined) {
                    object[property] = config[property];
                }
            }
        }
        return object;
    };
    /**
     * copy 解除引用
     * @param val
     * @returns {*}
     */
    App.clone = function(val){
        return JSON.parse(JSON.stringify(val));
    };
    App.cloneAllObject = function(val){
        var k,
            obj;
        for(k in val){
            var item = val[k];
            if(App.isArray(item)){//判断数组
                obj[k] = App.cloneAllArray(item);
            }else if(App.isObject(item)){
                obj[k] = App.cloneAllItems(item);
            }else{
                obj[k] = item;
            }
        }
        return item;
    };
    App.cloneAllArray = function(val){
        /**
         * 解除数组关系的引用
         * @type {Array.<T>}
         */
        var arr = Array.prototype.slice.call(val),
            newArr = [],
            i,
            len = arr.length;
        for(i=0;i<len;i++){
            var item = arr[i];
            if(App.isArray(item)){
                newArr.push(App.cloneAllArray(item));
            }else if(App.isObject(item)){
                newArr.push(App.cloneAllObject(item));
            }else{
                newArr.push(val);
            }
        }
        return newArr;
    };
    /**
     * 深度copy
     * @param val
     * @returns {*}
     */
    App.cloneAllItems = function(val){
        //解除引用
        val = App.clone(val);
        if(App.isArray(val)){
            App.cloneAllArray();
        }else if(App.isArray(val)){
            App.cloneAllObject(val);
        }
        return val;
    };
    /**
     *
     * @param arr
     * @returns {Array}
     */
    App.uniqueArr = function(val){
        if(App.isArray(val)){
            /*
				Es6 利用解构和Set方法
			*/
			if(Set){
			  return [...new Set(arr)];
			}else{
			  var newArr =[],
				obj = {},
				i,
				len = arr.length;
			  for(i=0;i<len;i++){
				if(!obj[arr[i]]){
				  newArr.push(arr[i]);
				  obj[arr[i]] = 1;
				}
			  }
			  return newArr;
			}
        }
        return [];
    };
    /**
     * App.ajax ajax基础方法
     * @type {{}|*}
     */
    App.ajax = App.ajax || {};

    var xmlhttp;
    if (window.XMLHttpRequest)
    {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp=new XMLHttpRequest();
    }
    else
    {
        // IE6, IE5 浏览器执行代码
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    App.ajax.submit = function(url, params, options){
        options = options || {};
        xmlhttp.open("POST",url,true);
        xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xmlhttp.send(JSON.stringify(params));
    };
    App.ajax.upload = function(){

    };

}());
