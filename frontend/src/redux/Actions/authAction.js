import { AuthTypes } from "../action_types";
import apiConnector from "../../services/apiConnector";
import { agencyEndPoints } from "../../services/api";
import { toast } from "react-toastify";
import {getAccountInfo} from "./profileAction";


export const authLogin = (user_data, navigate) => {
  return async (dispatch) => {
    try {
      
      dispatch({
        type: AuthTypes.LOGIN_REQUEST,
      });

      
      const response = await apiConnector({
        method: "POST",
        url: agencyEndPoints.LOGIN_API,
        body: user_data,
      });

      
      const token = response.token;

      
      sessionStorage.setItem("_token", token);

      
      dispatch({
        type: AuthTypes.LOGIN_SUCCESS,
        payload: { token }, 
      });

      dispatch(getAccountInfo());

      
      toast.success("Login successfully!");

      
      navigate("/");
    } catch (error) {
      
      dispatch({
        type: AuthTypes.LOGIN_FAILED,
      });

      
      toast.error(error.response.data.message);
    }
  };
};


export const authRegister = (user_data, navigate) => {
  return async (dispatch) => {
    try {
      
      dispatch({
        type: AuthTypes.SIGNUP_REQUEST,
      });

      
      await apiConnector({
        method: "POST",
        url: agencyEndPoints.REGISTER_API,
        body: user_data,
      });

      
      dispatch({
        type: AuthTypes.SIGNUP_SUCCESS,
      });

      
      toast.success("Successfully registered!");

      
      navigate("/login");
    } catch (error) {
      
      dispatch({
        type: AuthTypes.SIGNUP_FAILED,
      });

      
      toast.error(error.response.data.message);
    }
  };
};

export const updatePassword = (passwordData) => {
  return async (dispatch) => {
    try {
      
      dispatch({
        type: AuthTypes.UPDATE_PASSWORD_REQUEST,
      });

      
      await apiConnector({
        method: "PUT",
        url: agencyEndPoints.UPDATE_PASSWORD_API, 
        body: passwordData,
      });

      
      dispatch({
        type: AuthTypes.UPDATE_PASSWORD_SUCCESS,
      });

      
      toast.success("Password updated successfully!");
    } catch (error) {
      
      dispatch({
        type: AuthTypes.UPDATE_PASSWORD_FAILED,
      });

      
      toast.error(error.response.data.message);
    }
  };
};


export const authLogout = () => {
  return (dispatch) => {
    
    sessionStorage.removeItem("_token");

    
    dispatch({
      type: AuthTypes.LOGOUT,
    });

    
    toast.success("Logged out");
  };
};
