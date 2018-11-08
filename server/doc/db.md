#### 数据库设计

##### t_user(用户表)
|名称     |类型    |描述     |
| ------ | ------ | ------ |
| id     | uuid   | 用户id  |
| account| String| 账号|
| password| String| 密码   |
| photo   | String| 头像   |
| userName   | String| 用户名   |
| description| String| 简介 |
| sex        | int  | 性别  |
| birthday  |  Date | 生日  |
| address   | Object| 地区  |
| channels | Array | 频道 |  
| createTime  |  Date | 创建时间  |
| updateTime   | Date| 更新时间  |
| status | int | 状态  1 可用， 0 禁用 | 


##### t-channel(频道表)
|名称     |类型    |描述     |
| ------ | ------ | ------ |
| id     | uuid   | 用户id  |
| name | String| 频道名称 |
| createTime  |  Date | 创建时间  |
| updateTime   | Date| 更新时间  |
| status | int | 状态  1 可用， 0 禁用 | 


##### t-news
|名称     |类型    |描述     |
| ------ | ------ | ------ |
| id     | uuid   | 新闻id  |
| user | Object |  创建人|
| title | String| 标题   |
| content| String| 内容  |
| coverImg | String | 封面图 |
|commentCount| int | 评论数|
| createTime  |  Date | 创建时间  |
| updateTime   | Date| 更新时间  |
| status | int | 状态  1 可用， 0 禁用 | 


##### t-micro-toutiao
|名称     |类型    |描述     |
| ------ | ------ | ------ |
| id     | uuid   | 新闻id  |
| user | Object |  创建人|
| title | String| 标题   |
| content| String| 内容  |
| coverImg | String | 封面图 |
|commentCount| int | 评论数|
| createTime  |  Date | 创建时间  |
| updateTime   | Date| 更新时间  |
| status | int | 状态  1 可用， 0 禁用 | 

##### t-follow（关注）
|名称     |类型    |描述     |
| ------ | ------ | ------ |
| id     | uuid   | 新闻id  |
| userId | string |  创建人|
| followUser | Object | 关注用户信息   |
| createTime  |  Date | 创建时间  |
| updateTime   | Date| 更新时间  |
| status | int | 状态  1 可用， 0 禁用 | 


##### t-comment（评论）
|名称     |类型    |描述     |
| ------ | ------ | ------ |
| id     | uuid   | 新闻id  |
| user | Object |  创建人|
| comment | string | 内容   |
| replyId | uuid | 回复id   |
| createTime  |  Date | 创建时间  |
| updateTime   | Date| 更新时间  |
| status | int | 状态  1 可用， 0 禁用 | 