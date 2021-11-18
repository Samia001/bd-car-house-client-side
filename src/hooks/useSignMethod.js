import { getAuth } from "@firebase/auth";
import { useHistory, useLocation } from "react-router";
import Swal from "sweetalert2";
import useAuth from "./useAuth";

const useSignMethod = () => {
  const {
    auth,
    googleSignIn,
    emailPassSignIn,
    createUserWithEmail,
    setIsLoading,
  } = useAuth();

  const location = useLocation();
  const redirect_uri = location.state?.from || "/dashboard";
  const history = useHistory();

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    googleSignIn()
      .then((result) => {
        // history.push(redirect_uri);
        fetch(`https://frozen-reaches-53021.herokuapp.com/users`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            name: result.user.displayName,
            email: result.user.email,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
              title: "Sign In successfully",
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
            });
          });
      })
      .catch((error) => {
        Swal.fire({
          title: error.message,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        setIsLoading(false);
      })
      .finally(() => {
        const user = getAuth().currentUser;
        setIsLoading(false);
        user?.email
          ? history.push(redirect_uri)
          : history.push(location.state?.from);
      });
  };

  const handleEmailPassSignIn = (email, password) => {
    setIsLoading(true);
    emailPassSignIn(email, password)
      .then(() => {
        Swal.fire({
          title: "Sign In successfully",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        // history.push(redirect_uri);
      })
      .catch((error) => {
        Swal.fire({
          title: error.message,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        setIsLoading(false);
      })
      .finally(() => {
        const user = getAuth().currentUser;
        setIsLoading(false);
        user?.email
          ? history.push(redirect_uri)
          : history.push(location.state?.from);
      });
  };

  const handleNewUserWithEmail = (email, password, fullName) => {
    createUserWithEmail(email, password)
      .then((result) => {
        auth.currentUser.displayName = fullName;

        fetch(`https://frozen-reaches-53021.herokuapp.com/users`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ name: fullName, email: email }),
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
              title: "Your account has been created and you are logged in!",
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
            });
          });
      })
      .catch((error) => {
        setIsLoading(false);
      })
      .finally(() => {
        const user = getAuth().currentUser;
        setIsLoading(false);
        user?.email
          ? history.push(redirect_uri)
          : history.push(location.state?.from);
      });
  };

  return {
    handleGoogleSignIn,
    handleEmailPassSignIn,
    handleNewUserWithEmail,
  };
};

export default useSignMethod;
