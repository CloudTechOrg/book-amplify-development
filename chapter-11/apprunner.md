```sh
$ amplify add custom
```

**backend-config.json**に追加

> **Note**
> コメントアウトは削除

```json
"apprunner": {
  "providerPlugin": "awscloudformation",
  "service": "customCDK", // カンマを追記
  // ここから
  "dependsOn": [
    {
      "category": "custom",
      "resourceName": "ecr"
      "attributes": [
        "repositoryUri"
      ]
    }
  ]
  // ここまで追記
},
```

```sh
$ amplify env checkout dev
```

**cdk-stack.ts**は[こちら](./src/apprunner/cdk-stack.ts)

```sh
$ amplify push
```
