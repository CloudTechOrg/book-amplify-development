# 「Amplify でフルスタックな開発体験をしよう」のコマンドとソースファイル

## 1 章

- [Amplify CLI から構築できる AWS サービス](./chapter-1/amplify_cli_service.md)

- [その他 Amplify CLI のコマンド](./chapter-1/amplify_cli_command.md)

## 2 章

- [Cloud9 の準備](./chapter-2/cloud9.md)
  - [resize.sh](./chapter-2/src/cloud9/resize.sh)

- [Amplify CLI のインストール](./chapter-2/amplify_cli.md)

- [CodeCommit の準備](./chapter-2/codecommit.md)

## 3 章

- [React で画面を作成しよう](./chapter-3/create.md)

- [Amplify Web Hosting を使おう](./chapter-3/amplify_web_hosting.md)

## 4 章

- [Amplify CLI で Cognito を構築しよう](./chapter-4/amplify_add_auth.md)

- [Amplify Libraries を使おう](./chapter-4/amplify_libraries.md)

- [フロントエンドに反映しよう](./chapter-4/frontend.md)
  - [App.js](./chapter-4/src/frontend/App.js)

## 5 章

- [Amplify CLI で AppSync と DynamoDB を構築しよう](./chapter-5/amplify_add_api.md)

  - [schema.graphql](./chapter-5/src/appsync/schema.graphql)

- [GraphQL のテストをしよう](./chapter-5/amplify_mock_api.md)

  - [schema.graphql](./chapter-5/src/mock/schema.graphql)

- [フロントエンドに反映しよう](./chapter-5/frontend.md)
  - [DynamoDB.jsx](./chapter-5/src/frontend/DynamoDB.jsx)
  - [App.js](./chapter-5/src/frontend/App.js)

## 6 章

- [Amplify CLI で S3 を構築しよう](./chapter-6/amplify_add_storage.md)

- [フロントエンドに反映しよう](./chapter-6/frontend.md)

  - [S3.jsx](./chapter-6/src/frontend/S3.jsx)
  - [DynamoDB.jsx](./chapter-6/src/frontend/DynamoDB.jsx)

## 7 章

- [パターン１）CloudFormation で SNS を構築しよう](./chapter-7/cloudformation.md)

  - [sns-cloudformation-template.json](./chapter-7/src/cloudformation/sns-cloudformation-template.json)

- [パターン２）CDK で SNS を構築しよう](./chapter-7/cdk.md)

  - [cdk-stack.ts](./chapter-7/src/cdk/cdk-stack.ts)
 
- [フロントエンドに反映しよう](./chapter-7/frontend.md)

## 8 章

- [Amplify CLI で Lambda を構築しよう](./chapter-8/amplify_add_function.md)

- [パターン１）Node.js で Lambda 関数を作成しよう](./chapter-8/nodejs.md)

  - [index.js](./chapter-8/src/node.js/index.js)

- パターン２）Go で Lambda 関数を作成しよう

  - [main.go](./chapter-8/src/go/main.go)

- [Lambda から SNS を呼び出せるようにしよう](./chapter-8/sns_from_lambda.md)

- [Lambda 関数のテストをしよう](./chapter-8/amplify_mock_function.md)

- [AppSync で連携しよう](./chapter-8/appsync.md)

  - [schema.graphql](./chapter-8/src/appsync/schema.graphql)

- [GraphQL のテストをしよう](./chapter-8/amplify_mock_api.md)

- [フロントエンドに反映しよう](./chapter-8/frontend.md)

  - [Lambda.jsx](./chapter-8/src/frontend/Lambda.jsx)

  - [App.js](./chapter-8/src/frontend/App.js)

## 9 章

- [X-Ray でトレース監視を出来るようにしよう](./chapter-9/trace.md)

  - [index.js](./chapter-9/src/trace/index.js)

## 10 章

- パターン２）無料でドメインを取得しよう

  - [お名前.com](https://www.onamae.com/)

- [Amplify で HTTPS 化しよう](./chapter-10/amplify_console.md)

## 11 章

- [ECR リポジトリを作成しよう](./chapter-11/ecr.md)

  - [cdk-stack.ts](./chapter-11/src/ecr/cdk-stack.ts)

- [パターン１）Node.js の Docker イメージ作成の準備をしよう](./chapter-11/nodejs.md)

  - [index.js](./chapter-11/src/nodejs/index.js)

  - [Dockerfile](./chapter-11/src/nodejs/Dockerfile)

- [パターン２）Go のイメージを作成の準備をしよう](./chapter-11/go.md)

  - [main.go](./chapter-11/src/go/main.go)

  - [Dockerfile](./chapter-11/src/go/Dockerfile)

- [イメージを作成して ECR リポジトリにプッシュしよう](./chapter-11/push.md)

- [App Runner を構築しよう](./chapter-11/apprunner.md)

  - [cdk-stack.ts](./chapter-11/src/apprunner/cdk-stack.ts)

- [Amplify のビルドに組み込もう](./chapter-11/build.md)

  - [amplify.yml](./chapter-11/src/build/amplify.yml)

- [AppSync で連携しよう](./chapter-11/appsync.md)

  - [schema.graphql](./chapter-11/src/appsync/schema.graphql)

- [フロントエンドに反映しよう](./chapter-11/frontend.md)

  - [AppRunner.jsx](./chapter-11/src/frontend/AppRunner.jsx)

  - [App.js](./chapter-11/src/frontend/App.js)

## 12 章

- [Aurora Serverless を構築しよう](./chapter-12/aurora.md)

  - [cdk-stack.ts](./chapter-12/src/aurora/cdk-stack.ts)

- [AppSync で連携しよう](./chapter-12/appsync.md)

- [フロントエンドに反映しよう](./chapter-12/frontend.md)

  - [Aurora.jsx](./chapter-12/src/frontend/Aurora.jsx)

  - [App.js](./chapter-12/src/frontend/App.js)

## 13 章

- [後片付け](./chapter-13/clean_up.md)
