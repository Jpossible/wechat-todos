// pages/todos/todos.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sinput:'',
    todos:[
      { name: 'learming wxml', complete: false },
      { name: 'learming javascript', complete: true },
      { name: 'learming wxss', complete: false },
    ],
    count:2,
    allselect:false
  },
  inputTodoHandle: function (e) {
    this.setData({
      sinput: e.detail.value
    })
  },
  addTodoHandle:function(){
    if(this.data.sinput == '')return
    var todos = this.data.todos
    todos.push({
      name: this.data.sinput,
      complete: false
    }) 
    this.setData({
      todos: todos,
      sinput: '',
      count: ++this.data.count
    })
  },
  toggleTodos:function(e){
    var item = this.data.todos[e.currentTarget.dataset.index]
    var count = this.data.count
    item.complete = !item.complete
    this.setData({
      todos: this.data.todos,
      count: item.complete ? --count : ++count
    })
  },
  delTodoHandle:function(e){
    var todos = this.data.todos
    var count = todos[e.currentTarget.dataset.index].complete ? this.data.count : --this.data.count
    todos.splice(e.currentTarget.dataset.index,1)
    this.setData({
      todos: todos,
      count: count
    })
  },
  selectAll:function(){
    var todos = this.data.todos
    var flag = !this.data.selectAll
    todos.forEach(function(item){
      item.complete = flag
    })
    this.setData({
      todos: todos,
      selectAll: flag,
      count: flag? 0 : this.data.todos.length
    })
  },
  clearComplete:function(){
    var todos = []
    todos = this.data.todos.filter(function(item){
      return !item.complete
    })
    this.setData({
      todos: todos,
      count: todos.length
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})