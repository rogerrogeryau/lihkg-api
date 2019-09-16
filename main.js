// const lihkg_api = require("lihkg-api")
const { create } = require("lihkg-api")
const lihkg = require("lihkg-api")

// create().then(client => {
//     client.getTopicList({
//         cat_id: "37",
//         page: 2,
//         count: 200,
//         sub_cat_id: -1
//     })
//     .then((response)=>{
//         // console.log(response.response.items)
//         const items = response.response.items
//         items.forEach(item => {
//             // console.log(item.title)
//             // console.log(item.title, item.thread_id)

//             // console.log(item.length)
//             // console.log(item)
//         })

//         console.log(items)
//     })
// })


// create().then(client =>{
//     client.getThreadContent({ thread_id:1543575, page:1 })
//     // .then(res=>console.log(res.response.item_data.length))
//     .then(res=>{
//         for (const content of res.response.item_data) {
//             console.log(content.msg)
//         }
//     })
// })




// ====================== playground  ==================================

create().then(client => {
    client.getTopicList({
        cat_id: "3",
        page: 1,
        count: 60,
        sub_cat_id: -1
    }).then((response)=>{
        // console.log(response.response.items)

        for (const item of response.response.items) {
            console.log(item.title)
        }
    })
})
// ====================== playground  =================================






// cat dictionary
let cat = {
    1: '吹水台',
    999: '自選台',
    31: '創意台',
    2: '熱　門',
    12: '講故台',
    3: '最　新',
    18: '學術台',
    15: '財經台',
    33: '政事台',
    37: '房屋台',
    7: '娛樂台',
    4: '手機台',
    22: '硬件台',
    9: 'Apps台',
    26: '軟件台',
    35: '電訊台',
    31: '創意台',
    36: '健康台',
    16: '飲食台',
    30: '感情台',
    17: '旅遊台',
    14: '上班台',
    27: '活動台',
    19: '校園台',
    6: '體育台',
    18: '學術台',
    12: '講故台',
    10: '遊戲台',
    11: '影視台',
    8: '動漫台',
    23: '攝影台',
    21: '音樂台',
    20: '汽車台',
    25: '寵物台',
    13: '潮流台',
    24: '玩具台',
    34: '直播台',
    29: '成人台',
    28: '站務台',
    32: '黑　洞'
}


