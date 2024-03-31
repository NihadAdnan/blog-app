import { handleGithubLogin } from "@/lib/action"


const LoginPage=async()=> {
  return (
    <div>
      <form action={handleGithubLogin}>
        <button>
          SignIn with Github
        </button>
      </form>
    </div>
  )
}

export default LoginPage