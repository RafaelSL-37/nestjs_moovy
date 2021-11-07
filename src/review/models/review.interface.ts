import { UserModel } from "src/user/models/user.interface";

export interface ReviewModel{
    id?: number;
    m_id: number;
    rev_file_path?: string;
    user_id: UserModel;
}