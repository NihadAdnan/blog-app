import { handleGithubLogin, login } from "@/lib/action"


const LoginPage=async()=> {
  return (
    <div>
      <form action={handleGithubLogin}>
        <button>
          SignIn with Github
        </button>
      </form>
      <form action={login}>
        <input type="text" placeholder='username' name='username'/>
        <input type="password" placeholder='Password' name='password'/>
        <button>Login</button>
      </form>
    </div>
  )
}

export default LoginPage