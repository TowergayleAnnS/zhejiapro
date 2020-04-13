var express = require('express');
var router = express.Router();
const axios = require("axios")
    /* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get("/home", (req, res) => {
    // res. set("access-control-allow-origin","res. set(”access-control-allow-origin" , "http:// 127.0.0.1 :8080")
    // res . set("Access-Control-All OW- Credentials","true")

    axios({
        methods: "POST",
        url: "https://www.duzhe.com/home/reader/magazine/list",
        data: {
            "current": 1,
            "year": "",
            "month": "",
            "size": 12,
        }
    }).then(resp => {
        res.json(resp.data)
    })
})
router.get("/firstpage", (req, res) => {
    // res.set("access-control-allow-origin", "http://127.0.0.1:8080")
    res.set("access-control-allow-origin", "http://127.0.0.1:8080");
    res.set("Access-Control-Allow-Credentials", "true")
    axios.get(`http://e.dangdang.com/media/api.go?action=mediaCategoryLeaf&promotionType=1&deviceSerialNo=html5&macAddr=html5&channelType=html5&permanentId=20200205145142351396842447827303582&returnType=json&channelId=70000&clientVersionNo=5.8.4&platformSource=DDDS-P&fromPlatform=106&deviceType=pconline&token=&start=1&end=${req.query.end}&category=${req.query.category}&dimension=dd_sale&order=0`)
        .then(resp1 => {
            // console.log(resp1)
            res.json({
                msg: 1,
                data: resp1.data
            })
        })
})
router.get("/firstpage2", (req, res) => {
    // res.set("access-control-allow-origin", "http://127.0.0.1:8080")
    res.set("access-control-allow-origin", "http://127.0.0.1:8080");
    res.set("Access-Control-Allow-Credentials", "true")
    console.log(req.query)
    axios.get(`http://e.dangdang.com/media/api.go?action=mediaCategoryLeaf&promotionType=1&deviceSerialNo=html5&macAddr=html5&channelType=html5&permanentId=20200205145142351396842447827303582&returnType=json&channelId=70000&clientVersionNo=5.8.4&platformSource=DDDS-P&fromPlatform=106&deviceType=pconline&token=&start=1&end=${req.query.end}&category=${req.query.category}&dimension=dd_sale&order=0`)
        .then(resp1 => {

            res.json({
                msg: 1,
                data: resp1.data
            })
        })
})
router.get("/detail", (req, res) => {
    // res.set("access-control-allow-origin", "http://127.0.0.1:8080")
    res.set("access-control-allow-origin", "http://127.0.0.1:8080");
    res.set("Access-Control-Allow-Credentials", "true")
    console.log(req.query)
    axios.get(`http://e.dangdang.com/media/api.go?action=getMedia&deviceSerialNo=html5&macAddr=html5&channelType=html5&permanentId=20200205145142351396842447827303582&returnType=json&channelId=70000&clientVersionNo=6.8.0&platformSource=DDDS-P&fromPlatform=106&deviceType=pconline&token=&refAction=browse&saleId=${req.query.saleId}&promotionType=1`)
        .then(resp1 => {

            res.json({
                msg: 1,
                data: resp1.data
            })
        })
})
router.get("/magazinedetail", (req, res) => {
        // res. set("access-control-allow-origin","res. set(”access-control-allow-origin" , "http:// 127.0.0.1 :8080")
        // res . set("Access-Control-All OW- Credentials","true")
        console.log(req.query)
        axios({
            methods: "POST",
            url: "https://www.duzhe.com/home/reader/magazine/magazineHome",
            data: {
                "id": `${req.query.id}`
            }
        }).then(resp => {
            res.json(resp.data)
        })
    })
    // router.get("/magazinedetail", (req, res) => {
    //     // res. set("access-control-allow-origin","res. set(”access-control-allow-origin" , "http:// 127.0.0.1 :8080")
    //     // res . set("Access-Control-All OW- Credentials","true")
    //     console.log(req.query)
    //     axios({
    //         methods: "POST",
    //         url: "https://www.duzhe.com/home/reader/magazine/magazineHome",
    //         data: {
    //             "id": `${req.query.id}`
    //         }
    //     }).then(resp => {
    //         res.json(resp.data)
    //     })
    // })
router.get("/topSale", (req, res) => {
    // res.set("access-control-allow-origin", "http://127.0.0.1:8080")
    res.set("access-control-allow-origin", "http://127.0.0.1:8080");
    res.set("Access-Control-Allow-Credentials", "true")

    axios.get(`http://e.dangdang.com/media/api.go?action=mediaCategoryLeafNew&promotionType=1&rankType=1&listType=ddds_sale&channelType=all&permanentId=20151109120332208112113523718686951&returnType=json&channelId=70000&clientVersionNo=5.0.0&deviceType=DDDS_ALL&category=DZS&payType=1&timeDimension=1&start=0&end=9`)
        .then(resp => {
            res.json({
                msg: 1,
                data: resp.data
            })
        })
})
router.get("/comment", (req, res) => {
    // res.set("access-control-allow-origin", "http://127.0.0.1:8080")
    res.set("access-control-allow-origin", "http://127.0.0.1:8080");
    res.set("Access-Control-Allow-Credentials", "true")
    console.log(req.query)
    axios.get(`http://e.dangdang.com/media/api.go?action=queryArticleListV2&deviceSerialNo=html5&macAddr=html5&channelType=html5&permanentId=20200205145142351396842447827303582&returnType=json&channelId=70000&clientVersionNo=6.8.0&platformSource=DDDS-P&fromPlatform=106&deviceType=pconline&token=&objectId=${req.query.objectId}`)
        .then(resp1 => {

            res.json({
                msg: 1,
                data: resp1.data
            })
        })
})


router.get("/catalog", (req, res) => {
    // res. set("access-control-allow-origin","res. set(”access-control-allow-origin" , "http:// 127.0.0.1 :8080")
    // res . set("Access-Control-All OW- Credentials","true")

    axios({
        methods: "POST",
        url: "https://www.duzhe.com/home/reader/magazine/catalog",
        data: {
            "id": `${req.query.id}`
        }
    }).then(resp => {
        res.json(resp.data)
    })
})
router.get("/search", (req, res) => {
    // res. set("access-control-allow-origin","res. set(”access-control-allow-origin" , "http:// 127.0.0.1 :8080")
    // res . set("Access-Control-All OW- Credentials","true")

    axios({
        methods: "POST",
        url: "https://www.duzhe.com/home/reader/magazine/list",
        data: {
            "current": `${req.query.current}`,
            "year": `${req.query.year}`,
            "month": `${req.query.month}`,
            "size": 12
        }
    }).then(resp => {
        res.json(resp.data)
    })
})




module.exports = router;