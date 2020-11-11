export interface ItfUser {
    _id: string;
    local: {
        username: string;
        email: string;
        password: string;
        verify_token: string;
        status: boolean;
    }
    avatar: string;
    phone: number;
    address: string;
    birthday: Date;
    create_at: Date;
    update_at: Date;
    delete_at: Date;
}