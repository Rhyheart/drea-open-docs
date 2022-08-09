# 事件

## 应用初始化

#### 事件方法

|方法|是否公开|说明|
|:---------------|:----|:---------------|
|Init|是||

#### 事件参数

无

#### 事件返回

首先，我们拼接好应用信息JSON，如下示例：

``` json
{
    "sdk": "7",
    "id": "cc.drea.demo",
    "name": "示例应用",
    "ver": "6.0.0",
    "author": "Rhyheart",
    "desc": "这是一款测试应用！",
    "authList": ["1001", "1002", "2001", "4001", "4002", "101", "201"],
    "AppLoad": 1,
    "AppExit": 2,
    "AppWindow": 3,
    "PersonalMessageEvent": 4,
    "PersonalAddEvent": 5,
    "ChannelMessageEvent": 6,
    "MemberJoinEvent": 7,
    "MemberLeaveEvent": 8,
}
```

然后我们调用[置应用签名](./method.md#置应用签名)方法对应用信息JSON进行签名，最后返回签名后的文本值即可！

#### JSON说明

|字段|类型|说明|
|:---------------|:-----|:---------------|
|sdk|int|SDK版本号，当前为7|
|id|string|应用ID|
|name|string|应用名称|
|ver|string|应用版本|
|author|string|应用作者|
|desc|string|应用描述|
|authList|`list<string>`|[权限码](./const.md#权限码)列表|
|AppLoad|int|应用载入，传入处理函数指针|
|AppExit|int|应用退出，传入处理函数指针|
|AppWindow|int|应用窗口，传入处理函数指针|
|PersonalMessageEvent|int|个人消息事件，传入处理函数指针|
|PersonalAddEvent|int|个人添加事件，传入处理函数指针|
|ChannelMessageEvent|int|频道消息事件，传入处理函数指针|
|MemberJoinEvent|int|成员加入事件，传入处理函数指针|
|MemberLeaveEvent|int|成员退出事件，传入处理函数指针|

## 应用载入

#### 事件方法

|方法|是否公开|说明|
|:---------------|:----|:---------------|
|AppLoad|否||

#### 事件参数

无

#### 事件返回

无


## 应用退出

#### 事件方法

|方法|是否公开|说明|
|:---------------|:----|:---------------|
|AppExit|否||

#### 事件参数

无

#### 事件返回

无


## 应用窗口

#### 事件方法

|方法|是否公开|说明|
|:---------------|:----|:---------------|
|AppWindow|否||

#### 事件参数

无

#### 事件返回

无


## 个人消息事件

|方法|是否公开|说明|
|:---------------|:----|:---------------|
|PersonalMessageEvent|否||

#### 事件参数

|字段|类型|说明|
|:---------------|:-----|:---------------|
|islandId|string|群号|
|userId|string|用户号|
|messageId|string|消息ID|
|messageBody|string|消息内容|

#### 事件返回

[消息返回](./const.md#消息返回)


## 个人添加事件

|方法|是否公开|说明|
|:---------------|:----|:---------------|
|PersonalAddEvent|否||

#### 事件参数

|字段|类型|说明|
|:---------------|:-----|:---------------|
|userId|string|用户号|
|applyId|string|申请标识|
|applyReason|string|申请理由|

#### 事件返回

[消息返回](./const.md#消息返回)


## 频道消息事件

:::tip
由于适配了多平台，因此此事件进行了抽象

对于QQ，群 即 QQ群，频道 即 QQ群，频道消息事件 即 群消息事件

对于DoDo，群 即 DoDo群，频道 即 DoDo频道

对于Q频，群 即 QQ频道，频道 即 QQ子频道
:::

|方法|是否公开|说明|
|:---------------|:----|:---------------|
|ChannelMessageEvent|否||

#### 事件参数

|字段|类型|说明|
|:---------------|:-----|:---------------|
|islandId|string|群号|
|channelId|string|频道号|
|userId|string|用户号|
|messageId|string|消息ID|
|messageBody|string|消息内容|

#### 事件返回

[消息返回](./const.md#消息返回)

## 成员加入事件

|方法|是否公开|说明|
|:---------------|:----|:---------------|
|MemberJoinEvent|否||

#### 事件参数

|字段|类型|说明|
|:---------------|:-----|:---------------|
|subEvent|int|[子事件](./const.md#子事件)|
|islandId|string|群号|
|userId|string|用户号|
|applyId|string|申请标识|
|applyReason|string|申请理由|
|operateUserId|string|操作用户号|
|operateReason|string|操作理由|

#### 事件返回

[消息返回](./const.md#消息返回)


## 成员退出事件

|方法|是否公开|说明|
|:---------------|:----|:---------------|
|MemberLeaveEvent|否||

#### 事件参数

|字段|类型|说明|
|:---------------|:-----|:---------------|
|subEvent|int|[子事件](./const.md#子事件)|
|islandId|string|群号|
|userId|string|用户号|
|operateUserId|string|操作用户号|
|operateReason|string|操作理由|

#### 事件返回

[消息返回](./const.md#消息返回)