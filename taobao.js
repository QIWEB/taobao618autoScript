document.write('<iframe width=100% height=100% frameborder=0 scrolling=yes>');
frames[0].location.href = location.href;
var idx = 1;
var o = document.createElement('div');
o.innerHTML = '第1次';
o.setAttribute('id', 'setTimes');
o.setAttribute('style', 'text-align: center;font-size: 14px;background: #000;color: #fff;padding: 10px 0;');
document.body.insertBefore(o, document.body.childNodes[0]);
var timer = setInterval(function() {
    if (idx > 50) {
        clearInterval(timer);
        document.getElementById('setTimes').innerHTML = '已结束'
    } else {
        document.getElementById('setTimes').innerHTML = '第' + idx + '次';
        t()
    }
},
13000);
function t() {
    setTimeout(function() {
        frames[0].document.getElementsByClassName('svelte-qr71gg')[1].click();
        setTimeout(function() {
            frames[0].location.reload()
        },
        1000)
    },
    12000);
    idx++
}
t();
