import axios from "axios";

// const agent = new https.Agent({
// rejectUnauthorized: false,
// cert: fs.readFileSync('./public/certificates/localhost.pem'),
// key: fs.readFileSync('./public/certificates/localhost-key.pem'),
//   });

const baseURL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  // httpsAgent: agent,
  baseURL,
  timeout: 5000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  // const token = getToken();

  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }

  return config;
});

axiosInstance.interceptors.response.use(
  (res) => res,
  function (error) {
    if (401 === error.response.status) {
      // useAuthStore().logout();
      /* swal({
          title: "Session Expired",
          text: "Your session has expired. Would you like to be redirected to the login page?",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Yes",
          closeOnConfirm: false
      }, function(){
          window.location = '/login';
      }); */
    } else {
      return Promise.reject(error);
    }
  },
);

export default axiosInstance;
