var OrmUtils = /** @class */ (function () {
    function OrmUtils() {
    }
    OrmUtils.splitClassesAndStrings = function (clsesAndStrings) {
        return [
            clsesAndStrings.filter(function (cls) { return typeof cls !== "string"; }),
            clsesAndStrings.filter(function (str) { return typeof str === "string"; }),
        ];
    };
    OrmUtils.groupBy = function (array, propertyCallback) {
        return array.reduce(function (groupedArray, value) {
            var key = propertyCallback(value);
            var grouped = groupedArray.find(function (i) { return i.id === key; });
            if (!grouped) {
                grouped = { id: key, items: [] };
                groupedArray.push(grouped);
            }
            grouped.items.push(value);
            return groupedArray;
        }, []);
    };
    OrmUtils.uniq = function (array, criteriaOrProperty) {
        return array.reduce(function (uniqueArray, item) {
            var found = false;
            if (criteriaOrProperty instanceof Function) {
                var itemValue_1 = criteriaOrProperty(item);
                found = !!uniqueArray.find(function (uniqueItem) { return criteriaOrProperty(uniqueItem) === itemValue_1; });
            }
            else if (typeof criteriaOrProperty === "string") {
                found = !!uniqueArray.find(function (uniqueItem) { return uniqueItem[criteriaOrProperty] === item[criteriaOrProperty]; });
            }
            else {
                found = uniqueArray.indexOf(item) !== -1;
            }
            if (!found)
                uniqueArray.push(item);
            return uniqueArray;
        }, []);
    };
    OrmUtils.isObject = function (item) {
        return (item && typeof item === "object" && !Array.isArray(item));
    };
    /**
     * Deep Object.assign.
     *
     * @see http://stackoverflow.com/a/34749873
     */
    OrmUtils.mergeDeep = function (target) {
        var sources = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            sources[_i - 1] = arguments[_i];
        }
        if (!sources.length)
            return target;
        var source = sources.shift();
        if (this.isObject(target) && this.isObject(source)) {
            for (var key in source) {
                if (this.isObject(source[key])) {
                    if (!target[key])
                        Object.assign(target, (_a = {}, _a[key] = {}, _a));
                    this.mergeDeep(target[key], source[key]);
                }
                else {
                    Object.assign(target, (_b = {}, _b[key] = source[key], _b));
                }
            }
        }
        return this.mergeDeep.apply(this, [target].concat(sources));
        var _a, _b;
    };
    /**
     * Deep compare objects.
     *
     * @see http://stackoverflow.com/a/1144249
     */
    OrmUtils.deepCompare = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var i, l, leftChain, rightChain;
        function compare2Objects(x, y) {
            var p;
            // remember that NaN === NaN returns false
            // and isNaN(undefined) returns true
            if (isNaN(x) && isNaN(y) && typeof x === "number" && typeof y === "number")
                return true;
            // Compare primitives and functions.
            // Check if both arguments link to the same object.
            // Especially useful on the step where we compare prototypes
            if (x === y)
                return true;
            if (x.equals instanceof Function && x.equals(y))
                return true;
            // Works in case when functions are created in constructor.
            // Comparing dates is a common scenario. Another built-ins?
            // We can even handle functions passed across iframes
            if ((typeof x === "function" && typeof y === "function") ||
                (x instanceof Date && y instanceof Date) ||
                (x instanceof RegExp && y instanceof RegExp) ||
                (x instanceof String && y instanceof String) ||
                (x instanceof Number && y instanceof Number))
                return x.toString() === y.toString();
            // At last checking prototypes as good as we can
            if (!(x instanceof Object && y instanceof Object))
                return false;
            if (x.isPrototypeOf(y) || y.isPrototypeOf(x))
                return false;
            if (x.constructor !== y.constructor)
                return false;
            if (x.prototype !== y.prototype)
                return false;
            // Check for infinitive linking loops
            if (leftChain.indexOf(x) > -1 || rightChain.indexOf(y) > -1)
                return false;
            // Quick checking of one object being a subset of another.
            // todo: cache the structure of arguments[0] for performance
            for (p in y) {
                if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                    return false;
                }
                else if (typeof y[p] !== typeof x[p]) {
                    return false;
                }
            }
            for (p in x) {
                if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                    return false;
                }
                else if (typeof y[p] !== typeof x[p]) {
                    return false;
                }
                switch (typeof (x[p])) {
                    case "object":
                    case "function":
                        leftChain.push(x);
                        rightChain.push(y);
                        if (!compare2Objects(x[p], y[p])) {
                            return false;
                        }
                        leftChain.pop();
                        rightChain.pop();
                        break;
                    default:
                        if (x[p] !== y[p]) {
                            return false;
                        }
                        break;
                }
            }
            return true;
        }
        if (arguments.length < 1) {
            return true; // Die silently? Don't know how to handle such case, please help...
            // throw "Need two or more arguments to compare";
        }
        for (i = 1, l = arguments.length; i < l; i++) {
            leftChain = []; // Todo: this can be cached
            rightChain = [];
            if (!compare2Objects(arguments[0], arguments[i])) {
                return false;
            }
        }
        return true;
    };
    /**
     * Transforms given value into boolean value.
     */
    OrmUtils.toBoolean = function (value) {
        if (typeof value === "boolean")
            return value;
        if (typeof value === "string")
            return value === "true" || value === "1";
        if (typeof value === "number")
            return value > 0;
        return false;
    };
    /**
     * Composes an object from the given array of keys and values.
     */
    OrmUtils.zipObject = function (keys, values) {
        return keys.reduce(function (object, column, index) {
            object[column] = values[index];
            return object;
        }, {});
    };
    return OrmUtils;
}());
export { OrmUtils };

//# sourceMappingURL=OrmUtils.js.map
