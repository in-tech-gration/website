export const metadata = {
  title: 'Reset Password - Creative',
  description: 'Page description',
}

export default function ResetPassword() {
  return (
    <>
      {/* Page header */}
      <div className="max-w-3xl mx-auto text-center pb-12">
        <h1 className="h2 font-cabinet-grotesk">Change your password</h1>
      </div>
      {/* Form */}
      <div className="max-w-sm mx-auto">
        <form>
          <div className="flex flex-wrap mb-4">
            <div className="w-full">
              <label className="block text-gray-500 text-sm font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input id="email" type="email" className="form-input w-full text-gray-800" required />
            </div>
          </div>
          <div className="text-right">
            <button className="btn-sm text-white bg-blue-500 hover:bg-blue-600 shadow-sm">Reset Password</button>
          </div>
        </form>
      </div>    
    </>
  )
}
