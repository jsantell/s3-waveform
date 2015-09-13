module.exports = {
  "emptyFile": {
    "MessageId": "002dad35-aba8-4402-b9c3-f959252f9ecf",
    "ReceiptHandle": "uUk89DYFzt0na+A3Jh4fAnbvLSiQdnlM1jfeUQZWgL75MX7sleG7a64veb2J4fcIBv8tgLDG/ifZHS9XjbRY67xbf9ZG++AA4e8ZPrZkhnIrn+1x3uOlmRxPvKGGsryNZv11CyLsD1337sSmmgCKldBcyUIaZ1jPSBz7zxxUIDMM1EbTOkCYAGXxDp7BATgi6kltkUcCCzwHgMeusoavFYBCW0emaZwozK9FHS39TbGDn+F5trfzPzLELZi1yAGpswKE1VkAzdPoOzkpwTefU7hcUAbSdkMtN6X8m1zWt6s=",
    "MD5OfBody": "f84bfcba9661bde22a360c3442e9e683",
    "Body": '{"Records": [{"eventVersion": "2.0","eventSource": "aws:s3","awsRegion": "us-west-2","eventTime": "2014-11-22T20:25:35.498Z","eventName": "ObjectCreated:Put","userIdentity": {"principalId": "A1WHAG8ED66KEW"},"requestParameters": {"sourceIPAddress": "10.220.7.37"},"responseElements": {"x-amz-request-id": "F3E00AADFDE5E238","x-amz-id-2": "0JeMgd3XQLM4hatjot5dMnDe5RxEktkawyhkOhvvekyEdt8XtYZGQfIhOj022u2W"},"s3": {"s3SchemaVersion": "1.0","configurationId": "new-track","bucket": {"name": "wstest","ownerIdentity": {"principalId": "A1WHAG8ED66KEW"},"arn": "arn:aws:s3:::wstest"},"object": {"key": "1234567890/0987654321","size": 0,"eTag": "d41d8cd98f00b204e9800998ecf8427e"}}}]}'
  },
  "testEvent": {
    "MessageId": "3230b8f7-8a38-4daa-b825-6fed49ce1673",
    "ReceiptHandle": "uUk89DYFzt0na+A3Jh4fAkAeYWCJC+TAskbbfIN0cv+YF29aZxWrAIhDn1zFZA73Vv72kkmvbLXxxnWrwZAz5gXZvWsyYEz19pvweruJQFkhv3jzvZzpVkmg4F31vXhm93rzaz6PviEDOYHjI4ypfueCfxBoViPEI5u1qYEMBBJ3N9v+n1daLH8F0jI5XMoE8KXdd2o8jLef39X5HVL+ewYOXKd8XCm5WEWkqvwXbTLEZS967JtUGy4dWH7aMW/47fJ7s+T8hm2h3zTuTNvb9KxpRsWjIF8FN6X8m1zWt6s=",
    "MD5OfBody": "6e3eeb702739b325dbb032f23043e8f7",
    "Body": '{"Service": "Amazon S3","Event": "s3:TestEvent",      "Time": "2014-11-22T20:24:42.722Z",      "Bucket": "wstest","RequestId": "C67F25C6AAE74A81","HostId": "xdlkL2zEtkpja1mCrwheJ1nzwI8+DeuLTyFZmI3qvqXC2g86BMA/9Cp+RdzlU2k2"}'
  },
  "validFile": {
    "MessageId": "002dad35-aba8-4402-b9c3-f959252f9ecf",
    "ReceiptHandle": "uUk89DYFzt0na+A3Jh4fAnbvLSiQdnlM1jfeUQZWgL75MX7sleG7a64veb2J4fcIBv8tgLDG/ifZHS9XjbRY67xbf9ZG++AA4e8ZPrZkhnIrn+1x3uOlmRxPvKGGsryNZv11CyLsD1337sSmmgCKldBcyUIaZ1jPSBz7zxxUIDMM1EbTOkCYAGXxDp7BATgi6kltkUcCCzwHgMeusoavFYBCW0emaZwozK9FHS39TbGDn+F5trfzPzLELZi1yAGpswKE1VkAzdPoOzkpwTefU7hcUAbSdkMtN6X8m1zWt6s=",
    "MD5OfBody": "f84bfcba9661bde22a360c3442e9e683",
    "Body": '{"Records": [{"eventVersion": "2.0","eventSource": "aws:s3","awsRegion": "us-west-2","eventTime": "2014-11-22T20:25:35.498Z","eventName": "ObjectCreated:Put","userIdentity": {"principalId": "A1WHAG8ED66KEW"},"requestParameters": {"sourceIPAddress": "10.220.7.37"},"responseElements": {"x-amz-request-id": "F3E00AADFDE5E238","x-amz-id-2": "0JeMgd3XQLM4hatjot5dMnDe5RxEktkawyhkOhvvekyEdt8XtYZGQfIhOj022u2W"},"s3": {"s3SchemaVersion": "1.0","configurationId": "new-track","bucket": {"name": "wstest","ownerIdentity": {"principalId": "A1WHAG8ED66KEW"},"arn": "arn:aws:s3:::wstest"},"object": {"key": "1234567890/0987654321","size": 1234567,"eTag": "d41d8cd98f00b204e9800998ecf8427e"}}}]}'
  }
};
