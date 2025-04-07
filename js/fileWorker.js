/*
 * @Author: ymq
 * @Date: 2025-04-07 12:43:42
 * @LastEditTime: 2025-04-07 13:11:09
 * @LastEditors: ymq
 * @Description: 大文件上传 -- 处理hash值
 */
importScripts('spark-md5.js')
self.addEventListener('message', ({ data }) => {
    const { file, chunkSize } = data;
    const chunks = createChunks(file, chunkSize);
    createHash(chunks).then((hash) => {
        self.postMessage({ chunks, hash })
    })
}, false)


function createChunks(file, chunkSize) {
    const result = [];
    let start = 0;
    while (start < file.size) {
        const chunk = file.slice(start, start + chunkSize);
        result.push(chunk);
        start += chunkSize;
    }
    console.log(result);
    return result;
}
function createHash(chunks) {
    return new Promise((resolve, reject) => {
        const spark = new SparkMD5();
        function _read(i) {
            if (i >= chunks.length) {
                resolve(spark.end());
                return;
            }
            const blob = chunks[i];
            const reader = new FileReader();
            reader.readAsArrayBuffer(blob);
            reader.onload = function (e) {
                spark.append(e.target.result);
                _read(i + 1);
            }
        }

        _read(0);
    })
}