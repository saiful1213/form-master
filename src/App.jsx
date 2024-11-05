// import SimpleForm from './Components/SimpleForm/SimpleForm'
// import RefForm from "./Components/RefForm/RefForm"
// import StatefulForm from "./Components/StatefulForm/StatefulForm"
// import ReuseableForm from "./Components/ReuseableForm/ReuseableForm"
// import HookForm from "./Components/HookForm/HookForm"

import Grandpa from "./Components/Grandpa/Grandpa"

function App() {

  // const handleSignUp = data => {
  //   console.log('sign up data', data)
  // }

  // const handleUpdate = data => {
  //   console.log('update profile data', data)
  // }

  return (
    <div className="max-w-7xl mx-auto">
    <h1 className="text-4xl font-medium text-center my-10">Form Master</h1>
    <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReuseableForm
        formTitle={'Sign Up'}
        handleSubmit={handleSignUp}>
        <div>
          <h1 className="text-center my-3 font-bold text-3xl">Sign Up</h1>
          <p className="text-center">please sign up right now</p>
        </div>
      </ReuseableForm>

      <ReuseableForm
        formTitle={'Profile Update'}
        handleSubmit={handleUpdate}
        submitBtnText="Update">
        <div>
          <h1 className="text-center my-3 font-bold text-3xl">Update Profile</h1>
          <p className="text-center">always keep your profile updated</p>
        </div>
      </ReuseableForm> */}
    </div>
  )
}

export default App
