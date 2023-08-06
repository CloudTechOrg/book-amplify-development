const { SNSClient, PublishCommand } = require("@aws-sdk/client-sns");

const sns = new SNSClient({ region: "ap-northeast-1" });

exports.handler = async (event) => {
  const params = {
    Message: "Amplifyのテストメールです！", // 送信するメッセージ内容
    Subject: "Amplifyテスト", // メールの件名
    TopicArn: process.env.SNSTOPICARN, // メッセージを送信するSNSトピックのARN
  };

  try {
    const command = new PublishCommand(params);
    await sns.send(command);
    return {
      statusCode: 200,
      body: JSON.stringify("メールの送信が成功しました"),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify("メールの送信に失敗しました"),
    };
  }
};
