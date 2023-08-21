**backend-config.json**に追記

> **Note**
> コメントアウトは削除

```json
"sendMailFunction": {
  "build": true,
  "providerPlugin": "awscloudformation",
  "service": "Lambda", // カンマを追記
  // ここから
  "dependsOn": [
    {
      "category": "custom",
      "resourceName": "sns",
      "attributes": [
        "snsTopicArn"
      ]
    }
  ]
  // ここまでを追記
}
```

```sh
$ amplify env checkout dev
```

**sendMailFunction-cloudformation.template.json**に追記

> **Note**
> コメントアウトは削除

```json
"Parameters": {
    "CloudWatchRule": {
      "Type": "String",
      "Default": "NONE",
      "Description": " Schedule Expression"
    },
    "deploymentBucketName": {
      "Type": "String"
    },
    "env": {
      "Type": "String"
    }, "s3Key": {
      "Type": "String"
    }, // カンマを追記
    //ここから
    "customsnssnsTopicArn": {
      "Type": "String"
    }
    //ここまでを追記
},
```

```json
"Environment": {
  "Variables": {
    "ENV": {
      "Ref": "env"
    },
    "REGION": {
      "Ref": "AWS::Region"
    }, // カンマを追記
    //ここから
    "SNSTOPICARN": {
      "Ref": "customsnssnsTopicArn"
    }
    //ここまでを追記
  }
},
```

一行になっている場合

```json
"Environment": {
    "Variables" : {"ENV":{"Ref":"env"},"REGION":{"Ref":"AWS::Region"},"SNSTOPICARN": {"Ref": "customsnssnsTopicArn"}}
},
```

**custom-policies.json**を変更

```json
[
  {
    "Action": ["sns:Publish"],
    "Resource": [ { "Ref" : "customsnssnsTopicArn" } ]
  }
]
```
