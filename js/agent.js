let smartPhones=['iphone','ipod','ipad','android','opera mini','opera mobi','nokia',
'webos','windows ce','blackberry','iemobile','sonyericssion'];

//스마트폰 구분
for(let i in smartPhones) {
    if(navigator.userAgent.toLowerCase().match(new RegExp(smartPhones[i]))) {
        document.location='http://hs026.dothome.co.kr/mindex.html';
    }
}