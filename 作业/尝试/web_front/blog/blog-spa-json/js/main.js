
// 思考1：由于ajax为异步操作，所以为保证串联运行，不得不采取嵌套回调函数的写法，如果嵌套过多的话，显然编写和阅读都较为麻烦。如何改进？
function renderTemplate(domId,tplName,resourceType,resourceId){

  path = buildPath(resourceType,resourceId)
  console.log(path)
  
  // 如果需要监测获取出错的状况，请使用$.ajax。 $.get执行出错时，无任何提示信息，调试时请注意！
  $.get(path,function(data){        
    console.log(data)

    path = `/tpl/${tplName}.tpl`


    $.get(path, function(tpl){         
        // 这里使用了链接调用,可以节省一个本地变量
        // {data:data} 指将此处的data变量映射为模板文件里的data变量，对于json内容为数组的尤其有用（json内容为对象的，则可以直接通过对象属性名访问）
        result = ejs.compile(tpl)(  {data:data}  )
        $(domId).html(result);
    });

  });


}

// 请务必使用 对json文件中的数据格式进行校验，保证无错误，否则使用ajax装载时，会出错！
// 在线 json validator 工具 http://www.piliapp.com/json/validator/
// 本函数根据传入的参数决定是数据集合还是数据成员，并映射到磁盘上的文件夹及文件
function  buildPath(resourceType,resourceId){
  // 字符串插值
  return resourceId ? `/data/${resourceType}-${resourceId}.json` : `/data/${resourceType}.json`
}