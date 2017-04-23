function $$(e , context) {
    context = context || document;
    var rst = context.querySelectorAll(e);
    rst = Array.prototype.slice.call(rst);
    return rst[1] == undefined?rst[0]:rst;
}

function getCookie(name)
{
    var bikky = document.cookie;
    name += "=";
    var i = 0;
    while (i < bikky.length)
    {
        var offset = i + name.length;
        if (bikky.substring(i, offset) == name)
        {
            var endstr = bikky.indexOf(";", offset);
            if (endstr == -1) endstr = bikky.length;
            return unescape(bikky.substring(offset, endstr));
        }
        i = bikky.indexOf(" ", i) + 1;
        if (i == 0) break;
    }
    return null;
}

(function checkLogin() {
    var url = "http://localhost:8888/login";
    var xhr = new XMLHttpRequest();
    var data = {"check": "user_id"};
    xhr.open('POST', url, true);
    // xhr.responseType = 'json';
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.withCredentials = true;
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200){
            console.log(xhr.responseText)

        }
    };
    xhr.send(JSON.stringify(data));
})();

(function login() {

    var box = $$(".login-box");
    var btn = $$("#login");
    var rtn = $$(".return")[0];
    var submit = $$("#login-submit");
    var url = "http://localhost:8888/login";

    btn.addEventListener("click",function () {
        box.style.width = "100vw";
        box.style.height = "100vh";
    });
    rtn.addEventListener("click",function () {
        box.style.width = "0";
        box.style.height = "0";
    });
    submit.addEventListener("click",function () {
        var id = $$("#login-id").value;
        var psw = $$("#login-psw").value;
        psw = hex_md5(psw);
        var data = {
            "user_id": id,
            "user_psw": psw
        };
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        // xhr.responseType = 'json';
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200){
                console.log(xhr.responseText)

            }
        };
        xhr.send(JSON.stringify(data));
    });


})();


(function register() {

    var box = $$(".register-box");
    var btn = $$("#register");
    var rtn = $$(".return")[1];
    var submit = $$("#register-submit");
    var url = "http://localhost:8888/register";

    btn.addEventListener("click",function () {
        box.style.width = "100vw";
        box.style.height = "100vh";
    });
    rtn.addEventListener("click",function () {
        box.style.width = "0";
        box.style.height = "0";
    });
    submit.addEventListener("click",function () {
        var name = $$("#register-name").value;
        var psw = $$("#register-psw").value;
        psw = hex_md5(psw);
        var date = new Date();
        var sex = $$("input[name='sex']:checked").value;
        var data = {
            "user_name": name,
            "user_psw": psw,
            "user_regTime": date,
            "user_sex": sex
        };

        var xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        // xhr.responseType = 'json';
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200){
                if (xhr.responseText){
                    console.log(xhr.responseText);
                }
            }
        };
        xhr.send(JSON.stringify(data));
    });

})();