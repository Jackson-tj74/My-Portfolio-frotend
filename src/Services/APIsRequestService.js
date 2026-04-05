
import { AuthHeader, BASE_URL } from "../Utils/RequestUtils";

export const APIsRequestService = {
  WelcomeAPI: async () => {
    const headers = AuthHeader('json');
    return await fetch(`${BASE_URL}/api/welcome`, { method: 'GET', headers });
  },

  SignInAPI: async (data) => {
    const headers = AuthHeader('json');
    return await fetch(`${BASE_URL}/auth/login`, { body: JSON.stringify(data), method: 'POST', headers })
  },

  SignUpAPI: async (data) => {

    const headers = AuthHeader('json');
    return await fetch(`${BASE_URL}/auth/signup`, { body: JSON.stringify(data), method: 'POST', headers })
  },
  
  LogOutAPI: async () => {
    const headers = AuthHeader('json')
    return await fetch(`${BASE_URL}/auth/logout`, { method: 'POST', headers })

  },
 

  contactUsAPI: async (data) => {

    const headers = AuthHeader('json');
    return await fetch(`${BASE_URL}/auth/contact`, { body: JSON.stringify(data), method: 'POST', headers })
  },

   GetMessagesAPI: async (data) => {

    const headers = AuthHeader('json');
    return await fetch(`${BASE_URL}/auth/get-contacts`, { body: JSON.stringify(data), method: 'GET', headers })
  },
   DeleteMessageAPI: async (id) => {

    const headers = AuthHeader('json');
    return await fetch(`${BASE_URL}/auth/delete-contact/${id}`, { method: 'DELETE' })
  },

    GetProfileAPI: async () => {
    const headers = AuthHeader('json');
    return await fetch(`${BASE_URL}/auth/profile`, { method: 'GET', headers })
  },
  
  EditProfileAPI: async (data) => {
    const headers = AuthHeader("form-data");
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('location', data.location);
    data.avatar && formData.append('avatar', data.avatar);

    return fetch(`${BASE_URL}/auth/edit-profile`, {
      body: formData,
      method: "PATCH",
      headers,
    });
  },

 
 DeleteAccountAPI: async () => {
  const headers = AuthHeader('json');

  return await fetch(`${BASE_URL}/auth/delete-account`, {
    method: "DELETE",
    headers,
  });
},

}



 
 

 