/**
 * Created by Administrator on 2017/7/20.
 */

/*
* 手风琴
*
* 1.整个的效果
* 2.每一个整体（每一条的视图）
*   标题
*   内容  -> 展开 收拢  -> 互斥isOpen
* */

// 每一条的视图类
function AccordionItemView(content) {
    this.content = content;
}
//创建 视图
AccordionItemView.prototype.view = function () {
    var itemView = $("<li></li>");
    var headView = $("<h3 class='headView'>"+this.content.title+"</h3>");
    var bodyView = $("<div class='bodyView'></div>");
    bodyView.html(this.content.des);
    itemView.append(headView);
    itemView.append(bodyView);
    return itemView;
};

//点击视图触发的事件
AccordionItemView.prototype.action = function () {

};


//手风琴对象
function AccordionView(superView,datas) {
    this.superView = superView;
    this.datas = datas;

    this.init();
}
//初始化界面的方法
AccordionView.prototype.init = function () {
    var container = $("<ul></ul>");
    this.datas.forEach(function (obj) {
        var itemView = new AccordionItemView(obj);
        container.append(itemView.view());
    });
    this.superView.append(container);
};

var datas = [{title:"标题",des:"wreset"},{title:"标题",des:"<span>sdfdsdrre</span><p>sdgseryret4354376</p>"},{title:"标题",des:"ereterty45324"}];
new AccordionView($(document.body),datas);