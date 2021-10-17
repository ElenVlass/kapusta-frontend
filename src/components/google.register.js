import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/operations';
import GoogleLogin from 'react-google-login';

export default function Google() {
  const dispatch = useDispatch();
  let user = {};
  const responseGoogle = res => {
    if (res.profileObj) {
      user = {
        name: res.profileObj.name,
        email: res.profileObj.email,
        googleId: res.profileObj.googleId,
        picture: res.profileObj.imageUrl,
      };
      dispatch(authOperations.registerWithGoogle(user));
    }
  };
  const responseError = res => {
    console.log(res.message);
  };

  return (
    <>
      <GoogleLogin
        clientId="634735810645-al9bj1ogo2dc2nbahur71e0t35kin088.apps.googleusercontent.com"
        buttonText="SingIn"
        onSuccess={responseGoogle}
        onFailure={responseError}
        cookiePolicy={'single_host_origin'}
      />
    </>
  );
}
