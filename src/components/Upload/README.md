### 注意事项
  - 
  - subMenu
### 设计思路
  - 首先将他拆成三个组件（upload组件，uploadListz组件，progress组件（上传进度条））
  - 1.input标签type为file
  - 2.upload有几个生命周期，分别是succes,beforupload,error,onChange(上传中)，onProgress（上传之前需要触发的事件）
  - 在编写这个组组件的时候要注意吧headers里面的"Content-type"设置成"multipart/form-data",，即
  ```js
   "Content-type": "multipart/form-data"
  ```
  - 还要注意更改传入的参数格式必须要改成fromData形式，关键代码如下

  ```js
    const formData = new FormData();
    //              文件名          文件流
    formData.append(name || "file", file);
  ```