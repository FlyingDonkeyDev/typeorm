/**
 * Helper utility functions for QueryBuilder.
 */
var QueryBuilderUtils = /** @class */ (function () {
    function QueryBuilderUtils() {
    }
    /**
     * Checks if given value is a string representation of alias property,
     * e.g. "post.category" or "post.id".
     */
    QueryBuilderUtils.isAliasProperty = function (str) {
        // alias property must be a string and must have a dot separator
        if (typeof str !== "string" || str.indexOf(".") === -1)
            return false;
        // extra alias and its property relation
        var _a = str.split("."), aliasName = _a[0], propertyName = _a[1]; // todo: what about relations in embedded?
        if (!aliasName || !propertyName)
            return false;
        // alias and property must be represented in a special format
        var aliasNameRegexp = /^[a-zA-Z0-9_-]+$/;
        if (!aliasNameRegexp.test(aliasName) || !aliasNameRegexp.test(propertyName))
            return false;
        return true;
    };
    return QueryBuilderUtils;
}());
export { QueryBuilderUtils };

//# sourceMappingURL=QueryBuilderUtils.js.map
