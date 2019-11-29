const koaBody = require("koa-body");

const uploadDir = "./uploads";

const options = {
    formidable: {
        uploadDir,
        keepExtensions: true,
        multiples: false,
        onFileBegin: (name, file) => {
            file.path = `${uploadDir}/${file.name}`;
        }
    },
    multipart: true,
    urlencoded: true,
    jsonLimit: 4000000,
    formLimit: 4000000
};

module.exports = koaBody(options);