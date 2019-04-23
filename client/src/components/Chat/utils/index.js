/**
 * 
 */
exports.getUrl = () => {
    const rawUrl = window.location.href;
    const url = rawUrl.replace(/(^\w+:|^)\/\//, '');
    return url;
}