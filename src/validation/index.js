
import { object,string } from "yup";
    let validationSchema = object({
        email: string().email('E-mail doğruluğunu kontrol ediniz.').required('Email girilmesi zorunlu'),
        password: string().min(6, 'Şifre minumum 6 karakterden oluşmalıdır.').max(16, 'Şifre maximum 16 karakterden oluşmalıdır.')
    });



export const validation = async (userInfo) => {

    try {
        await validationSchema.validate(userInfo);
        return true;
    } catch (error) {
        return {
            statusCode:false,
            message:error.message
        };
    }
}
