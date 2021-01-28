---
title: API Server
description: ''
position: 2
category: Introduction
---

ScoreDB v3 API Server 是基于 [Laravel 框架](https://laravel.com/) 制成的，可以让你自由访问 ScoreDB 和 StudentDB，对其中数据进行多种操作。

## 身份认证

API Server 使用 [Laravel Sanctum](https://laravel.com/docs/8.x/sanctum) 进行身份认证，对外支持其中的 **API 密钥** 认证方法。

要获取新的 API 密钥，你可以在 web UI 中[创建一个](https://scoredb.tech/profile/tokens) ，也可以使用有 [`user:token`](/roles#usertoken) 权限的其它密钥调用 Tokens API 创建一个。

获取密钥后，只需要在 HTTP 请求中加入如下的 `Authorization` Header，就可以自由发送请求了：
```
Authorization: Bearer placeyourtokenhere
```

请一定保管好自己的密钥，因为任何得到它的人都可以用它来以你的身份执行操作。

### 密钥权限 (Roles)

在创建密钥时，你可能会注意到密钥可以被分配不同的权限，这些权限必须是你的账号所有权限的**子集**。在创建密钥时，请注意合理为密钥分配权限，确保自己账号的安全性。

<alert type="info">
<a href="/roles">这里</a>有一份所有可用权限的列表。
</alert>

<alert type="warning">
请注意，密钥被创建后将不能更改其权限。若你需要更改密钥的权限，只能重新创建一个。
</alert>

在发送 API 请求时，若缺少需要的权限，服务器会返回 **403** 错误。

## 响应类型

在调用 API 时，你可以传入 `Accept` Header 来指定服务器应该返回的响应类型，如 `application/json`。如果不指定，Laravel 在一些情况下会返回 HTML，显然是不适合程序读取的。

## 频率限制

为避免服务器负担过大，所有 API 调用都设有频率限制。如无特殊标明，API 的频率限制为 **每分钟最多 60 次调用** ，**所有 API 次数累加计算**（即访问两个不同的 API 各一次算作两次访问）。

未登录时，API 频率限制按 IP 地址进行；若已登录，按用户进行（即同一用户使用两个不同的 IP 地址各请求一次，也算作次两次访问）。
