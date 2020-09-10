import React, { useState, createContext, useReducer } from "react";

// Create Context Object
const initialState = {
    currentLanguage:"en",
    showDescriptionBox:false,
    notificationCount: 0,
    allNotifications: [],
    showWallet: false,
    signUpImageLink: "",
    categories: [],
    currentMerchants: [],
    currentCoupons:[],
    currentCategoryColor:'black',
    overallCoupons:[],
    overallMerchants: [],
    currentColor:"red",
    isLoading:false,
    selectedCoupon: null,
    showCoupon: false,
    token: "",
    userCoupons: [],
    followings: [],
    redeemHistory: [],
    settings: {
        language:"English",
        locationOn:"On",
        notificationOn: "On"
    },
    categoryList: [],
    showCouponFilter: false,
    selectedMerchant: "",
    location:null,
    currentLocation:null,
    currentDestination:null,
    showMapViewDirections: false,
    showDestinationMarker: false,
    myRedeemList: false,
    selectedCoupons: [],
    walletColor:"rgba(178, 225, 226, 0.7)"

};
export const CounterContext = createContext(initialState);

export const CounterContextProvider = props => {


  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
        
        case 'changeLanguage':
            return {...state, currentLanguage: action.payload.preferredlanguage}
        case 'changeSignUpImage':
            return {...state, signUpImageLink: action.payload.signUpImageLink}
        case 'setCategories': 
            return {...state, categories: action.payload}
        case 'saveCurrentMerchant':
            return {...state, currentMerchants: action.payload }
        case 'saveCurrentCoupons': 
            return {...state, currentCoupons: action.payload}
        case 'saveOverallCoupons':
            return {...state, overallCoupons: action.payload}
        case 'saveOverallMerchant':
            return {...state, overallMerchants: action.payload}
        case 'changeCurrentColor':
            return {...state, currentColor:action.payload}
        case 'setLoading':
            return {...state, isLoading:action.payload}
        case 'setSelectedCoupon':
            return {...state, selectedCoupon:action.payload}
        case 'changeShowCoupon':
            return {...state, showCoupon:action.payload}
        case 'setToken':
            return {...state, token: action.payload}
        case 'removeToken':
            return {...state, token: action.payload}
        case 'saveUserCoupons':
            return {...state, userCoupons: action.payload}
        case 'saveUserWallet':
            return {...state, followings: action.payload}
        case 'changeSettings':
            return {...state, settings: action.payload}
        case 'addToCategoryList':
            return {...state, categoryList: action.payload}
        case 'removeCategoryFromList':
            return {...state, categoryList: action.payload}
        case 'showCouponFilterAction':
            return {...state, showCouponFilter: true}
        case 'closeCouponFilterAction':
            return {...state, showCouponFilter: false}
        case 'changeCurrentMerchant':
            return {...state, selectedMerchant:action.payload}
        case 'setLocation':
            return {...state, location:action.payload}
        case 'setCurrentLocation':
            return {...state, currentLocation:action.payload}
        case 'setCurrentDestination':
            return {...state, currentDestination:action.payload}
        case 'showMapViewDirections':
            return {...state, showMapViewDirections:action.payload}
        case 'showDestinationMarker':
            return {...state, showDestinationMarker:action.payload}
        case 'setMyRedeemList':
            return {...state, redeemHistory:action.payload}
        case 'setCurrentCategoryColor':
            return {...state, currentCategoryColor:action.payload}
        case 'setNotificationCount':
            return {...state, notificationCount:action.payload}
        case 'setAllNotifications':
            return {...state, allNotifications:action.payload}
        case 'setShowWallet':
            return {...state, showWallet:action.payload}
        case 'setSelectedCoupons':
            return {...state, selectedCoupons:action.payload}
        case 'setWalletColor':
            return {...state, walletColor:action.payload}
        case 'setShowDescriptionBox':
            return {...state, showDescriptionBox:action.payload}
        


        default:
            throw new Error();
        };
  },initialState)
  return (
    <CounterContext.Provider value={{ state, dispatch }} >
      {props.children}
    </CounterContext.Provider>
  );
};