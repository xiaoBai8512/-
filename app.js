/**
 * Created by Administrator on 2017/7/20.
 */
/*
var container = $("<ul></ul>");
var list = ["image/0.jpg","image/1.jpg","image/2.jpg","image/3.jpg","image/4.jpg"];

list.forEach(function (image) {
    var li = $("<li></li>");
    li.css({
        "width":"100px",
        "height":"200px",
        "float":"left",
        "background":"url("+image+") center"
    });
    container.append(li);
    li.hover(function () {
        li.css( "width","300px");
    },function () {
        li.css( "width","100px");
    });
});
$(document.body).append(container);

*/



/*
* 图片手风琴  改变图片的宽度
* 标题 内容的 手风琴
* */


/*
* 总宽度不变
* 标移动到的元素变宽其他元素平均减少（鼠标移过去元素的宽度 是其他元素 减少宽度的和）
* 变到最宽的值 300px
* 默认100px
* 变到最宽 比默认 多了200px -> 这200就平均分给 其他图片的宽度
* 计算方式 每个图片宽度要减少的值= （最宽的值-默认）/图片数量-1
* */

//图片手风琴
function Accordion(_superView,_datas) {
    this.superView = _superView;
    this.datas = _datas;
    //（最宽的值-默认）/图片数量-1
    this.curWidth = (this.datas.length*100-300)/(this.datas.length-1);
    this.showAccordion();
}

/*
* showAccordion 显示手风琴
* 显示在哪？容器
* 图片数据
* */

Accordion.prototype.showAccordion = function () {
    var container = $("<ul></ul>");
    container.css("list-style","none");
    var self = this;
    this.datas.forEach(function (image) {
        var item = $("<li></li>");
        item.css({
            "width":"100px",
            "height":"200px",
            "float":"left",
            "background":"url("+image+") center"
        });
        container.append(item);
        //给每一个li添加事件
        self.action(item);
    });
    this.superView.append(container);
};
Accordion.prototype.action = function (item) {
    var self = this;
    item.hover(function () {
        $(this).animate({"width":"300px"},{});
        $("ul li").not($(this)).animate({"width":self.curWidth+"px"});
    },function () {
        $("ul li").animate({"width":"100px"});
    });
};
var list = ["image/0.jpg","image/1.jpg","image/2.jpg","image/3.jpg","image/4.jpg","image/5.jpg"];
new Accordion($(document.body),list);

