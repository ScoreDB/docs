---
title: User
description: ''
position: 4
category: Endpoints
---

以下为用户相关的 API 列表。

## 用户信息

### 查看当前用户
#### 请求：`GET /user`
#### 响应示例：
```json
{
    "id": 1,                                      // 用户 ID
    "name": "JingBh",                             // 用户名
    "email": "jingbh@example.com",                // 电子邮箱地址
    "created_at": "2021-01-17T08:55:48.000000Z",  // 注册时间
    "avatar": "https://example.com/avatar.jpg",   // 头像
    "roles": [                                    // 当前拥有的权限
        "studentdb:read"
    ]
}
```
