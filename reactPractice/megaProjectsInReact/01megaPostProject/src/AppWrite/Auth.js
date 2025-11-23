import { use } from "react";
import conf from "../Conf/Conf";
import { Client, ID, Account } from "appwrite"


export class AuthSerivce {

    client = new Client();
    account;

    constructor() {
        // console.log("url : ", String(import.meta.env.VITE_APPWRITE_URL));

        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)

    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                return this.logIn({ email, password })
            } else {
                return userAccount;
            }

        } catch (error) {
            console.log("Authservice :: createAccount : ", error);

        }
    }

    async logIn({ email, password }) {
        try {
            const userAccount = await this.account.createEmailPasswordSession(email, password)
            return userAccount;

        } catch (error) {
            console.log("AuthService :: logIn : ", error);

        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            // console.log("Appwrite serive :: getCurrentUser :: error", error);
            return null;
        }
        // return null


    }

    async logOut() {
        try {
            return await this.account.deleteSession("current");
        } catch (error) {
            console.log("authService :: logOut :", error);
        }
    }


}

const authService = new AuthSerivce();

export default authService;

