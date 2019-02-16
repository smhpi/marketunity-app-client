export default {
  MAX_ATTACHMENT_SIZE: 5000000,

  s3: {
    REGION: "us-east-2",
    BUCKET: "marketunity-app-uploads"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://e27o7cidtl.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_OuE5GKvFq",
    APP_CLIENT_ID: "62emokta45rbff9bffpf2t8bs5",
    IDENTITY_POOL_ID: "us-east-2:e808ea35-2235-486c-a282-4de79da83f8b"
  }
};
