import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "boxSizing": "border-box",
        "width": "100%",
        "height": "100%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "background": "url('https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?crop=entropy&dpr=2&fit=crop&fm=jpg&h=750&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1450')",
        "backgroundSize": "cover",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "center center",
        "color": "#FFF",
        "fontFamily": "\"Hans Kendrick\", sans-serif",
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "fontSize": 15
    },
    "h1": {
        "fontWeight": "bold",
        "textAlign": "center"
    },
    "h5": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "header": {
        "marginTop": "12%"
    },
    "section": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "textAlign": "center",
        "fontSize": 1.2
    },
    "button": {
        "backgroundColor": "rgba(0,0,0,0)",
        "border": "1px solid #FFF",
        "cursor": "pointer",
        "width": 137
    },
    "button:hover": {
        "textShadow": "0 0 10px rgba(255,255,255,1) , 0 0 20px rgba(255,255,255,1) , 0 0 30px rgba(255,255,255,1) , 0 0 40px #00ffff , 0 0 70px #00ffff , 0 0 80px #00ffff , 0 0 100px #00ffff"
    },
    "button i": {
        "marginRight": 10
    },
    "footer": {
        "display": "flex",
        "justifyContent": "center"
    },
    "footer > div a": {
        "marginTop": 0,
        "marginRight": 7,
        "marginBottom": 0,
        "marginLeft": 7
    },
    "fadeIn": {
        "opacity": 0,
        "animationName": "fadeIn",
        "animationDuration": "1s",
        "animationTimingFunction": "ease",
        "animationDelay": "0.1s",
        "animationFillMode": "forwards"
    },
    "wrapper": {
        "backgroundColor": "rgba(30,30,30,0.4)",
        "width": "100%",
        "height": 100 * vh
    },
    "blog-github": {
        "display": "flex",
        "marginTop": 10
    },
    "blog-github-content": {
        "marginTop": 5,
        "marginRight": 15,
        "marginBottom": 5,
        "marginLeft": 15
    },
    "blog-github-content-and": {
        "fontSize": 0.8
    },
    "whati": {
        "marginBottom": -10,
        "fontWeight": "bold"
    },
    "job": {
        "textAlign": "center"
    },
    "job h5": {
        "color": "#ddd",
        "font": "1.5em 'librebaskerville-regular', serif"
    },
    "nav": {
        "paddingTop": 0,
        "paddingRight": "!important",
        "paddingBottom": 0,
        "paddingLeft": "!important"
    },
    "nav a": {
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "color": "#FFF",
        "backgroundColor": "rgba(0,0,0,0)",
        "fontSize": 1.6
    },
    "nav-item": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "i": {
        "color": "#ddd"
    },
    "i:hover": {
        "textShadow": "0 0 10px rgba(255,255,255,1) , 0 0 20px rgba(255,255,255,1) , 0 0 30px rgba(255,255,255,1) , 0 0 40px #00ffff , 0 0 70px #00ffff , 0 0 80px #00ffff , 0 0 100px #00ffff"
    }
});