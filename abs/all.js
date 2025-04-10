// make back up btn
let backUpBtn = document.createElement("button");
backUpBtn.innerText = "^";
// width: 300px; height: 300px;
backUpBtn.style.cssText = ` position: fixed;bottom: 10px;right: 10px;text-align:center;font-size: 30px;border: none;border-radius: 4px;padding: 4px 11px;color: var(--ma - blue - color);`
document.body.appendChild(backUpBtn);
backUpBtn.addEventListener("click", () => {
    window.scrollTo(top);
})
//============================================================ animations =================================================================//
setTimeout(() => {
    let reang = document.querySelectorAll('div.text')[0];
    // console.log(rean g.children[0]);
    for (let i = 0; i < reang.children.length; i++) {
        reang.children[i].classList.add('up-down-cl');
        console.log();
    }

}, 2500)
setTimeout(() => {
    document.querySelectorAll('a.logo')[0].style.cssText = "opacity: 1;"
    let allNavAElements = document.querySelectorAll('.sh-a');
    for (let i = 0; i < allNavAElements.length; i++) {
        console.log(allNavAElements[i]);
        allNavAElements[i].style.cssText = "opacity: 1;"
    }

}, 2500);

//============================================================ ends animations ============================================================//
