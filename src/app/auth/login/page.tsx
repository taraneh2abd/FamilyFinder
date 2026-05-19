import AuthBackground from "@/app/auth/login/AuthBackground";

// import LoginForm from "@/app/auth/login/LoginForm";

export default function Login() {
	return (
		<div className="w-screen h-screen bg-background overflow-hidden justify-center flex">
			<AuthBackground loginPage={true} />

			{/* <LoginForm /> */}
		</div>
	);
}
