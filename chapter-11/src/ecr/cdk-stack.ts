import type * as AmplifyHelpers from "@aws-amplify/cli-extensibility-helper";
import * as cdk from "aws-cdk-lib";
import * as ecr from "aws-cdk-lib/aws-ecr";
import type { Construct } from "constructs";

import { AmplifyDependentResourcesAttributes } from "../../types/amplify-dependent-resources-ref";

export class cdkStack extends cdk.Stack {
  constructor(
    scope: Construct,
    id: string,
    props?: cdk.StackProps,
    amplifyResourceProps?: AmplifyHelpers.AmplifyResourceProps
  ) {
    super(scope, id, props);

    new cdk.CfnParameter(this, "env", {
      type: "String",
      description: "Current Amplify CLI env name",
    });

    const repository = new ecr.Repository(this, "Repo", {
      repositoryName: `amplifyapp-ecr-${cdk.Fn.ref("env")}`,
      imageScanOnPush: true,
    });

    new cdk.CfnOutput(this, "repositoryUri", {
      value: repository.repositoryUri,
      description: "The arn of the Repository URI",
    });
  }
}
