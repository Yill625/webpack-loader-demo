
const request = require('axios');
const fs = require('fs')

const data = (content)=>{
  return JSON.stringify({
    msgtype: 'markdown',
    markdown: {
      content
    }
})}
const sendMessage = (notes)=>{
  request({
    url: "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=xxxx",
    method: "POST",
    headers: {
        "content-type": "application/json",
    },
    data: data(notes)
}).then(res=>{
  console.log(res)
})
}



try {
  const data = fs.readFileSync('./src/CHANGELOG.md', 'utf8')
  const index = /\n\n#/.exec((data)).index
  console.log(index)
  sendMessage(data.slice(0,index))
} catch (err) {
  console.error(err)
}

sendMessage


