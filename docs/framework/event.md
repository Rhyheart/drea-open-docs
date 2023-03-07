# 事件

## 应用初始化

#### 方法名称

|方法|是否公开|说明|
|:---------------|:----|:---------------|
|Init|是||

#### 方法参数

无

#### 方法返回

首先，我们拼接好应用信息JSON，如下示例：

``` json
{
    "sdk": "7",
    "id": "cc.drea.demo",
    "name": "示例应用",
    "ver": "6.0.0",
    "author": "Rhyheart",
    "desc": "这是一款测试应用！",
    "authList": ["AppLoad", "AppExit", "AppWindow", "PersonalMessageEvent", "ChannelMessageEvent"],
    "AppEvent": 12345
}
```

然后我们调用[置应用签名](./method.md#置应用签名)方法对应用信息JSON进行签名，最后返回签名后的文本值即可！

#### 参数说明

|字段|类型|说明|
|:---------------|:-----|:---------------|
|sdk|int|SDK版本号，当前为7|
|id|string|应用ID|
|name|string|应用名称|
|ver|string|应用版本|
|author|string|应用作者|
|desc|string|应用描述|
|authList|`list<string>`|权限列表，设置了指定[权限](./const.md#事件类型)才会接收到指定[事件](#事件内容)|
|AppEvent|int|应用事件，传入处理函数指针|

## 应用事件

#### 方法名称

|方法|是否公开|说明|
|:---------------|:----|:---------------|
|AppEvent|是|应用事件|

#### 方法参数

|字段|类型|是否必传|说明|
|:---------------|:-----|:-----|:---------------|
|message|string|是|事件内容，为JSON文本，其中`event`字段代表[事件类型](./const.md#事件类型)，不同事件，[事件内容](#事件内容)也不相同|

#### 方法返回

[消息返回](./const.md#消息返回)


## 事件内容

### 应用载入

#### 参数

|字段|类型|说明|
|:---------------|:-----|:---------------|
|event|string|事件，固定为`AppLoad`|

#### 示例

``` json
{
    "event": "AppLoad"
}
```

### 应用退出

#### 参数

|字段|类型|说明|
|:---------------|:-----|:---------------|
|event|string|事件，固定为`AppExit`|

#### 示例

``` json
{
    "event": "AppExit"
}
```


### 应用窗口

#### 参数

|字段|类型|说明|
|:---------------|:-----|:---------------|
|event|string|事件，固定为`AppWindow`|

#### 示例

``` json
{
    "event": "AppWindow"
}
```


### 个人消息事件

#### 参数

|字段|类型|说明|
|:---------------|:-----|:---------------|
|event|string|事件，固定为`PersonalMessageEvent`|
|islandId|string|群号|
|userId|string|用户号|
|messageId|string|消息ID|
|messageBody|string|消息内容|

#### 示例

``` json
{
    "event": "PersonalMessageEvent",
    "islandId": "100000",
    "userId": "12345",
    "messageId": "1234567890",
    "messageBody": "消息内容"
}
```


### 个人添加事件

#### 参数

|字段|类型|说明|
|:---------------|:-----|:---------------|
|event|string|事件，固定为`PersonalAddEvent`|
|userId|string|用户号|
|applyId|string|申请标识|
|applyReason|string|申请理由|

#### 示例

``` json
{
    "event": "PersonalAddEvent",
    "userId": "12345",
    "applyId": "1234567890",
    "applyReason": "申请理由"
}
```


### 频道消息事件

:::tip
由于适配了多平台，因此此事件进行了抽象

<!--

对于QQ，群 即 QQ群，频道 即 QQ群，频道消息事件 即 群消息事件

-->

对于Q频，群 即 QQ频道，频道 即 QQ子频道

对于DoDo，群 即 DoDo群，频道 即 DoDo频道
:::

#### 参数

|字段|类型|说明|
|:---------------|:-----|:---------------|
|event|string|事件，固定为`ChannelMessageEvent`|
|islandId|string|群号|
|channelId|string|频道号|
|userId|string|用户号|
|messageId|string|消息ID|
|messageBody|string|消息内容|

#### 示例

``` json
{
    "event": "ChannelMessageEvent",
    "islandId": "100000",
    "channelId": "10000010",
    "userId": "12345",
    "messageId": "1234567890",
    "messageBody": "消息内容"
}
```


### 成员加入事件

#### 参数

|字段|类型|说明|
|:---------------|:-----|:---------------|
|event|string|事件，固定为`MemberJoinEvent`|
|subEvent|int|[子事件](./const.md#子事件)|
|islandId|string|群号|
|userId|string|用户号|
|applyId|string|申请标识|
|applyReason|string|申请理由|
|operateUserId|string|操作用户号|
|operateReason|string|操作理由|

#### 示例

``` json
{
    "event": "MemberJoinEvent",
    "subEvent": 11,
    "islandId": "100000",
    "userId": "12345",
    "applyId": "1234567890",
    "applyReason": "申请理由",
    "operateUserId": "54321",
    "operateReason": "操作理由"
}
```


### 成员退出事件

#### 参数

|字段|类型|说明|
|:---------------|:-----|:---------------|
|event|string|事件，固定为`MemberLeaveEvent`|
|subEvent|int|[子事件](./const.md#子事件)|
|islandId|string|群号|
|userId|string|用户号|
|operateUserId|string|操作用户号|
|operateReason|string|操作理由|

#### 示例

``` json
{
    "event": "MemberLeaveEvent",
    "subEvent": 22,
    "islandId": "100000",
    "userId": "12345",
    "operateUserId": "54321",
    "operateReason": "操作理由"
}
```