---
title: API Server
description: ''
position: 2
category: Introduction
---

ScoreDB v3 API Server 是基于 [Laravel 框架](https://laravel.com/) 制成的，可以让你自由访问 ScoreDB 和 StudentDB，对其中数据进行多种操作。

## 身份认证

API Server 使用 [Laravel Sanctum](https://laravel.com/docs/8.x/sanctum) 进行身份认证，对外支持其中的 **API 密钥** 认证方法。

要获取新的 API 密钥，你可以在 web UI 中[创建一个](https://scoredb.tech/profile/tokens) ，也可以使用有 [`user:token`](/roles#usertoken) 权限的其它密钥调用 [Tokens API](/endpoint-tokens) 创建一个。

获取密钥后，只需要在 HTTP 请求中加入如下的 `Authorization` Header，就可以自由发送请求了：
```
Authorization: Bearer placeyourtokenhere
```

请一定保管好自己的密钥，因为任何得到它的人都可以用它来以你的身份执行操作。

### 密钥权限 (Roles)

在创建密钥时，你可能会注意到密钥可以被分配不同的权限，这些权限必须是你的账号所有权限的**子集**。在创建密钥时，请注意合理为密钥分配权限，确保自己账号的安全性。

<alert type="warning">
请注意，密钥被创建后将不能更改其权限。若你需要更改密钥的权限，只能重新创建一个。
</alert>
