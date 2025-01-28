import Button from "../Element/Button";
import InputForm from "../Element/Input"

const FormLogin = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        localStorage.setItem("email", event.target.email.value)
        localStorage.setItem("password", event.target.password.value)
        window.location.href = "/products";
    }
    return (
        <form onSubmit={handleLogin}>
            <InputForm 
                label="Email" 
                type="email" 
                placeholder="Enter your Email" 
                name="email"
            />
            <InputForm 
                label="Password" 
                type="password" 
                placeholder="Enter your password" 
                name="password"
            />
        
            <Button className="bg-red-600 w-full" type="submit">
                Login
            </Button>
        </form>
    );
};

export default FormLogin;