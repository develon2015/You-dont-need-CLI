/**
 * 记录HTTP请求
 * @param req 
 * @param res 
 * @param next 
 */
export default function (req, res, next) {
    console.log(`HTTP请求：`, req.method, req.url);
    next();
};