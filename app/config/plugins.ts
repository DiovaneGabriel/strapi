export default ({ env }) => ({

    upload: {
        config: {
            provider: 'aws-s3',
            providerOptions: {
                accessKeyId: env('AWS_ACCESS_KEY_ID'),
                secretAccessKey: env('AWS_ACCESS_SECRET'),
                region: env('AWS_REGION'),
                // endpoint: env('AWS_ENDPOINT'),            
                params: {
                    ACL: 'private',
                    Bucket: env('AWS_BUCKET'),
                    signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60),
                },
            },
        },
    },

});
