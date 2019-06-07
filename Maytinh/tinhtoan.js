function number(num) {
    let number = num.value;
    let screen = document.getElementById("ketqua")
     screen.value = screen.value+number;

}
function tinh() {
    let screen = document.getElementById("ketqua")
    let result = eval(screen.value);
    screen.value = result;
}
function xoa(result) {
    let number = "";
    let screen = "";
    document.getElementById("ketqua").value="";
}