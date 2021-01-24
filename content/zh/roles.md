---
title: Roles
description: ''
position: 3
category: Reference
---

权限可以被分配给用户和 API 密钥，用来控制其访问。

## 权限列表

这里是 ScoreDB API Server 所有可用的权限：

### `studentdb`

**读取 StudentDB 的权限。**

此权限可以只读访问 StudentDB 有关的所有 API。使用有权访问 StudentDB 存储库的 GitHub 账号登录可以自动取得此权限。

### `user:token`

**管理当前用户密钥的权限**

此权限可以管理当前用户的所有密钥。通过 web UI 登录将自动获得此权限。

### `admin`

**系统管理员权限**

访问任何 API 的权限。此权限只能人工授予。
