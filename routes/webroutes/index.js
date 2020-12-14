const router = require('express').Router();

router.get("/", (req,res)=>{res.render('index')});
router.get("/index.html", (req,res)=>{res.render('index')});
router.get("/docs.html", (req,res)=>{res.render('docs')});
router.get("/orders.html", (req,res)=>{res.render('orders')});
router.get("/notifications.html", (req,res)=>{res.render('notifications')});
router.get("/account.html", (req,res)=>{res.render('account')});
router.get("/settings.html", (req,res)=>{res.render('settings')});
router.get("/login.html", (req,res)=>{res.render('login')});
router.get("/signup.html", (req,res)=>{res.render('signup')});
router.get("/reset-password.html", (req,res)=>{res.render('reset-password')});
router.get("/404.html", (req,res)=>{res.render('404')});
router.get("/charts.html", (req,res)=>{res.render('charts')});
router.get("/help.html", (req,res)=>{res.render('help')});
router.get("/employee.html", (req,res)=>{res.render('employee')});
router.get("/addEmployee.html", (req,res)=>{res.render('addEmployee')});


module.exports = router;