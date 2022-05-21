const AWS = require('aws-sdk');
const config = require('../config/config');
const fs = require('fs');

const s3 = new AWS.S3({
    accessKeyId: config.s3.accessKey,
    secretAccessKey: config.s3.secretAccess,
})

const uploadFile = async (files) => {
    try {
       console.log(files);
        // const blob = fs.readFileSync(imagePath)
        const uploadedImage = await s3.upload({
            Bucket: config.s3.bucketName,
            Key: Date.now().toString(),
            Body: files,
        }).promise()
        console.log(uploadedImage)
        return uploadedImage.Location;
        
    } catch (error) {
    console.log(error)
    }
}

module.exports = {
    uploadFile
};