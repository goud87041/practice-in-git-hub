import {Client,Databases,Storage, Query,ID, Permission, Role } from "appwrite"
import conf from "../Conf/Conf"


class postSerivce{
    client = new Client(); 
    databases;
    bucket;

    constructor(){
        this.client 
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title,slug,content,featuredImage,status, userId}){

        status = status === "true";
;
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseId,
                conf.appwriteCollectionId,slug,
                {
                    title,
                    content,
                    featuredImage: featuredImage,
                    status,
                    userId
            }
        )
        
        } catch (error) {
            console.log("Post Service :: createPost :",error);
            
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){

                status = status === "true"  ;

            try {
                return await this.databases.updateDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug,{
                        title,
                        content,
                        status,
                        featuredImage
                    }
                )
            } catch (error) {
                console.log("PostService :: updatePost : ", error);
                
            }
    }

    async deletePost(slug){
        // console.log(slug);
        
        try {
            await  this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true ;
        } catch (error) {
            console.log("PostSerivce :: deletePost : ", error);
            return false ;
            
        }
    }

    async getPost(slug){
       try {
         return await this.databases.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
        )
       } catch (error) {
        console.log("PostService :: getPost : ", error);
       }
    }

    async getAllPost({querys = [Query.equal("status" , "active")]}){
        try {
           return  await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            querys
           )
        } catch (error) {
            console.log("PostService :: getAllPost : ", error);
            return false ;
            
        }
    }

    async getPosts(userId) {
    return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        [
            Query.equal("userId", userId)
        ]
    );
}



    // file upload service 

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file ,
            )
        } catch (error) {
            console.log("FileService :: UploadFile : ", error);
            return false ;
            
        }
    }


    async deleteFile(fileId){       
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId 
            )
            return true ;
        } catch (error) {

            console.log("FileService :: deleteFile : ", error);
            return false ;
            
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFileView(
            conf.appwriteBucketId,
            fileId
        )
    }

    
}

const PostService = new postSerivce()

export default  PostService;