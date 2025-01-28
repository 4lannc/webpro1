import Button from "../Element/Button";
import InputForm from "../Element/Input"

const FormSaran = () => {
    return (
        <form action="" method="POST">
            <InputForm 
                label="Apa Keluhan & Saran anda?" 
                type="email" 
                placeholder="Masukkan disini..." 
                name="email"
            />
        
        
            <Button className="bg-red-600 w-full">Kirim</Button>
        </form>
    );
};

export default FormSaran;