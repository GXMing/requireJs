function b_fun(){
    console.log("b中的函数，a中依赖调用");
    $("body").css({
        "background-color":"#ccc"
    })
}
b_fun()

function www(){
    console.log("www")
}