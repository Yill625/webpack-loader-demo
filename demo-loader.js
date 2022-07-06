const  MarkdownIt = require('markdown-it');

function loader(source) {
    const options = this.getOptions();
    // 获取2个title之间的数据
    const index = /\n\n#/.exec((source)).index
    return `export default ${JSON.stringify(source.slice(0,index))}`;
}

module.exports = loader