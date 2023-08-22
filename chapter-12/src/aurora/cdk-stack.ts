import * as cdk from "aws-cdk-lib";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as rds from "aws-cdk-lib/aws-rds";
import * as secretsmanager from "aws-cdk-lib/aws-secretsmanager";
import type { Construct } from "constructs";

export class cdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new cdk.CfnParameter(this, "env", {
      type: "String",
      description: "Current Amplify CLI env name",
    });

    const vpc = new ec2.Vpc(this, "AuroraVpc");

    const secret = new secretsmanager.Secret(this, "AuroraSecret", {
      secretName: "rds-db-credentials",
      generateSecretString: {
        secretStringTemplate: JSON.stringify({ username: "clusteradmin" }),
        generateStringKey: "password",
        excludePunctuation: true,
        includeSpace: false,
      },
    });

    const cluster = new rds.ServerlessCluster(this, "AuroraCluster", {
      engine: rds.DatabaseClusterEngine.AURORA_MYSQL,
      vpc,
      credentials: rds.Credentials.fromSecret(secret),
      defaultDatabaseName: "testdb",
      enableDataApi: true,
    });
  }
}
